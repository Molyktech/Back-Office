import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DocumentsService } from '../services/documents.service';
import { User } from '../models/user';
import  swal  from 'sweetalert2'

@Component({
  selector: 'app-settlement-configuration',
  templateUrl: './settlement-configuration.component.html',
  styleUrls: ['./settlement-configuration.component.scss']
})
export class SettlementConfigurationComponent implements OnInit {

  //parties=[0]
  settlementForm:FormGroup
  parties:FormArray
  user:User
  documentTypes
  amountBalanced:boolean=false
  submitted = false

  constructor(
    private fb: FormBuilder,
    private documentService: DocumentsService,
  ) {
    this.user=JSON.parse(localStorage.getItem('currentUser'))
   }

  ngOnInit() {
    this.settlementForm = this.fb.group({
      institutionId: [''],
      feeType: ['fixed'],
      feeAmount: ['', Validators.required],
      documentId: ['', Validators.required],
      parties: this.fb.array([this.createParty()])
    })
    this.getDocumentTypes()
  }

  createParty(): FormGroup {
    return this.fb.group({
      partyName: ['', Validators.required],
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      partyFeeAmount: ['', Validators.required]
    });
  }

  addParty(): void {
    this.checkAmount()
    if(this.totalPartyAmount>=this.settlementForm.value.feeAmount){
      swal.fire({
        title: "Error!",
        text: "Amount limit exceeded!",
        icon: "warning"
      });
    }
    else{
      this.parties = this.settlementForm.get('parties') as FormArray;
      this.parties.push(this.createParty());
    }
  }

  deleteParty(i){
    this.parties.controls.splice(i,1)
  }

  getDocumentTypes(){
    this.documentService.getDocumentTypes(this.user.institutionID).subscribe(data=>{
      this.documentTypes=<any>data
    })
  }

  amountArray=[]
  totalPartyAmount

  checkAmount(){
    for (let party of this.settlementForm.value.parties){
      this.amountArray.push(party.partyFeeAmount)
    }
    this.totalPartyAmount=this.amountArray.reduce((a,b)=>{return a+b},0)

    this.amountArray=[]
    console.log("total",this.totalPartyAmount)
    console.log("fee",this.settlementForm.value.feeAmount)
  }

  saveConfig(){
    this.submitted=true
    //this.checkAmount()
    if(this.totalPartyAmount===this.settlementForm.value.feeAmount){
      this.amountBalanced=true
      swal.fire({
        title: "Succesful!",
        text: "Settlement successfully configured!",
        icon: "success"
      });
      console.log(this.settlementForm.value)
      this.settlementForm.reset()
    }
    else{
      this.amountBalanced=false
      swal.fire({
        title: "Error!",
        text: "Amounts not balanced!",
        icon: "warning"
      });
      console.log("amount not  balanced")
    }
  }

  test(){
    console.log(this.settlementForm.value)
    this.checkAmount()
    console.log("total party amount", this.totalPartyAmount)
    if(this.totalPartyAmount===this.settlementForm.value.feeAmount){
      this.amountBalanced=true
    }
    else{
      this.amountBalanced=false
    }
    console.log(this.amountBalanced)
  }

}

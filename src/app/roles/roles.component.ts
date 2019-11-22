import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Role } from '../models/role';
import { Privilege } from '../models/privilege';
import { RolesService } from '../services/roles.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  menus = [
    {name: 'Dashboard'},
    {name: 'Create User'},
    {name: 'Roles'},
    {name: 'Institution'},
    {name: 'Declaration of Age'},
    {name: 'Declaration of Marriage'},
    {name: 'Change of Name'},
    {name: 'General form of Affidavit'},
    {name: 'Payments'},
    {name: 'Print'},
    {name: 'Reports'},
    {name: 'Settings'},
    {name: 'Create Document'}
  ];

  fakeRoles = [
    {name:"Admin", id:1},
    {name:"Cashier", id:2},
    {name:"Registrar", id:3},
    {name:"Commissioner", id:4}
  ]
  role: Role;
  roleName: string;
  privilegeRead = new Array(this.menus.length);
  privilegeWrite = new Array(this.menus.length);
  privileges: Privilege[] = [];
  // formInvalid:boolean=false;
  showErrorMsg = false;
  roles: Role[];
  chosenRole;
  loading=true;
  displayedColumns: string[] = ['id', 'name'];
  loading2=false

  constructor(
    private modalService: NgbModal,
    private roleService: RolesService
              ) {}

  ngOnInit() {
    this.setPrivilegesToFalse()
    this.getRolesByInstitution()
  }

  

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  setPrivilegesToFalse() {
    this.privilegeRead.fill(false,0);
    this.privilegeWrite.fill(false,0);
  }

  onSave() {
    if (this.roleName) {
      // formInvalid=true
      this.showErrorMsg = false;
    } else {
      this.showErrorMsg = true;
    }
    if (this.roleName) {
      this.loading2=true
      this.role = new Role;
      this.menus.forEach((menu, index) => {
      this.privileges.push({
        id: 0,
        institutionID: 1,
        name: menu.name,
        code: null,
        read: this.privilegeRead[index],
        write: this.privilegeWrite[index]
      })
      })
      this.role.institutionID = 1;
      this.role.name = this.roleName;
      this.role.privileges = this.privileges;
      console.log(this.role)
      this.roleService.saveRole(this.role).subscribe(data => {
        this.loading2=false
        this.getRolesByInstitution()
        this.modalService.dismissAll('')
        console.log(data);
        this.privileges = [];
        this.roleName = null;
        this.setPrivilegesToFalse();
      },
        err => {
        });
      }
  }

  getRolesByInstitution() {
    this.roleService.getRoleByInstitutionId(1).subscribe(data => {
      this.loading=false
      console.log("roles",data)
      this.roles = <Role[]> data;
    },
      err => {
        console.log(err)
      });
  }

  editrole(role) {
    this.chosenRole = role;
  }

  updateRole() {
    this.loading2=true
    this.roleService.updateRole(this.chosenRole).subscribe(data => {
      this.loading2=false
      this.modalService.dismissAll('')
      console.log(data)
    },
    err => {
      console.log(err)
    });
  }

  

}

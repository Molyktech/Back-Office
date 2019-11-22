import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { User } from '../models/user';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  currentUser: User;
  reports;

  constructor(private reportsService: ReportsService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {}
}

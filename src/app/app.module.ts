import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { AlertModule } from './alert/alert.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { MatDialogComponent } from './mat-dialog/mat-dialog.component';
import { ToastModule } from './toast/toast.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    ReportsComponent,
    DashboardComponent,
    MatDialogComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    MatTableModule,
    AlertModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatDialogComponent]
})
export class AppModule {}

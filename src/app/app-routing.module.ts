import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReportsComponent } from "./reports/reports.component";
import { SettlementConfigurationComponent } from './settlement-configuration/settlement-configuration.component';

// import { AuthGuard } from './util/auth.guard';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { title: "Login Component" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login Component" }
  },
  {
    path: "navigation",
    component: NavigationComponent,
    // canActivate: [AuthGuard],
    data: { title: "Navigation Component" },
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
        data: { title: "Dashboard", read: true }
      },

      {
        path: "reports",
        component: ReportsComponent,
        canActivate: [AuthGuard],
        data: { title: "Reports", read: true }
      },
      {
        path: "settlementconfig",
        component: SettlementConfigurationComponent,
        canActivate: [AuthGuard],
        data: { title: "Reports", read: true }
      },

      { path: "**", redirectTo: "" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ]
})
export class MaterialModule {}

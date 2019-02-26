import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThreedPage } from './threed.page';
import { TableComponent } from 'src/app/components/table/table.component';
import { MatTableModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ThreedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ThreedPage,
    TableComponent,
  ]
})
export class ThreedPageModule {}

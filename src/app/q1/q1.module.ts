import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q1PageRoutingModule } from './q1-routing.module';

import { Q1Page } from './q1.page';

import{NgOtpInputModule}from "ng-otp-input"//（1）每一頁都要加NgOtpInputModule才會顯示

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q1PageRoutingModule,
    NgOtpInputModule  //（2）每一頁都要加NgOtpInputModule才會顯示
  ],
  declarations: [Q1Page]
})
export class Q1PageModule {}

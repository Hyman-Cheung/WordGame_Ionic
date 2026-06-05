import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q2PageRoutingModule } from './q2-routing.module';

import { Q2Page } from './q2.page';

import{NgOtpInputModule}from "ng-otp-input"//（1）每一頁都要加NgOtpInputModule才會顯示

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q2PageRoutingModule,
    NgOtpInputModule  //（2）每一頁都要加NgOtpInputModule才會顯示
  ],
  declarations: [Q2Page]
})
export class Q2PageModule {}

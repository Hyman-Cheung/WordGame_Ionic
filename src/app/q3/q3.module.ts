import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q3PageRoutingModule } from './q3-routing.module';

import { Q3Page } from './q3.page';

import{NgOtpInputModule}from "ng-otp-input"//（1）每一頁都要加NgOtpInputModule才會顯示

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q3PageRoutingModule,
    NgOtpInputModule  //（2）每一頁都要加NgOtpInputModule才會顯示
  ],
  declarations: [Q3Page]
})
export class Q3PageModule {}

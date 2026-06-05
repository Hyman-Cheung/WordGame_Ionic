import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q19PageRoutingModule } from './q19-routing.module';

import { Q19Page } from './q19.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q19PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q19Page]
})
export class Q19PageModule {}

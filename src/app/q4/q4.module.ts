import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q4PageRoutingModule } from './q4-routing.module';

import { Q4Page } from './q4.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q4PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q4Page]
})
export class Q4PageModule {}

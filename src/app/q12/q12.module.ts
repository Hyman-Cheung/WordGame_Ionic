import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q12PageRoutingModule } from './q12-routing.module';

import { Q12Page } from './q12.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q12PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q12Page]
})
export class Q12PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q15PageRoutingModule } from './q15-routing.module';

import { Q15Page } from './q15.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q15PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q15Page]
})
export class Q15PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q18PageRoutingModule } from './q18-routing.module';

import { Q18Page } from './q18.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q18PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q18Page]
})
export class Q18PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q11PageRoutingModule } from './q11-routing.module';

import { Q11Page } from './q11.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q11PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q11Page]
})
export class Q11PageModule {}

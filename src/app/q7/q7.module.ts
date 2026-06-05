import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q7PageRoutingModule } from './q7-routing.module';

import { Q7Page } from './q7.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q7PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q7Page]
})
export class Q7PageModule {}

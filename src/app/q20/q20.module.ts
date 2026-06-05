import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q20PageRoutingModule } from './q20-routing.module';

import { Q20Page } from './q20.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q20PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q20Page]
})
export class Q20PageModule {}

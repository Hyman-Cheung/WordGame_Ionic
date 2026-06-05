import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Q9PageRoutingModule } from './q9-routing.module';

import { Q9Page } from './q9.page';

import{NgOtpInputModule}from "ng-otp-input"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Q9PageRoutingModule,
    NgOtpInputModule 
  ],
  declarations: [Q9Page]
})
export class Q9PageModule {}

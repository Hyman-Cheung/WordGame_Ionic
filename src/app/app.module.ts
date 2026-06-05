import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule  } from '@angular/fire/compat/storage';   //** 需要添加compat在/fire後面

//ENVIRONMENT
import { environment } from "../environments/environment.prod";

//AUTH SERVICE
import { AuthService } from "./services/auth.service";

//AUTH GUARD
import { AuthGuard} from "./guard/auth.guard";

//OTP
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [AppComponent],
  entryComponents:[],
  imports: [
   
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ////////////////////////////////////////////////////////////////////
    HttpClientModule,
    FormsModule,
    ////////////Firebase///////////////
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    /////////////////OTP///////////////
    NgOtpInputModule

  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

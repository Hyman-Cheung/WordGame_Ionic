import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import * as firebase from 'firebase/compat/app';
import { Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { Observable, of } from 'rxjs';
import { switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;
  user!: User;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) { 
    this.user$ = this.afauth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges() as Observable<User | null>;
        } else {
          return of(null);
        }
      })
    );
  } // end of constructor

  async signIn(email: string, password: string) {
    const loading = await this.LoadingCtrl.create({
      message: '登入中..',
      spinner: 'crescent',
      showBackdrop: true
    });

    await loading.present();

    this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(() => {
      this.afauth.signInWithEmailAndPassword(email, password).then((data) => {
        if (data.user) {
          if (!data.user.emailVerified) {
            loading.dismiss();
            this.toast('請驗證您的電郵件地址!', 'warning');
            this.afauth.signOut();
          } else {
            loading.dismiss();
            this.router.navigate(['tabs']);
          }
        } else {
          loading.dismiss();
          this.toast('找不到用戶資料，請稍後再試。', 'danger');
        }
      })
      .catch(error => {
        loading.dismiss();
        this.toast('請輸入正確的Email和密碼!', 'danger');
      });
    })
    .catch(error => {
      loading.dismiss();
      this.toast('請輸入正確的Email和密碼!', 'danger');
    });
  } // end of signIn

  async signOut() {
    const loading = await this.LoadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: true
    });
    await loading.present();

    this.afauth.signOut()
    .then(() => {
      loading.dismiss();
      this.router.navigate(['/login']);
    });
  } // end of signOut 

  async toast(message: string, status: string) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    await toast.present();
  } // end of toast
}
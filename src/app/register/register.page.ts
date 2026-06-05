import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name!: string;
  email!: string;
  phone!: string;
  password!: string;
  confirmPassword!: string;

  passwordMatch!: boolean;

  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {
  }

  async register() {
    if (this.name && this.email && this.phone && this.password) {
      const loading = await this.loadingCtrl.create({
        message: '等待中..',
        spinner: 'crescent',
        showBackdrop: true
      });
 
      await loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          const user = data.user;

          if (user) {
            user.sendEmailVerification();      // 發送Email給用戶
            
            this.afs.collection('user').doc(user.uid).set({                  // 更新Firebase的資料             
              'userId': user.uid,              // 存在用戶的資料和申請賬號的日期
              'userName': this.name,           
              'userEmail': this.email,
              'userPhone': this.phone,
              'createdAt': Date.now(),
              'userScore': 0,
              'q1': false,
              'q2': false,
              'q3': false,
              'q4': false,
              'q5': false,
              'q6': false,
              'q7': false,
              'q8': false,
              'q9': false,
              'q10': false,
              'q11': false,
              'q12': false,
              'q13': false,
              'q14': false,
              'q15': false,
              'q16': false,
              'q17': false,
              'q18': false,
              'q19': false,
              'q20': false,
              'q1_pass': false,
              'q2_pass': false,
              'q3_pass': false,
              'q4_pass': false,
              'q5_pass': false,
              'q6_pass': false,
              'q7_pass': false,
              'q8_pass': false,
              'q9_pass': false,
              'q10_pass': false,
              'q11_pass': false,
              'q12_pass': false,
              'q13_pass': false,
              'q14_pass': false,
              'q15_pass': false,
              'q16_pass': false,
              'q17_pass': false,
              'q18_pass': false,
              'q19_pass': false,
              'q20_pass': false
            })
            .then(() => {               
              loading.dismiss();
              this.toast('註冊成功！請查看你的Email!', 'success'); // 提醒用戶確定Email
              this.router.navigate(['/login']);
            })
            .catch(error => {
              loading.dismiss();
              this.toast(error.message, 'danger');
            });
          } else {
            // Fallback in case user creation succeeded but returned no user object payload
            loading.dismiss();
            this.toast('找不到用戶資料，請稍後再試。', 'danger');
          }
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        });
    } else {
      this.toast('請填寫所有資料!', 'warning');
    }
  } // end of register

  checkPassword() {
    if (this.password === this.confirmPassword) {         // 檢查密碼
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false; 
    }
  }

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
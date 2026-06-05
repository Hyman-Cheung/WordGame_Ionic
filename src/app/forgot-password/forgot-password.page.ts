import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { error } from 'console';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email!:string;

  constructor(
    private afauth:AngularFireAuth,
    private toaster:ToastController,
    private loadingCtrl:LoadingController,
    private router:Router
    
  ) { }

  ngOnInit() {
  }

  async resetPassword(){
    if(this.email)
    {
      const loading = await this.loadingCtrl.create({
        message:'請等候..',
        spinner:'crescent',
        showBackdrop:true
      });
      loading.present();
      this.afauth.sendPasswordResetEmail(this.email)
      .then(()=>{
      loading.dismiss();
       this.toast('請查看你的Email!','success');
        this.router.navigate(['/login'])
      })
      .catch((error)=>{
        loading.dismiss();
        this.toast(error.message,'danger')
      })
    }else
    {
     this.toast('請輸入您的電子郵件地址!','danger');
    }
  } //end of resetPassword


  async toast(message: string, status: string)
  {
    const toast = await this.toaster.create({
      message:message,
      position:'top',
      color:status,
      duration:2000
    });
    toast.present();
  } //end of toast

}

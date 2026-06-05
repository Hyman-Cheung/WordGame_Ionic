import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!:string;
  password!:string;

  constructor(
    private auth:AuthService,
    private toastr:ToastController
  ) { }

  ngOnInit() {
  }


  login(){
   if(this.email && this.password)
   {
     this.auth.signIn(this.email,this.password);
   }
   else if(this.email===""||this.password==="")
   {
    this.toast('請輸入Email和密碼!','danger')
  }
   else
   {
    this.toast('請輸入正確的Email和密碼!','danger')
   }
  }



async toast(message: string, status: string){
  const toast = await this.toastr.create({
    message:message,
    color:status,
    position:'top',
    duration:2000
  });
  toast.present();
}




}

import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  
  userId!:string;
  name!:string;
  email!:string;
  phone!:string;
  match: any;

  constructor(
    private auth:AuthService,
    private afs:AngularFirestore,
    private loadingCtrl:LoadingController,
    private toastr:ToastController,
    private modalController:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      this.userId =user.userId;
      this.name = user.userName;
      this.email = user.userEmail;
      this.phone = user.userPhone;

    })
  }



  async undateAlertConfirm() {


    if(this.name && this.email && this.phone)
    {
      
      const alert = await this.alert.create({
        cssClass: 'correctAlertConfirm',
        header: '更改個人資料',
        message: '確定要更改資料嗎？',
        buttons: [
          {
            text: '返回',
            role: 'cancel',
            cssClass: 'correctAlertConfirm',
            handler: () => {
              console.log('返回');
              this.modalController.dismiss();//按下返回modalController消失
            }
          }, {
            text: '確定',
            cssClass: 'correctAlertConfirm',
            handler: () => {
              console.log('確定更改');
              this.undateProfile() //call undateProfile()
            }
          }
        ]
      });
    
      await alert.present();
    }
    else
    {
      this.toast('個人資料不能空白!','danger');
    }

  }

  async undateProfile(){   //更新用戶資料

   const loading = await this.loadingCtrl.create({
    message:'更新中..',
    spinner:'crescent',
    showBackdrop:true
   });

   loading.present();

  this.afs.collection('user').doc(this.userId).set({     //更新Firebase的資料
    'userName':this.name,
    'userEmail':this.email,
    'userPhone':this.phone,
    'editAt':Date.now()
  },{merge:true})
  .then(()=>{
  loading.dismiss();
  this.toast('更改成功!','success');
  })
  .catch(error=>{
    loading.dismiss();
    this.toast('更改失敗!','danger');
  })

  this.modalController.dismiss(); //更改資料後modalController消失
  }

  
async toast(message: string, status: string)
{
  const toast = await this.toastr.create({
    message:message,
    color: status,
    position:'top',
    duration:2000
  });

  toast.present();
}
}

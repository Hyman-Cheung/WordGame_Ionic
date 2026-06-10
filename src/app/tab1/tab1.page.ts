import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ProfileEditPage } from '../profile-edit/profile-edit.page';//Modal從下方彈出頁面更改資料（2）鏈接更改資料的頁面

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  audio!: HTMLAudioElement;
  user: any;   //獲取（user.ts）的用戶資料（2）建立變數
  constructor(
    private auth:AuthService,
    private alert:AlertController,
    private modalCtrl:ModalController, //Modal從下方彈出頁面更改資料（1）新增ModalController
  ) 
  {
    this.auth.user$.subscribe(user=>{  //獲取（user）的用戶資料（2）獲取資料
      this.user = user;
    })
  }



async logoutAlertConfirm() {
  const alert = await this.alert.create({
    cssClass: 'correctAlertConfirm',
    header: '登出',
    message: '確定要登出嗎？',
    buttons: [
      {
        text: '返回',
        role: 'cancel',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          console.log('返回');
        }
      }, {
        text: '登出',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          console.log('登出');
          this.logout();
        }
      }
    ]
  });

  await alert.present();
}


  logout(){
    this.logoutPlayAudio()
    this.auth.signOut();
  }

  async editProfile(){   //更改個人資料
    const modal = await this.modalCtrl.create({
     component:ProfileEditPage,
     breakpoints:[0,0.5,0.8],
     initialBreakpoint:0.5
     
    });
      await modal.present();
       }




         //////////////////音效///////////////////
  logoutPlayAudio(){                  //logout
    this.audio=new Audio
    this.audio.src = "assets/mp3/logout.mp3";
    this.audio.play();
  }
   
   }



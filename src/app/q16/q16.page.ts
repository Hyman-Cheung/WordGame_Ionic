import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-q16',
  templateUrl: './q16.page.html',
  styleUrls: ['./q16.page.scss'],
})
export class Q16Page implements OnInit {
  config ={  //OTP 的設定
    length:2,
    allowNamebersOnly:true, 
    inputStyles:{
      'width':"33px",
      'height':"33px",
    }}

    config2 ={  //分開兩個OTP
      length:2,
      allowNamebersOnly:true,
      inputStyles:{
        'width':"33px",
        'height':"33px",
      }}
  
  val=0;//設定音效只能播放一次
  audio!: HTMLAudioElement;//音效 

  Answer1!: string;
  Answer2!: string;
  Answer!: string;

  wrong = 0;
  wrong5 = 0;
  userName!: string;
  userId!: string;
  userScore!: number;
  q1!: boolean;
  q2!: boolean;
  q3!: boolean;
  q4!: boolean;
  q5!: boolean;
  q6!: boolean;
  q7!: boolean;
  q8!: boolean;
  q9!: boolean;
  q10!: boolean;
  q11!: boolean;
  q12!: boolean;
  q13!: boolean;
  q14!: boolean;
  q15!: boolean;
  q16!: boolean;
  q17!: boolean;
  q18!: boolean;
  q19!: boolean;
  q20!: boolean;
  constructor(
    private router:Router, //轉送到下一頁
    private alert:AlertController,
    private auth:AuthService,
    private afs:AngularFirestore,
  ) { }
   

  

  ngOnInit() {
    this.auth.user$.subscribe(user=>{  //用戶的資料
      this.userName = user.userName;
      this.userId =user.userId;
      this.userScore=user.userScore;
      this.q1=user.q1;
      this.q2=user.q2;
      this.q3=user.q3;
      this.q4=user.q4;
      this.q5=user.q5;
      this.q6=user.q6;
      this.q7=user.q7;
      this.q8=user.q8;
      this.q9=user.q9;
      this.q10=user.q10;
      this.q11=user.q11;
      this.q12=user.q12;
      this.q13=user.q13;
      this.q14=user.q14;
      this.q15=user.q15;
      this.q16=user.q16;
      this.q17=user.q17;
      this.q18=user.q18;
      this.q19=user.q19;
      this.q20=user.q20;
    })

  }
 
  /////////////////////OTP//////////////////////
  valueChange(q:string){ 
  console.log(this.Answer2);
  this.Answer1=q;
  this.Answer =this.Answer1+ this.Answer2;
  this.inputPlayAudio();
}
////////////////分開兩個OTP//////////////////////
valueChange2(q:string){ 
  console.log(q);
  this.Answer2=q;
  this.Answer =this.Answer1+ this.Answer2;
  this.inputPlayAudio();
}
//////////////////////////返回首頁////////////////////////////////
back(){   
  this.outPlayAudio();
  this.router.navigate(['/tabs/tab2']);
  this.wrong=0;
  this.wrong5=0;
}



//////////////////////////////////////////確定答案/////////////////////////////////////////////////

next(){ 
  if(!this.Answer)
 {
  this.noanswerpresentAlert();
  console.log("Don't have any answers");
 }
 else if(this.Answer==="Enon"&& this.q1===true && this.q2===true && this.q3===true && this.q4===true && this.q5===true && this.q6===true && this.q7===true && this.q8===true && this.q9===true && this.q10===true && this.q11===true && this.q12===true && this.q13===true && this.q14===true && this.q15===true && this.q20===true && this.q17===true && this.q18===true && this.q19===true)
 {
  this.val++;
  this.wrong5==0;
  this.wrong=0;
  console.log("you have corrected all the question");

  if(this.val===1)
{ 
  this.correctAllAlertConfirm();
  this.undateUserScoreCorrectAll();
  this.correctAllPlayAudio();
}else
{
  this.nextAlertConfirm();
}

 }
 else if(this.Answer==="Enon"&& this.wrong5>=4 && this.q16===true)
 {
  this.val++;
  this.wrong5==0;
  this.wrong=0;
  console.log("you have corrected:wrong5");

  if(this.val===1)
{ 
  this.correctedAlertConfirm_wrong5();
  this.undateUserScoreCorrected();
  this.wrong5CorrectPlayAudio();
}else
{
this.nextAlertConfirm();
}

 }
 else if(this.Answer==="Enon"&& this.wrong5>=4)
 {
  this.val++;
  this.wrong5==0;
  this.wrong=0;
  console.log("wrong5");

  if(this.val===1)
{ 
  this.correctAlertConfirm_wrong5();
  this.undateUserScoreCorrect();
  this.wrong5CorrectPlayAudio();
}else
{
this.nextAlertConfirm();
}

 }
 else if(this.Answer==="Enon"&&this.q16===true)
 {
  this.val++;
  console.log("you have corrected");
  this.wrong=0;
  if(this.val===1)
{ 
  this.correctedAlertConfirm();
  this.undateUserScoreCorrected();
  this.correctPlayAudio();
}else
{
this.nextAlertConfirm();
}

 }
 else if(this.Answer==="Enon")
 {
  this.val++;
  console.log(this.Answer);              
  this.wrong=0;
  if(this.val===1)
{ 
  this.correctAlertConfirm();
  this.undateUserScoreCorrect();
  this.correctPlayAudio();
}else
{
this.nextAlertConfirm();
}
 }
 else if(this.wrong===2)
 {
  console.log("wrong3")
  this.wrong3PlayAudio();
  this.wrong3presentAlert();
  this.undateUserScoreWrong3();
  this.wrong=0;
 }
 else
 {
  console.log("wrong");
  this.wrongPlayAudio();
  this.wrongpresentAlert();
  this.wrong++;
  this.wrong5++;
 }
 
}

//////////////////////////////////Alert//////////////////////////////////////////////////////////


async noanswerpresentAlert() {                 //沒有輸入答案
  const alert = await this.alert.create({
    header: '請輸入答案！！',
    cssClass: 'correctAlertConfirm',
    message: '請繼續',
    buttons: ['繼續']
  });

  await alert.present();
}


async correctAllAlertConfirm() {                  //答對了所有題目
  const alert = await this.alert.create({
    header: '恭喜你答對了所有題目！！',
    message: '+20分',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '返回首頁',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/tabs/tab2']);
        }
      },     
       {
        text: '繼續',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}


async nextAlertConfirm() {
  const alert = await this.alert.create({  //直接下一題
    header: '恭喜您答對了！！',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '下一題',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}


async correctAlertConfirm() {
  const alert = await this.alert.create({  //答對了到下一題
    header: '恭喜您答對了！！',
    message: '+12分',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '下一題',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}

async correctedAlertConfirm() {                  //答對了到下一題（已經答對過）
  const alert = await this.alert.create({
    header: '恭喜您答對了！！',
    message: '+3分',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '下一題',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}



async correctAlertConfirm_wrong5() {                  //答錯了5次才答對
  const alert = await this.alert.create({
    header: '您終於答對了！！',
    message: '+12分',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '下一題',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}



async correctedAlertConfirm_wrong5() {                  //答錯了5次才答對（已經答對過）
  const alert = await this.alert.create({
    header: '您終於答對了！！',
    message: '+3分',
    cssClass: 'correctAlertConfirm',
    buttons: [
      {
        text: '下一題',
        cssClass: 'correctAlertConfirm',
        handler: () => {
          this.val=0;
          this.router.navigate(['/q17']);
        }
      }]
  });
  await alert.present();
}



async wrongpresentAlert() {                     //答錯了提示
  const alert = await this.alert.create({
    header: '您答錯了！！',
    cssClass: 'correctAlertConfirm',
    message: '請繼續',
    buttons: ['繼續']
  });

  await alert.present();
}

async wrong3presentAlert() {                            //連續答錯了3次提示
  const alert = await this.alert.create({
    header: '您連續答錯了3次！！',
    cssClass: 'correctAlertConfirm',
    message: '-6分',
    buttons: ['繼續']
  });

  await alert.present();
}


/////////////////////////////////////////更新用戶Firebase的分數///////////////////////////////////////////////////////////////////////////////


async undateUserScoreCorrectAll(){   //更新用戶Firebase的分數（答對了所有題目）


  this.afs.collection('user').doc(this.userId).set({     
   'userScore':this.userScore+20,
   'q1':false,
   'q2':false,
   'q3':false,
   'q4':false,
   'q5':false,
   'q6':false,
   'q7':false,
   'q8':false,
   'q9':false,
   'q10':false,
   'q11':false,
   'q12':false,
   'q13':false,
   'q14':false,
   'q15':false,
   'q16':false,
   'q17':false,
   'q18':false,
   'q19':false,
   'q20':false,
   'q16_pass':true
  },{merge:true})
 
  }


async undateUserScoreCorrect(){   //更新用戶Firebase的分數（答對）


 this.afs.collection('user').doc(this.userId).set({     
  'userScore':this.userScore+12,
  'q16':true,
  'q16_pass':true
 },{merge:true})

 }


 async undateUserScoreCorrected(){  //更新用戶Firebase的分數（已經答對過）

  this.afs.collection('user').doc(this.userId).set({     
   'userScore':this.userScore+3,
  },{merge:true})
 
  }


 async undateUserScoreWrong3(){   //更新用戶Firebase的分數（答錯3次）

  this.afs.collection('user').doc(this.userId).set({     
   'userScore':this.userScore-6,
  },{merge:true})
 
  }




///////////////////////////////音效///////////////////////////////////////

correctAllPlayAudio(){                      //答對所有題目
  this.audio=new Audio
  this.audio.src = "/assets/mp3/correctEnd.mp3";
  this.audio.play();
}

correctPlayAudio(){                      //答對（不會不斷重複）
  this.audio=new Audio
  this.audio.src = "/assets/mp3/correct.mp3";
  this.audio.play();
}


inputPlayAudio(){                      //輸入答案
  this.audio=new Audio
  this.audio.src = "/assets/mp3/input.mp3";
  this.audio.play();
}

wrong5CorrectPlayAudio(){                      //答錯了5次才答對
  this.audio=new Audio
  this.audio.src = "/assets/mp3/wrong5Correct.mp3";
  this.audio.play();
}

outPlayAudio(){                      //返回
  this.audio=new Audio
  this.audio.src = "/assets/mp3/out.mp3";
  this.audio.play();
}


wrongPlayAudio(){                      //回答錯誤
  this.audio=new Audio
  this.audio.src = "/assets/mp3/wrong.mp3";
  this.audio.play();
}


wrong3PlayAudio(){                      //回答錯誤
  this.audio=new Audio
  this.audio.src = "/assets/mp3/wrong3.mp3";
  this.audio.play();
}

}

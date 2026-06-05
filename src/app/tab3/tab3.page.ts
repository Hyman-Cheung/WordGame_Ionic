import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface GameQuestion {
  id: number;
  src: string;
  q: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
  audio!: HTMLAudioElement;
  questions: GameQuestion[] = [];

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
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {  // 用戶的資料
      if (user) {
        this.userName = user.userName;
        this.userId = user.userId;
        this.userScore = user.userScore;
        this.q1 = user.q1_pass;
        this.q2 = user.q2_pass;
        this.q3 = user.q3_pass;
        this.q4 = user.q4_pass;
        this.q5 = user.q5_pass;
        this.q6 = user.q6_pass;
        this.q7 = user.q7_pass;
        this.q8 = user.q8_pass;
        this.q9 = user.q9_pass;
        this.q10 = user.q10_pass;
        this.q11 = user.q11_pass;
        this.q12 = user.q12_pass;
        this.q13 = user.q13_pass;
        this.q14 = user.q14_pass;
        this.q15 = user.q15_pass;
        this.q16 = user.q16_pass;
        this.q17 = user.q17_pass;
        this.q18 = user.q18_pass;
        this.q19 = user.q19_pass;
        this.q20 = user.q20_pass;

        this.questions = [
          { id: 1, src: 'assets/number/number1.png', q: user.q1_pass },  // game table
          { id: 2, src: 'assets/number/number2.png', q: user.q2_pass },
          { id: 3, src: 'assets/number/number3.png', q: user.q3_pass },
          { id: 4, src: 'assets/number/number4.png', q: user.q4_pass },
          { id: 5, src: 'assets/number/number5.png', q: user.q5_pass },
          { id: 6, src: 'assets/number/number6.png', q: user.q6_pass },
          { id: 7, src: 'assets/number/number7.png', q: user.q7_pass },
          { id: 8, src: 'assets/number/number8.png', q: user.q8_pass },
          { id: 9, src: 'assets/number/number9.png', q: user.q9_pass },
          { id: 10, src: 'assets/number/number10.png', q: user.q10_pass },
          { id: 11, src: 'assets/number/number11.png', q: user.q11_pass },
          { id: 12, src: 'assets/number/number12.png', q: user.q12_pass },
          { id: 13, src: 'assets/number/number13.png', q: user.q13_pass },
          { id: 14, src: 'assets/number/number14.png', q: user.q14_pass },
          { id: 15, src: 'assets/number/number15.png', q: user.q15_pass },
          { id: 16, src: 'assets/number/number16.png', q: user.q16_pass },
          { id: 17, src: 'assets/number/number17.png', q: user.q17_pass },
          { id: 18, src: 'assets/number/number18.png', q: user.q18_pass },
          { id: 19, src: 'assets/number/number19.png', q: user.q19_pass },
          { id: 20, src: 'assets/number/number20.png', q: user.q20_pass },
        ];
      }
    });
  }

  start(id: number) {
    // Dynamic property evaluation securely matching current question index truthiness
    const questionKey = `q${id}` as keyof Tab3Page;
    const isPassed = this[questionKey];

    if (id >= 1 && id <= 20 && isPassed === true) {
      this.startGamePlayAudio();
      this.router.navigate([`/q${id}`]);
    }
  }

  //////////////////音效///////////////////
  startGamePlayAudio() {                  // 開始遊戲
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/start3.mp3";
    this.audio.play();
  }
}
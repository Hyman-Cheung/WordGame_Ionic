import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
 
  slideOpts = {
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    on: {
      beforeInit: function(this: any) {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
  
        this.params = Object.assign(this.params, overwriteParams);
        this.originalParams = Object.assign(this.originalParams, overwriteParams);
      },
      setTranslate: function(this: any) {
        const swiper = this;
        const {
          $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({ height: `${swiperWidth}px` });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }
  
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + (round * 4 * swiperSize);
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = (3 * swiperSize) + (swiperSize * 4 * round);
          }
          if (rtl) {
            tx = -tx;
          }
  
          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }
  
          const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = (slideIndex * 90) + (progress * 90);
            if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
          }
          $slideEl.transform(transform$$1);
          if (params.slideShadows) {
            let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`,
        });
  
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
            const multiplier = 1.5 - (
              (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
              + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
            );
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset$$1 = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }
  
        const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
        $wrapperEl
          .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
      },
      setTransition: function(this: any, duration: number) {
        const swiper = this;
        const { $el, slides } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      },
    }
  };
  
  audio!: HTMLAudioElement;
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
        this.q1 = user.q1;
        this.q2 = user.q2;
        this.q3 = user.q3;
        this.q4 = user.q4;
        this.q5 = user.q5;
        this.q6 = user.q6;
        this.q7 = user.q7;
        this.q8 = user.q8;
        this.q9 = user.q9;
        this.q10 = user.q10;
        this.q11 = user.q11;
        this.q12 = user.q12;
        this.q13 = user.q13;
        this.q14 = user.q14;
        this.q15 = user.q15;
        this.q16 = user.q16;
        this.q17 = user.q17;
        this.q18 = user.q18;
        this.q19 = user.q19;
        this.q20 = user.q20;
      }
    });
  }

  startGame() {
    this.startGamePlayAudio();

    if (this.q1 === false) {                  // 根據用戶的進度到不同的關卡
      this.router.navigate(['/q1']);
    } else if (this.q2 === false) {
      this.router.navigate(['/q2']);
    } else if (this.q3 === false) {
      this.router.navigate(['/q3']);
    } else if (this.q4 === false) {
      this.router.navigate(['/q4']);
    } else if (this.q5 === false) {
      this.router.navigate(['/q5']);
    } else if (this.q6 === false) {
      this.router.navigate(['/q6']);
    } else if (this.q7 === false) {
      this.router.navigate(['/q7']);
    } else if (this.q8 === false) {
      this.router.navigate(['/q8']);
    } else if (this.q9 === false) {
      this.router.navigate(['/q9']);
    } else if (this.q10 === false) {
      this.router.navigate(['/q10']);
    } else if (this.q11 === false) {
      this.router.navigate(['/q11']);
    } else if (this.q12 === false) {
      this.router.navigate(['/q12']);
    } else if (this.q13 === false) {
      this.router.navigate(['/q13']);
    } else if (this.q14 === false) {
      this.router.navigate(['/q14']);
    } else if (this.q15 === false) {
      this.router.navigate(['/q15']);
    } else if (this.q16 === false) {
      this.router.navigate(['/q16']);
    } else if (this.q17 === false) {
      this.router.navigate(['/q17']);
    } else if (this.q18 === false) {
      this.router.navigate(['/q18']);
    } else if (this.q19 === false) {
      this.router.navigate(['/q19']);
    } else if (this.q20 === false) {
      this.router.navigate(['/q20']);
    }
  }

  ////////////////音效///////////////////
  startGamePlayAudio() {                  // 開始遊戲
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/start.mp3";
    this.audio.play();
  }
}
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_q18_q18_module_ts"],{

/***/ 8408:
/*!*******************************************!*\
  !*** ./src/app/q18/q18-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q18PageRoutingModule": () => (/* binding */ Q18PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _q18_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./q18.page */ 9167);




const routes = [
    {
        path: '',
        component: _q18_page__WEBPACK_IMPORTED_MODULE_0__.Q18Page
    }
];
let Q18PageRoutingModule = class Q18PageRoutingModule {
};
Q18PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Q18PageRoutingModule);



/***/ }),

/***/ 8892:
/*!***********************************!*\
  !*** ./src/app/q18/q18.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q18PageModule": () => (/* binding */ Q18PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _q18_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./q18-routing.module */ 8408);
/* harmony import */ var _q18_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./q18.page */ 9167);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 9306);








let Q18PageModule = class Q18PageModule {
};
Q18PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _q18_routing_module__WEBPACK_IMPORTED_MODULE_0__.Q18PageRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule
        ],
        declarations: [_q18_page__WEBPACK_IMPORTED_MODULE_1__.Q18Page]
    })
], Q18PageModule);



/***/ }),

/***/ 9167:
/*!*********************************!*\
  !*** ./src/app/q18/q18.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q18Page": () => (/* binding */ Q18Page)
/* harmony export */ });
/* harmony import */ var D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _q18_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./q18.page.html?ngResource */ 3733);
/* harmony import */ var _q18_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./q18.page.scss?ngResource */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);









let Q18Page = class Q18Page {
  constructor(router, //轉送到下一頁
  alert, auth, afs) {
    this.router = router;
    this.alert = alert;
    this.auth = auth;
    this.afs = afs;
    this.config = {
      length: 1,
      allowNamebersOnly: true,
      inputStyles: {
        'width': "40px",
        'height': "40px"
      }
    };
    this.config2 = {
      length: 2,
      allowNamebersOnly: true,
      inputStyles: {
        'width': "40px",
        'height': "40px"
      }
    };
    this.val = 0; //設定音效只能播放一次

    this.wrong = 0;
    this.wrong5 = 0;
  }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
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
    });
  } /////////////////////OTP//////////////////////


  valueChange(q) {
    console.log(this.Answer2);
    this.Answer1 = q;
    this.Answer = this.Answer1 + this.Answer2;
    this.inputPlayAudio();
  } ////////////////分開兩個OTP//////////////////////


  valueChange2(q) {
    console.log(q);
    this.Answer2 = q;
    this.Answer = this.Answer1 + this.Answer2;
    this.inputPlayAudio();
  } //////////////////////////返回首頁////////////////////////////////


  back() {
    this.outPlayAudio();
    this.router.navigate(['/tabs/tab2']);
    this.wrong = 0;
    this.wrong5 = 0;
  } //////////////////////////////////////////確定答案/////////////////////////////////////////////////


  next() {
    if (!this.Answer) {
      this.noanswerpresentAlert();
      console.log("Don't have any answers");
    } else if (this.Answer === "oti" && this.q1 === true && this.q2 === true && this.q3 === true && this.q4 === true && this.q5 === true && this.q6 === true && this.q7 === true && this.q8 === true && this.q9 === true && this.q10 === true && this.q11 === true && this.q12 === true && this.q13 === true && this.q14 === true && this.q15 === true && this.q16 === true && this.q17 === true && this.q20 === true && this.q19 === true) {
      this.val++;
      this.wrong5 == 0;
      this.wrong = 0;
      console.log("you have corrected all the question");

      if (this.val === 1) {
        this.correctAllAlertConfirm();
        this.undateUserScoreCorrectAll();
        this.correctAllPlayAudio();
      } else {
        this.nextAlertConfirm();
      }
    } else if (this.Answer === "oti" && this.wrong5 >= 4 && this.q18 === true) {
      this.val++;
      this.wrong5 == 0;
      this.wrong = 0;
      console.log("you have corrected:wrong5");

      if (this.val === 1) {
        this.correctedAlertConfirm_wrong5();
        this.undateUserScoreCorrected();
        this.wrong5CorrectPlayAudio();
      } else {
        this.nextAlertConfirm();
      }
    } else if (this.Answer === "oti" && this.wrong5 >= 4) {
      this.val++;
      this.wrong5 == 0;
      this.wrong = 0;
      console.log("wrong5");

      if (this.val === 1) {
        this.correctAlertConfirm_wrong5();
        this.undateUserScoreCorrect();
        this.wrong5CorrectPlayAudio();
      } else {
        this.nextAlertConfirm();
      }
    } else if (this.Answer === "oti" && this.q18 === true) {
      this.val++;
      console.log("you have corrected");
      this.wrong = 0;

      if (this.val === 1) {
        this.correctedAlertConfirm();
        this.undateUserScoreCorrected();
        this.correctPlayAudio();
      } else {
        this.nextAlertConfirm();
      }
    } else if (this.Answer === "oti") {
      this.val++;
      console.log(this.Answer);
      this.wrong = 0;

      if (this.val === 1) {
        this.correctAlertConfirm();
        this.undateUserScoreCorrect();
        this.correctPlayAudio();
      } else {
        this.nextAlertConfirm();
      }
    } else if (this.wrong === 2) {
      console.log("wrong3");
      this.wrong3PlayAudio();
      this.wrong3presentAlert();
      this.undateUserScoreWrong3();
      this.wrong = 0;
    } else {
      console.log("wrong");
      this.wrongPlayAudio();
      this.wrongpresentAlert();
      this.wrong++;
      this.wrong5++;
    }
  } //////////////////////////////////Alert//////////////////////////////////////////////////////////


  noanswerpresentAlert() {
    var _this = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        header: '請輸入答案！！',
        cssClass: 'correctAlertConfirm',
        message: '請繼續',
        buttons: ['繼續']
      });
      yield alert.present();
    })();
  }

  correctAllAlertConfirm() {
    var _this2 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alert.create({
        header: '恭喜你答對了所有題目！！',
        message: '+20分',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '返回首頁',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this2.val = 0;

            _this2.router.navigate(['/tabs/tab2']);
          }
        }, {
          text: '繼續',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this2.val = 0;

            _this2.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  nextAlertConfirm() {
    var _this3 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alert.create({
        header: '恭喜您答對了！！',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '下一題',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this3.val = 0;

            _this3.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  correctAlertConfirm() {
    var _this4 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alert.create({
        header: '恭喜您答對了！！',
        message: '+12分',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '下一題',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this4.val = 0;

            _this4.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  correctedAlertConfirm() {
    var _this5 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alert.create({
        header: '恭喜您答對了！！',
        message: '+3分',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '下一題',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this5.val = 0;

            _this5.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  correctAlertConfirm_wrong5() {
    var _this6 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alert.create({
        header: '您終於答對了！！',
        message: '+12分',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '下一題',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this6.val = 0;

            _this6.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  correctedAlertConfirm_wrong5() {
    var _this7 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alert.create({
        header: '您終於答對了！！',
        message: '+3分',
        cssClass: 'correctAlertConfirm',
        buttons: [{
          text: '下一題',
          cssClass: 'correctAlertConfirm',
          handler: () => {
            _this7.val = 0;

            _this7.router.navigate(['/q19']);
          }
        }]
      });
      yield alert.present();
    })();
  }

  wrongpresentAlert() {
    var _this8 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alert.create({
        header: '您答錯了！！',
        cssClass: 'correctAlertConfirm',
        message: '請繼續',
        buttons: ['繼續']
      });
      yield alert.present();
    })();
  }

  wrong3presentAlert() {
    var _this9 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alert.create({
        header: '您連續答錯了3次！！',
        cssClass: 'correctAlertConfirm',
        message: '-6分',
        buttons: ['繼續']
      });
      yield alert.present();
    })();
  } /////////////////////////////////////////更新用戶Firebase的分數///////////////////////////////////////////////////////////////////////////////


  undateUserScoreCorrectAll() {
    var _this0 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.afs.collection('user').doc(_this0.userId).set({
        'userScore': _this0.userScore + 20,
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
        'q18_pass': true
      }, {
        merge: true
      });
    })();
  }

  undateUserScoreCorrect() {
    var _this1 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this1.afs.collection('user').doc(_this1.userId).set({
        'userScore': _this1.userScore + 12,
        'q18': true,
        'q18_pass': true
      }, {
        merge: true
      });
    })();
  }

  undateUserScoreCorrected() {
    var _this10 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.afs.collection('user').doc(_this10.userId).set({
        'userScore': _this10.userScore + 3
      }, {
        merge: true
      });
    })();
  }

  undateUserScoreWrong3() {
    var _this11 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.afs.collection('user').doc(_this11.userId).set({
        'userScore': _this11.userScore - 6
      }, {
        merge: true
      });
    })();
  } ///////////////////////////////音效///////////////////////////////////////


  correctAllPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/correctEnd.mp3";
    this.audio.play();
  }

  correctPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/correct.mp3";
    this.audio.play();
  }

  inputPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/input.mp3";
    this.audio.play();
  }

  wrong5CorrectPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/wrong5Correct.mp3";
    this.audio.play();
  }

  outPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/out.mp3";
    this.audio.play();
  }

  wrongPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/wrong.mp3";
    this.audio.play();
  }

  wrong3PlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/wrong3.mp3";
    this.audio.play();
  }

};

Q18Page.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore
}];

Q18Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-q18',
  template: _q18_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_q18_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Q18Page);


/***/ }),

/***/ 5922:
/*!**********************************************!*\
  !*** ./src/app/q18/q18.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('gameBackground.jpg') no-repeat center center/cover;\n}\n\nh2 {\n  color: white;\n  font-size: 4000%;\n}\n\n.main_div {\n  text-align: center;\n  margin-top: 50%;\n  transform: translateY(30%);\n  font-weight: bold;\n  font-size: 2.5%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.main_div .o {\n  margin-left: 2%;\n  margin-right: 2%;\n}\n\n.main_div .otp {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content ion-button {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: bold;\n  text-transform: none;\n}\n\nion-toolbar {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: bold;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInExOC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwRkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNFQUFBO0FBQ0E7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFJRTtFQUNBLHNFQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUtBO0VBQ0Usc0VBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRkYiLCJmaWxlIjoicTE4LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvZ2FtZUJhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbn1cclxuaDJ7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDAwMCU7XHJcbn1cclxuXHJcblxyXG4ubWFpbl9kaXZ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLXRvcDogNTAlO1xyXG50cmFuc2Zvcm06dHJhbnNsYXRlWSgzMCUpO1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5mb250LXNpemU6IDIuNSU7XHJcbmZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbi5ve1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tcmlnaHQ6MiU7XHJcbn1cclxuLm90cHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbiAgfVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3733:
/*!**********************************************!*\
  !*** ./src/app/q18/q18.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon name=\"log-out-outline\"></ion-icon>\n        返回\n      </ion-button>\n    </ion-buttons>\n    <b class=\"text\" slot=\"end\">你的分數：</b>\n    <ion-badge slot=\"end\" color=\"light\">{{userScore}}</ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n <div class=\"main_div\">\n  <h2 class=\"o\"><b>請輸入正確的答案：</b></h2>\n  <div class=\"otp\">\n    <div class=\"o\"><h2>Pr</h2></div>\n    <div class=\"o\" class=\"otp\"><ng-otp-input  (onInputChange)=\"valueChange($event)\" [config]=\"config\"></ng-otp-input></div>\n    <div class=\"o\"><h2>mo</h2></div>\n    <div class=\"o\" class=\"otp\"><ng-otp-input  (onInputChange)=\"valueChange2($event)\" [config]=\"config2\"></ng-otp-input></div> <!--OTP-->\n    <div class=\"o\"><h2>on</h2></div>\n  </div>\n\n    <ion-button color=\"light\" (click)=\"next()\"  fill=\"outline\" shape=\"round\">\n      <ion-icon name=\"pulse-outline\"></ion-icon>確定答案\n  </ion-button>\n\n </div>\n\n    \n\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_q18_q18_module_ts.js.map
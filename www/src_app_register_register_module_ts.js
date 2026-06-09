"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 3963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 8135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 3963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 8135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 8135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);









let RegisterPage = class RegisterPage {
  constructor(afs, afauth, router, loadingCtrl, toastr) {
    this.afs = afs;
    this.afauth = afauth;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.toastr = toastr;
  }

  ngOnInit() {}

  register() {
    var _this = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.name && _this.email && _this.phone && _this.password) {
        const loading = yield _this.loadingCtrl.create({
          message: '等待中..',
          spinner: 'crescent',
          showBackdrop: true
        });
        yield loading.present();

        _this.afauth.createUserWithEmailAndPassword(_this.email, _this.password).then(data => {
          const user = data.user;

          if (user) {
            user.sendEmailVerification(); // 發送Email給用戶

            _this.afs.collection('user').doc(user.uid).set({
              'userId': user.uid,
              'userName': _this.name,
              'userEmail': _this.email,
              'userPhone': _this.phone,
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
            }).then(() => {
              loading.dismiss();

              _this.toast('註冊成功！請查看你的Email!', 'success'); // 提醒用戶確定Email


              _this.router.navigate(['/login']);
            }).catch(error => {
              loading.dismiss();

              _this.toast(error.message, 'danger');
            });
          } else {
            // Fallback in case user creation succeeded but returned no user object payload
            loading.dismiss();

            _this.toast('找不到用戶資料，請稍後再試。', 'danger');
          }
        }).catch(error => {
          loading.dismiss();

          _this.toast(error.message, 'danger');
        });
      } else {
        _this.toast('請填寫所有資料!', 'warning');
      }
    })();
  } // end of register


  checkPassword() {
    if (this.password === this.confirmPassword) {
      // 檢查密碼
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  toast(message, status) {
    var _this2 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastr.create({
        message: message,
        color: status,
        position: 'top',
        duration: 2000
      });
      yield toast.present();
    })();
  } // end of toast


};

RegisterPage.ctorParameters = () => [{
  type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore
}, {
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
}];

RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-register',
  template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegisterPage);


/***/ }),

/***/ 6219:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-list {\n  background: transparent;\n}\n\nion-list ion-list-header {\n  margin-bottom: 20%;\n  letter-spacing: 6%;\n}\n\nion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 3%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nion-list ion-button {\n  font-weight: bold;\n  text-transform: none;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nion-card {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-input {\n  font-size: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJGQUFBO0FBQ0o7O0FBRUE7RUFFSSx1QkFBQTtBQUFKOztBQUVJO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQUFMOztBQUVLO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0VBQUE7QUFBUDs7QUFJSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzRUFBQTtBQUZSOztBQU1DO0VBRUcsMkZBQUE7QUFKSjs7QUFRSTtFQUNJLGNBQUE7QUFMUiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tbGlzdC1oZWFkZXJ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjAlOyAgIFxyXG4gICAgIGxldHRlci1zcGFjaW5nOiA2JTtcclxuICAgICBcclxuICAgICBpb24tbGFiZWx7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgIGZvbnQtc2l6ZTogMyU7XHJcbiAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG4gICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIH0gXHJcbiB9XHJcblxyXG4gaW9uLWNhcmR7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrKSB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDYwJTtcclxuICAgICAgICB9Il19 */";

/***/ }),

/***/ 4754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-back-button> <!--註冊界面-->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n<ion-card>\n<ion-card-header>\n  <ion-card-title style=\"text-align: center;\"><ion-label color=\"light\"><b>註冊賬號</b></ion-label></ion-card-title>                \n</ion-card-header>\n\n\n\n  <form>\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"stacked\">\n          <ion-icon class=\"ion-margin-end\" name=\"person-outline\"></ion-icon>\n          <b>姓名:</b>\n        </ion-label>\n        <ion-input required type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>   <!--required是錯誤顯示紅色-->\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label  position=\"stacked\">\n          <ion-icon class=\"ion-margin-end\" name=\"mail-outline\"></ion-icon>\n          <b>電郵地址:</b>\n        </ion-label>\n        <ion-input required type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label  position=\"stacked\">\n          <ion-icon class=\"ion-margin-end\" name=\"call-outline\"></ion-icon>\n          <b>電話:</b>\n        </ion-label>\n        <ion-input required type=\"tel\" [(ngModel)]=\"phone\" name=\"phone\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label  position=\"stacked\">\n          <ion-icon class=\"ion-margin-end\" name=\"lock-closed-outline\"></ion-icon>\n          <b>密碼:</b>\n        </ion-label>\n        <ion-input required type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-item>\n        <ion-label  position=\"stacked\">\n          <ion-icon class=\"ion-margin-end\" name=\"lock-closed-outline\"></ion-icon>\n          <b>確認密碼:</b>\n        </ion-label>\n        <ion-input required type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" (ionChange)=\"checkPassword()\"></ion-input>\n      <ion-text *ngIf=\"password && !passwordMatch\" color=\"danger\">請輸入相同的密碼</ion-text>\n      <ion-text *ngIf=\"password && passwordMatch\" color=\"success\">正確</ion-text>  <!--確定密碼，如果不對會顯示提示-->\n      </ion-item>\n\n      <br>\n<!--            **              如果密碼不匹配，就按不到Button-->\n      <ion-button color=\"light\" [disabled]=\"!passwordMatch\" required type=\"submit\" (click)=\"register()\" expand=\"block\" shape=\"round\">\n        註冊\n      </ion-button>\n\n    </ion-list>\n  </form>\n\n</ion-card>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map
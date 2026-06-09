"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);







let LoginPage = class LoginPage {
  constructor(auth, toastr) {
    this.auth = auth;
    this.toastr = toastr;
  }

  ngOnInit() {}

  login() {
    if (this.email && this.password) {
      this.auth.signIn(this.email, this.password);
    } else if (this.email === "" || this.password === "") {
      this.toast('請輸入Email和密碼!', 'danger');
    } else {
      this.toast('請輸入正確的Email和密碼!', 'danger');
    }
  }

  toast(message, status) {
    var _this = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastr.create({
        message: message,
        color: status,
        position: 'top',
        duration: 2000
      });
      toast.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-list {\n  transform: translateY(20%);\n  background: transparent;\n}\n\nion-list ion-list-header {\n  margin-bottom: 10%;\n  letter-spacing: 3%;\n}\n\nion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 130%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nion-list ion-button {\n  font-weight: bold;\n  text-transform: none;\n}\n\nion-list p {\n  font-size: 80%;\n}\n\nion-card {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-input {\n  font-size: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJGQUFBO0FBQ0Y7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBRUU7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FBQUg7O0FBRUc7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzRUFBQTtBQUFMOztBQUlFO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUZOOztBQUlFO0VBQ0UsY0FBQTtBQUZKOztBQU1BO0VBQ0UsMkZBQUE7QUFIRjs7QUFNRTtFQUNBLGNBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhcmspIHVybCgnLi4vLi4vYXNzZXRzL2xvZ2luQmFja2dyb3VuZC5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjAlKTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgaW9uLWxpc3QtaGVhZGVye1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMCU7ICAgXHJcbiAgIGxldHRlci1zcGFjaW5nOiAzJTtcclxuICAgXHJcbiAgIGlvbi1sYWJlbHtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDgwJTsgIFxyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrKSB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbkJhY2tncm91bmQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgfVxyXG5cclxuICBpb24taW5wdXR7XHJcbiAgZm9udC1zaXplOiA2MCU7XHJcbiAgfVxyXG5cclxuIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n\n<!--登錄界面-->\n<ion-content class=\"ion-padding\">\n\n\n\n    <ion-list class=\"ion-text-center\">\n       <ion-list-header><ion-label color=\"light\">Word Game</ion-label></ion-list-header>\n\n       <ion-card>\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              <ion-icon class=\"ion-margin-end\" name=\"mail-outline\"></ion-icon>\n              <b>電郵地址:</b>\n            </ion-label>\n            <ion-input required type=\"email\" [(ngModel)]=\"email\" name=\"email\"></ion-input>\n          </ion-item>\n\n           <br>\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              <ion-icon class=\"ion-margin-end\" name=\"lock-closed-outline\"></ion-icon>\n              <b>密碼:</b>\n            </ion-label>\n            <ion-input required type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>\n          </ion-item>\n\n     \n      </ion-card>\n    \n      <br>    \n\n        <ion-button (click)=\"login()\" routerLinkActive=\"router-link-active\"  color=\"light\" expand=\"block\" shape=\"round\">\n          <ion-icon class=\"ion-margin-end\" name=\"log-in-outline\"></ion-icon>\n          登入\n        </ion-button>\n\n        <br>\n\n        <ion-button  [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\" color=\"light\" expand=\"block\" shape=\"round\">註冊</ion-button>\n        <ion-text [routerLink]=\"['/forgot-password']\" routerLinkActive=\"router-link-active\" color=\"light\"><p>忘記密碼?</p></ion-text>\n    </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map
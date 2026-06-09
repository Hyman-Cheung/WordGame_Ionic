"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 3673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": () => (/* binding */ ForgotPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 2327);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 7157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": () => (/* binding */ ForgotPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 3673);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 2327);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 2327:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": () => (/* binding */ ForgotPasswordPage)
/* harmony export */ });
/* harmony import */ var D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.html?ngResource */ 6997);
/* harmony import */ var _forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password.page.scss?ngResource */ 4341);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);








let ForgotPasswordPage = class ForgotPasswordPage {
  constructor(afauth, toaster, loadingCtrl, router) {
    this.afauth = afauth;
    this.toaster = toaster;
    this.loadingCtrl = loadingCtrl;
    this.router = router;
  }

  ngOnInit() {}

  resetPassword() {
    var _this = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.email) {
        const loading = yield _this.loadingCtrl.create({
          message: '請等候..',
          spinner: 'crescent',
          showBackdrop: true
        });
        loading.present();

        _this.afauth.sendPasswordResetEmail(_this.email).then(() => {
          loading.dismiss();

          _this.toast('請查看你的Email!', 'success');

          _this.router.navigate(['/login']);
        }).catch(error => {
          loading.dismiss();

          _this.toast(error.message, 'danger');
        });
      } else {
        _this.toast('請輸入您的電子郵件地址!', 'danger');
      }
    })();
  } //end of resetPassword


  toast(message, status) {
    var _this2 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toaster.create({
        message: message,
        position: 'top',
        color: status,
        duration: 2000
      });
      toast.present();
    })();
  } //end of toast


};

ForgotPasswordPage.ctorParameters = () => [{
  type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-forgot-password',
  template: _forgot_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_forgot_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ForgotPasswordPage);


/***/ }),

/***/ 4341:
/*!**********************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-list {\n  transform: translateY(20%);\n  background: transparent;\n}\n\nion-list ion-list-header {\n  margin-bottom: 10%;\n  letter-spacing: 3%;\n}\n\nion-list ion-list-header ion-label {\n  font-weight: bold;\n  font-size: 130%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nion-list ion-button {\n  font-weight: bold;\n  text-transform: none;\n}\n\nion-list p {\n  font-size: 80%;\n}\n\nion-card {\n  --background:var(--ion-color-dark) url('loginBackground.jpg') no-repeat center center/cover;\n}\n\nion-input {\n  font-size: 60%;\n}\n\nh3 {\n  color: white;\n  font-size: 120%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyRkFBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNJO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtBQUNMOztBQUNLO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0VBQUE7QUFDUDs7QUFHSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFHSTtFQUNFLGNBQUE7QUFETjs7QUFLRTtFQUNFLDJGQUFBO0FBRko7O0FBS0k7RUFDQSxjQUFBO0FBRko7O0FBT0k7RUFDSSxZQUFBO0VBQ0osZUFBQTtBQUpKIiwiZmlsZSI6ImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gIH1cclxuICBcclxuICBpb24tbGlzdHtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDIwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAgIGlvbi1saXN0LWhlYWRlcntcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMCU7ICAgXHJcbiAgICAgbGV0dGVyLXNwYWNpbmc6IDMlO1xyXG4gICAgIFxyXG4gICAgIGlvbi1sYWJlbHtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDgwJTsgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvbG9naW5CYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiA2MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmOyAgIFxyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG5cclxuICAgIH1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 6997:
/*!**********************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" defaultHref=\"/\"><ion-icon name=\"chevron-back-outline\"></ion-icon></ion-back-button> <!--註冊界面-->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n<ion-card>\n  <ion-card-header style=\"text-align:center;\">\n    <ion-card-title color=\"light\"><ion-label><b>忘記密碼</b></ion-label></ion-card-title>\n   <h3>請輸入您的電郵地址</h3>\n  </ion-card-header>\n\n<ion-card-content>\n <ion-list>\n  <ion-item>\n    <ion-label position=\"floating\">電郵地址:</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"email\"></ion-input>\n  </ion-item>\n </ion-list>\n</ion-card-content>\n</ion-card>\n\n<ion-button color=\"light\" (click)=\"resetPassword()\" expand=\"block\" shape=\"round\">\n  <ion-icon name=\"repeat-outline\"></ion-icon>\n  <b> 更改密碼</b>\n</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts.js.map
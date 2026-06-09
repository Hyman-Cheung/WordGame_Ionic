"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-edit/profile-edit.page */ 2258);







 //Modal從下方彈出頁面更改資料（2）鏈接更改資料的頁面

let Tab1Page = class Tab1Page {
  constructor(auth, alert, modalCtrl) {
    this.auth = auth;
    this.alert = alert;
    this.modalCtrl = modalCtrl;
    this.auth.user$.subscribe(user => {
      this.user = user;
    });
  }

  logoutAlertConfirm() {
    var _this = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alert.create({
        cssClass: 'correctAlertConfirm',
        header: '登出',
        message: '確定要登出嗎？',
        buttons: [{
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

            _this.logout();
          }
        }]
      });
      yield alert.present();
    })();
  }

  logout() {
    this.logoutPlayAudio();
    this.auth.signOut();
  }

  editProfile() {
    var _this2 = this;

    return (0,D_Hyman_Programming_Ionic_WordGame_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _profile_edit_profile_edit_page__WEBPACK_IMPORTED_MODULE_4__.ProfileEditPage,
        breakpoints: [0, 0.5, 0.8],
        initialBreakpoint: 0.5
      });
      yield modal.present();
    })();
  } //////////////////音效///////////////////


  logoutPlayAudio() {
    this.audio = new Audio();
    this.audio.src = "/assets/mp3/logout.mp3";
    this.audio.play();
  }

};

Tab1Page.ctorParameters = () => [{
  type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tab1',
  template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Tab1Page);


/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('gameBackground5.jpg') no-repeat center center/cover;\n}\n\nion-card {\n  --background:var(--ion-color-dark) url('gameBackground4.jpg') no-repeat center center/cover;\n  font-weight: bold;\n  font-size: 3%;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nh6 {\n  font-size: 45%;\n}\n\nh1 {\n  font-size: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkZBQUE7QUFDSjs7QUFFQTtFQUVBLDJGQUFBO0VBQ0ksaUJBQUE7RUFDRyxhQUFBO0VBQ0Esc0VBQUE7QUFBUDs7QUFHQTtFQUVBLGNBQUE7QUFEQTs7QUFJQTtFQUVFLGNBQUE7QUFGRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrKSB1cmwoJy4uLy4uL2Fzc2V0cy9nYW1lQmFja2dyb3VuZDUuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmRcclxueyBcclxuLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYXJrKSB1cmwoJy4uLy4uL2Fzc2V0cy9nYW1lQmFja2dyb3VuZDQuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgIGZvbnQtc2l6ZTogMyU7XHJcbiAgICAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG59ICBcclxuXHJcbmg2XHJcbntcclxuZm9udC1zaXplOiA0NSU7XHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LXNpemU6IDgwJTsgXHJcbn0iXX0= */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <b class=\"text\" slot=\"end\">你的分數：</b>\n    <ion-badge slot=\"end\" color=\"light\">{{user?.userScore}}</ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n\n      \n      <ion-card style=\"text-align: center;\">\n     <ion-card-title>\n      <h1>\n        <b>\n          <ion-icon name=\"person-outline\" ></ion-icon>\n          {{user?.userName}}\n        </b>\n       </h1>\n     </ion-card-title>\n       \n     <ion-card-title>\n      <h6>\n        <b>\n          <ion-icon name=\"bookmark-outline\"></ion-icon>\n          你的分數：{{user?.userScore}}分\n        </b>\n       </h6> \n     </ion-card-title>\n       </ion-card>\n\n       \n      <ion-card style=\"text-align: center;\"> \n        <ion-card-title>\n          <h6>\n           <b>\n            <ion-icon name=\"mail-outline\"></ion-icon>\n            電郵地址：\n           </b>\n           </h6>\n\n           <h6>\n             <b>\n              {{user?.userEmail}}\n             </b>\n           </h6>\n        </ion-card-title>\n        </ion-card>\n\n      <ion-card style=\"text-align: center;\">\n       <ion-card-title>\n        <h6>\n         <b>\n          <ion-icon name=\"call-outline\"></ion-icon>\n          電話：{{user?.userPhone}}\n         </b>\n        </h6>\n       </ion-card-title>\n      </ion-card>\n\n    <ion-card style=\"text-align: center;\">\n    <ion-card-title>\n      <h6>\n        <b>\n          <ion-icon  name=\"calendar-outline\"></ion-icon>\n          註冊日期：\n        </b>\n       </h6>\n  \n       <h6>\n       <b>\n        {{user?.createdAt | date}}\n       </b>\n       </h6>\n    </ion-card-title>\n    </ion-card>\n\n      <ion-card style=\"text-align: center;\" *ngIf=\"user?.editAt\"> <!--如果有更新日期就顯示-->\n      <ion-card-title>\n        <h6>\n          <b>\n            <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n            更新日期：\n          </b>\n        </h6>\n        <h6>\n          <b>\n            {{user?.editAt | date}}\n          </b>\n        </h6>\n      </ion-card-title>\n      </ion-card>  \n      \n      <br><br><br>\n\n  <ion-button color=\"light\" (click)=\"editProfile()\" expand=\"block\" fill=\"outline\" shape=\"round\">\n    <ion-icon name=\"settings-outline\"></ion-icon>更改個人資料\n  </ion-button>\n  \n  <br>\n\n<ion-button color=\"warning\" (click)=\"logoutAlertConfirm()\" expand=\"block\" fill=\"outline\" shape=\"round\">\n  <ion-icon name=\"log-out-outline\"></ion-icon>登出\n</ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map
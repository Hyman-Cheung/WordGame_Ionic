"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);






let Tab3Page = class Tab3Page {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.questions = [];
    }
    ngOnInit() {
        this.auth.user$.subscribe(user => {
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
                    { id: 1, src: 'assets/number/number1.png', q: user.q1_pass },
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
    start(id) {
        // Dynamic property evaluation securely matching current question index truthiness
        const questionKey = `q${id}`;
        const isPassed = this[questionKey];
        if (id >= 1 && id <= 20 && isPassed === true) {
            this.startGamePlayAudio();
            this.router.navigate([`/q${id}`]);
        }
    }
    //////////////////音效///////////////////
    startGamePlayAudio() {
        this.audio = new Audio();
        this.audio.src = "/assets/mp3/start3.mp3";
        this.audio.play();
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background:var(--ion-color-dark) url('gameBackground5.jpg') no-repeat center center/cover;\n}\n\nion-content {\n  background: azure;\n}\n\nion-card {\n  box-shadow: -1px 11px 13px -6px rgb(87, 86, 86);\n  border-radius: 10px !important;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 50px;\n  --background:var(--ion-color-dark) url('gameBackground4.jpg') no-repeat center center/cover;\n}\n\nion-card ion-thumbnail {\n  width: 10vh;\n  height: 10vh;\n  border-radius: 20px;\n}\n\nion-card img {\n  width: 5vh;\n  height: 5vh;\n  transform: translateY(60%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkZBQUE7QUFDRjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsMkZBQUE7QUFBSjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFLSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFIUiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvZ2FtZUJhY2tncm91bmQ1LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gIH1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogYXp1cmU7XHJcbiAgfVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDExcHggMTNweCAtNnB4IHJnYig4NywgODYsIDg2KTsgLy/pmbDlvbEgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBcclxuICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFyaykgdXJsKCcuLi8uLi9hc3NldHMvZ2FtZUJhY2tncm91bmQ0LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGlvbi10aHVtYm5haWx7XHJcbiAgICAgICAgd2lkdGg6MTB2aDtcclxuICAgICAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICBcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNXZoO1xyXG4gICAgICAgIGhlaWdodDogNXZoO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MCUpO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <b class=\"text\" slot=\"end\">你的分數：</b>\n    <ion-badge slot=\"end\" color=\"light\">{{userScore}}</ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"ion-padding\">\n\n\n<ion-grid>\n  <ion-row class=\"ion-marhin-horizontal\">\n    <ion-col *ngFor=\"let question of questions\" >\n      <ion-card (click)=\"start(question.id)\">\n        <div align=\"center\">\n          <ion-thumbnail>\n            <img [src]=\"question?.src\" />\n          </ion-thumbnail>\n          <ion-icon color=\"dark\" *ngIf=\"question.q\" name=\"checkmark-done-outline\"></ion-icon>\n        </div> \n\n      </ion-card>    \n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map
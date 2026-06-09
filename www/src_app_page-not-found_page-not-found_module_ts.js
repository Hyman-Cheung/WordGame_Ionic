"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page-not-found_page-not-found_module_ts"],{

/***/ 7236:
/*!*****************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPageRoutingModule": () => (/* binding */ PageNotFoundPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.page */ 1006);




const routes = [
    {
        path: '',
        component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundPage
    }
];
let PageNotFoundPageRoutingModule = class PageNotFoundPageRoutingModule {
};
PageNotFoundPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PageNotFoundPageRoutingModule);



/***/ }),

/***/ 6815:
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPageModule": () => (/* binding */ PageNotFoundPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found-routing.module */ 7236);
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.page */ 1006);







let PageNotFoundPageModule = class PageNotFoundPageModule {
};
PageNotFoundPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundPageRoutingModule
        ],
        declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundPage]
    })
], PageNotFoundPageModule);



/***/ }),

/***/ 1006:
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPage": () => (/* binding */ PageNotFoundPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _page_not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.page.html?ngResource */ 5635);
/* harmony import */ var _page_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.page.scss?ngResource */ 5778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PageNotFoundPage = class PageNotFoundPage {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundPage.ctorParameters = () => [];
PageNotFoundPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-not-found',
        template: _page_not_found_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_not_found_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageNotFoundPage);



/***/ }),

/***/ 5778:
/*!********************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5635:
/*!********************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content  class=\"ion-padding\">\n\n  <div style=\"text-align:center\">\n    <h2>Page not found!</h2>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page-not-found_page-not-found_module_ts.js.map
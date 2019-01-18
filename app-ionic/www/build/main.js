webpackJsonp([12],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/badges/badges.module": [
		270,
		11
	],
	"../pages/card/card.module": [
		271,
		10
	],
	"../pages/check/check.module": [
		272,
		9
	],
	"../pages/date/date.module": [
		273,
		8
	],
	"../pages/fab/fab.module": [
		274,
		7
	],
	"../pages/icon/icon.module": [
		275,
		6
	],
	"../pages/layout/layout.module": [
		276,
		5
	],
	"../pages/list/list.module": [
		277,
		4
	],
	"../pages/loading/loading.module": [
		278,
		3
	],
	"../pages/preload/preload.module": [
		279,
		2
	],
	"../pages/tabs/tabs.module": [
		280,
		1
	],
	"../pages/toast/toast.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, camera, alertCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.anotherPage = [
            {
                color: 'primary', path: 'page-fab', text: '分享按钮'
            },
            {
                color: 'danger', path: 'page-card', text: '卡片视图'
            },
            {
                color: 'light', path: 'page-layout', text: '网格布局'
            },
            {
                color: 'primary', path: 'page-icon', text: '字体图标'
            },
            {
                color: 'danger', path: 'page-loading', text: '加载效果'
            },
            {
                color: 'light', path: 'page-tabs', text: '标签页面'
            },
            {
                color: 'primary', path: 'page-toast', text: '提示信息'
            },
            {
                color: 'danger', path: 'page-date', text: '日期选择'
            },
            {
                color: 'light', path: 'page-check', text: '选择器'
            },
            {
                color: 'primary', path: 'page-badges', text: 'Badges'
            }
        ];
    }
    HomePage.prototype.onClickAlert = function () {
        console.log('click');
        var alert = this.alertCtrl.create({
            title: '消息提示信息',
            message: 'Do you want to buy this book?',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.onClickNativeCamare = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.onClickNavToAnotherPage = function (path) {
        this.navCtrl.push(path);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/components/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Start</h3>\n  <button ion-button secondary menuToggle>侧边导航</button>\n\n  <button ion-button color="danger" (click)="onClickAlert()">弹窗提示</button>\n\n  <button ion-button color="light" (click)="onClickNativeCamare()">原生相机</button>\n\n  <button ion-button [color]="item.color" *ngFor="let item of anotherPage" (click)="onClickNavToAnotherPage(item.path)">{{item.text}}</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/components/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ListComponent = /** @class */ (function () {
    function ListComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello ListComponent Component');
        this.text = 'Hello World';
    }
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'list',template:/*ion-inline-start:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/components/list/list.html"*/'<!-- Generated template for the ListComponent component -->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>List</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n      <ion-list>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-rotla.png">\n            </ion-thumbnail>\n            <h2>Raiders of the Lost Ark</h2>\n            <p>Steven Spielberg • 1981</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-ghostbusters.png">\n            </ion-thumbnail>\n            <h2>Ghostbusters</h2>\n            <p>Ivan Reitman • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-batman.png">\n            </ion-thumbnail>\n            <h2>Batman</h2>\n            <p>Tim Burton • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-bttf.png">\n            </ion-thumbnail>\n            <h2>Back to the Future</h2>\n            <p>Robert Zemeckis • 1985</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-esb.png">\n            </ion-thumbnail>\n            <h2>The Empire Strikes Back</h2>\n            <p>Irvin Kershner • 1980</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-terminator.png">\n            </ion-thumbnail>\n            <h2>The Terminator</h2>\n            <p>James Cameron • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-rotla.png">\n            </ion-thumbnail>\n            <h2>Raiders of the Lost Ark</h2>\n            <p>Steven Spielberg • 1981</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-ghostbusters.png">\n            </ion-thumbnail>\n            <h2>Ghostbusters</h2>\n            <p>Ivan Reitman • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-batman.png">\n            </ion-thumbnail>\n            <h2>Batman</h2>\n            <p>Tim Burton • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-bttf.png">\n            </ion-thumbnail>\n            <h2>Back to the Future</h2>\n            <p>Robert Zemeckis • 1985</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-esb.png">\n            </ion-thumbnail>\n            <h2>The Empire Strikes Back</h2>\n            <p>Irvin Kershner • 1980</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-terminator.png">\n            </ion-thumbnail>\n            <h2>The Terminator</h2>\n            <p>James Cameron • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-totoro.png">\n            </ion-thumbnail>\n            <h2>My Neighbor Totoro</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-rotla.png">\n            </ion-thumbnail>\n            <h2>Raiders of the Lost Ark</h2>\n            <p>Steven Spielberg • 1981</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-ghostbusters.png">\n            </ion-thumbnail>\n            <h2>Ghostbusters</h2>\n            <p>Ivan Reitman • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-batman.png">\n            </ion-thumbnail>\n            <h2>Batman</h2>\n            <p>Tim Burton • 1988</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-bttf.png">\n            </ion-thumbnail>\n            <h2>Back to the Future</h2>\n            <p>Robert Zemeckis • 1985</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-esb.png">\n            </ion-thumbnail>\n            <h2>The Empire Strikes Back</h2>\n            <p>Irvin Kershner • 1980</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="assets/img/thumbnail-terminator.png">\n            </ion-thumbnail>\n            <h2>The Terminator</h2>\n            <p>James Cameron • 1984</p>\n            <button ion-button clear item-end>View</button>\n          </ion-item>\n        </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/components/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ListComponent);
    return ListComponent;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_list_list__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__components_list_list__["a" /* ListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    monthShortNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
                    dayShortNames: ['7', '1', '2', '3', '4', '5', '6'],
                }, {
                    links: [
                        { loadChildren: '../pages/badges/badges.module#BadgesPageModule', name: 'page-badges', segment: 'badges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'page-card', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check/check.module#CheckPageModule', name: 'page-check', segment: 'check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/date/date.module#DatePageModule', name: 'page-date', segment: 'date', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fab/fab.module#FabPageModule', name: 'page-fab', segment: 'fab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/icon/icon.module#IconPageModule', name: 'page-icon', segment: 'icon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/layout/layout.module#LayoutPageModule', name: 'page-layout', segment: 'layout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'page-list', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'page-loading', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preload/preload.module#PreloadPageModule', name: 'page-preload', segment: 'preload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'page-tabs', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toast/toast.module#ToastPageModule', name: 'page-toast', segment: 'toast', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__components_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__components_list_list__["a" /* ListComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_list_list__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__components_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
            { title: 'Home', path: '' },
            { title: 'List', path: 'page-list' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page % 2 === 0) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__components_home_home__["a" /* HomePage */]);
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_list_list__["a" /* ListComponent */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>导航</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages; let i = index" (click)="openPage(i)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/macbook/Documents/GitHub/all-in-one/app-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map
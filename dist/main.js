(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"app-settings-settings-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"customers\" routerLinkActive=\"active\">Customers</a>\n  <a routerLink=\"products\" routerLinkActive=\"active\">Products</a>\n  <a routerLink=\"settings\" routerLinkActive=\"active\">Settings</a>\n  <a routerLink=\"doesNotExists\" routerLinkActive=\"active\" class=\"app-disabled\">I am disabled</a>\n</nav>\n\n<div class=\"{{currentTheme}}\" [@fadeInAnimation]=\"getRouteAnimation(route)\">\n  <router-outlet #route></router-outlet>\n</div>\n\n<div class=\"theme\">Theme: {{ currentTheme }}</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation link styles */\n:host(.dark) nav a {\n  background-color: grey;\n  color: white !important; }\n:host(.dark) nav a:visited, :host(.dark) a:link {\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmVnb3Ivd29yay90cmFpbmluZ3MvYW5ndWxhci1hZHZhbmNlZC1zdGFydGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUU1QjtFQUVJLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDeEI7QUFKSDtFQU9JLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5hdmlnYXRpb24gbGluayBzdHlsZXMgKi9cblxuOmhvc3QoLmRhcmspe1xuICBuYXYgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuXG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gICAgY29sb3I6IGJsdWU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _core_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/animations/fade-in-animation */ "./src/app/core/animations/fade-in-animation.ts");
/* harmony import */ var _shared_modal_host_host_element_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/modal/host/host-element.service */ "./src/app/shared/modal/host/host-element.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(settingsService, hostElementService, hostElement) {
        this.settingsService = settingsService;
        this.hostElementService = hostElementService;
        this.hostElement = hostElement;
        this.currentTheme = 'light';
        this.title = 'app';
        this.hostElementService.setHost(hostElement);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.themeChanged$.subscribe(function (theme) { return (_this.currentTheme = theme); });
    };
    // change the animation state
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return '';
        // return new Date().toString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "currentTheme", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            animations: [_core_animations_fade_in_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _shared_modal_host_host_element_service__WEBPACK_IMPORTED_MODULE_4__["HostElementService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.module */ "./src/app/products/products.module.ts");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_http_interceptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/http-interceptors */ "./src/app/core/http-interceptors/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




// App Root

// Routing Module

// Feature Modules



// Shared Services




// import localeDe from '@angular/common/locales/de';
// import { registerLocaleData } from '@angular/common';
// // the second parameter 'de' is optional
// registerLocaleData(localeDe, 'de');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
                _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
                _customers_customers_module__WEBPACK_IMPORTED_MODULE_8__["CustomersModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            providers: [
                _core_http_interceptors__WEBPACK_IMPORTED_MODULE_11__["httpInterceptorProviders"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/animations/fade-in-animation.ts":
/*!******************************************************!*\
  !*** ./src/app/core/animations/fade-in-animation.ts ***!
  \******************************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    // all state transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/core/can-deactivate/can-deactivate-guard.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/can-deactivate/can-deactivate-guard.service.ts ***!
  \*********************************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var providers = [];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: providers,
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [],
            exports: [],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http-interceptors/auth-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/http-interceptors/auth-interceptor.ts ***!
  \************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Normally e get the auth token from a service.
        // Now we just set a mock tocken
        var authToken = 'my_secure_token';
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        var authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http-interceptors/index.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http-interceptors/index.ts ***!
  \*************************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/core/http-interceptors/auth-interceptor.ts");
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging-interceptor */ "./src/app/core/http-interceptors/logging-interceptor.ts");
/* harmony import */ var _trim_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trim-interceptor */ "./src/app/core/http-interceptors/trim-interceptor.ts");
/* harmony import */ var _timezone_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timezone-interceptor */ "./src/app/core/http-interceptors/timezone-interceptor.ts");
/* "Barrel" of Http Interceptors */





/** Http interceptor providers in outside-in order */
var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _trim_interceptor__WEBPACK_IMPORTED_MODULE_3__["TrimInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _timezone_interceptor__WEBPACK_IMPORTED_MODULE_4__["TimezoneInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_2__["LoggingInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/app/core/http-interceptors/logging-interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/http-interceptors/logging-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (req, next) {
        var started = Date.now();
        var ok;
        // extend server response observable with logging
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(
        // Succeeds when there is a response; ignore other events
        function (event) { return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] ? 'succeeded' : ''; }, 
        // Operation failed; error is an HttpErrorResponse
        function (error) { return ok = 'failed'; }), 
        // Log when response observable either completes or errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            var elapsed = Date.now() - started;
            var msg = req.method + " " + ok + " in " + elapsed + " ms: \"" + req.urlWithParams + "\"";
            console.log('%cINFO%c XHR', 'color:white; background-color: #8E388E; padding: 0 .5em;', '', msg);
            if (req.method === 'PUT' || req.method === 'POST') {
                console.log('%cINFO%c BODY', 'color:white; background-color: #8E388E; padding: 0 .5em;', '', req.body);
            }
        }));
    };
    LoggingInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http-interceptors/timezone-interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/http-interceptors/timezone-interceptor.ts ***!
  \****************************************************************/
/*! exports provided: TimezoneInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimezoneInterceptor", function() { return TimezoneInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimezoneInterceptor = /** @class */ (function () {
    function TimezoneInterceptor() {
    }
    TimezoneInterceptor.prototype.intercept = function (req, next) {
        // Clone the request and replace the original headers with
        // cloned headers, updated with the timezone offset.
        var timezoneReq = req.clone({
            headers: req.headers.set('X-DS-TZ-Offset', (-new Date().getTimezoneOffset() / 60).toString())
        });
        // send cloned request with header to the next handler.
        return next.handle(timezoneReq);
    };
    TimezoneInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimezoneInterceptor);
    return TimezoneInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http-interceptors/trim-interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/http-interceptors/trim-interceptor.ts ***!
  \************************************************************/
/*! exports provided: TrimInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimInterceptor", function() { return TrimInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrimInterceptor = /** @class */ (function () {
    function TrimInterceptor() {
    }
    TrimInterceptor.prototype.intercept = function (req, next) {
        var body = req.body;
        if (!body || Object.keys(body).length < 1) {
            return next.handle(req);
        }
        var newBody = {};
        Object.entries(body).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (typeof value === 'string') {
                newBody[key] = value.trim();
            }
            else {
                newBody[key] = value;
            }
        });
        // clone request and set its body
        var newReq = req.clone({ body: newBody });
        // send the cloned request to the next handler.
        return next.handle(newReq);
    };
    TrimInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], TrimInterceptor);
    return TrimInterceptor;
}());



/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Some more information about the customer...\n</p>\n"

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customers/customer-details/customer-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/customer-details/customer-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customers/customer-details/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.scss */ "./src/app/customers/customer-details/customer-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-form/customer-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-form/customer-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Edit customer</h1>\n\n<form novalidate [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <div class=\"form-row\">\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"Name\" formControlName=\"name\" />\n      <mat-error *ngIf=\"form.get('name').hasError('required')\">\n        REQUIRED\n      </mat-error>\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-row\">\n    <mat-form-field>\n      <input type=\"text\" matInput placeholder=\"Firstname\" formControlName=\"firstname\" />\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-row\">\n    <mat-form-field>\n      <input type=\"number\" matInput placeholder=\"Number of orders\" formControlName=\"numberOfOrders\" />\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"this.form.invalid\">Save</button>\n    <button mat-raised-button type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>\n\n<pre>form.getRawValue() = <br/>{{ form.getRawValue() | json }}</pre>\n"

/***/ }),

/***/ "./src/app/customers/customer-form/customer-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-form/customer-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1mb3JtL2N1c3RvbWVyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customers/customer-form/customer-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-form/customer-form.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.model */ "./src/app/customers/customer.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent(route, router, customerService, snackBar) {
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.snackBar = snackBar;
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = _customer_model__WEBPACK_IMPORTED_MODULE_3__["Customer"].toFormGroup();
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) { return params.get('id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (id) { return id !== 'new'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.customerService.getById(id); }))
            .subscribe(function (customer) {
            _this.form.patchValue(customer);
        });
    };
    CustomerFormComponent.prototype.submit = function () {
        var _this = this;
        var data = this.form.getRawValue();
        var save$ = data.id
            ? this.customerService.update.bind(this.customerService)
            : this.customerService.create.bind(this.customerService);
        save$(data).subscribe(function (_) {
            _this.snackBar.open("Customer " + data.name + " saved successfully.", '', {
                duration: 2000
            });
            _this.cancel();
        });
    };
    CustomerFormComponent.prototype.cancel = function () {
        this.router.navigate(['customers']);
    };
    CustomerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-form',
            template: __webpack_require__(/*! ./customer-form.component.html */ "./src/app/customers/customer-form/customer-form.component.html"),
            styles: [__webpack_require__(/*! ./customer-form.component.scss */ "./src/app/customers/customer-form/customer-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers-search\">\n  <mat-form-field>\n    <input matInput [formControl]=\"searchTerm\" placeholder=\"Search...\" />\n  </mat-form-field>\n\n  <button mat-icon-button (click)=\"addNewCustomer()\">\n    <mat-icon>add</mat-icon>\n  </button>\n</div>\n\n<div class=\"customer\">\n  <app-customer *ngFor=\"let customer of customers$ | async\" [customer]=\"customer\" (deleteCustomer)=\"deleteCustomer($event)\">\n    <app-customer-details></app-customer-details>\n  </app-customer>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer.service */ "./src/app/customers/customer.service.ts");







var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(router, customerService) {
        this.router = router;
        this.customerService = customerService;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.reload$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search$ = this.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''));
        this.customers$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.search$, this.reload$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.search$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return value[1]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            return _this.customerService.getAll(value);
        }));
    };
    CustomerListComponent.prototype.addNewCustomer = function () {
        this.router.navigateByUrl('/customers/new');
    };
    CustomerListComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this.customerService.delete(id).subscribe(function (_) { return _this.reload$.next(); });
    };
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customers/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.scss */ "./src/app/customers/customer-list/customer-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer.model.ts":
/*!*********************************************!*\
  !*** ./src/app/customers/customer.model.ts ***!
  \*********************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var Customer = /** @class */ (function () {
    function Customer() {
        this.numberOfOrders = 0;
    }
    Customer.toFormGroup = function (customer) {
        if (customer === void 0) { customer = new Customer(); }
        var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        return formBuilder.group({
            id: formBuilder.control(customer.id),
            name: formBuilder.control(customer.name, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            firstname: formBuilder.control(customer.firstname),
            numberOfOrders: formBuilder.control(customer.numberOfOrders, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)),
        });
    };
    return Customer;
}());



/***/ }),

/***/ "./src/app/customers/customer.service.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customer.service.ts ***!
  \***********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CustomerService = /** @class */ (function () {
    function CustomerService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoints.customers;
    }
    CustomerService.prototype.getAll = function (searchTerm) {
        if (searchTerm === void 0) { searchTerm = ''; }
        // add search param
        var httpOptions = searchTerm
            ? { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('search', searchTerm) }
            : {};
        return this.httpClient.get(this.endpoint, httpOptions);
    };
    CustomerService.prototype.getById = function (id) {
        return this.httpClient.get(this.endpoint + "/" + id);
    };
    CustomerService.prototype.create = function (customer) {
        return this.httpClient.post(this.endpoint, customer);
    };
    CustomerService.prototype.update = function (customer) {
        return this.httpClient.put(this.endpoint, customer);
    };
    CustomerService.prototype.delete = function (id) {
        return this.httpClient.delete(this.endpoint + "/" + id);
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/customers/customer/customer.component.html":
/*!************************************************************!*\
  !*** ./src/app/customers/customer/customer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a routerLink=\"{{customer?.id}}\">\n    <h4>\n      {{customer?.name}}{{customer?.firstname ? ', ' + customer?.firstname : ''}}\n    </h4>\n  </a>\n  <!-- <span><mat-icon>{{customer?.numberOfOrders | customerStatus}}</mat-icon></span> -->\n</div>\n<div class=\"content\">\n  <span>\n    My hobbies: \"{{ customer?.hobbies }}\"\n  </span>\n  <button mat-icon-button (click)=\"showMore()\">\n    <mat-icon>{{ showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_right' }}</mat-icon>\n  </button>\n</div>\n<div class=\"details\" *ngIf=\"showDetails\">\n  <ng-content></ng-content>\n</div>\n<div class=\"footer\">\n  <button mat-icon-button (click)=\"edit()\">\n    <mat-icon>edit</mat-icon>\n  </button>\n  <button mat-icon-button (click)=\"delete(customer?.id)\">\n    <mat-icon>delete</mat-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customer/customer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/customers/customer/customer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer/customer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customers/customer/customer.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.model */ "./src/app/customers/customer.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(router) {
        this.router = router;
        this.hostStyle = true;
        this.deleteCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDetails = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.delete = function (id) {
        this.deleteCustomer.emit(id);
    };
    CustomerComponent.prototype.edit = function () {
        this.router.navigate(['customers', this.customer.id]);
    };
    CustomerComponent.prototype.showMore = function () {
        this.showDetails = !this.showDetails;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.customers'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "hostStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _customer_model__WEBPACK_IMPORTED_MODULE_2__["Customer"])
    ], CustomerComponent.prototype, "customer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CustomerComponent.prototype, "deleteCustomer", void 0);
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customers/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customers/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/customers/customer-form/customer-form.component.ts");





var routes = [
    { path: 'customers', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"] },
    { path: 'customers/:id', component: _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFormComponent"] }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customers/customer/customer.component.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/customers/customer-details/customer-details.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/customers/customer-form/customer-form.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomersRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
                _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"],
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomerListComponent"],
                _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFormComponent"]
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello Angular</h1>\n\n<p>\n    <button (click)=\"changeChild()\">Change Child Data</button>\n    <button (click)=\"child.name = 'Changed by Parent'\">Change Child vie template variable</button>\n    <button (click)=\"proccessReplyFromCode()\">Change Child via ViewChild</button>\n    <button (click)=\"sendMessage()\">Send Message</button>\n    <button (click)=\"openModal()\">Open Modal</button>\n    <button (click)=\"openModalGlobal()\">Open Modal Global</button>\n</p>\n\n<info-box [message]=\"message\"\n          [name]=\"name\"\n          (replyToParent)=\"proccessReply($event)\"\n          #child></info-box>\n\n\n<br>\n\n<info-item [(message)]=\"name\"></info-item>\n<pre>{{ name | json }}</pre>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-box/info-box.component */ "./src/app/home/info-box/info-box.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.service */ "./src/app/home/message.service.ts");
/* harmony import */ var _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/modal/modal.service */ "./src/app/shared/modal/modal.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(messageService, hostElement, modalService) {
        this.messageService = messageService;
        this.hostElement = hostElement;
        this.modalService = modalService;
        this.message = 'INIT';
        this.name = 'START_';
        this.reply = '';
    }
    HomeComponent.prototype.changeChild = function () {
        this.name = 'Changed by Script';
    };
    HomeComponent.prototype.proccessReply = function (message) {
        this.message = message;
    };
    HomeComponent.prototype.proccessReplyFromCode = function () {
        this.child.reply('Send message from parent via CODE');
    };
    HomeComponent.prototype.sendMessage = function () {
        this.messageService.sendMessage('Hallo neue Nachricht!');
    };
    HomeComponent.prototype.openModal = function () {
        var modal = this.modalService.open({ message: this.name, title: 'Modal Title', type: 'primary' }, this.hostElement);
        modal.close.subscribe(function (_) {
            console.log('MODAL closed');
        });
        modal.cancel.subscribe(function (_) {
            console.log('MODAL cancelled');
        });
    };
    HomeComponent.prototype.openModalGlobal = function () {
        this.modalService.openGlobal({
            title: 'Glboal Error',
            message: 'Please contact the support',
            type: 'warn'
        }).subscribe(function (modal) {
            modal.close.subscribe(function () { return console.log('Global MODAL closed'); });
            modal.cancel.subscribe(function () { return console.log('Global MODAL cancelled'); });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('child'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_2__["InfoBoxComponent"])
    ], HomeComponent.prototype, "child", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _shared_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-box/info-box.component */ "./src/app/home/info-box/info-box.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/home/message.service.ts");
/* harmony import */ var _info_item_info_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info-item/info-item.component */ "./src/app/home/info-item/info-item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _info_box_info_box_component__WEBPACK_IMPORTED_MODULE_5__["InfoBoxComponent"], _info_item_info_item_component__WEBPACK_IMPORTED_MODULE_7__["InfoItemComponent"]],
            providers: [
                _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/info-box/info-box.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/info-box/info-box.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  @Input() message: {{ message }}\n</p>\n<p>\n  Meesage Stream: {{ messageStream$ | async }}\n</p>\n<p>\n  @Input() name: {{ name }}\n</p>\n\n<p>\n  <input type=\"text\" #text />\n  <button (click)=\"reply(text.value)\">Message to Parent</button>\n</p>\n\n"

/***/ }),

/***/ "./src/app/home/info-box/info-box.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/info-box/info-box.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5mby1ib3gvaW5mby1ib3guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/info-box/info-box.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/info-box/info-box.component.ts ***!
  \*****************************************************/
/*! exports provided: InfoBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBoxComponent", function() { return InfoBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/home/message.service.ts");



var InfoBoxComponent = /** @class */ (function () {
    function InfoBoxComponent(messageService) {
        this.messageService = messageService;
        this.replyToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(InfoBoxComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    InfoBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageService.listener$.subscribe(function (msg) { return _this.message = msg; });
        this.messageStream$ = this.messageService.listener$;
    };
    InfoBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.message) {
            console.log('changes.message', changes.message.currentValue);
        }
        if (changes.name) {
            console.log('changes.name', changes.name.currentValue);
        }
        if (changes.message && changes.name) {
            console.log('message and name was triggered');
        }
    };
    InfoBoxComponent.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
    };
    InfoBoxComponent.prototype.reply = function (message) {
        this.replyToParent.emit(message);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InfoBoxComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], InfoBoxComponent.prototype, "name", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoBoxComponent.prototype, "replyToParent", void 0);
    InfoBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'info-box',
            template: __webpack_require__(/*! ./info-box.component.html */ "./src/app/home/info-box/info-box.component.html"),
            styles: [__webpack_require__(/*! ./info-box.component.scss */ "./src/app/home/info-box/info-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], InfoBoxComponent);
    return InfoBoxComponent;
}());



/***/ }),

/***/ "./src/app/home/info-item/info-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/info-item/info-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <input type=\"text\" [(ngModel)]=\"message\">\n</p>\n"

/***/ }),

/***/ "./src/app/home/info-item/info-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/info-item/info-item.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaW5mby1pdGVtL2luZm8taXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/info-item/info-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/info-item/info-item.component.ts ***!
  \*******************************************************/
/*! exports provided: InfoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoItemComponent", function() { return InfoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoItemComponent = /** @class */ (function () {
    function InfoItemComponent() {
        this.messageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(InfoItemComponent.prototype, "message", {
        get: function () {
            return this._messageValue;
        },
        set: function (value) {
            this._messageValue = value;
            this.messageChange.emit(this._messageValue);
        },
        enumerable: true,
        configurable: true
    });
    InfoItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InfoItemComponent.prototype, "messageChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], InfoItemComponent.prototype, "message", null);
    InfoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'info-item',
            template: __webpack_require__(/*! ./info-item.component.html */ "./src/app/home/info-item/info-item.component.html"),
            styles: [__webpack_require__(/*! ./info-item.component.scss */ "./src/app/home/info-item/info-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoItemComponent);
    return InfoItemComponent;
}());



/***/ }),

/***/ "./src/app/home/message.service.ts":
/*!*****************************************!*\
  !*** ./src/app/home/message.service.ts ***!
  \*****************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MessageService = /** @class */ (function () {
    function MessageService() {
        // Observable string source
        this.subjectListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Obserbable string stream
        this.listener$ = this.subjectListener.asObservable();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subjectListener.next(message);
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/products/product-details/product-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\" class=\"product\">\n<!-- <div *ngIf=\"product$ | async as product\" class=\"product\"> -->\n  <h3>\"{{ product.name }}\"</h3>\n  <div>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"product.name\" placeholder=\"Name\" />\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"product.price\" type=\"number\" placeholder=\"Price\" />\n    </mat-form-field>\n  </div>\n  <p>\n    <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n    <button mat-raised-button (click)=\"cancel()\">Cancel</button>\n    <button mat-raised-button appCanClick (canClick)=\"cancel()\">Delete</button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/products/product-details/product-details.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmVnb3Ivd29yay90cmFpbmluZ3MvYW5ndWxhci1hZHZhbmNlZC1zdGFydGVyL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/product-details/product-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-details/product-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductDetailsComponent = /** @class */ (function () {
    // product$: Observable<Product>;
    function ProductDetailsComponent(route, router, productsService) {
        this.route = route;
        this.router = router;
        this.productsService = productsService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { return (_this.product = data.product); });
        // this.product$ = this.route.data.pipe(
        //   pluck('product')
        // );
    };
    ProductDetailsComponent.prototype.save = function () {
        var _this = this;
        this.productsService.update(this.product).subscribe(function (_) { return _this.cancel(); });
    };
    ProductDetailsComponent.prototype.cancel = function () {
        var id = this.product ? this.product.id : '';
        this.router.navigate(['/products', { id: id }]);
    };
    ProductDetailsComponent.prototype.canDeactivate = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        // return of(window.confirm('Go away?'));
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/products/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/products/product-details/product-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/product-details/product.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/products/product-details/product.resolver.ts ***!
  \**************************************************************/
/*! exports provided: ProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolver", function() { return ProductResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");



var ProductResolver = /** @class */ (function () {
    function ProductResolver(productsService) {
        this.productsService = productsService;
    }
    ProductResolver.prototype.resolve = function (route, state) {
        return this.productsService.getById(route.paramMap.get('id'));
    };
    ProductResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductResolver);
    return ProductResolver;
}());



/***/ }),

/***/ "./src/app/products/product-empty/product-empty.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-empty/product-empty.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductEmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEmptyComponent", function() { return ProductEmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductEmptyComponent = /** @class */ (function () {
    function ProductEmptyComponent() {
    }
    ProductEmptyComponent.prototype.ngOnInit = function () {
    };
    ProductEmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-empty',
            template: "\n    <p>Nothing to see here...</p>\n  ",
            styles: ["p { color: grey; margin: 10px; }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductEmptyComponent);
    return ProductEmptyComponent;
}());



/***/ }),

/***/ "./src/app/products/product-list/product-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field>\n    <input matInput [formControl]=\"searchTerm\" placeholder=\"Search...\" />\n  </mat-form-field>\n</div>\n\n<div class=\"items\" *ngFor=\"let product of products\">\n  <span class=\"id\">{{product.id}}</span>\n  <a class=\"link\" [routerLink]=\"product.id\">{{product.name}}</a>\n  <span class=\"price\">{{product.price}}</span>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > div {\n  margin: 10px; }\n\n.items {\n  display: flex;\n  width: 300px;\n  background-color: bisque;\n  border: 1px solid  bisque;\n  border-radius: 2px; }\n\n.items.selected {\n    background-color: cadetblue; }\n\n.items span {\n    padding: 10px; }\n\n.items span.id {\n      background-color: chocolate; }\n\n.items span.price {\n      align-self: flex-end; }\n\n.items a {\n    padding: 10px;\n    text-decoration: none;\n    flex-grow: 3; }\n\n.items a:hover {\n      background-color: aquamarine;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmVnb3Ivd29yay90cmFpbmluZ3MvYW5ndWxhci1hZHZhbmNlZC1zdGFydGVyL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQVksRUFDYjs7QUFJSDtFQUNFLGNBQWE7RUFDYixhQUFZO0VBQ1oseUJBQXdCO0VBQ3hCLDBCQUF5QjtFQUN6QixtQkFBa0IsRUE2Qm5COztBQWxDRDtJQVFJLDRCQUEyQixFQUM1Qjs7QUFUSDtJQVlJLGNBQWEsRUFTZDs7QUFyQkg7TUFlTSw0QkFBMkIsRUFDNUI7O0FBaEJMO01BbUJNLHFCQUFvQixFQUNyQjs7QUFwQkw7SUF3QkksY0FBYTtJQUNiLHNCQUFxQjtJQUVyQixhQUFZLEVBTWI7O0FBakNIO01BOEJNLDZCQUE0QjtNQUM1QixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gID4gZGl2IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuXG4uaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIGJpc3F1ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICYuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAmLmlkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcbiAgICB9XG5cbiAgICAmLnByaWNlIHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgZmxleC1ncm93OiAzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this.loadProducts();
        }))
            .subscribe(function (products) { return _this.products = products; });
        this.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (value) {
            return _this.loadProducts(value);
        }))
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductListComponent.prototype.loadProducts = function (searchTerm) {
        return this.productService.getAll(searchTerm);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/products/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/products/product-details/product-details.component.ts");
/* harmony import */ var _product_details_product_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details/product.resolver */ "./src/app/products/product-details/product.resolver.ts");
/* harmony import */ var _product_empty_product_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-empty/product-empty.component */ "./src/app/products/product-empty/product-empty.component.ts");
/* harmony import */ var _core_can_deactivate_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/can-deactivate/can-deactivate-guard.service */ "./src/app/core/can-deactivate/can-deactivate-guard.service.ts");









var routes = [
    {
        path: 'products', component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
                children: [
                    {
                        path: ':id',
                        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"],
                        canDeactivate: [_core_can_deactivate_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanDeactivateGuard"]],
                        resolve: {
                            product: _product_details_product_resolver__WEBPACK_IMPORTED_MODULE_6__["ProductResolver"]
                        }
                    },
                    {
                        path: '',
                        component: _product_empty_product_empty_component__WEBPACK_IMPORTED_MODULE_7__["ProductEmptyComponent"]
                    }
                ]
            }
        ]
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>All my cool products!</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/products/product-list/product-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/products/product-details/product-details.component.ts");
/* harmony import */ var _product_empty_product_empty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-empty/product-empty.component */ "./src/app/products/product-empty/product-empty.component.ts");








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _products_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"],
                _product_empty_product_empty_component__WEBPACK_IMPORTED_MODULE_7__["ProductEmptyComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/products/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/products/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ProductsService = /** @class */ (function () {
    function ProductsService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoints.products;
    }
    ProductsService.prototype.getAll = function (searchTerm) {
        if (searchTerm === void 0) { searchTerm = ''; }
        // add search param
        var httpOptions = searchTerm
            ? { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('search', searchTerm) }
            : {};
        return this.httpClient.get(this.endpoint, httpOptions);
    };
    ProductsService.prototype.getById = function (id) {
        return this.httpClient.get(this.endpoint + "/" + id);
    };
    ProductsService.prototype.create = function (product) {
        return this.httpClient.post(this.endpoint, product);
    };
    ProductsService.prototype.update = function (product) {
        return this.httpClient.put(this.endpoint, product);
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/settings/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var SettingsService = /** @class */ (function () {
    function SettingsService(httpClient) {
        this.httpClient = httpClient;
        /* tslint:disable */
        this.themeListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.themeChanged$ = this.themeListener.asObservable();
        /* tslint:enable */
        this.ENDPOINT = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/api/settings';
    }
    SettingsService.prototype.get = function () {
        return this.httpClient.get(this.ENDPOINT);
    };
    SettingsService.prototype.set = function (settings) {
        var _this = this;
        return this.httpClient
            .post(this.ENDPOINT, settings)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.themeListener.next(settings.theme); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SettingsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an Error with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/directives/can-click.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/can-click.directive.ts ***!
  \**********************************************************/
/*! exports provided: CanClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanClickDirective", function() { return CanClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanClickDirective = /** @class */ (function () {
    function CanClickDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.isDisabled = true;
        this.canClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CanClickDirective.prototype.onClick = function (e) {
        if (this.isDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.canClick.emit(e);
    };
    CanClickDirective.prototype.ngOnInit = function () {
        this.renderer.setProperty(this.element.nativeElement, 'title', 'Im Demo-Modus nicht verfügbar');
        this.isDisabled = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.app-disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanClickDirective.prototype, "isDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanClickDirective.prototype, "canClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanClickDirective.prototype, "onClick", null);
    CanClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCanClick]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], CanClickDirective);
    return CanClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/input-integer/input-integer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/input-integer/input-integer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input #field=\"ngModel\" type=\"text\" matInput appIntegerValidator [(ngModel)]=\"input\" (ngModelChange)=\"parseToInt($event)\"\n    placeholder=\"{{placeholder}}\" [name]=\"name\" />\n  <span matPrefix>$&nbsp;</span>\n\n  <mat-error *ngIf=\"field.invalid\">\n    Please enter a valid integer\n  </mat-error>\n</mat-form-field>"

/***/ }),

/***/ "./src/app/shared/input-integer/input-integer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/input-integer/input-integer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnB1dC1pbnRlZ2VyL2lucHV0LWludGVnZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/input-integer/input-integer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/input-integer/input-integer.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputIntegerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputIntegerComponent", function() { return InputIntegerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/app/shared/utils/utils.ts");




var InputIntegerComponent = /** @class */ (function () {
    function InputIntegerComponent() {
        this.input = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InputIntegerComponent_1 = InputIntegerComponent;
    Object.defineProperty(InputIntegerComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            // update value when new value is different
            // OR when both values are null (to trigger the _onChangeCallback() for validation)
            if (v !== this._value || (v === null && this._value === null)) {
                this._value = v;
                if (this._onChangeCallback) {
                    this._onChangeCallback(this._value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    InputIntegerComponent.prototype.parseToInt = function (value) {
        // set value which is delegated to form model
        this.value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["getInt"])(value);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * Gets the value from the form model and sets the input
     *
     * @param {*} value
     *
     * @memberOf UlInputFloatComponent
     */
    InputIntegerComponent.prototype.writeValue = function (value) {
        this._value = this.parseInt(value);
        // set internal input field value
        this.input = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    InputIntegerComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    InputIntegerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    // onKeyDown(event: KeyboardEvent): boolean {
    //   const allowedKeyCodes = [8, 9, 37, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    //   return allowedKeyCodes.findIndex(keyCode => keyCode === event.keyCode) > -1;
    // }
    InputIntegerComponent.prototype.parseInt = function (value) {
        if (value || value === 0) {
            return parseInt(value, 10);
        }
        return null;
    };
    var InputIntegerComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputIntegerComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputIntegerComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputIntegerComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], InputIntegerComponent.prototype, "value", null);
    InputIntegerComponent = InputIntegerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-integer',
            template: __webpack_require__(/*! ./input-integer.component.html */ "./src/app/shared/input-integer/input-integer.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputIntegerComponent_1; })
                }
            ],
            styles: [__webpack_require__(/*! ./input-integer.component.scss */ "./src/app/shared/input-integer/input-integer.component.scss")]
        })
    ], InputIntegerComponent);
    return InputIntegerComponent;
}());



/***/ }),

/***/ "./src/app/shared/input-integer/integer.validator.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/input-integer/integer.validator.directive.ts ***!
  \*********************************************************************/
/*! exports provided: IntegerValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerValidatorDirective", function() { return IntegerValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _integer_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./integer.validator */ "./src/app/shared/input-integer/integer.validator.ts");




var IntegerValidatorDirective = /** @class */ (function () {
    function IntegerValidatorDirective() {
    }
    IntegerValidatorDirective_1 = IntegerValidatorDirective;
    IntegerValidatorDirective.prototype.validate = function (control) {
        return Object(_integer_validator__WEBPACK_IMPORTED_MODULE_3__["integerValidator"])()(control);
    };
    var IntegerValidatorDirective_1;
    IntegerValidatorDirective = IntegerValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appIntegerValidator]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: IntegerValidatorDirective_1,
                    multi: true
                }
            ]
        })
    ], IntegerValidatorDirective);
    return IntegerValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/input-integer/integer.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/input-integer/integer.validator.ts ***!
  \***********************************************************/
/*! exports provided: integerValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integerValidator", function() { return integerValidator; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/app/shared/utils/utils.ts");

function integerValidator() {
    return function (control) {
        var value = control.value;
        if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(value)) {
            return null;
        }
        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_0__["INTEGER_REGEX"].test(value)) {
            return { integer: { value: value, expected: 'integer', actual: typeof value } };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/shared/modal/host/host-element.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/modal/host/host-element.service.ts ***!
  \***********************************************************/
/*! exports provided: HostElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostElementService", function() { return HostElementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HostElementService = /** @class */ (function () {
    function HostElementService() {
        this._hostElement = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.hostElement$ = this._hostElement.asObservable();
    }
    HostElementService.prototype.setHost = function (hostElement) {
        this._hostElement.next(hostElement);
    };
    HostElementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HostElementService);
    return HostElementService;
}());



/***/ }),

/***/ "./src/app/shared/modal/modal.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/modal/modal.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"closable backdrop\" (click)=\"close.emit()\"></div>\n\n<div class=\"closable modal-dialog\">\n  <mat-card>\n    <mat-card-title>{{ modal.title }}</mat-card-title>\n    <mat-card-content>{{ modal.message }}</mat-card-content>\n    <mat-card-content class=\"footer\">\n      <button (click)=\"cancel.emit()\" mat-raised-button color=\"basic\">\n        Nein\n      </button>\n      <button (click)=\"close.emit()\" mat-raised-button [color]=\"modal.type\">\n        Ok\n      </button>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modal/modal.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/modal/modal.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/modal/modal.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modal/modal.component.ts ***!
  \*************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "modal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "cancel", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/shared/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal/modal.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/modal/modal.service.ts ***!
  \***********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _host_host_element_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host/host-element.service */ "./src/app/shared/modal/host/host-element.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ModalService = /** @class */ (function () {
    function ModalService(componentFactoryResolver, hostElemntService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.hostElemntService = hostElemntService;
    }
    ModalService.prototype.open = function (data, host) {
        data.type = data.type || 'primary';
        return this.createModal(data, host);
    };
    ModalService.prototype.openGlobal = function (data) {
        var _this = this;
        return this.hostElemntService.hostElement$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (host) { return _this.createModal(data, host); }));
    };
    ModalService.prototype.createModal = function (data, host) {
        host.clear();
        var modalFactory = this.componentFactoryResolver.resolveComponentFactory(_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]);
        var modal = host.createComponent(modalFactory);
        modal.instance.modal = data;
        modal.instance.close.subscribe(function () { return modal.destroy(); });
        modal.instance.cancel.subscribe(function () { return modal.destroy(); });
        return modal.instance;
    };
    ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _host_host_element_service__WEBPACK_IMPORTED_MODULE_3__["HostElementService"]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/shared/pipes/join.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/join.pipe.ts ***!
  \*******************************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (value, seperator) {
        if (seperator === void 0) { seperator = ','; }
        if (value && Array.isArray(value)) {
            return value.join(seperator + " ");
        }
        return '';
    };
    JoinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'appJoin' })
    ], JoinPipe);
    return JoinPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _directives_can_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/can-click.directive */ "./src/app/shared/directives/can-click.directive.ts");
/* harmony import */ var _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/join.pipe */ "./src/app/shared/pipes/join.pipe.ts");
/* harmony import */ var _input_integer_input_integer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-integer/input-integer.component */ "./src/app/shared/input-integer/input-integer.component.ts");
/* harmony import */ var _input_integer_integer_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-integer/integer.validator.directive */ "./src/app/shared/input-integer/integer.validator.directive.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/shared/modal/modal.component.ts");
/* harmony import */ var _modal_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/modal.service */ "./src/app/shared/modal/modal.service.ts");
/* harmony import */ var _modal_host_host_element_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal/host/host-element.service */ "./src/app/shared/modal/host/host-element.service.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            declarations: [
                _directives_can_click_directive__WEBPACK_IMPORTED_MODULE_5__["CanClickDirective"],
                _input_integer_input_integer_component__WEBPACK_IMPORTED_MODULE_7__["InputIntegerComponent"],
                _input_integer_integer_validator_directive__WEBPACK_IMPORTED_MODULE_8__["IntegerValidatorDirective"],
                _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_6__["JoinPipe"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _input_integer_input_integer_component__WEBPACK_IMPORTED_MODULE_7__["InputIntegerComponent"],
                _input_integer_integer_validator_directive__WEBPACK_IMPORTED_MODULE_8__["IntegerValidatorDirective"],
                _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_6__["JoinPipe"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _directives_can_click_directive__WEBPACK_IMPORTED_MODULE_5__["CanClickDirective"]
            ],
            providers: [
                _modal_modal_service__WEBPACK_IMPORTED_MODULE_10__["ModalService"],
                _modal_host_host_element_service__WEBPACK_IMPORTED_MODULE_11__["HostElementService"]
            ],
            entryComponents: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/utils.ts":
/*!***************************************!*\
  !*** ./src/app/shared/utils/utils.ts ***!
  \***************************************/
/*! exports provided: FLOAT_REGEX, INTEGER_REGEX, isEmpty, getFloat, getInt, roundToDecimal, cutToDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOAT_REGEX", function() { return FLOAT_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTEGER_REGEX", function() { return INTEGER_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloat", function() { return getFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInt", function() { return getInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToDecimal", function() { return roundToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutToDecimal", function() { return cutToDecimal; });
var FLOAT_REGEX = /^\-?\d+((\.|,)?(\d+)?)?$/;
var INTEGER_REGEX = /^\-?\d+$/;
function isEmpty(arg) {
    return arg === '' || arg === null || arg === undefined;
}
function getFloat(value, numberOfDigits) {
    if (numberOfDigits === void 0) { numberOfDigits = 2; }
    if (!value) {
        return null;
    }
    if (FLOAT_REGEX.test(value)) {
        return roundToDecimal(parseFloat(value.replace(',', '.')), numberOfDigits);
    }
    return null;
    // return value.toString();
}
function getInt(value) {
    if (!value) {
        return null;
    }
    if (INTEGER_REGEX.test(value)) {
        return parseInt(value, 10);
    }
    return null;
    // return value.toString();
}
function roundToDecimal(num, decimal) {
    var zeros = (1.0).toFixed(decimal);
    zeros = zeros.substr(2);
    var mul_div = parseInt('1' + zeros, 10);
    var increment = parseFloat('.' + zeros + '01');
    if ((num * (mul_div * 10)) % 10 >= 5) {
        num += increment;
    }
    return Math.round(num * mul_div) / mul_div;
}
function cutToDecimal(num, decimal) {
    // check range for decimal value
    if (decimal < 0 || decimal > 20) {
        decimal = 0;
    }
    // ensure decimal is an integer
    decimal = Math.floor(decimal);
    var multiplier = Math.pow(10, decimal);
    return (Math.floor(parseFloat(num.toString()) * multiplier) / multiplier).toFixed(decimal);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    hmr: false,
    apiUrl: 'http://localhost:9001',
    endpoints: {
        settings: '/api/settings',
        products: '/api/products',
        customers: '/api/customers'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gregor/work/trainings/angular-advanced-starter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
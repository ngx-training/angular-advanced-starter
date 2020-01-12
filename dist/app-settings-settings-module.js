(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-settings-settings-module"],{

/***/ "./src/app/settings/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/settings/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    AuthGuard.prototype.canLoad = function (route) {
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _settings_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.resolver */ "./src/app/settings/settings.resolver.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/settings/auth-guard.service.ts");






var routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        canLoad: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        resolve: {
            settings: _settings_resolver__WEBPACK_IMPORTED_MODULE_4__["SettingsResolver"]
        }
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>User Settings</h1>\n\n<form novalidate [formGroup]=\"form\" (ngSubmit)=\"save()\">\n  <div class=\"form-row\">\n    <mat-radio-group formControlName=\"theme\">\n      <mat-radio-button value=\"light\">Light</mat-radio-button>\n      <mat-radio-button value=\"dark\">Dark</mat-radio-button>\n    </mat-radio-group>\n  </div>\n\n  <div class=\"form-row\">\n    <mat-checkbox formControlName=\"isAdmin\">I am Admin!</mat-checkbox>\n  </div>\n\n  <div class=\"form-row\">\n    <app-input-integer formControlName=\"salary\" placeholder=\"Salary\" name=\"salary\"></app-input-integer>\n  </div>\n\n  <div class=\"form-row\" formGroupName=\"password\">\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Password with min 6 chars\" formControlName=\"value\" />\n      <mat-error *ngIf=\"form.get('password.value').hasError('not_equal')\">\n        Passwords must be\n        <strong>equal</strong>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input type=\"password\" matInput placeholder=\"Password again\" formControlName=\"repeat\" />\n    </mat-form-field>\n  </div>\n\n  <div class=\"form-row\" formArrayName=\"rights\">\n    <label>Access Rights</label>\n    <span>({{ form.get('rights').value | appJoin:'+' }})</span>\n    <br />\n    <button type=\"button\" (click)=\"addRight()\">\n      <i class=\"material-icons md-12\">add</i>\n    </button>\n    <div *ngFor=\"let rightsControl of form.get('rights')['controls']; let i = index;\">\n      <mat-form-field>\n        <input matInput [formControlName]=\"i\" />\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"form-row\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n    <button mat-raised-button type=\"button\" (click)=\"reset()\">Cancel</button>\n  </div>\n\n  <pre>form.getRawValue() = <br/>{{ form.getRawValue() | json }}</pre>\n  <pre>form.valid() = <br/>{{ form.valid | json }}</pre>\n</form>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.model */ "./src/app/settings/settings.model.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings/settings.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route, settingsService, snackBar) {
        this.route = route;
        this.settingsService = settingsService;
        this.snackBar = snackBar;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.initialData = JSON.parse(JSON.stringify(this.route.snapshot.data.settings));
        this.form = _settings_model__WEBPACK_IMPORTED_MODULE_3__["Settings"].toFormGroup(this.route.snapshot.data.settings);
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.settingsService.set(this.form.getRawValue())
            .subscribe(function (_) { return _this.snackBar.open('Settings save successfully.', '', { duration: 1000 }); });
    };
    SettingsComponent.prototype.addRight = function () {
        this.form.get('rights').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]());
    };
    SettingsComponent.prototype.reset = function () {
        this.form = _settings_model__WEBPACK_IMPORTED_MODULE_3__["Settings"].toFormGroup(this.initialData);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _settings_service__WEBPACK_IMPORTED_MODULE_4__["SettingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.model.ts":
/*!********************************************!*\
  !*** ./src/app/settings/settings.model.ts ***!
  \********************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_input_integer_integer_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/input-integer/integer.validator */ "./src/app/shared/input-integer/integer.validator.ts");


function passwordMatchesValidator(form) {
    var password = form.get('password.value');
    var repeatedPassword = form.get('password.repeat');
    if (password.value !== repeatedPassword.value) {
        password.setErrors({ not_equal: true });
    }
    else {
        password.setErrors(null);
    }
    return null;
}
var Settings = /** @class */ (function () {
    function Settings() {
        this.isAdmin = false;
        this.rights = [];
    }
    Settings.toFormGroup = function (settings) {
        settings = settings || new Settings();
        settings.password = settings.password || { value: null };
        var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]();
        return formBuilder.group({
            theme: formBuilder.control(settings.theme),
            isAdmin: formBuilder.control(settings.isAdmin),
            salary: formBuilder.control(settings.salary, Object(_shared_input_integer_integer_validator__WEBPACK_IMPORTED_MODULE_1__["integerValidator"])()),
            password: formBuilder.group({
                value: formBuilder.control(settings.password.value, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)),
                repeat: formBuilder.control(settings.password.repeat, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6))
            }),
            rights: formBuilder.array(settings.rights || [])
        }, { validator: passwordMatchesValidator });
    };
    return Settings;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.resolver.ts":
/*!***********************************************!*\
  !*** ./src/app/settings/settings.resolver.ts ***!
  \***********************************************/
/*! exports provided: SettingsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsResolver", function() { return SettingsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings/settings.service.ts");



var SettingsResolver = /** @class */ (function () {
    function SettingsResolver(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsResolver.prototype.resolve = function (route, state) {
        return this.settingsService.get();
    };
    SettingsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SettingsResolver);
    return SettingsResolver;
}());



/***/ })

}]);
//# sourceMappingURL=app-settings-settings-module.js.map
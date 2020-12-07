(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/swapi/swapi/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle-table/vehicle-table.component */ "mgd2");
/* harmony import */ var _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planet-chart/planet-chart.component */ "WuqF");




class AppComponent {
    constructor() {
        this.planetUrls = [
            'http://swapi.dev/api/planets/1/',
            'http://swapi.dev/api/planets/2/',
            'http://swapi.dev/api/planets/8/',
            'http://swapi.dev/api/planets/6/',
            'http://swapi.dev/api/planets/7/',
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "planetUrls"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vehicle-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-planet-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("planetUrls", ctx.planetUrls);
    } }, directives: [_vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_1__["VehicleTableComponent"], _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_2__["PlanetChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "WuqF":
/*!********************************************************!*\
  !*** ./src/app/planet-chart/planet-chart.component.ts ***!
  \********************************************************/
/*! exports provided: PlanetChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetChartComponent", function() { return PlanetChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.service */ "rETI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");






function PlanetChartComponent_app_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
} }
function PlanetChartComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", col_r3.value, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](col_r3.name);
} }
function PlanetChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlanetChartComponent_div_1_div_1_Template, 6, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.planetData);
} }
class PlanetChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.planetData = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoaded = false;
            this.chartService.getChartsData(this.planetUrls).subscribe(data => {
                this.planetData = data;
                this.isLoaded = true;
            });
        });
    }
}
PlanetChartComponent.ɵfac = function PlanetChartComponent_Factory(t) { return new (t || PlanetChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"])); };
PlanetChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlanetChartComponent, selectors: [["app-planet-chart"]], inputs: { planetUrls: "planetUrls" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "chart", 4, "ngIf"], [1, "chart"], ["class", "bar", 3, "height", 4, "ngFor", "ngForOf"], [1, "bar"], [1, "bar-value"], [1, "bar-bar"], [1, "bar-legend"]], template: function PlanetChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PlanetChartComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlanetChartComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 400px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.chart[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.chart[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  min-width: 30px;\n  width: 30%;\n  position: relative;\n  text-align: center;\n  margin: 0 2%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.chart[_ngcontent-%COMP%]   .bar-bar[_ngcontent-%COMP%] {\n  background: #99cccc;\n  height: 100%;\n  animation: grow 2s;\n}\n\n.chart[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%], .chart[_ngcontent-%COMP%]   .bar-legend[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 11px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.chart[_ngcontent-%COMP%]   .bar-value[_ngcontent-%COMP%] {\n  position: relative;\n  top: -10px;\n}\n\n.chart[_ngcontent-%COMP%]   .bar-legend[_ngcontent-%COMP%] {\n  font-style: italic;\n  position: absolute;\n  bottom: -30px;\n  font-size: 13px;\n}\n\n@keyframes grow {\n  0% {\n    height: 0;\n  }\n  100% {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbmV0LWNoYXJ0L3BsYW5ldC1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDTjs7QUFFSTtFQUVFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFETjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUZOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBSE47O0FBUUE7RUFDRTtJQUNFLFNBQUE7RUFMRjtFQVNBO0lBQ0UsWUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGFuZXQtY2hhcnQvcGxhbmV0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jaGFydCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgLmJhciB7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xuICAgIHdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAmLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjOTljY2NjO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYW5pbWF0aW9uOiBncm93IDJzO1xuICAgIH1cblxuICAgICYtdmFsdWUsXG4gICAgJi1sZWdlbmQge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmLXZhbHVlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxuXG4gICAgJi1sZWdlbmQge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncm93IHtcbiAgMCUge1xuICAgIGhlaWdodDogMDtcbiAgfVxuICA1MCUge1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlanetChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-planet-chart',
                templateUrl: './planet-chart.component.html',
                styleUrls: ['./planet-chart.component.scss'],
            }]
    }], function () { return [{ type: _chart_service__WEBPACK_IMPORTED_MODULE_2__["ChartService"] }]; }, { planetUrls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "yTNM");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _planet_chart_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planet-chart/chart.service */ "rETI");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planet-chart/planet-chart.component */ "WuqF");
/* harmony import */ var _vehicle_table_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vehicle-table/table.service */ "lsFq");
/* harmony import */ var _vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vehicle-table/vehicle-table.component */ "mgd2");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _planet_chart_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"], _vehicle_table_table_service__WEBPACK_IMPORTED_MODULE_8__["TableService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_9__["VehicleTableComponent"], _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_7__["PlanetChartComponent"], _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_7__["PlanetChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _vehicle_table_vehicle_table_component__WEBPACK_IMPORTED_MODULE_9__["VehicleTableComponent"], _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_7__["PlanetChartComponent"], _planet_chart_planet_chart_component__WEBPACK_IMPORTED_MODULE_7__["PlanetChartComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _planet_chart_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"], _vehicle_table_table_service__WEBPACK_IMPORTED_MODULE_8__["TableService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() { }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 5, vars: 0, consts: [[1, "loader"], ["id", "arcs", "viewBox", "0 0 100 100"], ["id", "arc1", "stroke-width", "12", "stroke", "#99cccc", "fill", "none", "d", "M56.29045,64.27361a15.59727,15.59727 0 0 1 -10.62368,0.70854\n              M40.79405,62.58825a15.59727,15.59727 0 0 1 -5.28754,-6.8329\n              M34.40572,49.99976a15.59727,15.59727 0 0 1 13.06673,-15.39063\n              M55.16758,35.28235a15.59727,15.59727 0 0 1 10.34227,13.04039"], ["id", "arc2", "stroke-width", "10", "stroke", "#336699", "fill", "none", "d", "M19.6806,37.14336 a32.93531,32.93531 0 0 1 38.09796,-19.14791\n              M82.81398,47.1407 a32.93531,32.93531 0 0 1 -64.12532,13.0643"], ["id", "arc3", "stroke-width", "8", "stroke", "#9efcfc", "fill", "none", "d", "M38.79882,9.87692\n              a42.36734,42.36734 0 0 1 38.330636,7.45775\n              M92.02837,57.91228\n              a42.36734,42.36734 0 0 1 -37.23271,34.22661\n              a42.36734,42.36734 0 0 1 -43.48695,-25.819\n              a42.36734,42.36734 0 0 1 12.22462,-49.07438"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n#arc1[_ngcontent-%COMP%] {\n  animation: rotate 2s infinite;\n  transform-origin: 50px;\n}\n\n#arc2[_ngcontent-%COMP%] {\n  animation: rotate2 2s infinite;\n  transform-origin: 50px;\n}\n\n#arc3[_ngcontent-%COMP%] {\n  animation: rotate3 2s infinite;\n  transform-origin: 50px 50px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: -30px 0px 0px -30px;\n  background-color: transparent;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-120deg);\n  }\n  100% {\n    transform: rotate(-320deg);\n  }\n}\n\n@keyframes rotate3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(220deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSxvQkFBQTtFQUVGO0VBRUE7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLHVCQUFBO0VBREY7RUFHQTtJQUNFLDBCQUFBO0VBREY7RUFHQTtJQUNFLDBCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsdUJBQUE7RUFGRjtFQUlBO0lBQ0UseUJBQUE7RUFGRjtFQUlBO0lBQ0UseUJBQUE7RUFGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jYXJjMSB7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MHB4O1xufVxuXG4jYXJjMiB7XG4gIGFuaW1hdGlvbjogcm90YXRlMiAycyBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTBweDtcbn1cblxuI2FyYzMge1xuICBhbmltYXRpb246IHJvdGF0ZTMgMnMgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcbn1cblxuLmxvYWRlciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogLTMwcHggMHB4IDBweCAtMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUwJSB7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzIwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZTMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lsFq":
/*!************************************************!*\
  !*** ./src/app/vehicle-table/table.service.ts ***!
  \************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "yTNM");





class TableService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getTopPlanet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allVehicles = yield this.getVehiclesWithPilots();
            const allVehiclesInfo = [];
            for (const vehicle of allVehicles) {
                allVehiclesInfo.push(yield this.getVehicleInfo(vehicle));
            }
            const sorted = allVehiclesInfo.sort((v1, v2) => v2.aggregatedPopulation - v1.aggregatedPopulation);
            return sorted[0];
        });
    }
    getVehicleInfo(vehicle) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = {
                name: vehicle.name,
                pilots: [],
                planets: [],
                aggregatedPopulation: 0,
            };
            for (const pilotUrl of vehicle.pilots) {
                const { name: pilotName } = yield this.getPilotInfo(pilotUrl);
                const { name: planetName, numberPopulation } = yield this.getPilotHomelandInfo(pilotUrl);
                info.planets.push({ name: planetName, population: numberPopulation });
                info.pilots.push({ name: pilotName });
                info.aggregatedPopulation += numberPopulation;
            }
            return info;
        });
    }
    getPilotInfo(pilotUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService.getPilot(pilotUrl).toPromise();
        });
    }
    getVehiclesWithPilots() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService
                .getAllVehicles()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => v.filter(({ pilots }) => pilots.length > 0)))
                .toPromise();
        });
    }
    getPilotHomelandInfo(pilotUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.apiService
                .getPilot(pilotUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ homeworld }) => this.apiService.getPlanet(homeworld)))
                .toPromise();
        });
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "mgd2":
/*!**********************************************************!*\
  !*** ./src/app/vehicle-table/vehicle-table.component.ts ***!
  \**********************************************************/
/*! exports provided: VehicleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleTableComponent", function() { return VehicleTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.service */ "lsFq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/loader.component */ "kQyY");






function VehicleTableComponent_app_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader");
} }
function VehicleTableComponent_table_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", planet_r4.name, ": ", planet_r4.population, "");
} }
function VehicleTableComponent_table_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pilot_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pilot_r5.name, "");
} }
function VehicleTableComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Vehicle name with the largest sum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Related home planets and their respective population");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VehicleTableComponent_table_1_div_11_Template, 2, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Related home planets and their respective population");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VehicleTableComponent_table_1_div_16_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.topVehicle.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.topVehicle.planets);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.topVehicle.pilots);
} }
class VehicleTableComponent {
    constructor(tableService) {
        this.tableService = tableService;
        this.topVehicle = null;
        this.isLoaded = false;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoaded = false;
            this.topVehicle = yield this.tableService.getTopPlanet();
            this.isLoaded = true;
        });
    }
}
VehicleTableComponent.ɵfac = function VehicleTableComponent_Factory(t) { return new (t || VehicleTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"])); };
VehicleTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VehicleTableComponent, selectors: [["app-vehicle-table"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "table", 4, "ngIf"], [1, "table"], [1, "row"], [1, "cell", "cell-header"], [1, "cell"], [4, "ngFor", "ngForOf"]], template: function VehicleTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, VehicleTableComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VehicleTableComponent_table_1_Template, 17, 3, "table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 300px;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.table[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 17px;\n  font-weight: 400;\n  padding: 10px;\n  border: 1px solid white;\n  border-radius: 10px;\n}\n\n.table[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: left;\n}\n\n.table[_ngcontent-%COMP%]   .cell-header[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVoaWNsZS10YWJsZS92ZWhpY2xlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDSTtFQUNFLGdCQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC92ZWhpY2xlLXRhYmxlL3ZlaGljbGUtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gIC5jZWxsIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAmLWhlYWRlciB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VehicleTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-vehicle-table',
                templateUrl: './vehicle-table.component.html',
                styleUrls: ['./vehicle-table.component.scss'],
            }]
    }], function () { return [{ type: _table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"] }]; }, null); })();


/***/ }),

/***/ "rETI":
/*!***********************************************!*\
  !*** ./src/app/planet-chart/chart.service.ts ***!
  \***********************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "yTNM");





const MIN_BAR_HEIGHT = 10;
class ChartService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getPlanetsChartInfo(planetUrls) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(...planetUrls.map(url => this.apiService.getPlanet(url)));
    }
    getChartsData(planetUrls) {
        return this.getPlanetsChartInfo(planetUrls).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            const max = Math.max(...data.map(({ numberPopulation }) => numberPopulation));
            return data.map(({ numberPopulation, population, name }) => {
                let value = (numberPopulation / max) * 100;
                if (value <= MIN_BAR_HEIGHT) {
                    value += MIN_BAR_HEIGHT;
                }
                return { name, value, label: population };
            });
        }));
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: UNKNOWN_POPULATION, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_POPULATION", function() { return UNKNOWN_POPULATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const UNKNOWN_POPULATION = 'unknown';
// swapi returns urls with http, need to force https to let app be deployed to gh-pages
const forceHttps = (url) => url.replace('http://', 'https://');
class ApiService {
    constructor(http) {
        this.http = http;
        this.pilotCache = new Map();
        this.planetCache = new Map();
    }
    getAllVehicles(url = 'https://swapi.dev/api/vehicles/') {
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["expand"])(res => (res.next ? this.http.get(forceHttps(res.next)) : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["reduce"])((acc, res) => acc.concat(res.results), []));
    }
    getPilot(pilotUrl) {
        return this.cacheRequest(forceHttps(pilotUrl), this.pilotCache);
    }
    getPlanet(planetUrl) {
        return this.cacheRequest(forceHttps(planetUrl), this.planetCache).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(planet => (Object.assign(Object.assign({}, planet), { numberPopulation: planet.population === UNKNOWN_POPULATION ? 0 : +planet.population }))));
    }
    cacheRequest(url, cache) {
        const cached = cache.get(url);
        if (!!cached) {
            return cached;
        }
        const request = this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({ refCount: true, bufferSize: 1 }));
        cache.set(url, request);
        return request;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'prefix' }
];
var opt = {
    enableTracing: false
    // true if you want to print navigation routes
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes, opt)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'o-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_app_services_config__ = __webpack_require__("../../../../../src/app/shared/app.services.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_app_menu_config__ = __webpack_require__("../../../../../src/app/shared/app.menu.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_custom_ontimize_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-ontimize.service.ts");



var CONFIG = {
    // The base path of the URL used by app services.
    apiEndpoint: 'http://try.ontimize.com/QSAllComponents/rest',
    // apiEndpoint: 'http://10.7.0.137:9080/qsallcomponents-server-wsrest',
    //  Application identifier. Is the unique package identifier of the app. It is used when storing or managing temporal data related with the app. By default is set as 'ontimize-web-uuid'.
    uuid: 'com.ontimize.web.ng2.quickstart.chart',
    // Title of the app
    title: 'Quickstart Chart',
    //  Language of the application.
    locale: 'en',
    // The service type used (Ontimize REST standart, Ontimize REST JEE or custom implementation) in the whole application.
    serviceType: __WEBPACK_IMPORTED_MODULE_2__shared_services_custom_ontimize_service__["a" /* CustomOntimizeService */],
    // Configuration parameters of application services.
    servicesConfiguration: __WEBPACK_IMPORTED_MODULE_0__shared_app_services_config__["a" /* SERVICE_CONFIG */],
    appMenuConfiguration: __WEBPACK_IMPORTED_MODULE_1__shared_app_menu_config__["a" /* MENU_CONFIG */],
    applicationLocales: ['es', 'en']
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCustomOntimizeServiceProvider */
/* unused harmony export customProviders */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_custom_ontimize_service__ = __webpack_require__("../../../../../src/app/shared/services/custom-ontimize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function getCustomOntimizeServiceProvider(injector) {
    return new __WEBPACK_IMPORTED_MODULE_7__shared_services_custom_ontimize_service__["a" /* CustomOntimizeService */](injector);
}
// Defining custom providers (if needed)...
var customProviders = [
    __WEBPACK_IMPORTED_MODULE_6__shared_services_navigation_bar_service__["a" /* NavigationBarService */],
    {
        provide: __WEBPACK_IMPORTED_MODULE_7__shared_services_custom_ontimize_service__["a" /* CustomOntimizeService */],
        useFactory: getCustomOntimizeServiceProvider,
        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["f" /* ONTIMIZE_MODULES */],
            __WEBPACK_IMPORTED_MODULE_5__main_main_module__["a" /* MainModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* CONFIG */] }
        ].concat(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["g" /* ONTIMIZE_PROVIDERS */], customProviders)
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/discrete-bar/discrete-bar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscreteBarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discrete_bar_component__ = __webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__discrete_bar_component__["a" /* DiscreteBarComponent */]
    }
];
var DiscreteBarRoutingModule = (function () {
    function DiscreteBarRoutingModule() {
    }
    return DiscreteBarRoutingModule;
}());
DiscreteBarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], DiscreteBarRoutingModule);

//# sourceMappingURL=discrete-bar-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/discrete-bar/discrete-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center top\" layout-margin>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageId()\" [files]=\"getBasicUsageFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" flex=\"75\"\r\n                entity=\"EMovementTypesTotal\" x-axis=\"MOVEMENTTYPES\" y-axis=\"MOVEMENT\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Basic Usage</h2>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getInsideFormId()\" [files]=\"getInsideFormFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-form layout=\"column\" show-header=\"yes\" header-mode=\"none\" label-header=\"Account detail\" header-actions=\"R\" entity=\"EAccounts\"\r\n                keys=\"ACCOUNTID\" #oForm flex=\"75\" class=\"md-whiteframe-4dp\">\r\n                <o-row elevation=\"0\" layout-align=\"space-between center\">\r\n                    <o-integer-input attr=\"ACCOUNTID\" enabled=\"no\" layout-padding></o-integer-input>\r\n                    <o-row elevation=\"2\" layout=\"row\">\r\n                        <o-text-input attr=\"ENTITYID\" layout-padding class=\"account align-right\"></o-text-input>\r\n                        <o-text-input attr=\"OFFICEID\" layout-padding class=\"account align-right\"></o-text-input>\r\n                        <o-text-input attr=\"CDID\" layout-padding class=\"account align-right\"></o-text-input>\r\n                        <o-text-input attr=\"ANID\" layout-padding class=\"align-right\"></o-text-input>\r\n                    </o-row>\r\n                </o-row>\r\n                <o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" flex=\"75\" entity=\"EMovementTypesTotal\" x-axis=\"MOVEMENTTYPES\"\r\n                    y-axis=\"MOVEMENT\" query-on-init=\"no\" parent-keys=\"ACCOUNTID\"></o-chart>\r\n            </o-form>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h3>Inside a form</h3>\r\n            <p class=\"body-text\">\r\n                When a chart is included inside an Ontimize form, it is possible to configure the parameter 'parent-keys' for filtering\r\n                the results of chart service query.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getCustomDataId()\" [files]=\"getCustomDataFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" [data]=\"data\" flex=\"75\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h3>Custom data</h3>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service, but the user is the responsible of\r\n                perform the query call. This case is very useful to perform queries with custom filters and\r\n                also to process service response for creating aggregate data from queried data.\r\n            </p>\r\n            <p class=\"body-text\">\r\n                In this example, it is performed an Ontimize service query filtering by 'ACCOUNTID' = 7310. Once\r\n                service response is received, data is processed for grouping all movements (amount of money in (€))\r\n                depending on its movement type ('Direct debit', 'Transfer', ...)\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/discrete-bar/discrete-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account {\n  max-width: 60px;\n  min-width: 60px;\n  width: 60px; }\n\n.align-right input {\n  text-align: right !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/discrete-bar/discrete-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscreteBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscreteBarComponent = (function () {
    function DiscreteBarComponent(injector, navigationService, translateService) {
        this.injector = injector;
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.yAxis = 'MOVEMENT';
        this.xAxis = 'MOVEMENTTYPES';
    }
    DiscreteBarComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('DISCRETE_BAR');
        this.navigationService.setTitle(title);
    };
    DiscreteBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.oForm) {
            // Force oForm query.
            this.oForm._reloadAction();
        }
        // Configuring Ontimize service instance...
        var service = this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["i" /* OntimizeService */]);
        /*
        * 'getDefaultServiceConfiguration' method provides session, endpoint,.. data from
        * application configuration object.
        */
        var conf = service.getDefaultServiceConfiguration();
        conf['entity'] = 'EMovementTypes';
        service.configureService(conf);
        // Performing ontimize query...
        var filter = {
            'ACCOUNTID': 7310
        };
        var columns = ['MOVEMENT', 'MOVEMENTTYPES'];
        service.query(filter, columns).subscribe(function (resp) {
            // response ok
            if (resp.code === 0) {
                _this.serviceResponse = JSON.stringify(resp, undefined, 2);
                _this.adaptResult(resp.data);
            }
            else {
                alert('Impossible to query data!');
            }
        });
    };
    /**
     * Creates chart data grouping movements by category 'Movement type'
     *  */
    DiscreteBarComponent.prototype.adaptResult = function (data) {
        if (data && data.length) {
            var values = this.processValues(data);
            // chart data
            this.data = [
                {
                    'key': 'Discrete serie',
                    'values': values
                }
            ];
        }
    };
    DiscreteBarComponent.prototype.processValues = function (data) {
        var values = [];
        var self = this;
        data.forEach(function (item, index) {
            var filtered = self.filterCategory(item[self.xAxis], values);
            if (filtered && filtered.length === 0) {
                var val = {
                    'x': item[self.xAxis],
                    'y': item[self.yAxis]
                };
                values.push(val);
            }
            else {
                filtered[0]['y'] += item[self.yAxis];
            }
        });
        return values;
    };
    DiscreteBarComponent.prototype.filterCategory = function (category, values) {
        var filtered = [];
        if (values && values.length) {
            filtered = values.filter(function (val) {
                if (val['x'] === category) {
                    return true;
                }
            });
        }
        return filtered;
    };
    DiscreteBarComponent.prototype.getBasicUsageId = function () {
        return 'Discrete Bar Chart (Basic usage)';
    };
    DiscreteBarComponent.prototype.getBasicUsageFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    DiscreteBarComponent.prototype.getInsideFormId = function () {
        return 'Discrete Bar Chart (Inside a form)';
    };
    DiscreteBarComponent.prototype.getInsideFormFiles = function () {
        return [
            {
                'type': 'html',
                'data': INSIDE_FORM_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    DiscreteBarComponent.prototype.getCustomDataId = function () {
        return 'Discrete Bar Chart (Custom data)';
    };
    DiscreteBarComponent.prototype.getCustomDataFiles = function () {
        return [
            {
                'type': 'html',
                'data': CUSTOM_DATA_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': CUSTOM_DATA_TYPESCRIPT_DATA
            },
            {
                'type': 'service data',
                'data': this.serviceResponse
            },
            {
                'type': 'chart data',
                'data': this.data ? JSON.stringify(this.data, undefined, 2) : '{}'
            }
        ];
    };
    return DiscreteBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('oForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["e" /* OFormComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["e" /* OFormComponent */]) === "function" && _a || Object)
], DiscreteBarComponent.prototype, "oForm", void 0);
DiscreteBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'discrete-bar',
        template: __webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _d || Object])
], DiscreteBarComponent);

var BASIC_USAGE_HTML_DATA = "\n<o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" layout-fill\n  entity=\"EMovementTypesTotal\" x-axis=\"MOVEMENTTYPES\" y-axis=\"MOVEMENT\"></o-chart>\n";
var INSIDE_FORM_HTML_DATA = "\n<o-form layout=\"column\" show-header=\"yes\" header-mode=\"none\" label-header=\"Account detail\" header-actions=\"R\"\n  entity=\"EAccounts\" keys=\"ACCOUNTID\" #oForm flex=\"75\">\n  <o-row elevation=\"0\" layout-align=\"space-between center\">\n    <o-integer-input attr=\"ACCOUNTID\" enabled=\"no\" layout-padding></o-integer-input>\n    <o-row elevation=\"2\" layout=\"row\">\n      <o-text-input attr=\"ENTITYID\" layout-padding class=\"account align-right\"></o-text-input>\n      <o-text-input attr=\"OFFICEID\" layout-padding class=\"account align-right\"></o-text-input>\n      <o-text-input attr=\"CDID\" layout-padding class=\"account align-right\"></o-text-input>\n      <o-text-input attr=\"ANID\" layout-padding class=\"align-right\"></o-text-input>\n    </o-row>\n  </o-row>\n  <o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" flex=\"75\" entity=\"EMovementTypesTotal\" x-axis=\"MOVEMENTTYPES\"\n    y-axis=\"MOVEMENT\" query-on-init=\"no\" parent-keys=\"ACCOUNTID\"></o-chart>\n</o-form>\n";
var CUSTOM_DATA_HTML_DATA = "\n<o-chart type=\"discreteBar\" x-label=\"Axis x\" y-label=\"Axis Y\" [data]=\"data\" layout-fill></o-chart>\n";
var CUSTOM_DATA_TYPESCRIPT_DATA = "\nimport { Component, OnInit, Injector } from '@angular/core';\n\nimport { OntimizeService } from 'ontimize-web-ngx';\n\n@Component({\n  selector: 'discrete-bar',\n  templateUrl: './discrete-bar.component.html',\n  styleUrls: ['./discrete-bar.component.scss']\n})\nexport class DiscreteBarComponent implements OnInit {\n\n  protected data: Array<Object>;\n\n  protected yAxis: string = 'MOVEMENT';\n  protected xAxis: string = 'MOVEMENTTYPES';\n\n  constructor(protected injector: Injector) {\n  }\n\n  ngOnInit() {\n    // nothing to do\n  }\n\n  ngAfterViewInit() {\n    // Configuring Ontimize service instance...\n    let service: OntimizeService = this.injector.get(OntimizeService);\n    /*\n    * 'getDefaultServiceConfiguration' method provides session, endpoint,.. data from\n    * application configuration object.\n    */\n    let conf = service.getDefaultServiceConfiguration();\n    conf['entity'] = 'EMovementTypes';\n    service.configureService(conf);\n\n    // Performing ontimize query...\n    let filter = {\n      'ACCOUNTID': 7310\n    };\n    let columns = ['MOVEMENT', 'MOVEMENTTYPES'];\n    service.query(filter, columns).subscribe((resp) => {\n      // response ok\n      if (resp.code === 0) {\n        this.adaptResult(resp.data);\n      } else {\n        alert('Impossible to query data!');\n      }\n    });\n\n  }\n\n  /**\n   * Creates chart data grouping movements by category 'Movement type'\n   *  */\n  adaptResult(data: Array<any>) {\n    if (data && data.length) {\n      let values = this.processValues(data);\n      // chart data\n      this.data = [\n        {\n          'key': 'Discrete serie',\n          'values': values\n        }\n      ]\n    }\n  }\n\n  processValues(data: Array<Object> ) : Array<Object> {\n    let values = [];\n    var self = this;\n    data.forEach((item: any, index: number) => {\n      let filtered = self.filterCategory(item[self.xAxis], values);\n      if (filtered && filtered.length === 0) {\n        let val = {\n          'x': item[self.xAxis],\n          'y': item[self.yAxis]\n        };\n        values.push(val);\n      } else {\n        filtered[0]['y'] += item[self.yAxis];\n      }\n    });\n    return values;\n  }\n\n  filterCategory(category: string, values: Array<Object>) {\n    let filtered = [];\n    if (values && values.length) {\n      filtered = values.filter((val: Object) => {\n        if (val['x'] === category) {\n          return true;\n        }\n      });\n    }\n    return filtered;\n  }\n\n}\n";
var _a, _b, _c, _d;
//# sourceMappingURL=discrete-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/discrete-bar/discrete-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscreteBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discrete_bar_component__ = __webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discrete_bar_routing_module__ = __webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DiscreteBarModule = (function () {
    function DiscreteBarModule() {
    }
    return DiscreteBarModule;
}());
DiscreteBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__discrete_bar_routing_module__["a" /* DiscreteBarRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__discrete_bar_component__["a" /* DiscreteBarComponent */]
        ]
    })
], DiscreteBarModule);

//# sourceMappingURL=discrete-bar.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div layout-padding flex=\"80\">\r\n  <div layout-padding>\r\n    <h2>What is Ontimize Web Charts?</h2>\r\n    <p class=\"body-text\">\r\n      Ontimize Web Charts is a module that allows to you to integrate charts into an Ontimize Web application.\r\n    </p>\r\n    <p class=\"body-text\">\r\n      Ontimize Web Charts is based on nvD3 and d3 libraries.\r\n    </p>\r\n  </div>\r\n\r\n  <div layout-padding>\r\n    <h2>Keep up to date</h2>\r\n    <p class=\"body-text\" style=\"margin-bottom:0px;\">\r\n      Please refer to our changelog for up-to-date listings of all improvements and breaking changes.\r\n    </p>\r\n    <div layout=\"row\" layout-align=\"center\">\r\n      <a class=\"changelog\" href=\"https://github.com/OntimizeWeb/ontimize-web-ngx-charts/blob/master/CHANGELOG.md\" target=\"_blank\">\r\n        <div layout-padding layout=\"row\" layout-align=\"center\">\r\n          <md-icon class=\"md-48\">access_time</md-icon>\r\n          <span>CHANGELOG</span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <md-divider></md-divider>\r\n\r\n  <div layout-padding>\r\n    <h2>Related topics</h2>\r\n    <p class=\"body-text\">\r\n      Here are some interesting reading topics that can help you better understand how to develop with Ontimize Web.\r\n    </p>\r\n\r\n    <div layout=\"row\" layout-align=\"start center\">\r\n      <h5>nvD3</h5>\r\n      <a href=\"http://nvd3.org/index.html\" target=\"_blank\"> <md-icon>launch</md-icon></a>\r\n    </div>\r\n    <p class=\"body-text\">\r\n      NVD3 project is an attempt to build re-usable charts and chart components for d3.js without taking away the power that d3.js gives you.\r\n      This is collection of components, with the goal of keeping these components very customizable, staying away from your standard cookie cutter solutions.\r\n    </p>\r\n\r\n    <div layout=\"row\" layout-align=\"start center\">\r\n      <h5>nvD3 documentation</h5>\r\n      <a href=\"http://nvd3-community.github.io/nvd3/examples/documentation.html#\" target=\"_blank\"> <md-icon>launch</md-icon></a>\r\n    </div>\r\n    <p class=\"body-text\">\r\n      Check out all options available to configure the charts.\r\n    </p>\r\n\r\n    <div layout=\"row\" layout-align=\"start center\">\r\n      <h5>D3-3.x api reference</h5>\r\n      <a href=\"https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md\" target=\"_blank\"> <md-icon>launch</md-icon></a>\r\n    </div>\r\n    <p class=\"body-text\">\r\n      D3 (Data-Driven Documents or D3.js) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML.\r\n      D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of modern browsers\r\n      and the freedom to design the right visual interface for your data.\r\n    </p>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h5 {\n  margin: 0.1em; }\n\n.changelog {\n  text-decoration: none;\n  padding: 8px;\n  background-color: transparent; }\n  .changelog span {\n    line-height: 1.5em;\n    padding-left: 8px; }\n\n.changelog:hover {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-radius: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(navigationService, translateService) {
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var title = '';
        title = this.translateService.get('INTRODUCTION');
        this.navigationService.setTitle(title);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/main/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/main/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/main/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/line/line-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_component__ = __webpack_require__("../../../../../src/app/main/line/line.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__line_component__["a" /* LineComponent */]
    }
];
var LineRoutingModule = (function () {
    function LineRoutingModule() {
    }
    return LineRoutingModule;
}());
LineRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], LineRoutingModule);

//# sourceMappingURL=line-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center top\" layout-margin>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageId()\" [files]=\"getBasicUsageFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-fill layout-align=\"center\">\r\n            <o-chart type=\"line\" x-label=\"Time\" y-label=\"Amount (€)\" flex=\"75\"\r\n                entity=\"EMovements\" x-axis=\"DATE_\" y-axis=\"MOVEMENT\" x-data-type=\"time\"></o-chart>\r\n        </div>\r\n        <div  class=\"body-text-container\" layout-padding>\r\n            <h2>Basic Usage</h2>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageConfId()\" [files]=\"getBasicUsageConfFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-fill layout-align=\"center\">\r\n            <o-chart #lineChartBasic type=\"line\" x-label=\"Time\" y-label=\"Amount (€)\" flex=\"75\"\r\n                entity=\"EMovements\" x-axis=\"DATE_\" y-axis=\"MOVEMENT\" x-data-type=\"time\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Custom configuration </h2>\r\n            <p class=\"body-text\">\r\n                Visual configuration of the chart.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getCustomDataId()\" [files]=\"getCustomDataFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-fill layout-align=\"center\">\r\n            <o-chart #lineChart type=\"line\" x-label=\"Time\" y-label=\"Amount (€)\" flex=\"75\"\r\n                entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\r\n                x-data-type=\"time\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Series </h2>\r\n            <p class=\"body-text\">\r\n                It is possible to configure several data series.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/line/line.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__ = __webpack_require__("../../../../ontimize-web-ngx-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LineComponent = (function () {
    function LineComponent(injector, elRef, navigationService, translateService) {
        this.injector = injector;
        this.elRef = elRef;
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.yAxis = 'MOVEMENT';
        this.xAxis = 'DATE_';
    }
    LineComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('LINE');
        this.navigationService.setTitle(title);
    };
    LineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.lineChart) {
            var chartService = this.lineChart.getChartService();
            chartService.getChartOptions()['xAxis']['tickFormat'] =
                function (d) {
                    return d3.time.format('%B')(new Date(d));
                };
            var mindate = new Date(2009, 1, 1), maxdate = new Date(2009, 10, 1);
            var xScale = d3.time.scale();
            chartService.getChartOptions()['xScale'] = xScale;
            chartService.getChartOptions()['xDomain'] = [mindate, maxdate];
        }
        if (this.lineChartBasic) {
            // let filter = {
            //   'ACCOUNTID': 7310
            // }
            // this.lineChartBasic.queryData(filter);
            var chartService = this.lineChartBasic.getChartService();
            if (chartService) {
                var chartOps = chartService.getChartOptions();
                // Configuring x axis...
                chartOps['xAxis']['tickFormat'] =
                    function (d) {
                        return d3.time.format('%B')(new Date(d));
                    };
                var xScale = d3.time.scale();
                chartOps['xScale'] = xScale;
                var mindate = new Date(2009, 1, 1), maxdate = new Date(2009, 10, 1);
                chartOps['xDomain'] = [mindate, maxdate];
                // Configuring y axis...
                var yScale = d3.scale.linear();
                chartOps['yScale'] = yScale;
                chartOps['yDomain'] = [-1000, 2000];
                // Configuring chart margin...
                var margin = {
                    top: 40,
                    left: 60,
                    right: 60,
                    bottom: 80
                };
                chartService.setMargin(margin);
                chartService.setXAxisLabel('Time (modified by code)');
                chartService.setYAxisLabel('Amount (€)(modified)');
                chartService.setXAxisLabelDistance(10);
                chartService.setYAxisLabelDistance(-10);
            }
        }
        var service = this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["i" /* OntimizeService */]);
        var conf = service.getDefaultServiceConfiguration();
        conf['entity'] = 'EMovements';
        service.configureService(conf);
        var filter = {
            'ACCOUNTID': 7310
        };
        service.query(filter, ['MOVEMENT', 'DATE_']).subscribe(function (resp) {
            if (resp.code === 0) {
                _this.data = _this.adaptResult(resp.data);
            }
        });
    };
    LineComponent.prototype.adaptResult = function (data) {
        if (data && data.length) {
            var values = this.processValues(data);
            return [
                {
                    'key': 'Movement',
                    'values': values['movement']
                },
                {
                    'key': 'Average Balance',
                    'values': values['average']
                },
                {
                    'key': 'Total Balance',
                    'values': values['total']
                }
            ];
        }
    };
    LineComponent.prototype.processValues = function (data) {
        var values = {
            'movement': [],
            'average': [],
            'total': []
        };
        var self = this;
        var balance = 0.0;
        var average = 0.0;
        data.forEach(function (item, index) {
            var val = {
                'x': item[self.xAxis],
                'y': item[self.yAxis]
            };
            balance += val.y;
            var val2 = {
                'x': val.x,
                'y': balance
            };
            average += balance;
            var val3 = {
                'x': val.x,
                'y': (average / (index + 1))
            };
            values['movement'].push(val);
            values['average'].push(val3);
            values['total'].push(val2);
        });
        return values;
    };
    LineComponent.prototype.getBasicUsageId = function () {
        return 'Line Chart (Basic usage)';
    };
    LineComponent.prototype.getBasicUsageFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    LineComponent.prototype.getBasicUsageConfId = function () {
        return 'Line Chart (Custom configuration)';
    };
    LineComponent.prototype.getBasicUsageConfFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_CONF_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': BASIC_USAGE_CONF_TYPESCRIPT_DATA
            }
        ];
    };
    LineComponent.prototype.getCustomDataId = function () {
        return 'Line Chart (Series)';
    };
    LineComponent.prototype.getCustomDataFiles = function () {
        return [
            {
                'type': 'html',
                'data': SERIES_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': SERIES_TYPESCRIPT_DATA
            }
        ];
    };
    return LineComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */]) === "function" && _a || Object)
], LineComponent.prototype, "lineChart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineChartBasic'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */]) === "function" && _b || Object)
], LineComponent.prototype, "lineChartBasic", void 0);
LineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'line',
        template: __webpack_require__("../../../../../src/app/main/line/line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/line/line.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _f || Object])
], LineComponent);

var BASIC_USAGE_HTML_DATA = "\n<o-chart type=\"line\" x-label=\"Time\" y-label=\"Amount (\u20AC)\" layout-fill\n  entity=\"EMovements\" x-axis=\"DATE_\" y-axis=\"MOVEMENT\" x-data-type=\"time\"></o-chart>\n";
var BASIC_USAGE_CONF_HTML_DATA = "\n<o-chart #lineChartBasic type=\"line\" x-label=\"Time\" y-label=\"Amount (\u20AC)\" layout-fill\n  entity=\"EMovements\" x-axis=\"DATE_\" y-axis=\"MOVEMENT\" x-data-type=\"time\"></o-chart>\n";
var BASIC_USAGE_CONF_TYPESCRIPT_DATA = "\nimport { Component, ViewChild } from '@angular/core';\n\nimport { OChartComponent, ChartService, Margin } from 'ontimize-web-ngx-charts';\n\ndeclare var d3: any;\n\n@Component({\n  selector: 'line',\n  templateUrl: './line.component.html',\n  styleUrls: ['./line.component.scss']\n})\nexport class LineComponent {\n\n  @ViewChild('lineChartBasic')\n  protected lineChartBasic: OChartComponent;\n\n  ngAfterViewInit() {\n\n    if (this.lineChartBasic) {\n\n      let chartService: ChartService = this.lineChartBasic.getChartService();\n      if (chartService) {\n        let chartOps = chartService.getChartOptions();\n\n        // Configuring x axis...\n        chartOps['xAxis']['tickFormat'] =\n          function (d) {\n            return d3.time.format('%B')(new Date(d));\n          };\n\n        var xScale = d3.time.scale();\n        chartOps['xScale'] = xScale;\n\n        var mindate = new Date(2009, 1, 1),\n          maxdate = new Date(2009, 10, 1);\n        chartOps['xDomain'] = [mindate, maxdate];\n\n        // Configuring y axis...\n        var yScale = d3.scale.linear();\n        chartOps['yScale'] = yScale;\n        chartOps['yDomain'] = [-1000, 2000];\n\n        // Configuring chart margin...\n        let margin: Margin = {\n          top: 40,\n          left: 60,\n          right: 60,\n          bottom: 80\n        }\n        chartService.setMargin(margin);\n\n        chartService.setXAxisLabel('Time (modified by code)');\n        chartService.setYAxisLabel('Amount (\u20AC)(modified)');\n\n        chartService.setXAxisLabelDistance(10);\n        chartService.setYAxisLabelDistance(-10);\n      }\n\n    }\n  }\n}\n";
var SERIES_HTML_DATA = "\n<o-chart #lineChart type=\"line\" x-label=\"Time\" y-label=\"Amount (\u20AC)\" flex=\"75\"\n    entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\n    x-data-type=\"time\"></o-chart>\n";
var SERIES_TYPESCRIPT_DATA = "\nimport { Component, OnInit } from '@angular/core';\n\nimport { OChartComponent, ChartService } from 'ontimize-web-ngx-charts';\n\ndeclare var d3: any;\n\n@Component({\n  selector: 'line',\n  templateUrl: './line.component.html',\n  styleUrls: ['./line.component.scss']\n})\nexport class LineComponent implements OnInit {\n\n  @ViewChild('lineChart')\n  protected lineChart: OChartComponent;\n\n  constructor() {\n  }\n\n  ngOnInit() {\n    // nothing to do\n  }\n\n  ngAfterViewInit() {\n\n    if (this.lineChart) {\n      let chartService: ChartService = this.lineChart.getChartService();\n      chartService.getChartOptions()['xAxis']['tickFormat'] =\n      function (d) {\n        return d3.time.format('%B')(new Date(d));\n        };\n\n      var mindate = new Date(2009,1,1),\n            maxdate = new Date(2009,10,1);\n\n      var xScale = d3.time.scale();\n\n      chartService.getChartOptions()['xScale'] = xScale;\n      chartService.getChartOptions()['xDomain'] = [mindate, maxdate];\n    }\n  }\n\n}";
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=line.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/line/line.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_component__ = __webpack_require__("../../../../../src/app/main/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line_routing_module__ = __webpack_require__("../../../../../src/app/main/line/line-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LineModule = (function () {
    function LineModule() {
    }
    return LineModule;
}());
LineModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__line_routing_module__["a" /* LineRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__line_component__["a" /* LineComponent */]
        ]
    })
], LineModule);

//# sourceMappingURL=line.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loadHomeModule */
/* unused harmony export loadLineModule */
/* unused harmony export loadPieModule */
/* unused harmony export loadDiscreteBarModule */
/* unused harmony export loadMultiBarModule */
/* unused harmony export loadMultiBarHorizontalModule */
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__("../../../../../src/app/main/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__line_line_module__ = __webpack_require__("../../../../../src/app/main/line/line.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pie_pie_module__ = __webpack_require__("../../../../../src/app/main/pie/pie.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discrete_bar_discrete_bar_module__ = __webpack_require__("../../../../../src/app/main/discrete-bar/discrete-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__multi_bar_multi_bar_module__ = __webpack_require__("../../../../../src/app/main/multi-bar/multi-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__multi_bar_horizontal_multi_bar_horizontal_module__ = __webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { AuthGuardService } from 'ontimize-web-ngx';







function loadHomeModule() {
    return __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */];
}
function loadLineModule() {
    return __WEBPACK_IMPORTED_MODULE_4__line_line_module__["a" /* LineModule */];
}
function loadPieModule() {
    return __WEBPACK_IMPORTED_MODULE_5__pie_pie_module__["a" /* PieModule */];
}
function loadDiscreteBarModule() {
    return __WEBPACK_IMPORTED_MODULE_6__discrete_bar_discrete_bar_module__["a" /* DiscreteBarModule */];
}
function loadMultiBarModule() {
    return __WEBPACK_IMPORTED_MODULE_7__multi_bar_multi_bar_module__["a" /* MultiBarModule */];
}
function loadMultiBarHorizontalModule() {
    return __WEBPACK_IMPORTED_MODULE_8__multi_bar_horizontal_multi_bar_horizontal_module__["a" /* MultiBarHorizontalModule */];
}
var routes = [
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
        // canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: loadHomeModule
            },
            {
                path: 'line',
                loadChildren: loadLineModule
            },
            {
                path: 'pie',
                loadChildren: loadPieModule
            },
            {
                path: 'discrete-bar',
                loadChildren: loadDiscreteBarModule
            },
            {
                path: 'multi-bar',
                loadChildren: loadMultiBarModule
            },
            {
                path: 'multi-bar-horizontal',
                loadChildren: loadMultiBarHorizontalModule
            }
        ]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    return MainRoutingModule;
}());
MainRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], MainRoutingModule);

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<side-menu></side-menu>-->\r\n\r\n<!--<div class=\"main-container\">\r\n  <router-outlet></router-outlet>\r\n</div>-->\r\n\r\n\r\n<o-app-layout>\r\n  <!--<o-app-sidenav-image class=\"o-app-sidenav-image\"\r\n      opened-src=\"../../assets/images/sidenav-opened.png\"\r\n      closed-src=\"../../assets/images/sidenav-closed.png\">\r\n  </o-app-sidenav-image>-->\r\n  <router-outlet></router-outlet>\r\n</o-app-layout>\r\n\r\n<!--\r\n<md-sidenav-layout layout-fill>\r\n  <md-sidenav mode=\"side\" opened=\"true\" class=\"main-sidenav\">\r\n    <side-menu></side-menu>\r\n  </md-sidenav>\r\n\r\n\r\n  <md-toolbar class=\"navigation-toolbar\">\r\n    {{ sectionTitle }}\r\n    <span flex></span>\r\n    <a href=\"https://github.com/OntimizeWeb/ontimize-web-ngx-charts/tree/master\" title=\"View Source on Github\" aria-label=\"View Source on Github\"\r\n      target=\"_blank\">\r\n      <md-icon role=\"img\" svgsrc=\"./assets/images/github.svg\" class=\"md2 mat-icon\" ng-reflect-svg-src=\"./assets/images/github.svg\">\r\n        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"8 11 33 28\" fit=\"\"\r\n          height=\"100%\" width=\"100%\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\">\r\n          <path fill=\"#333\" d=\"M11.828,18.179c0,0-3.344,3.499-2.763,9.192 c0.581,5.694,4.186,10.392,16.208,10.392c12.021,0,15.045-6.275,15.116-11.436c0.071-5.159-2.253-7.46-3.344-8.243 c0,0,0.007-3.704-0.343-5.661c0,0-1.85-0.219-5.845,2.07c0,0-5.454-0.533-12.722,0.065c0,0-3.053-2.04-6.129-2.574 C12.006,11.984,11.496,15.196,11.828,18.179z\"></path>\r\n          <path fill=\"#E2B89F\" d=\"M17.211,23.815h14.916c0,0,4.227-0.475,4.227,6.44 c0.034,6.086-11.139,5.693-11.139,5.693s-12.236,0.486-12.243-6.269C12.956,23.579,17.211,23.815,17.211,23.815z\"></path>\r\n          <g>\r\n            <g>\r\n              <path fill=\"#9C584F\" d=\"M30.767,26.591c0.959,0,1.737,1.25,1.737,2.787 c0,1.54-0.778,2.788-1.737,2.788c-0.958,0-1.736-1.248-1.736-2.788C29.03,27.841,29.809,26.591,30.767,26.591z\"></path>\r\n              <path fill=\"#FFFFFF\" d=\"M30.767,32.666c-1.254,0-2.236-1.444-2.236-3.288c0-1.843,0.982-3.287,2.236-3.287 c1.255,0,2.237,1.444,2.237,3.287C33.004,31.222,32.021,32.666,30.767,32.666z M30.767,27.091c-0.585,0-1.236,0.939-1.236,2.287 c0,1.349,0.651,2.288,1.236,2.288s1.237-0.939,1.237-2.288C32.004,28.03,31.352,27.091,30.767,27.091z\"></path>\r\n            </g>\r\n          </g>\r\n          <g>\r\n            <g>\r\n              <path fill=\"#9C584F\" d=\"M18.767,26.591c0.959,0,1.737,1.25,1.737,2.787 c0,1.54-0.778,2.788-1.737,2.788c-0.958,0-1.736-1.248-1.736-2.788C17.03,27.841,17.809,26.591,18.767,26.591z\"></path>\r\n              <path fill=\"#FFFFFF\" d=\"M18.767,32.666c-1.254,0-2.236-1.444-2.236-3.288c0-1.843,0.982-3.287,2.236-3.287 c1.254,0,2.237,1.444,2.237,3.287C21.004,31.222,20.021,32.666,18.767,32.666z M18.767,27.091c-0.585,0-1.236,0.939-1.236,2.287 c0,1.349,0.651,2.288,1.236,2.288c0.585,0,1.237-0.939,1.237-2.288C20.004,28.03,19.352,27.091,18.767,27.091z\"></path>\r\n            </g>\r\n          </g>\r\n          <path fill=\"#9C584F\" d=\"M24.076,32.705c0,0,0.499-1.418,1.109-0.089 c0,0-0.457,0.297-0.285,0.996l1.428,0.546h-3.23l1.28-0.575C24.378,33.583,24.562,32.527,24.076,32.705z\"></path>\r\n        </svg>\r\n      </md-icon>\r\n    </a>\r\n    <span class=\"version\">{{ version }}</span>\r\n  </md-toolbar>\r\n  <div class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-layout> -->"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  position: absolute;\n  top: 64px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  overflow: auto; }\n\n.main-sidenav {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\nmd-sidenav {\n  width: 250px; }\n  md-sidenav .md-sidenav-content {\n    overflow: hidden; }\n\n.navigation-toolbar {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 100;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); }\n\n.version {\n  padding: 8px;\n  font-size: 0.85em;\n  cursor: default; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(navigationService) {
        this.navigationService = navigationService;
        this.sectionTitle = '';
        this.version = '2.0.0-rc.0';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navigationService.onTitleChange(function (title) {
            _this.sectionTitle = title;
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["j" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4__main_routing_module__["a" /* MainRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]
        ]
    })
], MainModule);

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarHorizontalRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_bar_horizontal_component__ = __webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__multi_bar_horizontal_component__["a" /* MultiBarHorizontalComponent */]
    }
];
var MultiBarHorizontalRoutingModule = (function () {
    function MultiBarHorizontalRoutingModule() {
    }
    return MultiBarHorizontalRoutingModule;
}());
MultiBarHorizontalRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], MultiBarHorizontalRoutingModule);

//# sourceMappingURL=multi-bar-horizontal-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center top\" layout-margin>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageId()\" [files]=\"getBasicUsageFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart #multiBarHor type=\"multiBarHorizontal\" x-label=\"Time\" y-label=\"Amount (€)\" flex=\"75\"\r\n                entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\r\n                x-data-type=\"time\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Basic Usage</h2>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__ = __webpack_require__("../../../../ontimize-web-ngx-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiBarHorizontalComponent = (function () {
    function MultiBarHorizontalComponent(injector, navigationService, translateService) {
        this.injector = injector;
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    MultiBarHorizontalComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('MULTI_BAR');
        this.navigationService.setTitle(title);
    };
    MultiBarHorizontalComponent.prototype.ngAfterViewInit = function () {
        if (this.multiBarHor) {
            var chartService = this.multiBarHor.getChartService();
            if (chartService) {
                var chartOps = chartService.getChartOptions();
                // Configuring x axis...
                chartOps['xAxis']['tickFormat'] =
                    function (d) {
                        return d3.time.format('%b')(new Date(d));
                    };
                // Configuring y axis...
                var yScale = d3.scale.linear();
                chartOps['yScale'] = yScale;
                chartOps['yDomain'] = [-1000, 6000];
            }
        }
    };
    MultiBarHorizontalComponent.prototype.getBasicUsageId = function () {
        return 'Multi Bar Chart Horizontal (Basic usage)';
    };
    MultiBarHorizontalComponent.prototype.getBasicUsageFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    return MultiBarHorizontalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('multiBarHor'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */]) === "function" && _a || Object)
], MultiBarHorizontalComponent.prototype, "multiBarHor", void 0);
MultiBarHorizontalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'multi-bar-horizontal',
        template: __webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _d || Object])
], MultiBarHorizontalComponent);

var BASIC_USAGE_HTML_DATA = "\n<o-chart type=\"multiBarHorizontal\" x-label=\"Time\" y-label=\"Amount (\u20AC)\" layout-fill\n  entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\n  x-data-type=\"time\"></o-chart>\n";
var _a, _b, _c, _d;
//# sourceMappingURL=multi-bar-horizontal.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarHorizontalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_bar_horizontal_component__ = __webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multi_bar_horizontal_routing_module__ = __webpack_require__("../../../../../src/app/main/multi-bar-horizontal/multi-bar-horizontal-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MultiBarHorizontalModule = (function () {
    function MultiBarHorizontalModule() {
    }
    return MultiBarHorizontalModule;
}());
MultiBarHorizontalModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__multi_bar_horizontal_routing_module__["a" /* MultiBarHorizontalRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__multi_bar_horizontal_component__["a" /* MultiBarHorizontalComponent */]
        ]
    })
], MultiBarHorizontalModule);

//# sourceMappingURL=multi-bar-horizontal.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar/multi-bar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_bar_component__ = __webpack_require__("../../../../../src/app/main/multi-bar/multi-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__multi_bar_component__["a" /* MultiBarComponent */]
    }
];
var MultiBarRoutingModule = (function () {
    function MultiBarRoutingModule() {
    }
    return MultiBarRoutingModule;
}());
MultiBarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], MultiBarRoutingModule);

//# sourceMappingURL=multi-bar-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar/multi-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center top\" layout-margin>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageId()\" [files]=\"getBasicUsageFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart type=\"multiBar\" x-label=\"Time\" y-label=\"Amount (€)\" flex=\"75\"\r\n                entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\r\n                x-data-type=\"time\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Basic Usage</h2>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service.\r\n            </p>\r\n            <p class=\"body-text\">\r\n                In this example, full chart data are provided by the Ontimize service query, that is, the aggregated data (balance and average balance)\r\n                 are calculated into an Ontimize entity on the server side.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getCustomDataId()\" [files]=\"getCustomDataFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart #multiBar type=\"multiBar\" flex=\"75\" x-label=\"Time\" y-label=\"Amount (€)\"\r\n            [data]=\"data\" x-data-type=\"time\" flex=\"75\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h3>Customize chart data </h3>\r\n            <p class=\"body-text\">\r\n                In some applications it cannot be possible to modify Ontimize entity code, so, calculating aggregate data\r\n                have to be performed into client side (it is not desired mode!).\r\n            </p>\r\n            <p class=\"body-text\">\r\n                In this example, it is performed an Ontimize service query to retrieve the movements of a determinate account. Once\r\n                service response is received, data is processed for calculating the 'Total balance' and the 'Average balance' of the account.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/multi-bar/multi-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/multi-bar/multi-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__ = __webpack_require__("../../../../ontimize-web-ngx-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MultiBarComponent = (function () {
    function MultiBarComponent(injector, elRef, navigationService, translateService) {
        this.injector = injector;
        this.elRef = elRef;
        this.navigationService = navigationService;
        this.translateService = translateService;
        this.yAxis = 'MOVEMENT';
        this.xAxis = 'DATE_';
    }
    MultiBarComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('MULTI_BAR');
        this.navigationService.setTitle(title);
    };
    MultiBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.multiBar) {
            var chartService = this.multiBar.getChartService();
            if (chartService) {
                var chartOps = chartService.getChartOptions();
                // Configuring x axis...
                chartOps['xAxis']['tickFormat'] =
                    function (d) {
                        return d3.time.format('%x')(new Date(d));
                    };
                // var xScale = d3.time.scale();
                // chartOps['xScale'] = xScale;
                // var mindate = new Date(2009, 1, 1),
                //   maxdate = new Date(2009, 10, 1);
                // chartOps['xDomain'] = [mindate, maxdate];
                // Configuring y axis...
                var yScale = d3.scale.linear();
                chartOps['yScale'] = yScale;
                chartOps['yDomain'] = [-1000, 6000];
            }
        }
        var service = this.injector.get(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["i" /* OntimizeService */]);
        var conf = service.getDefaultServiceConfiguration();
        conf['entity'] = 'EMovements';
        service.configureService(conf);
        var filter = {
            'ACCOUNTID': 7310
        };
        service.query(filter, []).subscribe(function (resp) {
            if (resp.code === 0) {
                _this.serviceResponse = JSON.stringify(resp, undefined, 2);
                _this.adaptResult(resp.data);
            }
        });
    };
    MultiBarComponent.prototype.adaptResult = function (data) {
        if (data && data.length) {
            var values = this.processValues(data);
            this.data = [
                {
                    'key': 'Movement',
                    'values': values['movement'],
                    'color': '#3498db'
                },
                {
                    'key': 'Average Balance',
                    'values': values['average'],
                    'color': '#e74c3c'
                },
                {
                    'key': 'Total Balance',
                    'values': values['total'],
                    'color': '#f9c922'
                }
            ];
        }
    };
    MultiBarComponent.prototype.processValues = function (data) {
        var values = {
            'movement': [],
            'average': [],
            'total': []
        };
        var self = this;
        var balance = 0.0;
        var average = 0.0;
        data.forEach(function (item, index) {
            var val = {
                'x': item[self.xAxis],
                'y': item[self.yAxis]
            };
            balance += val.y;
            var val2 = {
                'x': val.x,
                'y': balance
            };
            average += balance;
            var val3 = {
                'x': val.x,
                'y': (average / (index + 1))
            };
            values['movement'].push(val);
            values['average'].push(val3);
            values['total'].push(val2);
        });
        return values;
    };
    MultiBarComponent.prototype.getBasicUsageId = function () {
        return 'Multi Bar Chart (Basic usage)';
    };
    MultiBarComponent.prototype.getBasicUsageFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    MultiBarComponent.prototype.getCustomDataId = function () {
        return 'Multi Bar Chart (Custom series)';
    };
    MultiBarComponent.prototype.getCustomDataFiles = function () {
        return [
            {
                'type': 'html',
                'data': CUSTOM_DATA_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': CUSTOM_DATA_TYPESCRIPT_DATA
            },
            {
                'type': 'service data',
                'data': this.serviceResponse
            },
            {
                'type': 'chart data',
                'data': JSON.stringify(JSON.parse(ADAPTED_DATA), undefined, 2)
            }
        ];
    };
    return MultiBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('multiBar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ontimize_web_ngx_charts__["a" /* OChartComponent */]) === "function" && _a || Object)
], MultiBarComponent.prototype, "multiBar", void 0);
MultiBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'multi-bar',
        template: __webpack_require__("../../../../../src/app/main/multi-bar/multi-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/multi-bar/multi-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _e || Object])
], MultiBarComponent);

var ADAPTED_DATA = "\n[{\"key\":\"Movement\",\"values\":[{\"x\":1235490657851,\"y\":951},{\"x\":1236110357961,\"y\":-80},{\"x\":1236402213822,\"y\":653},{\"x\":1236611284898,\"y\":-548},{\"x\":1242673437363,\"y\":-949},{\"x\":1245260962425,\"y\":552},{\"x\":1246875825338,\"y\":432},{\"x\":1254322811810,\"y\":1756},{\"x\":1254388791367,\"y\":-169},{\"x\":1255948329905,\"y\":-23}]},{\"key\":\"Average Balance\",\"values\":[{\"x\":1235490657851,\"y\":951},{\"x\":1236110357961,\"y\":911},{\"x\":1236402213822,\"y\":1115.3333333333333},{\"x\":1236611284898,\"y\":1080.5},{\"x\":1242673437363,\"y\":869.8},{\"x\":1245260962425,\"y\":821.3333333333334},{\"x\":1246875825338,\"y\":848.4285714285714},{\"x\":1254322811810,\"y\":1088.25},{\"x\":1254388791367,\"y\":1256},{\"x\":1255948329905,\"y\":1387.9}]},{\"key\":\"Total Balance\",\"values\":[{\"x\":1235490657851,\"y\":951},{\"x\":1236110357961,\"y\":871},{\"x\":1236402213822,\"y\":1524},{\"x\":1236611284898,\"y\":976},{\"x\":1242673437363,\"y\":27},{\"x\":1245260962425,\"y\":579},{\"x\":1246875825338,\"y\":1011},{\"x\":1254322811810,\"y\":2767},{\"x\":1254388791367,\"y\":2598},{\"x\":1255948329905,\"y\":2575}]}]\n";
var BASIC_USAGE_HTML_DATA = "\n<o-chart type=\"multiBar\" x-label=\"Time\" y-label=\"Amount (\u20AC)\" layout-fill\n  entity=\"EMovementsGrouped\" x-axis=\"DATE_\" y-axis=\"MOVEMENT;AVERAGE;BALANCE\"\n  x-data-type=\"time\"></o-chart>\n";
var CUSTOM_DATA_HTML_DATA = "\n<o-chart #multiBar type=\"multiBar\" x-label=\"Time\" y-label=\"Amount (\u20AC)\"\n    [data]=\"data\" x-data-type=\"time\" layout-fill></o-chart>\n";
var CUSTOM_DATA_TYPESCRIPT_DATA = "\nimport { Component, OnInit, Injector, ViewChild } from '@angular/core';\n\nimport { OntimizeService } from 'ontimize-web-ngx';\nimport { OChartComponent, ChartService } from 'ontimize-web-ngx-charts';\n\n@Component({\n  selector: 'multi-bar',\n  templateUrl: './multi-bar.component.html',\n  styleUrls: ['./multi-bar.component.scss']\n})\nexport class MultiBarComponent implements OnInit {\n\n  @ViewChild('multiBar')\n  protected multiBar: OChartComponent;\n\n  protected yAxis: string = 'MOVEMENT';\n  protected xAxis: string = 'DATE_';\n\n  protected data: Array<Object>;\n\n  constructor(protected injector: Injector,\n    protected navigationService: NavigationBarService,\n    protected translateService: OTranslateService) {\n  }\n\n  ngOnInit() {\n    // nothing to do\n  }\n\n  ngAfterViewInit() {\n\n    if (this.multiBar) {\n      let chartService: ChartService = this.multiBar.getChartService();\n      if (chartService) {\n        let chartOps = chartService.getChartOptions();\n\n        // Configuring x axis...\n        chartOps['xAxis']['tickFormat'] =\n          function (d) {\n            return d3.time.format('%x')(new Date(d));\n          };\n\n        // Configuring y axis...\n        var yScale = d3.scale.linear();\n        chartOps['yScale'] = yScale;\n        chartOps['yDomain'] = [-1000, 6000];\n      }\n    }\n\n    // Ontimize service query...\n    let service: OntimizeService = this.injector.get(OntimizeService);\n    let conf = service.getDefaultServiceConfiguration();\n    conf['entity'] = 'EMovements';\n    service.configureService(conf);\n\n    let filter = {\n      'ACCOUNTID': 7310\n    }\n    service.query(filter, []).subscribe((resp) => {\n      if (resp.code === 0) {\n        this.adaptResult(resp.data);\n      }\n    });\n  }\n\n  adaptResult(data: Array<any>) {\n    if (data && data.length) {\n      let values = this.processValues(data);\n      this.data = [\n        {\n          'key': 'Movement',\n          'values': values['movement'],\n          'color': '#3498db'\n        },\n        {\n          'key': 'Average Balance',\n          'values': values['average'],\n          'color': '#e74c3c'\n        },\n        {\n          'key': 'Total Balance',\n          'values': values['total'],\n          'color': '#f9c922'\n        }\n      ];\n    }\n  }\n\n  processValues(data: Array<Object>): Object {\n    let values = {\n      'movement': [],\n      'average': [],\n      'total': []\n    };\n    var self = this;\n    let balance = 0.0;\n    let average = 0.0;\n    data.forEach((item: any, index: number) => {\n      let val = {\n        'x': item[self.xAxis],\n        'y': item[self.yAxis]\n      };\n\n      balance += val.y;\n      let val2 = {\n        'x': val.x,\n        'y': balance\n      };\n\n      average += balance;\n      let val3 = {\n        'x': val.x,\n        'y': (average / (index + 1))\n      };\n\n      values['movement'].push(val);\n      values['average'].push(val3);\n      values['total'].push(val2);\n    });\n    return values;\n  }\n}\n";
var _a, _b, _c, _d, _e;
//# sourceMappingURL=multi-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/multi-bar/multi-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_bar_component__ = __webpack_require__("../../../../../src/app/main/multi-bar/multi-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multi_bar_routing_module__ = __webpack_require__("../../../../../src/app/main/multi-bar/multi-bar-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MultiBarModule = (function () {
    function MultiBarModule() {
    }
    return MultiBarModule;
}());
MultiBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__multi_bar_routing_module__["a" /* MultiBarRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__multi_bar_component__["a" /* MultiBarComponent */]
        ]
    })
], MultiBarModule);

//# sourceMappingURL=multi-bar.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/pie/pie-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pie_component__ = __webpack_require__("../../../../../src/app/main/pie/pie.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pie_component__["a" /* PieComponent */]
    }
];
var PieRoutingModule = (function () {
    function PieRoutingModule() {
    }
    return PieRoutingModule;
}());
PieRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
    })
], PieRoutingModule);

//# sourceMappingURL=pie-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/pie/pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-align=\"center top\" layout-margin>\r\n\r\n    <example-comp [comp-name]=\"getBasicUsageId()\" [files]=\"getBasicUsageFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart type=\"pie\" flex=\"75\" entity=\"EMovementTypesTotal\"\r\n                x-axis=\"MOVEMENTTYPES\" y-axis=\"MOVEMENT\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h2>Basic Usage</h2>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an Ontimize service.\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n    <example-comp [comp-name]=\"getCustomDataId()\" [files]=\"getCustomDataFiles()\" layout-fill>\r\n        <div layout=\"row\" layout-padding layout-align=\"center center\">\r\n            <o-chart #pieChart type=\"pie\" [data]=\"data\" flex=\"75\"></o-chart>\r\n        </div>\r\n        <div class=\"body-text-container\" layout-padding>\r\n            <h3>Custom service </h3>\r\n            <p class=\"body-text\">\r\n                Chart data are provided through an independent own service. In that case the service response\r\n                contains the data according to the architecture expected by the chart (see 'service data' tab)\r\n            </p>\r\n        </div>\r\n    </example-comp>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/pie/pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\n  background-color: darkred; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/pie/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__ = __webpack_require__("../../../../ontimize-web-ngx-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PieComponent = (function () {
    function PieComponent(http, navigationService, translateService) {
        this.http = http;
        this.navigationService = navigationService;
        this.translateService = translateService;
    }
    PieComponent.prototype.ngOnInit = function () {
        var title = '';
        title += this.translateService.get('PIE');
        this.navigationService.setTitle(title);
    };
    PieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loadJSONData().subscribe(function (data) {
            _this.data = data;
        });
    };
    PieComponent.prototype.loadJSONData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        var url = './assets/dummy-data/dummy-pie-data.json';
        var self = this;
        var innerObserver;
        var dataObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            return innerObserver = observer;
        }).share();
        this.http
            .get(url, { headers: headers })
            .subscribe(function (res) {
            var data = res.json();
            self.serviceResponse = JSON.stringify(data, undefined, 2);
            innerObserver.next(data.values);
        }, function (error) { return innerObserver.error(error); });
        return dataObservable;
    };
    PieComponent.prototype.getBasicUsageId = function () {
        return 'Pie Chart (Basic usage)';
    };
    PieComponent.prototype.getBasicUsageFiles = function () {
        return [
            {
                'type': 'html',
                'data': BASIC_USAGE_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': ''
            }
        ];
    };
    PieComponent.prototype.getCustomDataId = function () {
        return 'Pie Chart (Custom service)';
    };
    PieComponent.prototype.getCustomDataFiles = function () {
        return [
            {
                'type': 'html',
                'data': CUSTOM_DATA_HTML_DATA
            },
            {
                'type': 'scss',
                'data': ''
            },
            {
                'type': 'typescript',
                'data': CUSTOM_DATA_TYPESCRIPT_DATA
            },
            {
                'type': 'service data',
                'data': this.serviceResponse
            }
        ];
    };
    return PieComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pieChart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__["a" /* OChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__["a" /* OChartComponent */]) === "function" && _a || Object)
], PieComponent.prototype, "pieChart", void 0);
PieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'pie',
        template: __webpack_require__("../../../../../src/app/main/pie/pie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/pie/pie.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_navigation_bar_service__["a" /* NavigationBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_navigation_bar_service__["a" /* NavigationBarService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["h" /* OTranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["h" /* OTranslateService */]) === "function" && _d || Object])
], PieComponent);

var BASIC_USAGE_HTML_DATA = "\n<o-chart type=\"pie\" layout-fill entity=\"EMovementTypesTotal\"\n  x-axis=\"MOVEMENTTYPES\" y-axis=\"MOVEMENT\"></o-chart>\n";
var CUSTOM_DATA_HTML_DATA = "\n<o-chart #pieChart type=\"pie\" [data]=\"data\" layout-fill></o-chart>\n";
var CUSTOM_DATA_TYPESCRIPT_DATA = "\nimport { Component, OnInit, ViewChild } from '@angular/core';\nimport { Http, Headers } from '@angular/http';\nimport { Observable } from 'rxjs/Observable';\nimport 'rxjs/add/operator/map';\nimport { Observer } from 'rxjs/Observer';\n\nimport { OChartComponent } from 'ontimize-web-ngx-charts';\n\n@Component({\n  selector: 'pie',\n  templateUrl: './pie.component.html',\n  styleUrls: ['./pie.component.scss']\n})\nexport class PieComponent implements OnInit {\n\n  @ViewChild('pieChart')\n  protected pieChart: OChartComponent;\n\n  protected data: Array<Object>;\n\n  constructor(protected http: Http) {\n  }\n\n  ngOnInit() {\n    // Nothing to do\n  }\n\n  ngAfterViewInit() {\n    this.loadJSONData().subscribe(data => {\n      this.data = data;\n    })\n  }\n\n  protected loadJSONData() {\n    let headers: Headers = new Headers();\n    headers.append('Access-Control-Allow-Origin', '*');\n\n    let url = './assets/dummy-data/dummy-pie-data.json';\n\n    let innerObserver: Observer<any[]>;\n    let dataObservable = new Observable<any[]>(observer =>\n      innerObserver = observer\n    )\n\n    this.http.get(url, { headers: headers })\n      .map(response => response.json()).subscribe(data => {\n        innerObserver.next(data.values);\n      }, error => console.log('Could not load data.'));\n    return dataObservable;\n  }\n\n}\n";
var _a, _b, _c, _d;
//# sourceMappingURL=pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/pie/pie.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pie_component__ = __webpack_require__("../../../../../src/app/main/pie/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pie_routing_module__ = __webpack_require__("../../../../../src/app/main/pie/pie-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PieModule = (function () {
    function PieModule() {
    }
    return PieModule;
}());
PieModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__pie_routing_module__["a" /* PieRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pie_component__["a" /* PieComponent */]
        ]
    })
], PieModule);

//# sourceMappingURL=pie.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app.menu.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_CONFIG; });
var MENU_CONFIG = [
    { id: 'introduction', name: 'INTRODUCTION', icon: 'home', route: '/main/home' },
    { id: 'line', name: 'LINE', icon: 'show_chart', route: '/main/line' },
    { id: 'pie', name: 'PIE', icon: 'pie_chart', route: '/main/pie' },
    { id: 'discrete_bar', name: 'DISCRETE_BAR', icon: 'insert_chart', route: '/main/discrete-bar' },
    { id: 'multi_bar', name: 'MULTI_BAR', icon: 'insert_chart', route: '/main/multi-bar' },
    { id: 'multi_bar_horizontal', name: 'MULTI_BAR_HORIZONTAL', icon: 'insert_chart', route: '/main/multi-bar-horizontal' }
];
//# sourceMappingURL=app.menu.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app.services.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_CONFIG; });
var SERVICE_CONFIG = {
    'customers': {
        'path': '/customers'
    }
};
//# sourceMappingURL=app.services.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center top\" fxFill>\r\n\r\n  <div fxLayout=\"column\" layout-padding fxFill>\r\n    <section fxLayout=\"column\" class=\"playground-container mat-elevation-z4\" [class.show-source]=\"showSource\">\r\n      <md-toolbar class=\"playground-toolbar\" color=\"primary\">\r\n        <span> {{ compName }}</span>\r\n        <span fxFlex></span>\r\n\r\n        <button *ngIf=\"!collapsed && orderedFiles && orderedFiles.length\" md-icon-button aria-label=\"View Source\" (click)=\"toggleShowSource()\">\r\n          <md-icon class=\"mat-24\">code</md-icon>\r\n        </button>\r\n\r\n        <button *ngIf=\"collapsible\" md-icon-button aria-label=\"Collapse\" (click)=\"collapsed = !collapsed\">\r\n          <md-icon *ngIf=\"!collapsed\" class=\"mat-24\">keyboard_arrow_up</md-icon>\r\n          <md-icon *ngIf=\"collapsed\" class=\"mat-24\">keyboard_arrow_down</md-icon>\r\n        </button>\r\n\r\n      </md-toolbar>\r\n\r\n      <!-- Source views -->\r\n      <md-tab-group *ngIf=\"showSource\">\r\n        <!--<md-tab *ngFor=\"let file of orderedFiles\" label=\"{{ file?.type | oTranslate }}\">\r\n              <div class=\"playground-source-container\">\r\n                <highlight-comp [template-content]=\"file.data\" [template-type]=\"file.type\" ></highlight-comp>\r\n              </div>\r\n          </md-tab>-->\r\n        <md-tab label=\"{{ 'html' | uppercase }}\" *ngIf=\"hasTplData('html')\">\r\n          <highlight-comp [template-content]=\"html ? html : getTplData('html')\" [template-type]=\"html\"></highlight-comp>\r\n        </md-tab>\r\n        <md-tab label=\"{{ 'scss' | uppercase }}\" *ngIf=\"hasTplData('scss')\">\r\n          <highlight-comp [template-content]=\"getTplData('scss')\" [template-type]=\"scss\"></highlight-comp>\r\n        </md-tab>\r\n        <md-tab label=\"{{ 'typescript' | uppercase }}\" *ngIf=\"hasTplData('typescript')\">\r\n          <highlight-comp [template-content]=\"getTplData('typescript')\" [template-type]=\"typescript\"></highlight-comp>\r\n        </md-tab>\r\n      </md-tab-group>\r\n\r\n      <!-- Live Demos -->\r\n      <div fxFlex=\"grow\" [class.collapsed]=\"collapsed\" [class.collapsible]=\"collapsible\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-comp .playground-source-container {\n  display: block;\n  height: 300px;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.example-comp .collapsible {\n  overflow: hidden;\n  transition: max-height 1.8s;\n  max-height: 2500px; }\n  .example-comp .collapsible.collapsed {\n    max-height: 0px; }\n\n.example-comp .o-form form.inner-form {\n  position: relative;\n  padding-top: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/example/example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleComponent = (function () {
    function ExampleComponent(elRef) {
        this.elRef = elRef;
        this.showSource = false;
        this.compName = '';
        this.collapsible = false;
        this.collapsed = false;
        this.html = undefined;
        this.onShowSource = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tplData = {};
    }
    ExampleComponent.prototype.toggleShowSource = function () {
        this.showSource = !this.showSource;
        if (this.showSource) {
            this.onShowSource.emit();
        }
    };
    ExampleComponent.prototype.ngOnInit = function () {
        this.tplData['html'] = this.initializeData('html');
        this.tplData['scss'] = this.initializeData('scss');
        this.tplData['typescript'] = this.initializeData('typescript');
    };
    ExampleComponent.prototype.initializeData = function (type) {
        var tpl = '';
        if (this.orderedFiles && this.orderedFiles.length > -1) {
            this.orderedFiles.forEach(function (item) {
                if (item['type'] === type) {
                    tpl = item['data'];
                }
            });
        }
        return tpl;
    };
    ExampleComponent.prototype.hasTplData = function (type) {
        var tpl = this.tplData[type];
        if (type === 'html' && this.html !== undefined) {
            return true;
        }
        return tpl ? tpl.length > 0 : false;
    };
    ExampleComponent.prototype.getTplData = function (type) {
        var tpl = this.tplData[type];
        return tpl ? tpl : '';
    };
    return ExampleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["c" /* InputConverter */])(),
    __metadata("design:type", Boolean)
], ExampleComponent.prototype, "collapsible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ontimize_web_ngx__["c" /* InputConverter */])(),
    __metadata("design:type", Boolean)
], ExampleComponent.prototype, "collapsed", void 0);
ExampleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'example-comp',
        styles: [__webpack_require__("../../../../../src/app/shared/example/example.component.scss")],
        template: __webpack_require__("../../../../../src/app/shared/example/example.component.html"),
        inputs: [
            'compName: comp-name',
            'orderedFiles: files',
            'collapsible',
            'collapsed'
        ],
        outputs: [
            'onShowSource : showSource'
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            '[class.example-comp]': 'true'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ExampleComponent);

var _a;
//# sourceMappingURL=example.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.html":
/***/ (function(module, exports) {

module.exports = "<section highlight-js-content=\"code.highlight\" fxFill>\r\n  <pre class=\"no-margin snippet\" fxFill>\r\n    <button id=\"copy-btn\" class=\"copy-btn\" data-clipboard-target=\"#code\">\r\n      <img class=\"clippy\" width=\"13\" src=\"./assets/images/clippy.svg\" alt=\"Copy to clipboard\">\r\n    </button>\r\n    <code id=\"code\" class=\"highlight\">\r\n      {{ templateContent }}\r\n    </code>\r\n  </pre>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "pre.no-margin {\n  margin: 0 !important;\n  white-space: pre; }\n  pre.no-margin code {\n    min-height: 300px;\n    margin: 0; }\n\n.snippet {\n  position: relative; }\n  .snippet .copy-btn {\n    opacity: 1;\n    padding: 2px 6px;\n    position: absolute;\n    right: 4px;\n    top: 32px; }\n    .snippet .copy-btn .clippy {\n      margin-top: -3px;\n      position: relative;\n      top: 3px; }\n\n.copy-btn {\n  position: relative;\n  display: inline-block;\n  padding: 6px 12px;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 20px;\n  color: #333;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  background-color: #eee;\n  background-image: linear-gradient(#fcfcfc, #eee);\n  border: 1px solid #d5d5d5;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-appearance: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/highlight/highlight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightComponent = (function () {
    function HighlightComponent(elRef) {
        this.elRef = elRef;
    }
    HighlightComponent.prototype.ngOnInit = function () {
        if (window['Clipboard'] && !this.clipboard) {
            var copyBtn = this.elRef.nativeElement.querySelectorAll('button#copy-btn');
            if (copyBtn.length) {
                var self_1 = this;
                var element = copyBtn[0];
                this.clipboard = new window['Clipboard'](element);
                this.clipboard.on('success', function (e) {
                    self_1.showTooltip(e.trigger, 'Copied!');
                });
                // this.clipboard.on('error', function(e) {
                //     console.log(e);
                // });
            }
        }
    };
    HighlightComponent.prototype.showTooltip = function (elem, msg) {
        // TODO show tooltip (solve problem of repainting that does not show tooltip)
        alert('Copied!');
    };
    HighlightComponent.prototype.ngOnDestroy = function () {
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    };
    return HighlightComponent;
}());
HighlightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'highlight-comp',
        styles: [__webpack_require__("../../../../../src/app/shared/highlight/highlight.component.scss")],
        template: __webpack_require__("../../../../../src/app/shared/highlight/highlight.component.html"),
        inputs: [
            'templateContent: template-content',
            'templateType: template-type'
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HighlightComponent);

var _a;
//# sourceMappingURL=highlight.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/custom-ontimize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOntimizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var CustomOntimizeService = (function (_super) {
    __extends(CustomOntimizeService, _super);
    function CustomOntimizeService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    CustomOntimizeService.prototype.getDefaultServiceConfiguration = function (serviceName) {
        var loginService = this.injector.get(__WEBPACK_IMPORTED_MODULE_4_ontimize_web_ngx__["d" /* LoginService */]);
        var configuration = this.injector.get(__WEBPACK_IMPORTED_MODULE_4_ontimize_web_ngx__["b" /* AppConfig */]).getServiceConfiguration();
        var servConfig = {};
        if (serviceName && configuration.hasOwnProperty(serviceName)) {
            servConfig = configuration[serviceName];
        }
        servConfig['session'] = loginService.getSessionInfo();
        return servConfig;
    };
    CustomOntimizeService.prototype.configureService = function (config) {
        this._urlBase = './assets/dummy-data';
        this._sessionid = config.session ? config.session.id : -1;
        this._user = config.session ? config.session.user : '';
        if (config.entity !== undefined) {
            this.entity = config.entity;
        }
    };
    CustomOntimizeService.prototype.startsession = function (user, password) {
        return undefined;
    };
    CustomOntimizeService.prototype.endsession = function (user, sessionId) {
        return undefined;
    };
    CustomOntimizeService.prototype.hassession = function (user, sessionId) {
        return undefined;
    };
    CustomOntimizeService.prototype.query = function (kv, av, entity, sqltypes) {
        entity = (this.isNullOrUndef(entity)) ? this.entity : entity;
        var url = this._urlBase;
        if (entity === 'EMovements') {
            url += '/emovements.json';
        }
        else if (entity === 'EMovementTypes') {
            url += '/emovementtypes.json';
        }
        else if (entity === 'EMovementTypesTotal') {
            url += '/emovementtypestotal.json';
        }
        else if (entity === 'EMovementsGrouped') {
            url += '/emovementsgrouped.json';
        }
        else if (entity === 'EAccounts') {
            url += '/eaccounts.json';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        var self = this;
        var innerObserver;
        var dataObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            innerObserver = observer;
        }).share();
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* RequestOptions */]({ headers: headers });
        this.http
            .get(url, options)
            .subscribe(function (response) {
            var resp = response.json();
            if (resp && resp.code === 3) {
                self.redirectLogin(true);
            }
            else if (resp.code === 1) {
                innerObserver.error(resp.message);
            }
            else if (resp.code === 0) {
                innerObserver.next(resp);
            }
            else {
                // Unknow state -> error
                innerObserver.error('Service unavailable');
            }
        }, function (error) { return innerObserver.error(error); }, function () { return innerObserver.complete(); });
        return dataObservable;
    };
    CustomOntimizeService.prototype.advancedQuery = function (kv, av, entity, sqltypes, offset, pagesize, orderby) {
        return undefined;
    };
    CustomOntimizeService.prototype.insert = function (av, entity, sqltypes) {
        if (av === void 0) { av = {}; }
        return undefined;
    };
    CustomOntimizeService.prototype.update = function (kv, av, entity, sqltypes) {
        if (kv === void 0) { kv = {}; }
        if (av === void 0) { av = {}; }
        return undefined;
    };
    CustomOntimizeService.prototype.delete = function (kv, entity, sqltypes) {
        if (kv === void 0) { kv = {}; }
        return undefined;
    };
    return CustomOntimizeService;
}(__WEBPACK_IMPORTED_MODULE_4_ontimize_web_ngx__["i" /* OntimizeService */]));

//# sourceMappingURL=custom-ontimize.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/navigation-bar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ObservableWrapper } from 'ontimize-web-ngx';
var NavigationBarService = (function () {
    function NavigationBarService() {
        this.currentTitle = null;
        this.visible = true;
        this._titleEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._visibleEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavigationBarService.prototype.setTitle = function (title) {
        this.currentTitle = title;
        this._emitTitleChanged(this.currentTitle);
    };
    NavigationBarService.prototype.setVisible = function (visible) {
        this.visible = visible;
        this._emitVisibleChanged(this.visible);
    };
    /**
   * Subscribe to title updates
   */
    NavigationBarService.prototype.onTitleChange = function (onNext) {
        // return ObservableWrapper.subscribe(this._titleEmitter, onNext);
    };
    NavigationBarService.prototype.onVisibleChange = function (onNext) {
        // return ObservableWrapper.subscribe(this._visibleEmitter, onNext);
    };
    NavigationBarService.prototype._emitTitleChanged = function (title) {
        // ObservableWrapper.callEmit(this._titleEmitter, title);
    };
    NavigationBarService.prototype._emitVisibleChanged = function (visible) {
        // ObservableWrapper.callEmit(this._visibleEmitter, visible);
    };
    return NavigationBarService;
}());
NavigationBarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NavigationBarService);

//# sourceMappingURL=navigation-bar.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigation_bar_service__ = __webpack_require__("../../../../../src/app/shared/services/navigation-bar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__example_example_component__ = __webpack_require__("../../../../../src/app/shared/example/example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__ = __webpack_require__("../../../../../src/app/shared/highlight/highlight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__ = __webpack_require__("../../../../angular2-highlight-js/lib/highlight-js.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__ = __webpack_require__("../../../../ontimize-web-ngx-charts/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["j" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__["HighlightJsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__["b" /* OChartModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__["a" /* HighlightComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_5_ontimize_web_ngx__["j" /* OntimizeWebModule */],
            __WEBPACK_IMPORTED_MODULE_2__example_example_component__["a" /* ExampleComponent */],
            __WEBPACK_IMPORTED_MODULE_3__highlight_highlight_component__["a" /* HighlightComponent */],
            __WEBPACK_IMPORTED_MODULE_6_ontimize_web_ngx_charts__["b" /* OChartModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_angular2_highlight_js__["HighlightJsService"],
            __WEBPACK_IMPORTED_MODULE_1__services_navigation_bar_service__["a" /* NavigationBarService */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__ = __webpack_require__("../../../../ontimize-web-ngx/index.js");




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var promise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
promise.then(__WEBPACK_IMPORTED_MODULE_3_ontimize_web_ngx__["m" /* ontimizePostBootstrap */]).catch(function (err) {
    console.error(err.message);
});
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
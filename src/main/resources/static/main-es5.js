function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n\n</div>\n\n<div class=\"content\" role=\"main\">\n\n  <div class=\"container\">\n    <app-ecommerce>asd</app-ecommerce>\n  </div>\n\n\n</div>\n\n\n\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n\n\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/ecommerce.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/ecommerce.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceEcommerceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Baeldung Ecommerce</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleCollapsed()\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div id=\"navbarResponsive\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" (click)=\"reset()\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"row\">\n  <div class=\"col-md-9\">\n    <app-products #productsC [hidden]=\"orderFinished\"></app-products>\n  </div>\n  <div class=\"col-md-3\">\n    <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC\n                       [hidden]=\"orderFinished\"></app-shopping-cart>\n  </div>\n  <div class=\"col-md-6 offset-3\">\n    <app-orders #ordersC [hidden]=\"!orderFinished\"></app-orders>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/orders/orders.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/orders/orders.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">ORDER</h2>\n<ul>\n  <li *ngFor=\"let order of orders.productOrders\">\n    {{ order.product.name }} - ${{ order.product.price }} x {{ order.quantity}} pcs.\n  </li>\n</ul>\n<h3 class=\"text-right\">Total amount: ${{ total }}</h3>\n\n<button class=\"btn btn-primary btn-block\" (click)=\"pay()\" *ngIf=\"!paid\">Pay</button>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\n  <strong>Congratulation!</strong> You successfully made the order.\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/products.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/products.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row card-deck\">\n  <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\n    <div class=\"card text-center\">\n      <div class=\"card-header\">\n        <h4>{{order.product.name}}</h4>\n      </div>\n      <div class=\"card-body\">\n        <a href=\"#\"><img class=\"card-img-top\" src={{order.product.pictureUrl}} alt=\"\"></a>\n        <h5 class=\"card-title\">${{order.product.price}}</h5>\n        <div class=\"row\">\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n            <input type=\"number\" min=\"0\" class=\"form-control\" [(ngModel)]=order.quantity>\n          </div>\n          <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n            <button class=\"btn btn-primary\" (click)=\"addToCart(order)\"\n                    [disabled]=\"order.quantity <= 0\">Add To Cart\n            </button>\n          </div>\n          <div class=\"col-12\" *ngIf=\"isProductSelected(order.product)\">\n            <button class=\"btn btn-primary btn-block\"\n                    (click)=\"removeFromCart(order)\">Remove From Cart\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceShoppingCartShoppingCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n  <div class=\"card-header text-center\">Shopping Cart</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Total: $ {{ total | number: 0}}</h5>\n    <hr>\n    <h6 class=\"card-title\">Items bought:</h6>\n\n    <ul>\n      <li *ngFor=\"let order of orders.productOrders\">\n        {{ order.product.name }} - {{ order.quantity}} pcs.\n      </li>\n    </ul>\n\n    <button class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\n            [disabled]=\"orders.productOrders.length == 0\">Checkout\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  padding-top: 65px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA2NXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'frontend';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ecommerce/ecommerce.component */
    "./src/app/ecommerce/ecommerce.component.ts");
    /* harmony import */


    var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ecommerce/products/products.component */
    "./src/app/ecommerce/products/products.component.ts");
    /* harmony import */


    var _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ecommerce/orders/orders.component */
    "./src/app/ecommerce/orders/orders.component.ts");
    /* harmony import */


    var _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ecommerce/shopping-cart/shopping-cart.component */
    "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./ecommerce/services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__["EcommerceComponent"], _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
      providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__["EcommerceService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/ecommerce/ecommerce.component.css":
  /*!***************************************************!*\
    !*** ./src/app/ecommerce/ecommerce.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceEcommerceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/ecommerce.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ecommerce/ecommerce.component.ts ***!
    \**************************************************/

  /*! exports provided: EcommerceComponent */

  /***/
  function srcAppEcommerceEcommerceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function () {
      return EcommerceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EcommerceComponent =
    /*#__PURE__*/
    function () {
      function EcommerceComponent() {
        _classCallCheck(this, EcommerceComponent);

        this.collapsed = true;
        this.orderFinished = false;
      }

      _createClass(EcommerceComponent, [{
        key: "toggleCollapsed",
        value: function toggleCollapsed() {
          this.collapsed = !this.collapsed;
        }
      }, {
        key: "finishOrder",
        value: function finishOrder(orderFinished) {
          this.orderFinished = orderFinished;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.orderFinished = false;
          this.productsC.reset();
          this.shoppingCartC.reset();
          this.ordersC.paid = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EcommerceComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsC', {
      static: false
    })], EcommerceComponent.prototype, "productsC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC', {
      static: false
    })], EcommerceComponent.prototype, "shoppingCartC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersC', {
      static: false
    })], EcommerceComponent.prototype, "ordersC", void 0);
    EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ecommerce',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ecommerce.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/ecommerce.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ecommerce.component.css */
      "./src/app/ecommerce/ecommerce.component.css")).default]
    })], EcommerceComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/models/product-order.model.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ecommerce/models/product-order.model.ts ***!
    \*********************************************************/

  /*! exports provided: ProductOrder */

  /***/
  function srcAppEcommerceModelsProductOrderModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductOrder", function () {
      return ProductOrder;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductOrder = function ProductOrder(product, quantity) {
      _classCallCheck(this, ProductOrder);

      this.product = product;
      this.quantity = quantity;
    };
    /***/

  },

  /***/
  "./src/app/ecommerce/models/product-orders.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ecommerce/models/product-orders.model.ts ***!
    \**********************************************************/

  /*! exports provided: ProductOrders */

  /***/
  function srcAppEcommerceModelsProductOrdersModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductOrders", function () {
      return ProductOrders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProductOrders = function ProductOrders() {
      _classCallCheck(this, ProductOrders);

      this.productOrders = [];
    };
    /***/

  },

  /***/
  "./src/app/ecommerce/orders/orders.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/ecommerce/orders/orders.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ecommerce/orders/orders.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ecommerce/orders/orders.component.ts ***!
    \******************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppEcommerceOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(ecommerceService) {
        _classCallCheck(this, OrdersComponent);

        this.ecommerceService = ecommerceService;
        this.orders = this.ecommerceService.ProductOrders;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.paid = false;
          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.orders = _this.ecommerceService.ProductOrders;
          });
          this.loadTotal();
        }
      }, {
        key: "pay",
        value: function pay() {
          this.paid = true;
          this.ecommerceService.saveOrder(this.orders).subscribe();
        }
      }, {
        key: "loadTotal",
        value: function loadTotal() {
          var _this2 = this;

          this.sub = this.ecommerceService.TotalChanged.subscribe(function () {
            _this2.total = _this2.ecommerceService.Total;
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/ecommerce/orders/orders.component.css")).default]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/products/products.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/ecommerce/products/products.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".padding-0 {\r\n  padding-right: 0;\r\n  padding-left: 1;\r\n}\r\n\r\n.card-img-top {\r\n  width: 100%;\r\n  height: 10vw;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWlCO0tBQWpCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctMCB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTB2dztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ecommerce/products/products.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ecommerce/products/products.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppEcommerceProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/product-order.model */
    "./src/app/ecommerce/models/product-order.model.ts");
    /* harmony import */


    var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(ecommerceService) {
        _classCallCheck(this, ProductsComponent);

        this.ecommerceService = ecommerceService;
        this.productOrders = [];
        this.products = [];
        this.productSelected = false;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productOrders = [];
          this.loadProducts();
          this.loadOrders();
        }
      }, {
        key: "getProductIndex",
        value: function getProductIndex(product) {
          return this.ecommerceService.ProductOrders.productOrders.findIndex(function (value) {
            return value.product === product;
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(order) {
          this.ecommerceService.SelectedProductOrder = order;
          this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
          this.productSelected = true;
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart(productOrder) {
          var index = this.getProductIndex(productOrder.product);

          if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
          }

          this.ecommerceService.ProductOrders = this.shoppingCartOrders;
          this.shoppingCartOrders = this.ecommerceService.ProductOrders;
          this.productSelected = false;
        }
      }, {
        key: "loadProducts",
        value: function loadProducts() {
          var _this3 = this;

          this.ecommerceService.getAllProducts().subscribe(function (products) {
            _this3.products = products;

            _this3.products.forEach(function (product) {
              _this3.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0));
            });
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "loadOrders",
        value: function loadOrders() {
          var _this4 = this;

          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this4.shoppingCartOrders = _this4.ecommerceService.ProductOrders;
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.productOrders = [];
          this.loadProducts();
          this.ecommerceService.ProductOrders.productOrders = [];
          this.loadOrders();
          this.productSelected = false;
        }
      }, {
        key: "isProductSelected",
        value: function isProductSelected(product) {
          return this.getProductIndex(product) > -1;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/ecommerce/products/products.component.css")).default]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/services/EcommerceService.ts":
  /*!********************************************************!*\
    !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
    \********************************************************/

  /*! exports provided: EcommerceService */

  /***/
  function srcAppEcommerceServicesEcommerceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcommerceService", function () {
      return EcommerceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/product-orders.model */
    "./src/app/ecommerce/models/product-orders.model.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EcommerceService =
    /*#__PURE__*/
    function () {
      function EcommerceService(http) {
        _classCallCheck(this, EcommerceService);

        this.http = http;
        this.productsUrl = "/api/products";
        this.ordersUrl = "/api/orders";
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.productOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ordersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ProductOrderChanged = this.productOrderSubject.asObservable();
        this.OrdersChanged = this.ordersSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
      }

      _createClass(EcommerceService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get(this.productsUrl);
        }
      }, {
        key: "saveOrder",
        value: function saveOrder(order) {
          return this.http.post(this.ordersUrl, order);
        }
      }, {
        key: "SelectedProductOrder",
        set: function set(value) {
          this.productOrder = value;
          this.productOrderSubject.next();
        },
        get: function get() {
          return this.productOrder;
        }
      }, {
        key: "ProductOrders",
        set: function set(value) {
          this.orders = value;
          this.ordersSubject.next();
        },
        get: function get() {
          return this.orders;
        }
      }, {
        key: "Total",
        get: function get() {
          return this.total;
        },
        set: function set(value) {
          this.total = value;
          this.totalSubject.next();
        }
      }]);

      return EcommerceService;
    }();

    EcommerceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    EcommerceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EcommerceService);
    /***/
  },

  /***/
  "./src/app/ecommerce/shopping-cart/shopping-cart.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceShoppingCartShoppingCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.ts ***!
    \********************************************************************/

  /*! exports provided: ShoppingCartComponent */

  /***/
  function srcAppEcommerceShoppingCartShoppingCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function () {
      return ShoppingCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/product-orders.model */
    "./src/app/ecommerce/models/product-orders.model.ts");
    /* harmony import */


    var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");
    /* harmony import */


    var _models_product_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/product-order.model */
    "./src/app/ecommerce/models/product-order.model.ts");

    var ShoppingCartComponent =
    /*#__PURE__*/
    function () {
      function ShoppingCartComponent(ecommerceService) {
        _classCallCheck(this, ShoppingCartComponent);

        this.ecommerceService = ecommerceService;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ShoppingCartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
          this.loadCart();
          this.loadTotal();
        }
      }, {
        key: "loadTotal",
        value: function loadTotal() {
          var _this5 = this;

          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this5.total = _this5.calculateTotal(_this5.orders.productOrders);
          });
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var _this6 = this;

          this.sub = this.ecommerceService.ProductOrderChanged.subscribe(function () {
            var productOrder = _this6.ecommerceService.SelectedProductOrder;

            if (productOrder) {
              _this6.orders.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_4__["ProductOrder"](productOrder.product, productOrder.quantity));
            }

            _this6.ecommerceService.ProductOrders = _this6.orders;
            _this6.orders = _this6.ecommerceService.ProductOrders;
            _this6.total = _this6.calculateTotal(_this6.orders.productOrders);
          });
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal(productOrder) {
          var sum = 0;
          productOrder.forEach(function (value) {
            sum += value.product.price * value.quantity;
          });
          return sum;
        }
      }, {
        key: "finishOrder",
        value: function finishOrder() {
          this.orderFinished = true;
          this.ecommerceService.Total = this.total;
          this.onOrderFinished.emit(this.orderFinished);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.orderFinished = false;
          this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
          this.orders.productOrders = [];
          this.loadTotal();
          this.total = 0;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return ShoppingCartComponent;
    }();

    ShoppingCartComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ShoppingCartComponent.prototype, "onOrderFinished", void 0);
    ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-cart.component.css */
      "./src/app/ecommerce/shopping-cart/shopping-cart.component.css")).default]
    })], ShoppingCartComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\eivanovue\Desktop\Golden-Shoe\src\main\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
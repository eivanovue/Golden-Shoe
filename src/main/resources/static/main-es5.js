function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n<!-- Toolbar -->\n<div class=\"container\">\n<!--  <app-ecommerce></app-ecommerce>-->\n</div>\n<router-outlet></router-outlet>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/about/about.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/about/about.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\">\n      <app-nav></app-nav>\n      <div class=\"container marketing\" style=\"margin-top: 50px;\">\n        <!-- Three columns of text below the carousel -->\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <img class=\"rounded-circle\" src=\"https://eivanovue.com/shoes/team/team1.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2>Flora Copello</h2>\n            <p>Lifelong communicator. Hipster-friendly pop culture advocate. Extreme internet geek. Food nerd. Evil problem solver.</p>\n          </div><!-- /.col-lg-4 -->\n          <div class=\"col-lg-4\">\n            <img class=\"rounded-circle\" src=\"https://eivanovue.com/shoes/team/team2.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2>Filip Gillespie</h2>\n            <p>Creator. Subtly charming pop culture advocate. Lifelong analyst. Award-winning tv lover. Food fan.</p>\n          </div><!-- /.col-lg-4 -->\n          <div class=\"col-lg-4\">\n            <img class=\"rounded-circle\" src=\"https://eivanovue.com/shoes/team/team3.jpeg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n            <h2>Juno Carroll</h2>\n            <p> Entrepreneur. Introvert. Baconaholic. Freelance music buff. Zombie specialist. Social media fanatic. Problem solver.</p>\n          </div><!-- /.col-lg-4 -->\n        </div><!-- /.row -->\n        <!-- START THE FEATURETTES -->\n        <hr class=\"featurette-divider\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7\">\n            <h2 class=\"featurette-heading\">There's a buzz...<span class=\"text-muted\">The AND Story</span></h2>\n            <p class=\"lead\">It’s the buzz of brilliant, curious people set free to imagine the impossible. A hubbub of ‘what ifs?’, ‘why nots?’ and ‘let’s trys’ all working together to push boundaries and create the future of digital.\n              Back in 2014, we knew that for organisations to thrive in a tech-based economy, they must accelerate the development of their digital capabilities. These capabilities embrace more than tech, products or data alone: they also encompass people, culture and organisational structure.\n\n              We are AND Digital.</p>\n          </div>\n          <div class=\"col-md-5\">\n            <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" style=\"width: 500px; height: 400px;\" src=\"https://static.andigital.com/wp-content/uploads/2017/05/02163341/AND_LOGO_RGB_ON_WHITE.png\" data-holder-rendered=\"true\">\n          </div>\n        </div>\n        <hr class=\"featurette-divider\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7 order-md-2\">\n            <h2 class=\"featurette-heading\">Oh yeah, it's that good. <span class=\"text-muted\">See for yourself.</span></h2>\n            <p class=\"lead\">We have found extraordinary people from all walks of life that have come together to make us who we are. Each of our ANDis have got a different set of skills, specialisms and knowledge that comes together to create something amazing. When each of our ANDis join, they take a seat in our red chair which represents everyone having a seat at the table and their voice being heard within AND Digital – whatever their level or experience.</p>\n          </div>\n          <div class=\"col-md-5 order-md-1\">\n            <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" src=\"https://www.gigabitmagazine.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-1017193718_1.jpg?itok=W4-tjXij\" data-holder-rendered=\"true\" style=\"width: 500px; height: 500px;\">\n          </div>\n        </div>\n        <hr class=\"featurette-divider\">\n        <div class=\"row featurette\">\n          <div class=\"col-md-7\">\n            <h2 class=\"featurette-heading\">And lastly, this one. <span class=\"text-muted\">Checkmate.</span></h2>\n            <p class=\"lead\">With no more than 100 people, being part of a Club means you know each and every person - and we keep that small company feel. Work, play and learn with your Club!</p>\n          </div>\n          <div class=\"col-md-5\">\n            <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"500x500\" src=\"https://images.yourstory.com/cs/2/5739db30-22e7-11e9-9aaa-0334d2a19842/GLOBAL-BUSINESS1555321109971.jpg?fm=png&auto=format\" data-holder-rendered=\"true\" style=\"width: 500px; height: 400px;\">\n          </div>\n        </div>\n        <!-- /END THE FEATURETTES -->\n      </div>\n      <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n      <!--Navigation-->\r\n      <app-nav></app-nav>\r\n      <ngb-carousel *ngIf=\"images\">\r\n        <ng-template ngbSlide *ngFor=\"let img of images\">\r\n          <div class=\"picsum-img-wrapper\">\r\n            <img [src]=\"img\" class=\"mh-100\" style=\"width: 100%;\" alt=\"Random first slide\">\r\n          </div>\r\n          <div class=\"carousel-caption\">\r\n            <button (click)=\"showProds()\" class=\"btn btn-outline-light\">Browse Products</button>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n\r\n\r\n      <div class=\"py-5\">\r\n        <div class=\"row\">\r\n          <!-- DEMO 1 Item-->\r\n          <div class=\"col-lg-6 mb-4 mb-lg-0\">\r\n            <a href=\"products\"><div class=\"hover hover-1 text-white rounded\"><img src=\"https://eivanovue.com/shoes/mens/mens1.jpg\" alt=\"\">\r\n              <div class=\"hover-overlay\"></div>\r\n              <div class=\"hover-1-content px-5 py-4\">\r\n                <h3 class=\"hover-1-title text-uppercase font-weight-bold mb-0\"> <span class=\"font-weight-light\">FOR </span>HIM</h3>\r\n                <p class=\"hover-1-description font-weight-light mb-0\">Browse our wide range of shoes specially created for him.</p>\r\n              </div>\r\n            </div></a>\r\n          </div>\r\n          <!-- DEMO 1 Item-->\r\n          <div class=\"col-lg-6\">\r\n            <a href=\"products\"><div class=\"hover hover-1 text-white rounded\"><img src=\"https://eivanovue.com/shoes/womens/womens1.jpg\" alt=\"\">\r\n              <div class=\"hover-overlay\"></div>\r\n              <div class=\"hover-1-content px-5 py-4\">\r\n                <h3 class=\"hover-1-title text-uppercase font-weight-bold mb-0\"> <span class=\"font-weight-light\">FOR </span>HER</h3>\r\n                <p class=\"hover-1-description font-weight-light mb-0\">Browse our wide range of shoes specially created for her.</p>\r\n              </div>\r\n            </div></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/carousel/carousel.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/carousel/carousel.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceMainCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>carousel works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/footer/footer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/footer/footer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceMainFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"pt-4 my-md-5 pt-md-5 border-top\">\r\n  <div class=\"container\">\r\n    <div class=\"row no-margin justify-content-center\">\r\n      <div class=\"col-lg-3 col-md-12 col-sm-12\">\r\n        <h5><i class=\"material-icons\">\r\n          local_shipping\r\n        </i> SHIPPING</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n          <li>There are various delivery options ranging from Standard (5 days), Fast (2 days) and Express (1 day) available at checkout.</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-12 col-sm-12\">\r\n        <h5><i class=\"material-icons\">\r\n          phone\r\n        </i> CONTACT US</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n          <li>Head over to our support page where you learn about various ways to get in touch with us such as Live Chat, Email or Telephone. You can also check out our frequently asked questions section.</li>\r\n          <button class=\"btn btn-link\">Learn more</button>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-12 col-sm-12\">\r\n        <h5><i class=\"material-icons\">\r\n          card_giftcard\r\n        </i> GIFT WRAPPING</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n          <li>Want to make a loved one happy? Our professional gift-wrappers will be on the case. Once in checkout, select the 'Gift wrap' option.</li>\r\n          <button class=\"btn btn-link\">Learn more</button>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-12 col-sm-12\" style=\"width:100%;\">\r\n        <h5><i class=\"material-icons\">\r\n          payment\r\n        </i> ORDERS & RETURNS</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n          <li><a class=\"text-muted\" href=\"/orders\">Check order status</a></li>\r\n          <li><a class=\"text-muted\" href=\"/returns\">Create return request</a></li>\r\n          <li><a class=\"text-muted\" href=\"/returns\">Check status of return</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-margin justify-content-center\">\r\n      <img class=\"social\" src=\"https://eivanovue.com/shoes/social/facebook.png\" width=\"50\" height=\"50\"/>\r\n      <img class=\"social\" src=\"https://eivanovue.com/shoes/social/instagram-logo.png\" width=\"50\" height=\"50\"/>\r\n      <img class=\"social\" src=\"https://eivanovue.com/shoes/social/twitter.png\" width=\"50\" height=\"50\"/>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/nav/nav.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/nav/nav.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceMainNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Navigation-->\n<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Golden Shoe</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"p-2 text-dark\" href=\"/\">Home</a>\n    <a class=\"p-2 text-dark\" href=\"/products\">Products</a>\n    <a class=\"p-2 text-dark\" href=\"/about\">About</a>\n    <a class=\"p-2 text-dark\" href=\"/support\">Support</a>\n  </nav>\n  <a class=\"btn btn-outline-primary\" href=\"#\">Sign up</a>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\">\n      <app-nav></app-nav>\n      <h1 class=\"text-center\">ORDER DETAILS</h1>\n      <br>\n      <table class=\"table table-dark\">\n        <thead>\n        <tr>\n          <th scope=\"col\">Product name</th>\n          <th scope=\"col\">Size</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Quantity</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let order of orders.productOrders\">\n          <td>{{order.product.name}}</td>\n          <td>{{order.size.size}}</td>\n          <td>${{order.product.price}}</td>\n          <td>{{order.quantity}}</td>\n        </tr>\n        </tbody>\n      </table>\n      <p>\n        <button *ngIf=\"!paid\" type=\"button\" class=\"btn btn-outline-dark\" (click)=\"isCollapsed = !isCollapsed\"\n                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapse\">\n          Use a promo code\n        </button>\n      </p>\n      <div id=\"collapse\" [ngbCollapse]=\"!isCollapsed\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <label for=\"discountVoucher\">Enter a promo code</label>\n            <input [disabled]=\"paid\" id=\"discountVoucher\" type=\"text\" class=\"form-control\" placeholder=\"DISCOUNT10OFF\"\n                   aria-label=\"Enter a promo code\" [(ngModel)]=\"voucher\"/>\n            <div style=\"margin-top: 10px;\" class=\"alert alert-success\" role=\"alert\" *ngIf=\"discountValid && discountSet\">\n              Promo code <strong>{{discount.voucher}}</strong> of <strong>${{discount.value}}</strong> has been applied.\n            </div>\n            <div style=\"margin-top: 10px;\" class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!discountValid\">\n              Promo code is expired or has already been used.\n            </div>\n            <div style=\"margin-top: 10px;\" class=\"alert alert-danger\" role=\"alert\" *ngIf=\"discountNotFound\">\n              Promo code has not been found.\n            </div>\n            <p style=\"margin-top: 8px;\">\n              <button [disabled]=\"discountSet\" (click)=\"setDiscount()\" class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Apply</button>\n            </p>\n          </div>\n        </div>\n      </div>\n      <br *ngIf=\"!paid\">\n      <h2>Customer information</h2>\n      <hr>\n      <form [formGroup]=\"userForm\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Full name</label>\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"inputName\">\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputEmail\">Email</label>\n            <input formControlName=\"email\" type=\"text\" class=\"form-control\" id=\"inputEmail\">\n            <!--        <div class=\"alert alert-danger\" *ngIf=\"(user.email.dirty || user.email.touched) && user.email.invalid\">Email is required.</div>-->\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputTelephone\">Telephone</label>\n            <input formControlName=\"telephone\" type=\"text\" class=\"form-control\" id=\"inputTelephone\">\n          </div>\n        </div>\n      </form>\n      <h2>Shipping address</h2>\n      <hr>\n      <form [formGroup]=\"addressForm\" novalidate>\n        <div formGroupName=\"address\">\n          <div class=\"form-group\">\n            <label for=\"inputAddress\">Address</label>\n            <input formControlName=\"street\" type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputCity\">City</label>\n              <input formControlName=\"city\" type=\"text\" class=\"form-control\" id=\"inputCity\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"inputCountry\">Country</label>\n              <select formControlName=\"country\" id=\"inputCountry\" class=\"form-control\">\n                <option selected=\"selected\">Choose...</option>\n                <option>United Kingdom</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">Post code</label>\n              <input formControlName=\"postCode\" type=\"text\" class=\"form-control\" id=\"inputZip\">\n            </div>\n          </div>\n        </div>\n      </form>\n      <h2>Delivery information</h2>\n      <hr>\n      <select [disabled]=\"paid\" [(ngModel)]=\"selectedDelivery\" (ngModelChange)=\"setDelivery()\" class=\"form-control\">\n        <option [ngValue]=\"null\" selected=\"selected\">Select delivery...</option>\n        <option [ngValue]=\"delivery\" *ngFor=\"let delivery of delivery\">\n          {{delivery.name}} - <strong>${{delivery.price}}</strong>\n        </option>\n      </select>\n      <br *ngIf=\"checkDeliverySet() && !paid\">\n      <div class=\"alert alert-info\" role=\"alert\" *ngIf=\"checkDeliverySet() && !paid\">\n        <strong>Delivery information:</strong> Your order will arrive in <strong> {{orders.delivery.days}} day(s) </strong>\n      </div>\n      <br>\n\n      <button class=\"btn btn-primary btn-block\" (click)=\"pay()\" *ngIf=\"!paid && checkDeliverySet()\">Pay</button>\n      <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\n        <strong>Congratulation!</strong> You successfully made the order.\n        <strong>Delivery information:</strong> Your order will arrive in {{orders.delivery.days}} day(s)\n      </div>\n      <hr>\n      <h2>Total amount <span class=\"badge badge-secondary\">${{ total | number: 0}}</span></h2>\n\n      <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/filters/filters.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/filters/filters.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceProductsFiltersFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row no-margin\">\n<div class=\"col-lg-3 col-md-6 mb-2\" *ngFor=\"let option of options;\">\n  <label>\n    <input type=\"checkbox\"\n           name=\"options\"\n           value=\"{{option.value}}\"\n           [(ngModel)]=\"option.checked\"\n           (change)=\"onFilter()\"/>\n    {{option.name}}\n  </label>\n</div>\n</div>\n<hr>\n";
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


    __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12\">\r\n      <app-nav></app-nav>\r\n      <app-shopping-cart></app-shopping-cart>\r\n      <div class=\"row no-margin\">\r\n        <p style=\"width: 100%\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"isCollapsed = !isCollapsed\"\r\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapse\">\r\n            Filters\r\n          </button>\r\n        </p>\r\n        <div id=\"collapse\" [ngbCollapse]=\"!isCollapsed\">\r\n          <div class=\"card border card-body\">\r\n            <div class=\"row justify-content-center no-margin\">\r\n              <app-filters (filter)=\"onFilter($event)\"></app-filters>\r\n\r\n            </div>\r\n            <div class=\"row justify-content-center no-margin\">\r\n              <app-sorting (sort)=\"onSort($event)\"></app-sorting>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row card-deck\">\r\n        <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of filteredProductOrders | paginate: { itemsPerPage: 9, currentPage: p }\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body no-padding\">\r\n              <img class=\"card-img-top\" src={{order.product.pictureUrl}} alt=\"\">\r\n              <h5 class=\"card-title\">\r\n                <div class=\"row no-margin\"><div class=\"product-name\">{{order.product.name}}</div></div>\r\n                <div class=\"row no-margin justify-content-between\">\r\n                  <div class=\"product-type\">{{order.product.productType.name}}</div>\r\n                  <div class=\"product-price\">${{order.product.price | number: 0}}</div>\r\n                </div>\r\n              </h5>\r\n\r\n              <div *ngIf=\"!isProductSelected(order.product)\">\r\n                <select class=\"custom-select\" [(ngModel)]=\"order.size\" (ngModelChange)=\"order.setProductSize()\" class=\"form-control\" id=\"sel {{order.product.id}}\">\r\n                  <option [ngValue]=\"null\" selected=\"selected\">Select size...</option>\r\n                  <option [ngValue]=\"size\" *ngFor=\"let size of order.product.productSize\">\r\n                    {{size.size}}\r\n                  </option>\r\n                </select>\r\n                <div *ngIf=\"order.size\"><p class=\"product-stock\">Items available: {{order.size.stock}}</p></div>\r\n              </div>\r\n\r\n              <div class=\"row no-margin justify-content-center\">\r\n                <div *ngIf=\"!isProductSelected(order.product) && order.size\">\r\n                  <div class=\"number-input\">\r\n                    <button (click)=\"decrementQuantity(order)\" onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" class=\"minus\"></button>\r\n                    <input class=\"quantity\" min=\"0\" max=\"{{order.size.stock}}\" name=\"quantity\" value=\"0\" type=\"number\" [(ngModel)]=order.quantity>\r\n                    <button (click)=\"incrementQuantity(order)\" onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row no-margin justify-content-center\">\r\n                <div *ngIf=\"!isProductSelected(order.product) && order.size\">\r\n                  <button class=\"btn btn-primary\" (click)=\"addToCart(order)\"\r\n                          [disabled]=\"order.quantity <= 0 || order.quantity > order.size.stock\" >Add To Cart\r\n                  </button>\r\n                </div>\r\n                <div *ngIf=\"isProductSelected(order.product)\">\r\n                  <button class=\"btn btn-outline-danger btn-block\"\r\n                          (click)=\"removeFromCart(order)\">Remove From Cart\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row justify-content-end\">\r\n        <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\r\n      </div>\r\n    <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/sorting/sorting.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/sorting/sorting.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceProductsSortingSortingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center\">\n  <div *ngFor=\"let sort of sorting; let i = index;\">\n    <div class=\"col-lg-12 col-md-12 mb-12\">\n      <button style=\"margin-right: 4px;\" class=\"btn btn-outline-dark\" (click)=\"onSort(i)\">{{sort.name}}</button>\n    </div>\n    <p>\n    </p>\n  </div>\n\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"card text-white bg-dark mb-4\">\n  <div class=\"card-header text-center\">Shopping Cart</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Total: $ {{ total | number: 0}}</h5>\n    <hr>\n    <h6 class=\"card-title\">Items bought:</h6>\n    <ul>\n      <li *ngFor=\"let order of orders.productOrders\">\n        {{ order.product.name }} - Size: {{order.size.size}} - {{ order.quantity}} pcs.\n      </li>\n    </ul>\n    <button formA class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\n            [disabled]=\"orders.productOrders.length == 0\">Checkout\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/chat/chat.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/chat/chat.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceSupportChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"openChatWindow()\" type=\"button\" class=\"btn btn btn-block btn-outline-primary\">Open Live Chat</button>\n<button (click)=\"hideChatWindow()\" type=\"button\" class=\"btn btn btn-block btn-outline-dark\">Close Live Chat</button>\n<livechat-widget #liveChatWidget licenseId=\"10073628\" (onChatLoaded)=\"onChatLoaded($event)\" [visitor]=\"visitor\" [params]=\"params\"></livechat-widget>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/orders/orders.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/orders/orders.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceSupportOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12\">\r\n      <app-nav></app-nav>\r\n      <h2 style=\"margin-top: 50px;\">Check the status of an order</h2>\r\n      <hr>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Order reference\" [(ngModel)]=\"orderReference\" aria-label=\"Order reference\" aria-describedby=\"button-addon2\">\r\n          <div class=\"input-group-append\">\r\n            <button (click)=\"getOrder()\" class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Check</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"order\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\"><button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n              <h5 class=\"card-title\">{{order.reference}} </h5>\r\n              <div *ngIf=\"order.status == 'PAID'\">\r\n                <h6><span class=\"badge badge-info\">{{order.status}}</span></h6>\r\n                <p class=\"card-text\">Your order has been paid for and should be delivered {{deliveryDate}}.</p>\r\n              </div>\r\n              <div *ngIf=\"order.status == 'DELIVERED'\">\r\n                <h6><span class=\"badge badge-success\">{{order.status}}</span></h6>\r\n                <p class=\"card-text\">Your order was delivered on {{deliveryDate}}.</p>\r\n              </div>\r\n              <div *ngIf=\"order.status == 'CANCELED'\">\r\n                <h6><span class=\"badge badge-danger\">{{order.status}}</span></h6>\r\n                <p class=\"card-text\">Order has been canceled.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\" *ngFor=\"let product of products\">{{product.product.name}} {{product.size.size}} {{product.quantity}} pcs.</li>\r\n            </ul>\r\n            <div *ngIf=\"order.status == 'PAID'\" class=\"card-body\">\r\n              <button (click)=\"cancelOrder()\" class=\"btn btn-link\">Cancel order</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"errOrderNotFound\" style=\"margin-top: 10px;\" class=\"alert alert-danger\" role=\"alert\">\r\n          <button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          Order with given reference was not found.\r\n        </div>\r\n      </div>\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/returns/returns.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/returns/returns.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceSupportReturnsReturnsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-12\">\n      <app-nav></app-nav>\n      <h2 style=\"margin-top: 50px;\">Check the status of a return request</h2>\n      <hr>\n      <div class=\"col-md-8\">\n        <div class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Return reference\" [(ngModel)]=\"returnReference\" aria-label=\"Return reference\" aria-describedby=\"button-addon2\">\n          <div class=\"input-group-append\">\n            <button (click)=\"getReturn()\" class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\">Check</button>\n          </div>\n        </div>\n        <div class=\"card\" *ngIf=\"aCheckReturn\">\n          <div class=\"card-body\"><button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n            <h5 class=\"card-title\">RETURN REF: {{aCheckReturn.reference}} </h5>\n            <div *ngIf=\"aCheckReturn.status == 'PENDING'\">\n              <h6><span class=\"badge badge-info\">{{aCheckReturn.status}}</span></h6>\n              <p class=\"card-text\">Your return request is submitted and waiting to be received. Bellow are the products you chose to return. You may cancel the return request at any time during the Pending stage.</p>\n            </div>\n            <div *ngIf=\"aCheckReturn.status == 'APPROVED'\">\n              <h6><span class=\"badge badge-success\">{{aCheckReturn.status}}</span></h6>\n              <p class=\"card-text\">You return request has been received and a refund has been issued.</p>\n            </div>\n            <div *ngIf=\"aCheckReturn.status == 'CANCELED'\">\n              <h6><span class=\"badge badge-danger\">{{aCheckReturn.status}}</span></h6>\n              <p class=\"card-text\">The return request has been canceled and no refund was issued.</p>\n            </div>\n\n          </div>\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" *ngFor=\"let product of aCheckReturn.returnProducts\">{{product.product.name}} {{product.productSize.size}} {{product.quantityToReturn}} pcs.</li>\n          </ul>\n          <div *ngIf=\"aCheckReturn.status == 'PENDING'\" class=\"card-body\">\n            <!-- TO-DO: Admin function-->\n            <button (click)=\"approveReturn()\" class=\"btn btn-link\">Approve return request</button>\n            <button (click)=\"cancelReturn()\" class=\"btn btn-link\">Cancel return request</button>\n          </div>\n        </div>\n        <div *ngIf=\"errReturnNotFound\" style=\"margin-top: 10px;\" class=\"alert alert-danger\" role=\"alert\">\n          <button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          Return request with given reference was not found.\n        </div>\n      </div>\n      <br>\n      <h2>Create a return request</h2>\n      <hr>\n      <div class=\"col-md-8\">\n        <label for=\"returnRequestCreate\">Please enter your email address and order reference to continue</label><br>\n        <div id=\"returnRequestCreate\" class=\"input-group mb-3\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Order reference\"\n                 aria-label=\"Order reference\" aria-describedby=\"button-addon3\" [(ngModel)]=\"orderReference\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon3\" (click)=\"getOrder()\">Create</button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"returnProducts.length > 0\" class=\"col-md-8\">\n        <div  class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">ORDER REF: {{orders.reference}}</h5>\n            <p class=\"card-text\">Please select the items and their quantity that you wish to return.</p>\n            <div *ngFor=\"let product of returnProducts\">\n              <p>\n                <input type=\"checkbox\"\n                       [checked]=\"product.product.checked\"\n                       (change)=\"product.checked = !product.checked\" />\n                {{product.product.name}}, Size {{product.size.size}} ${{product.product.price}} - {{product.quantity}} pcs.\n              </p>\n              <div id=\"collapse\" *ngIf=\"product.quantity > 1\" [ngbCollapse]=\"!product.checked\">\n                <label for=\"{{product.product.name}}\">As you have purchased more than one of this item, please choose how many you would like to return.</label>\n                <div class=\"number-input\">\n                  <button (click)=\"decrementQuantity(product)\" onclick=\"this.parentNode.querySelector('input[type=number]').stepDown()\" class=\"minus\"></button>\n                  <input id=\"{{product.product.name}}\" class=\"quantity\" min=\"1\" max=\"{{product.quantity}}\" name=\"quantity\" value=\"0\" type=\"number\" [(ngModel)]=product.quantityToReturn>\n                  <button (click)=\"incrementQuantity(product)\" onclick=\"this.parentNode.querySelector('input[type=number]').stepUp()\" class=\"plus\"></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <p>\n              <button (click)=\"createReturnRequest()\" class=\"btn btn-outline-dark\">Create return request</button>&nbsp;\n              <button (click)=\"reset()\" class=\"btn btn-link\">Cancel</button>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div *ngIf=\"requestCompleted\" style=\"margin-top: 10px;\" class=\"alert alert-success\" role=\"alert\">\n          <button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          Return request has been created and an email should be sent to you containing the reference.\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div *ngIf=\"errOrderNotFound\" style=\"margin-top: 10px;\" class=\"alert alert-danger\" role=\"alert\">\n          <button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          Order has not been found!\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div *ngIf=\"errReturnExists\" style=\"margin-top: 10px;\" class=\"alert alert-info\" role=\"alert\">\n          <button (click)=\"reset()\" type=\"button\" class=\"close\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          Return request for this order has already been created.\n          You may check the status of a return via the section above using the reference sent to you by email.\n        </div>\n      </div>\n      <app-footer></app-footer>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/support.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/support.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcommerceSupportSupportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-12\">\r\n      <app-nav></app-nav>\r\n      <div class=\"row card-deck text-center\">\r\n        <div class=\"col-lg-4 col-md-12 mb-4 d-flex align-items-stretch\">\r\n          <div class=\"card box-shadow\" style=\"width: 100%\">\r\n            <div class=\"card-body\">\r\n              <h1 class=\"card-title pricing-card-title\">Live Chat</h1>\r\n              <br>\r\n              <app-chat></app-chat>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-lg-4 col-md-12 mb-4 d-flex align-items-stretch\">\r\n        <div class=\"card box-shadow\" style=\"width: 100%\">\r\n          <div class=\"card-body\">\r\n            <h1 class=\"card-title pricing-card-title\">Telephone</h1>\r\n            <ul class=\"list-unstyled mt-3 mb-4 text-left\">\r\n              <li>For more information call one of the following (9-5, Monday to Friday) telephones provided.</li>\r\n            </ul>\r\n            <ul class=\"list-unstyled mt-3 mb-4 text-left\">\r\n              <li><strong>Products:</strong> 07927832900</li>\r\n              <li><strong>Sales:</strong> 07924836900</li>\r\n              <li><strong>Others:</strong> 07924234900</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-lg-4 col-md-12 mb-4 d-flex align-items-stretch\">\r\n          <div class=\"card box-shadow\" style=\"width: 100%\">\r\n            <div class=\"card-body\">\r\n              <h1 class=\"card-title pricing-card-title\">Email</h1>\r\n              <ul class=\"list-unstyled mt-3 mb-4 text-left\">\r\n                <li>For more information do not hesitate to contact us via our provided emails.</li>\r\n              </ul>\r\n              <ul class=\"list-unstyled mt-3 mb-4 text-left\">\r\n                <li><strong>Products:</strong> products@goldenshoe.com</li>\r\n                <li><strong>Sales:</strong> sales@goldenshoe.com</li>\r\n                <li><strong>Others:</strong> others@goldenshoe.com</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <h2>Frequently asked questions</h2>\r\n      <hr>\r\n      <h4>Returns</h4>\r\n      <!--Request a return-->\r\n      <p>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"isReturnsCollapsed = !isReturnsCollapsed\"\r\n                [attr.aria-expanded]=\"!isReturnsCollapsed\" aria-controls=\"collapse\">\r\n          How can I request a return for order?\r\n        </button>\r\n      </p>\r\n      <div id=\"collapse\" [ngbCollapse]=\"!isReturnsCollapsed\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <label for=\"returnRequest\">You have the right to cancel at any time from the moment you place your online order,\r\n              and up to 14 days from the day you receive your goods. This can be done through our returns page.</label>\r\n            <p>\r\n              <a href=\"returns\" id=\"returnRequest\" class=\"btn btn-outline-dark\">Create a return request</a>\r\n            </p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--Check status of a return-->\r\n      <p>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"isReturnsStatusCollapsed = !isReturnsStatusCollapsed\"\r\n                [attr.aria-expanded]=\"!isReturnsStatusCollapsed\" aria-controls=\"collapse\">\r\n          Has my return request been accepted?\r\n        </button>\r\n      </p>\r\n      <div id=\"collapse2\" [ngbCollapse]=\"!isReturnsStatusCollapsed\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <label for=\"returnCheckRequest\">You can view the status of your return request by going to the returns\r\n            page. Simply enter your return reference and click on 'Check Return Status'.</label>\r\n            <p>\r\n              <a href=\"returns\" id=\"returnCheckRequest\" class=\"btn btn-outline-dark\">Check status of return request</a>\r\n            </p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <h4>Orders</h4>\r\n      <!--Check status of an order-->\r\n      <p>\r\n        <button type=\"button\" class=\"btn btn-link\" (click)=\"isDeliveryCollapsed = !isDeliveryCollapsed\"\r\n                [attr.aria-expanded]=\"!isDeliveryCollapsed\" aria-controls=\"collapse\">\r\n          When is my order going to be delivered?\r\n        </button>\r\n      </p>\r\n      <div id=\"collapse3\" [ngbCollapse]=\"!isDeliveryCollapsed\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body\">\r\n            <label for=\"checkOrderDelivery\">Check the status of your order via the Orders page. Simply enter your\r\n              order reference and email address, then click ‘Track Order’ to open the page displaying your order details.</label>\r\n            <p>\r\n              <a href=\"orders\" id=\"checkOrderDelivery\" class=\"btn btn-outline-dark\">Check order status</a>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <app-footer></app-footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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
    /* harmony import */


    var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ecommerce/products/products.component */
    "./src/app/ecommerce/products/products.component.ts");
    /* harmony import */


    var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ecommerce/ecommerce.component */
    "./src/app/ecommerce/ecommerce.component.ts");
    /* harmony import */


    var _ecommerce_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ecommerce/about/about.component */
    "./src/app/ecommerce/about/about.component.ts");
    /* harmony import */


    var _ecommerce_support_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ecommerce/support/support.component */
    "./src/app/ecommerce/support/support.component.ts");
    /* harmony import */


    var _ecommerce_support_returns_returns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ecommerce/support/returns/returns.component */
    "./src/app/ecommerce/support/returns/returns.component.ts");
    /* harmony import */


    var _ecommerce_support_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ecommerce/support/orders/orders.component */
    "./src/app/ecommerce/support/orders/orders.component.ts");
    /* harmony import */


    var _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ecommerce/orders/orders.component */
    "./src/app/ecommerce/orders/orders.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_4__["EcommerceComponent"]
    }, {
      path: 'products',
      component: _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    }, {
      path: 'about',
      component: _ecommerce_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }, {
      path: 'support',
      component: _ecommerce_support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"]
    }, {
      path: 'returns',
      component: _ecommerce_support_returns_returns_component__WEBPACK_IMPORTED_MODULE_7__["ReturnsComponent"]
    }, {
      path: 'orders',
      component: _ecommerce_support_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"]
    }, {
      path: 'order',
      component: _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]
    }];

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


    __webpack_exports__["default"] = ".container {\r\n  padding-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */";
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


    var _ecommerce_services_SortingService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ecommerce/services/SortingService */
    "./src/app/ecommerce/services/SortingService.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _ecommerce_products_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ecommerce/products/filters/filters.component */
    "./src/app/ecommerce/products/filters/filters.component.ts");
    /* harmony import */


    var _ecommerce_products_sorting_sorting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ecommerce/products/sorting/sorting.component */
    "./src/app/ecommerce/products/sorting/sorting.component.ts");
    /* harmony import */


    var _ecommerce_support_support_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./ecommerce/support/support.component */
    "./src/app/ecommerce/support/support.component.ts");
    /* harmony import */


    var _ecommerce_support_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./ecommerce/support/chat/chat.component */
    "./src/app/ecommerce/support/chat/chat.component.ts");
    /* harmony import */


    var _livechat_angular_widget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @livechat/angular-widget */
    "./node_modules/@livechat/angular-widget/fesm2015/livechat-angular-widget.js");
    /* harmony import */


    var _ecommerce_main_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./ecommerce/main/carousel/carousel.component */
    "./src/app/ecommerce/main/carousel/carousel.component.ts");
    /* harmony import */


    var _ecommerce_main_nav_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./ecommerce/main/nav/nav.component */
    "./src/app/ecommerce/main/nav/nav.component.ts");
    /* harmony import */


    var _ecommerce_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./ecommerce/main/footer/footer.component */
    "./src/app/ecommerce/main/footer/footer.component.ts");
    /* harmony import */


    var _ecommerce_about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./ecommerce/about/about.component */
    "./src/app/ecommerce/about/about.component.ts");
    /* harmony import */


    var _ecommerce_support_returns_returns_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./ecommerce/support/returns/returns.component */
    "./src/app/ecommerce/support/returns/returns.component.ts");
    /* harmony import */


    var _ecommerce_support_orders_orders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./ecommerce/support/orders/orders.component */
    "./src/app/ecommerce/support/orders/orders.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_5__["EcommerceComponent"], _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"], _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartComponent"], _ecommerce_products_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"], _ecommerce_products_sorting_sorting_component__WEBPACK_IMPORTED_MODULE_16__["SortingComponent"], _ecommerce_support_support_component__WEBPACK_IMPORTED_MODULE_17__["SupportComponent"], _ecommerce_support_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"], _ecommerce_main_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__["CarouselComponent"], _ecommerce_main_nav_nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"], _ecommerce_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _ecommerce_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"], _ecommerce_support_returns_returns_component__WEBPACK_IMPORTED_MODULE_24__["ReturnsComponent"], _ecommerce_support_orders_orders_component__WEBPACK_IMPORTED_MODULE_25__["OrdersComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _livechat_angular_widget__WEBPACK_IMPORTED_MODULE_19__["LivechatWidgetModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"]],
      providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__["EcommerceService"], _ecommerce_services_SortingService__WEBPACK_IMPORTED_MODULE_11__["SortingService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/ecommerce/about/about.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/ecommerce/about/about.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Center align the text within the three columns below the carousel */\r\n.marketing .col-lg-4 {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing h2 {\r\n  font-weight: 400;\r\n}\r\n.marketing .col-lg-4 p {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n}\r\n/* Featurettes\r\n------------------------- */\r\n.featurette-divider {\r\n  margin: 4rem 0; /* Space out the Bootstrap <hr> more */\r\n}\r\n/* Thin out the marketing headings */\r\n.featurette-heading {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  letter-spacing: -.05rem;\r\n}\r\n/* RESPONSIVE CSS\r\n-------------------------------------------------- */\r\n@media (min-width: 40em) {\r\n  /* Bump up size of carousel content */\r\n  .carousel-caption p {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .featurette-heading {\r\n    font-size: 50px;\r\n  }\r\n}\r\n@media (min-width: 62em) {\r\n  .featurette-heading {\r\n    margin-top: 5rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBR0E7MkJBQzJCO0FBRTNCO0VBQ0UsY0FBYyxFQUFFLHNDQUFzQztBQUN4RDtBQUVBLG9DQUFvQztBQUNwQztFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCO0FBR0E7b0RBQ29EO0FBRXBEO0VBQ0UscUNBQXFDO0VBQ3JDO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENlbnRlciBhbGlnbiB0aGUgdGV4dCB3aXRoaW4gdGhlIHRocmVlIGNvbHVtbnMgYmVsb3cgdGhlIGNhcm91c2VsICovXHJcbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXJrZXRpbmcgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNzVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcclxufVxyXG5cclxuXHJcbi8qIEZlYXR1cmV0dGVzXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5mZWF0dXJldHRlLWRpdmlkZXIge1xyXG4gIG1hcmdpbjogNHJlbSAwOyAvKiBTcGFjZSBvdXQgdGhlIEJvb3RzdHJhcCA8aHI+IG1vcmUgKi9cclxufVxyXG5cclxuLyogVGhpbiBvdXQgdGhlIG1hcmtldGluZyBoZWFkaW5ncyAqL1xyXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xyXG59XHJcblxyXG5cclxuLyogUkVTUE9OU0lWRSBDU1NcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XHJcbiAgLyogQnVtcCB1cCBzaXplIG9mIGNhcm91c2VsIGNvbnRlbnQgKi9cclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjJlbSkge1xyXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/about/about.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ecommerce/about/about.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppEcommerceAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/ecommerce/about/about.component.css")).default]
    })], AboutComponent);
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


    __webpack_exports__["default"] = ".row-top-margin {\r\n  margin-top: 50px;\r\n}\r\n\r\n.navbar {\r\n  background-color: #161616 !important;\r\n  color: #f0f3f6;\r\n}\r\n\r\n.pagination /deep/ .ngx-pagination .current {\r\n  background: #161616;\r\n}\r\n\r\n.no-margin{\r\n  margin: 0;\r\n}\r\n\r\n.image-mens{\r\n  background-image: url(\"https://eivanovue.com/shoes/images/mens/image-mens.jpg\");\r\n}\r\n\r\n.carousel-item {\r\n  height: 100vh;\r\n  min-height: 350px;\r\n  display: block;\r\n  background: no-repeat center center scroll;\r\n  background-size: cover;\r\n}\r\n\r\n.hover {\r\n  overflow: hidden;\r\n  position: relative;\r\n  padding-bottom: 90%;\r\n}\r\n\r\n.hover-overlay {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 90;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.hover img {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.hover-content {\r\n  position: relative;\r\n  z-index: 99;\r\n}\r\n\r\n.hover-1 img {\r\n  width: 105%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: -5%;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.hover-1-content {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 99;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.hover-1 .hover-overlay {\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.hover-1-description {\r\n  -webkit-transform: translateY(0.5rem);\r\n          transform: translateY(0.5rem);\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  opacity: 0;\r\n}\r\n\r\n.hover-1:hover .hover-1-content {\r\n  bottom: 2rem;\r\n}\r\n\r\n.hover-1:hover .hover-1-description {\r\n  opacity: 1;\r\n  -webkit-transform: none;\r\n          transform: none;\r\n}\r\n\r\n.hover-1:hover img {\r\n  left: 0;\r\n}\r\n\r\n.hover-1:hover .hover-overlay {\r\n  opacity: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwrRUFBK0U7QUFDakY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCwwQ0FBMEM7RUFJMUMsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCw0QkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFFUCxzQkFBc0I7RUFDdEIsNEJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsNEJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCw0QkFBb0I7RUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVix1QkFBZTtVQUFmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvZWNvbW1lcmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LXRvcC1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTYgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2YwZjNmNjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogIzE2MTYxNjtcclxufVxyXG5cclxuLm5vLW1hcmdpbntcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbWFnZS1tZW5ze1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZWl2YW5vdnVlLmNvbS9zaG9lcy9pbWFnZXMvbWVucy9pbWFnZS1tZW5zLmpwZ1wiKTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLmhvdmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogOTAlO1xyXG59XHJcblxyXG4uaG92ZXItb3ZlcmxheSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5MDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLmhvdmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmhvdmVyLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmhvdmVyLTEgaW1nIHtcclxuICB3aWR0aDogMTA1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC01JTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmhvdmVyLTEtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcblxyXG4uaG92ZXItMSAuaG92ZXItb3ZlcmxheSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uaG92ZXItMS1kZXNjcmlwdGlvbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmhvdmVyLTE6aG92ZXIgLmhvdmVyLTEtY29udGVudCB7XHJcbiAgYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uaG92ZXItMTpob3ZlciAuaG92ZXItMS1kZXNjcmlwdGlvbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5ob3Zlci0xOmhvdmVyIGltZyB7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmhvdmVyLTE6aG92ZXIgLmhvdmVyLW92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */";
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EcommerceComponent =
    /*#__PURE__*/
    function () {
      function EcommerceComponent(router) {
        _classCallCheck(this, EcommerceComponent);

        this.orderFinished = false;
        this.images = [604, 662, 22, 596].map(function (n) {
          return "https://picsum.photos/id/".concat(n, "/1080/600");
        });
        this.router = router;
      }

      _createClass(EcommerceComponent, [{
        key: "showProds",
        value: function showProds() {
          this.router.navigate(['/products']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EcommerceComponent;
    }();

    EcommerceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

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
  "./src/app/ecommerce/main/carousel/carousel.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/ecommerce/main/carousel/carousel.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceMainCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9tYWluL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ecommerce/main/carousel/carousel.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ecommerce/main/carousel/carousel.component.ts ***!
    \***************************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppEcommerceMainCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/ecommerce/main/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/main/footer/footer.component.css":
  /*!************************************************************!*\
    !*** ./src/app/ecommerce/main/footer/footer.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceMainFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".social {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n  margin-right: 50px;\r\n  margin-top: 50px;\r\n}\r\n\r\nfooter {\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL21haW4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ecommerce/main/footer/footer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ecommerce/main/footer/footer.component.ts ***!
    \***********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppEcommerceMainFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/ecommerce/main/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/main/nav/nav.component.css":
  /*!******************************************************!*\
    !*** ./src/app/ecommerce/main/nav/nav.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceMainNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9tYWluL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/main/nav/nav.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ecommerce/main/nav/nav.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppEcommerceMainNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/main/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/ecommerce/main/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/models/discount.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/ecommerce/models/discount.model.ts ***!
    \****************************************************/

  /*! exports provided: Discount */

  /***/
  function srcAppEcommerceModelsDiscountModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Discount", function () {
      return Discount;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Discount = function Discount(id, voucher, expiry, expired, value) {
      _classCallCheck(this, Discount);

      this.id = id;
      this.voucher = voucher;
      this.expiry = expiry;
      this.expired = expired;
      this.value = value;
    };
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

    var ProductOrder =
    /*#__PURE__*/
    function () {
      function ProductOrder(product, quantity, productSize) {
        _classCallCheck(this, ProductOrder);

        this.productSize = null;
        this.product = product;
        this.quantity = quantity;

        if (productSize) {
          this.productSize = productSize;
        }
      }

      _createClass(ProductOrder, [{
        key: "setProductSize",
        value: function setProductSize() {
          if (this.productSize) {
            this.size = this.productSize;
          } else {
            this.size = this.productSize;
          }
        }
      }, {
        key: "size",
        get: function get() {
          return this.productSize;
        },
        set: function set(value) {
          this.productSize = value;
        }
      }]);

      return ProductOrder;
    }();
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
      this.delivery = null;
      this.address = null;
      this.user = null;
    };
    /***/

  },

  /***/
  "./src/app/ecommerce/models/return-product.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ecommerce/models/return-product.model.ts ***!
    \**********************************************************/

  /*! exports provided: ReturnProduct */

  /***/
  function srcAppEcommerceModelsReturnProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnProduct", function () {
      return ReturnProduct;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ReturnProduct = function ReturnProduct(product, productSize, quantityToReturn) {
      _classCallCheck(this, ReturnProduct);

      this.product = product;
      this.productSize = productSize;
      this.quantityToReturn = quantityToReturn;
    };
    /***/

  },

  /***/
  "./src/app/ecommerce/models/return.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/ecommerce/models/return.model.ts ***!
    \**************************************************/

  /*! exports provided: ReturnS */

  /***/
  function srcAppEcommerceModelsReturnModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnS", function () {
      return ReturnS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ReturnS = function ReturnS(returnProducts, user, address, amount, orderReference) {
      _classCallCheck(this, ReturnS);

      this.returnProducts = returnProducts;
      this.user = user;
      this.address = address;
      this.amount = amount;
      this.orderReference = orderReference;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_discount_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/discount.model */
    "./src/app/ecommerce/models/discount.model.ts");

    var OrdersComponent =
    /*#__PURE__*/
    function () {
      function OrdersComponent(ecommerceService, _fb) {
        _classCallCheck(this, OrdersComponent);

        this.ecommerceService = ecommerceService;
        this._fb = _fb;
        this.delivery = [];
        this.selectedDelivery = null;
        this.events = [];
        this.isCollapsed = false;
        this.discountValid = true;
        this.discountNotFound = false;
        this.orders = this.ecommerceService.ProductOrders;
        this.addressForm = this._fb.group({
          address: this._fb.group({
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['Choose...', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            postCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          })
        });
        this.userForm = this._fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
          telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      } //TO-DO: Use LocalStorage to keep state of order when page is refreshed!


      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.paid = false;
          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this.orders = _this.ecommerceService.ProductOrders;
          });
          this.loadTotal();
          this.loadDelivery(); // subscribe to form changes

          this.subscribeToFormChanges();
        }
      }, {
        key: "pay",
        value: function pay() {
          this.paid = true;
          this.orders.address = this.addressForm.value.address;
          this.orders.user = this.userForm.value;
          this.addressForm.controls['address'].disable();
          this.userForm.disable();
          this.ecommerceService.saveOrder(this.orders).subscribe();
        }
      }, {
        key: "loadTotal",
        value: function loadTotal() {
          this.total = this.ecommerceService.Total;
        }
      }, {
        key: "loadDelivery",
        value: function loadDelivery() {
          var _this2 = this;

          this.ecommerceService.getAllDeliveries().subscribe(function (delivery) {
            delivery.forEach(function (item) {
              _this2.delivery.push(item);
            });
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "checkDeliverySet",
        value: function checkDeliverySet() {
          return !!this.orders.delivery;
        }
      }, {
        key: "setDelivery",
        value: function setDelivery() {
          if (this.selectedDelivery) {
            this.orders.delivery = this.selectedDelivery;
            this.total = this.ecommerceService.Total;

            if (this.discountSet) {
              this.total = this.total - this.discount.value + this.selectedDelivery.price;
            } else {
              this.total = this.total + this.selectedDelivery.price;
            }
          } else {
            this.orders.delivery = this.selectedDelivery;

            if (this.discountSet) {
              this.total = this.ecommerceService.Total - this.discount.value;
            } else {
              this.total = this.ecommerceService.Total;
            }
          }
        }
      }, {
        key: "setDiscount",
        value: function setDiscount() {
          var _this3 = this;

          this.discountValid = true;
          this.discountNotFound = false;
          this.ecommerceService.getDiscount(this.voucher).then(function (discount) {
            if (discount == false) {
              _this3.discountNotFound = true;
            } else {
              // @ts-ignore
              _this3.discount = new _models_discount_model__WEBPACK_IMPORTED_MODULE_4__["Discount"](discount.id, discount.voucher, discount.expiry, discount.expired, discount.value);

              _this3.ecommerceService.checkDiscount(_this3.voucher).then(function (valid) {
                if (valid) {
                  // @ts-ignore
                  _this3.total -= discount.value;
                  _this3.discountValid = true;
                  _this3.discountSet = true;
                  _this3.orders.discount = _this3.discount;
                } else {
                  _this3.discountValid = false;
                }
              });
            }
          });
        }
      }, {
        key: "subscribeToFormChanges",
        value: function subscribeToFormChanges() {
          var _this4 = this;

          // initialize stream
          var addressFormValueChanges$ = this.addressForm.valueChanges;
          var userFormValueChanges$ = this.userForm.valueChanges; // subscribe to the stream

          addressFormValueChanges$.subscribe(function (x) {
            return _this4.events.push({
              event: 'STATUS CHANGED',
              object: x
            });
          });
          userFormValueChanges$.subscribe(function (x) {
            return _this4.events.push({
              event: 'STATUS CHANGED',
              object: x
            });
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.addressForm.reset();
          this.userForm.reset();
          this.selectedDelivery = null;
          this.discount = null;
          this.discountSet = false;
          this.voucher = "";
          this.discountValid = true;
          this.discountNotFound = false;
          this.isCollapsed = false;
        }
      }, {
        key: "user",
        get: function get() {
          return this.userForm.controls;
        }
      }, {
        key: "address",
        get: function get() {
          return this.addressForm.controls;
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
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
  "./src/app/ecommerce/products/filters/filters.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/ecommerce/products/filters/filters.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceProductsFiltersFiltersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-margin{\r\n  margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLW1hcmdpbntcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/products/filters/filters.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ecommerce/products/filters/filters.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FiltersComponent */

  /***/
  function srcAppEcommerceProductsFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
      return FiltersComponent;
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


    var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.component */
    "./src/app/ecommerce/products/products.component.ts");

    var FiltersComponent =
    /*#__PURE__*/
    function () {
      function FiltersComponent() {
        _classCallCheck(this, FiltersComponent);

        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // @ts-ignore

        this.productComponent = new _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]();
        this.options = [{
          name: 'Ankle boots',
          value: 'Ankle boots',
          checked: false
        }, {
          name: 'Boat shoes',
          value: 'Boat shoes',
          checked: false
        }, {
          name: 'Brogues',
          value: 'Brogues',
          checked: false
        }, {
          name: 'Chelsea boots',
          value: 'Chelsea boots',
          checked: false
        }, {
          name: 'Derby shoe',
          value: 'Derby shoe',
          checked: false
        }, {
          name: 'Flat sandals',
          value: 'Flat sandals',
          checked: false
        }, {
          name: 'Loafers & Slip ons',
          value: 'Loafers & Slip ons',
          checked: false
        }, {
          name: 'Oxford shoes',
          value: 'Oxford shoes',
          checked: false
        }, {
          name: 'T Bar shoes',
          value: 'T Bar shoes',
          checked: false
        }, {
          name: 'Trainers',
          value: 'Trainers',
          checked: false
        }];
      }

      _createClass(FiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onFilter();
        }
      }, {
        key: "onFilter",
        value: function onFilter() {
          var checkedOptions = this.options.filter(function (o) {
            return o.checked;
          }).map(function (o) {
            return o.name;
          });

          var checkedMerged = _toConsumableArray(checkedOptions);

          this.filter.emit(checkedMerged);
        }
      }, {
        key: "onSort",
        value: function onSort(event) {
          this.productComponent.onSort(event);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.options.forEach(function (item) {
            item.checked = false;
          });
        }
      }]);

      return FiltersComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FiltersComponent.prototype, "filter", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./filters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/filters/filters.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./filters.component.css */
      "./src/app/ecommerce/products/filters/filters.component.css")).default]
    })], FiltersComponent);
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


    __webpack_exports__["default"] = ".col-md-12 {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n\r\n.padding-0 {\r\n  padding-right: 0;\r\n  padding-left: 1;\r\n}\r\n\r\n.stock {\r\n  color: #ff0023;\r\n}\r\n\r\n.card-img-top {\r\n  width: 100%;\r\n  height: auto;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.no-padding{\r\n  padding: 0;\r\n}\r\n\r\n.btn-space {\r\n  margin-right: 5px;\r\n}\r\n\r\n.card {\r\n  border: none;\r\n}\r\n\r\n.no-margin{\r\n  margin: 0;\r\n}\r\n\r\n.product-name {\r\n  float: left;\r\n}\r\n\r\n.product-price {\r\n  float: right;\r\n}\r\n\r\n.product-type {\r\n  float: left;\r\n  opacity: 0.6;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.product-stock {\r\n  text-align: center;\r\n  opacity: 0.6;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.number-input input[type=\"number\"] {\r\n  -webkit-appearance: textfield;\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n}\r\n\r\n.number-input input[type=number]::-webkit-inner-spin-button,\r\n.number-input input[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.number-input {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.number-input button {\r\n  -webkit-appearance: none;\r\n  background-color: transparent;\r\n  border: none;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n\r\n.number-input button:before,\r\n.number-input button:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  content: '';\r\n  height: 2px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.number-input button.plus:after {\r\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\r\n          transform: translate(-50%, -50%) rotate(90deg);\r\n}\r\n\r\n.number-input input[type=number] {\r\n  text-align: center;\r\n}\r\n\r\n.number-input.number-input {\r\n  border: 1px solid #ced4da;\r\n  /*width: 10rem;*/\r\n  border-radius: .25rem;\r\n}\r\n\r\n.number-input.number-input button {\r\n  width: 2.6rem;\r\n  height: .7rem;\r\n}\r\n\r\n.number-input.number-input button.minus {\r\n  padding-left: 10px;\r\n}\r\n\r\n.number-input.number-input button:before,\r\n.number-input.number-input button:after {\r\n  width: .7rem;\r\n  background-color: #495057;\r\n}\r\n\r\n.number-input.number-input input[type=number] {\r\n  max-width: 4rem;\r\n  padding: .5rem;\r\n  border: 1px solid #ced4da;\r\n  border-width: 0 1px;\r\n  font-size: 1rem;\r\n  height: 2rem;\r\n  color: #495057;\r\n}\r\n\r\n@media not all and (min-resolution:.001dpcm) {\r\n  @supports (-webkit-appearance: none) and (stroke-color:transparent) {\r\n\r\n    .number-input.def-number-input.safari_only button:before,\r\n    .number-input.def-number-input.safari_only button:after {\r\n      margin-top: -.3rem;\r\n    }\r\n  }\r\n}\r\n\r\n.pagination /deep/ .ngx-pagination .current {\r\n  background: #161616;\r\n}\r\n\r\n.container {\r\n  padding: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzREFBOEM7VUFBOUMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7O0lBRUU7O01BRUUsa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1tZC0xMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxO1xyXG59XHJcblxyXG4uc3RvY2sge1xyXG4gIGNvbG9yOiAjZmYwMDIzO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmd7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJ0bi1zcGFjZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5uby1tYXJnaW57XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1uYW1lIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnByb2R1Y3QtcHJpY2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2R1Y3QtdHlwZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnByb2R1Y3Qtc3RvY2sge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4ubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IGJ1dHRvbiB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IGJ1dHRvbjpiZWZvcmUsXHJcbi5udW1iZXItaW5wdXQgYnV0dG9uOmFmdGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IGJ1dHRvbi5wbHVzOmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICAvKndpZHRoOiAxMHJlbTsqL1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQgYnV0dG9uIHtcclxuICB3aWR0aDogMi42cmVtO1xyXG4gIGhlaWdodDogLjdyZW07XHJcbn1cclxuXHJcbi5udW1iZXItaW5wdXQubnVtYmVyLWlucHV0IGJ1dHRvbi5taW51cyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBidXR0b246YmVmb3JlLFxyXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBidXR0b246YWZ0ZXIge1xyXG4gIHdpZHRoOiAuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIG1heC13aWR0aDogNHJlbTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci13aWR0aDogMCAxcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuQG1lZGlhIG5vdCBhbGwgYW5kIChtaW4tcmVzb2x1dGlvbjouMDAxZHBjbSkge1xyXG4gIEBzdXBwb3J0cyAoLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lKSBhbmQgKHN0cm9rZS1jb2xvcjp0cmFuc3BhcmVudCkge1xyXG5cclxuICAgIC5udW1iZXItaW5wdXQuZGVmLW51bWJlci1pbnB1dC5zYWZhcmlfb25seSBidXR0b246YmVmb3JlLFxyXG4gICAgLm51bWJlci1pbnB1dC5kZWYtbnVtYmVyLWlucHV0LnNhZmFyaV9vbmx5IGJ1dHRvbjphZnRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0uM3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6ICMxNjE2MTY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIl19 */";
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
    /* harmony import */


    var _services_SortingService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/SortingService */
    "./src/app/ecommerce/services/SortingService.ts");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(ecommerceService, sortingService) {
        _classCallCheck(this, ProductsComponent);

        this.ecommerceService = ecommerceService;
        this.sortingService = sortingService;
        this.productOrders = [];
        this.filteredProductOrders = [];
        this.products = [];
        this.productSelected = false;
        this.p = 1;
        this.isCollapsed = false;
        this.showProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
          productOrder.size = null;
          productOrder.quantity = 0;
        }
      }, {
        key: "loadProducts",
        value: function loadProducts() {
          var _this5 = this;

          this.ecommerceService.getAllProducts().subscribe(function (products) {
            _this5.products = products;

            _this5.products.forEach(function (product) {
              _this5.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0));
            });
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "loadOrders",
        value: function loadOrders() {
          var _this6 = this;

          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this6.shoppingCartOrders = _this6.ecommerceService.ProductOrders;
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.productOrders = [];
          this.loadProducts();
          this.filteredProductOrders = this.productOrders;
          this.ecommerceService.ProductOrders.productOrders = [];
          this.loadOrders();
          this.productSelected = false;
          this.p = 1;
          this.isCollapsed = false;
        }
      }, {
        key: "isProductSelected",
        value: function isProductSelected(product) {
          return this.getProductIndex(product) > -1;
        }
      }, {
        key: "decrementQuantity",
        value: function decrementQuantity(order) {
          if (order.quantity != 0) {
            order.quantity--;
          }
        }
      }, {
        key: "incrementQuantity",
        value: function incrementQuantity(order) {
          order.quantity++;
        }
      }, {
        key: "onSort",
        value: function onSort(sortingEvent) {
          this.sortingId = sortingEvent;

          _services_SortingService__WEBPACK_IMPORTED_MODULE_4__["SortingService"].sortDecider(this.filteredProductOrders, this.sortingId);
        }
      }, {
        key: "onFilter",
        value: function onFilter(checkedValues) {
          if (checkedValues.length) {
            this.filterProducts(checkedValues);
          } else {
            this.filteredProductOrders = this.productOrders;
          }
        }
      }, {
        key: "filterProducts",
        value: function filterProducts(checkedValues) {
          var filtered = this.filteredProductOrders = this.productOrders.filter(function (product) {
            var arr = Object.values(product.product.productType);
            return arr.map(function (p) {
              return p;
            }).find(function (name) {
              return checkedValues.find(function (c) {
                return c === name;
              });
            });
          });

          _services_SortingService__WEBPACK_IMPORTED_MODULE_4__["SortingService"].sortDecider(filtered, this.sortingId);

          this.filteredProductOrders = filtered;
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"]
      }, {
        type: _services_SortingService__WEBPACK_IMPORTED_MODULE_4__["SortingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductsComponent.prototype, "showProducts", void 0);
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
  "./src/app/ecommerce/products/sorting/sorting.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ecommerce/products/sorting/sorting.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SortingComponent */

  /***/
  function srcAppEcommerceProductsSortingSortingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortingComponent", function () {
      return SortingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortingComponent =
    /*#__PURE__*/
    function () {
      function SortingComponent() {
        _classCallCheck(this, SortingComponent);

        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sorting = [{
          name: 'Name (A-Z)',
          value: 'Name (A-Z)'
        }, {
          name: 'Name (Z-A)',
          value: 'Name (Z-A)'
        }, {
          name: 'Price (Low-To-High)',
          value: 'Price (Low-To-High)'
        }, {
          name: 'Price (High-To-Low)',
          value: 'Price (High-To-Low)'
        }];
      }

      _createClass(SortingComponent, [{
        key: "onSort",
        value: function onSort(sortingId) {
          this.sort.emit(sortingId);
        }
      }]);

      return SortingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SortingComponent.prototype, "sort", void 0);
    SortingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sorting',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sorting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/products/sorting/sorting.component.html")).default
    })], SortingComponent);
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
    /* harmony import */


    var _models_discount_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/discount.model */
    "./src/app/ecommerce/models/discount.model.ts");
    /* harmony import */


    var _models_return_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/return.model */
    "./src/app/ecommerce/models/return.model.ts");

    var EcommerceService =
    /*#__PURE__*/
    function () {
      function EcommerceService(http) {
        _classCallCheck(this, EcommerceService);

        this.http = http;
        this.productsUrl = "/api/products";
        this.ordersUrl = "/api/orders";
        this.cancelOrderUrl = "/api/orders/cancel";
        this.deliveriesUrl = "/api/deliveries";
        this.discountUrl = "/api/discounts";
        this.checkDiscountUrl = "api/discounts/check";
        this.checkReturnsUrl = "api/returns/check";
        this.returnUrl = "/api/returns";
        this.returnApproveUrl = "/api/returns/approve";
        this.returnCancelUrl = "/api/returns/cancel";
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orderReturn = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orderCheck = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.productOrderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ordersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.returnExists = false;
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
        key: "cancelOrder",
        value: function cancelOrder(reference) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          return this.http.post(this.cancelOrderUrl, params);
        }
      }, {
        key: "saveReturn",
        value: function saveReturn(aReturn) {
          return this.http.post(this.returnUrl, aReturn);
        }
      }, {
        key: "checkReturn",
        value: function checkReturn(reference) {
          var _this7 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          var promise = new Promise(function (resolve) {
            var apiURL = _this7.checkReturnsUrl;

            _this7.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this7.returnExists = res;
              resolve(_this7.returnExists);
            });
          });
          return promise;
        }
      }, {
        key: "getAllDeliveries",
        value: function getAllDeliveries() {
          return this.http.get(this.deliveriesUrl);
        }
      }, {
        key: "getOrderReturn",
        value: function getOrderReturn(orderReference) {
          var _this8 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", orderReference);
          var promise = new Promise(function (resolve, reject) {
            var apiURL = _this8.ordersUrl;

            _this8.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this8.orderReturn.productOrders = res.orderProducts;
              _this8.orderReturn.discount = res.discount;
              _this8.orderReturn.user = res.user;
              _this8.orderReturn.address = res.address;
              _this8.orderReturn.delivery = res.delivery;
              _this8.orderReturn.reference = res.reference;
              resolve(_this8.orderReturn);
            }).catch(function (err) {
              resolve(false);
            });
          });
          return promise;
        }
      }, {
        key: "getOrder",
        value: function getOrder(reference) {
          var _this9 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          var promise = new Promise(function (resolve, reject) {
            var apiURL = _this9.ordersUrl;

            _this9.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this9.orderCheck.productOrders = res.orderProducts;
              _this9.orderCheck.discount = res.discount;
              _this9.orderCheck.user = res.user;
              _this9.orderCheck.address = res.address;
              _this9.orderCheck.delivery = res.delivery;
              _this9.orderCheck.reference = res.reference;
              _this9.orderCheck.status = res.status;
              var date = new Date(res.dateCreated);
              date.setMonth(date.getMonth() - 1);
              _this9.orderCheck.dateCreated = date;
              resolve(_this9.orderCheck);
            }).catch(function (err) {
              resolve(false);
            });
          });
          return promise;
        }
      }, {
        key: "getReturn",
        value: function getReturn(reference) {
          var _this10 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          var promise = new Promise(function (resolve, reject) {
            var apiURL = _this10.returnUrl;

            _this10.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this10.aReturn = new _models_return_model__WEBPACK_IMPORTED_MODULE_6__["ReturnS"](res.returnProducts, res.user, res.address, res.amount, res.orderReference);
              _this10.aReturn.status = res.status;
              _this10.aReturn.reference = res.reference;
              resolve(_this10.aReturn);
            }).catch(function (err) {
              resolve(false);
            });
          });
          return promise;
        }
      }, {
        key: "cancelReturn",
        value: function cancelReturn(reference) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          return this.http.post(this.returnCancelUrl, params);
        }
      }, {
        key: "approveReturn",
        value: function approveReturn(reference) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("reference", reference);
          return this.http.post(this.returnApproveUrl, params);
        }
      }, {
        key: "getDiscount",
        value: function getDiscount(voucher) {
          var _this11 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("voucher", voucher);
          var promise = new Promise(function (resolve, reject) {
            var apiURL = _this11.discountUrl;

            _this11.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this11.discount = new _models_discount_model__WEBPACK_IMPORTED_MODULE_5__["Discount"](res.id, res.voucher, res.expiry, res.expired, res.value);
              resolve(_this11.discount);
            }).catch(function (err) {
              resolve(false);
            });
          });
          return promise;
        }
      }, {
        key: "checkDiscount",
        value: function checkDiscount(voucher) {
          var _this12 = this;

          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set("voucher", voucher);
          var promise = new Promise(function (resolve) {
            var apiURL = _this12.checkDiscountUrl;

            _this12.http.get(apiURL, {
              params: params
            }).toPromise().then(function (res) {
              // Success
              _this12.discountValid = res;
              resolve(_this12.discountValid);
            });
          });
          return promise;
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
  "./src/app/ecommerce/services/SortingService.ts":
  /*!******************************************************!*\
    !*** ./src/app/ecommerce/services/SortingService.ts ***!
    \******************************************************/

  /*! exports provided: SortingService */

  /***/
  function srcAppEcommerceServicesSortingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortingService", function () {
      return SortingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SortingService_1;

    var SortingService = SortingService_1 =
    /*#__PURE__*/
    function () {
      function SortingService() {
        _classCallCheck(this, SortingService);
      }

      _createClass(SortingService, null, [{
        key: "sortDecider",
        value: function sortDecider(filtered, sortingId) {
          if (sortingId === 0) {
            filtered = SortingService_1.sortByNameAlphabeticallyAscending(filtered);
          }

          if (sortingId === 1) {
            filtered = SortingService_1.sortByNameAlphabeticallyDescending(filtered);
          }

          if (sortingId === 2) {
            filtered = SortingService_1.sortByPriceAscending(filtered);
          }

          if (sortingId === 3) {
            filtered = SortingService_1.sortByPriceDescending(filtered);
          }

          return filtered;
        }
      }, {
        key: "sortByNameAlphabeticallyAscending",
        value: function sortByNameAlphabeticallyAscending(products) {
          products.sort(function (a, b) {
            return a.product.name.localeCompare(b.product.name);
          });
          return products;
        }
      }, {
        key: "sortByNameAlphabeticallyDescending",
        value: function sortByNameAlphabeticallyDescending(products) {
          products.sort(function (a, b) {
            return a.product.name.localeCompare(b.product.name);
          }).reverse();
          return products;
        }
      }, {
        key: "sortByPriceAscending",
        value: function sortByPriceAscending(products) {
          products.sort(function (a, b) {
            return a.product.price - b.product.price;
          });
          return products;
        }
      }, {
        key: "sortByPriceDescending",
        value: function sortByPriceDescending(products) {
          products.sort(function (a, b) {
            return a.product.price - b.product.price;
          }).reverse();
          return products;
        }
      }]);

      return SortingService;
    }();

    SortingService = SortingService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SortingService);
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ShoppingCartComponent =
    /*#__PURE__*/
    function () {
      function ShoppingCartComponent(ecommerceService, router) {
        _classCallCheck(this, ShoppingCartComponent);

        this.ecommerceService = ecommerceService;
        this.router = router;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router = router;
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
          var _this13 = this;

          this.sub = this.ecommerceService.OrdersChanged.subscribe(function () {
            _this13.total = _this13.calculateTotal(_this13.orders.productOrders);
          });
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          var _this14 = this;

          this.sub = this.ecommerceService.ProductOrderChanged.subscribe(function () {
            var productOrder = _this14.ecommerceService.SelectedProductOrder;

            if (productOrder) {
              _this14.orders.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_4__["ProductOrder"](productOrder.product, productOrder.quantity, productOrder.size));
            }

            _this14.ecommerceService.ProductOrders = _this14.orders;
            _this14.orders = _this14.ecommerceService.ProductOrders;
            _this14.total = _this14.calculateTotal(_this14.orders.productOrders);
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
          this.router.navigate(['/order']);
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
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
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
  "./src/app/ecommerce/support/chat/chat.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/ecommerce/support/chat/chat.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceSupportChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zdXBwb3J0L2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ecommerce/support/chat/chat.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ecommerce/support/chat/chat.component.ts ***!
    \**********************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppEcommerceSupportChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent() {
        _classCallCheck(this, ChatComponent);

        this.isLiveChatWidgetLoaded = false;
        this.visitor = {
          name: 'John Doe',
          email: 'john@doe.com'
        };
        this.params = [{
          name: 'Login',
          value: 'joe_public'
        }, {
          name: 'Account ID',
          value: 'ABCD1234'
        }, {
          name: 'Total order value',
          value: '$123'
        }];
      }

      _createClass(ChatComponent, [{
        key: "onChatLoaded",
        value: function onChatLoaded(api) {
          var _this15 = this;

          this.liveChatApi = api;
          this.isLiveChatWidgetLoaded = true; // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:

          api.on_after_load = function () {
            _this15.liveChatApi = api;
            _this15.isLiveChatWidgetLoaded = true;
          };
        }
      }, {
        key: "openChatWindow",
        value: function openChatWindow() {
          if (this.isLiveChatWidgetLoaded) {
            this.liveChatWidget.openChatWindow(); // You can also use methods directly on liveChatApi instance
            // for more details plese read our documentation
            // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
            // this.liveChatApi.open_chat_window();
          }

          ;
        }
      }, {
        key: "hideChatWindow",
        value: function hideChatWindow() {
          if (this.isLiveChatWidgetLoaded) {
            this.liveChatWidget.minimizeChatWindow(); // You can also use methods directly on liveChatApi instance
            // for more details plese read our documentation
            // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
            // this.liveChatApi.minimize_chat_window();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('liveChatWidget', {
      static: false
    })], ChatComponent.prototype, "liveChatWidget", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.css */
      "./src/app/ecommerce/support/chat/chat.component.css")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/support/orders/orders.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/ecommerce/support/orders/orders.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceSupportOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zdXBwb3J0L29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/support/orders/orders.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ecommerce/support/orders/orders.component.ts ***!
    \**************************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppEcommerceSupportOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/product-orders.model */
    "./src/app/ecommerce/models/product-orders.model.ts");
    /* harmony import */


    var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");

    var OrdersComponent_1;

    var OrdersComponent = OrdersComponent_1 =
    /*#__PURE__*/
    function () {
      function OrdersComponent(ecommerceService) {
        _classCallCheck(this, OrdersComponent);

        this.ecommerceService = ecommerceService;
        this.order = null;
        this.products = [];
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.order = null;
                    this.products = [];
                    this.errOrderNotFound = false;
                    _context.next = 5;
                    return this.ecommerceService.getOrder(this.orderReference).then(function (order) {
                      if (order) {
                        _this16.order = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"](); // @ts-ignore

                        _this16.order.dateCreated = order.dateCreated; // @ts-ignore

                        _this16.order.status = order.status; // @ts-ignore

                        _this16.order.productOrders = order.productOrders; // @ts-ignore

                        _this16.order.address = order.address; // @ts-ignore

                        _this16.order.delivery = order.delivery; // @ts-ignore

                        _this16.order.discount = order.discount; // @ts-ignore

                        _this16.order.reference = order.reference;

                        _this16.order.productOrders.forEach(function (item) {
                          _this16.products.push({
                            // @ts-ignore
                            'product': item.pk.product,
                            'size': item.productSize,
                            'quantity': item.quantity
                          });
                        });

                        var deliveryDate = OrdersComponent_1.addDays(_this16.order.dateCreated, _this16.order.delivery.days);
                        _this16.deliveryDate = deliveryDate.getDate() + " " + _this16.monthNames[deliveryDate.getMonth()] + " " + deliveryDate.getFullYear();
                      } else {
                        _this16.errOrderNotFound = true;
                      }
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "reset",
        value: function reset() {
          this.orderReference = null;
          this.order = null;
          this.errOrderNotFound = false;
          this.products = [];
        }
      }, {
        key: "cancelOrder",
        value: function cancelOrder() {
          if (confirm("Are you sure you would like to cancel this order?")) {
            var reference = this.order.reference;
            this.ecommerceService.cancelOrder(this.order.reference).subscribe();
            this.reset();
            this.orderReference = reference;
            this.getOrder();
          }
        }
      }], [{
        key: "addDays",
        value: function addDays(date, days) {
          var copy = new Date(Number(date));
          copy.setDate(date.getDate() + days + 1);
          return copy;
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"]
      }];
    };

    OrdersComponent = OrdersComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/orders/orders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/ecommerce/support/orders/orders.component.css")).default]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/support/returns/returns.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/ecommerce/support/returns/returns.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceSupportReturnsReturnsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".number-input input[type=\"number\"] {\r\n  -webkit-appearance: textfield;\r\n  -moz-appearance: textfield;\r\n  appearance: textfield;\r\n}\r\n\r\n.number-input input[type=number]::-webkit-inner-spin-button,\r\n.number-input input[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.number-input {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.number-input button {\r\n  -webkit-appearance: none;\r\n  background-color: transparent;\r\n  border: none;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n\r\n.number-input button:before,\r\n.number-input button:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  content: '';\r\n  height: 2px;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.number-input button.plus:after {\r\n  -webkit-transform: translate(-50%, -50%) rotate(90deg);\r\n          transform: translate(-50%, -50%) rotate(90deg);\r\n}\r\n\r\n.number-input input[type=number] {\r\n  text-align: center;\r\n}\r\n\r\n.number-input.number-input {\r\n  /*border: 1px solid #ced4da;*/\r\n  width: 10rem;\r\n  /*border-radius: .25rem;*/\r\n}\r\n\r\n.number-input.number-input button {\r\n  width: 2.6rem;\r\n  height: .7rem;\r\n}\r\n\r\n.number-input.number-input button.minus {\r\n  padding-left: 10px;\r\n}\r\n\r\n.number-input.number-input button:before,\r\n.number-input.number-input button:after {\r\n  width: .7rem;\r\n  background-color: #495057;\r\n}\r\n\r\n.number-input.number-input input[type=number] {\r\n  max-width: 4rem;\r\n  padding: .5rem;\r\n  font-size: 1rem;\r\n  height: 2rem;\r\n  color: #495057;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL3N1cHBvcnQvcmV0dXJucy9yZXR1cm5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzREFBOEM7VUFBOUMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2Uvc3VwcG9ydC9yZXR1cm5zL3JldHVybnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXItaW5wdXQgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLm51bWJlci1pbnB1dCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCBidXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCBidXR0b246YmVmb3JlLFxyXG4ubnVtYmVyLWlucHV0IGJ1dHRvbjphZnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBoZWlnaHQ6IDJweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCBidXR0b24ucGx1czphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dCBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQge1xyXG4gIC8qYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTsqL1xyXG4gIHdpZHRoOiAxMHJlbTtcclxuICAvKmJvcmRlci1yYWRpdXM6IC4yNXJlbTsqL1xyXG59XHJcblxyXG4ubnVtYmVyLWlucHV0Lm51bWJlci1pbnB1dCBidXR0b24ge1xyXG4gIHdpZHRoOiAyLjZyZW07XHJcbiAgaGVpZ2h0OiAuN3JlbTtcclxufVxyXG5cclxuLm51bWJlci1pbnB1dC5udW1iZXItaW5wdXQgYnV0dG9uLm1pbnVzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5udW1iZXItaW5wdXQubnVtYmVyLWlucHV0IGJ1dHRvbjpiZWZvcmUsXHJcbi5udW1iZXItaW5wdXQubnVtYmVyLWlucHV0IGJ1dHRvbjphZnRlciB7XHJcbiAgd2lkdGg6IC43cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5udW1iZXItaW5wdXQubnVtYmVyLWlucHV0IGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgbWF4LXdpZHRoOiA0cmVtO1xyXG4gIHBhZGRpbmc6IC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ecommerce/support/returns/returns.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ecommerce/support/returns/returns.component.ts ***!
    \****************************************************************/

  /*! exports provided: ReturnsComponent */

  /***/
  function srcAppEcommerceSupportReturnsReturnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function () {
      return ReturnsComponent;
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
    /*! ../../services/EcommerceService */
    "./src/app/ecommerce/services/EcommerceService.ts");
    /* harmony import */


    var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/product-orders.model */
    "./src/app/ecommerce/models/product-orders.model.ts");
    /* harmony import */


    var _models_return_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/return.model */
    "./src/app/ecommerce/models/return.model.ts");
    /* harmony import */


    var _models_return_product_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/return-product.model */
    "./src/app/ecommerce/models/return-product.model.ts");

    var ReturnsComponent =
    /*#__PURE__*/
    function () {
      function ReturnsComponent(ecommerceService) {
        _classCallCheck(this, ReturnsComponent);

        this.ecommerceService = ecommerceService;
        this.errOrderNotFound = false;
        this.errReturnExists = false;
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_3__["ProductOrders"]();
        this.returnProducts = [];
        this.productsToReturn = [];
        this.errReturnNotFound = false;
        this.returnRequestFinished = false;
        this.requestCompleted = false;
      }

      _createClass(ReturnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getOrder",
        value: function getOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.errOrderNotFound = false;
                    this.errReturnExists = false;
                    this.requestCompleted = false;
                    this.returnProducts = [];
                    _context2.next = 6;
                    return this.ecommerceService.checkReturn(this.orderReference).then(function (rtn) {
                      // @ts-ignore
                      _this17.errReturnExists = rtn;
                      console.log(rtn);
                    });

                  case 6:
                    if (!(this.errReturnExists == false)) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 9;
                    return this.ecommerceService.getOrderReturn(this.orderReference).then(function (order) {
                      // @ts-ignore
                      _this17.orders.productOrders = order.productOrders; // @ts-ignore

                      _this17.orders.discount = order.discount; // @ts-ignore

                      _this17.orders.address = order.address; // @ts-ignore

                      _this17.orders.user = order.user; // @ts-ignore

                      _this17.orders.delivery = order.delivery; // @ts-ignore

                      _this17.orders.reference = order.reference;
                      _this17.returnProducts = [];
                      _this17.errOrderNotFound = false;

                      _this17.orders.productOrders.forEach(function (item) {
                        _this17.returnProducts.push({
                          'checked': false,
                          // @ts-ignore
                          'product': item.pk.product,
                          'size': item.productSize,
                          'quantity': item.quantity,
                          'quantityToReturn': 1
                        });
                      });
                    }).catch(function (err) {
                      _this17.errOrderNotFound = true;
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "decrementQuantity",
        value: function decrementQuantity(product) {
          if (product.quantityToReturn != 1) {
            product.quantityToReturn--;
          }
        }
      }, {
        key: "incrementQuantity",
        value: function incrementQuantity(product) {
          if (product.quantityToReturn == product.quantity) {} else {
            product.quantityToReturn++;
          }
        }
      }, {
        key: "createReturnRequest",
        value: function createReturnRequest() {
          var _this18 = this;

          this.productsToReturn = [];
          Array.from(this.returnProducts).forEach(function (rtnProduct) {
            // @ts-ignore
            if (rtnProduct.checked) {
              // @ts-ignore
              _this18.productsToReturn.push(new _models_return_product_model__WEBPACK_IMPORTED_MODULE_5__["ReturnProduct"](rtnProduct.product, rtnProduct.size, rtnProduct.quantityToReturn));
            }
          });

          if (this.orders.discount) {
            this.refund = this.findRefundSum() - this.orders.discount.value;
          } else {
            this.refund = this.findRefundSum();
          }

          var rtn = new _models_return_model__WEBPACK_IMPORTED_MODULE_4__["ReturnS"](this.productsToReturn, this.orders.user, this.orders.address, this.refund, this.orders.reference);
          this.returnRequestFinished = true;
          this.ecommerceService.saveReturn(rtn).subscribe();
          this.requestCompleted = true;
          this.returnProducts = [];
        }
      }, {
        key: "reset",
        value: function reset() {
          this.orderReference = '';
          this.customerEmail = '';
          this.errOrderNotFound = false;
          this.errReturnExists = false;
          this.errReturnNotFound = false;
          this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_3__["ProductOrders"]();
          this.returnProducts = [];
          this.requestCompleted = false;
          this.productsToReturn = [];
          this.refund = 0;
          this.aReturn = null;
          this.returnRequestFinished = false;
          this.aCheckReturn = null;
        }
      }, {
        key: "findRefundSum",
        value: function findRefundSum() {
          var sum = 0;
          this.productsToReturn.forEach(function (item) {
            sum += item.product.price * item.quantityToReturn;
          });
          return sum;
        }
      }, {
        key: "getReturn",
        value: function getReturn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this19 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.aCheckReturn = null;
                    this.errReturnNotFound = false;
                    _context3.next = 4;
                    return this.ecommerceService.getReturn(this.returnReference).then(function (aReturn) {
                      if (aReturn) {
                        // @ts-ignore
                        _this19.aCheckReturn = new _models_return_model__WEBPACK_IMPORTED_MODULE_4__["ReturnS"](aReturn.returnProducts, aReturn.user, aReturn.address, aReturn.amount, aReturn.orderReference); // @ts-ignore

                        _this19.aCheckReturn.status = aReturn.status; // @ts-ignore

                        _this19.aCheckReturn.reference = aReturn.reference;
                      } else {
                        _this19.aCheckReturn = null;
                        _this19.errReturnNotFound = true;
                      }
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "cancelReturn",
        value: function cancelReturn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (confirm("Are you sure you would like to cancel this return request?")) {
                      this.ecommerceService.cancelReturn(this.aCheckReturn.reference).subscribe();
                      this.reset();
                    }

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "approveReturn",
        value: function approveReturn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (confirm("Are you sure you would like to approve this return request?")) {
                      this.ecommerceService.approveReturn(this.aCheckReturn.reference).subscribe();
                      this.reset();
                    }

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ReturnsComponent;
    }();

    ReturnsComponent.ctorParameters = function () {
      return [{
        type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]
      }];
    };

    ReturnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-returns',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./returns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/returns/returns.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./returns.component.css */
      "./src/app/ecommerce/support/returns/returns.component.css")).default]
    })], ReturnsComponent);
    /***/
  },

  /***/
  "./src/app/ecommerce/support/support.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/ecommerce/support/support.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcommerceSupportSupportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ecommerce/support/support.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ecommerce/support/support.component.ts ***!
    \********************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function srcAppEcommerceSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SupportComponent =
    /*#__PURE__*/
    function () {
      function SupportComponent() {
        _classCallCheck(this, SupportComponent);

        this.isReturnsCollapsed = false;
        this.isReturnsStatusCollapsed = false;
        this.isDeliveryCollapsed = false;
      }

      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SupportComponent;
    }();

    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ecommerce/support/support.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.component.css */
      "./src/app/ecommerce/support/support.component.css")).default]
    })], SupportComponent);
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

      if (window) {
        window.console.log = function () {};
      }
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
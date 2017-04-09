webpackJsonp([2],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0906d34f", module.exports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/vanessap/Documents/Projects/School/CEN4010/Vue-Art-Gallery/src/components/CEN4010/login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0906d34f", Component.options)
  } else {
    hotAPI.reload("data-v-0906d34f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  FILENAME: helper.js
  DESCRIPTION: our helper file that hold all generic functions that have been refactored to be used installing
  multiple areas.
  NOTES: We are using Vue-Resource Http Methods. The error and result are both response objects
  REFERENCES: https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
  AUTHORS: Alvaro Castillo, Vanessa Plugues
*/

var Helper = {};

Helper.requestStatus = false;

// DESCRIPTION: Makes http requests, using the node module vue-resource, to ASAPi based on the config.url. 
// PRE-CONDITION: All parameters => "context" is *this (vue instance), "config" is an object
// with the fields, or configurations, that will be used as the http request parameters, with addtional
// fields "get" and "post" to determine the type of request.  
// NOTES: It calls massageResponse()
// POST-CONDITIONS: Returns a callback with the http request response. A successful response should be an object.
// A failure should be a string.
Helper.makeRequest = function (context, config, callback) {
  if (config.get === true) {
    context.$http.get(config.url, config.options).then(function (res) {
      var response = Helper.massageResponse(res.body);
      if (Helper.requestStatus) return callback(null, response);
      return callback(response);
    }, function (error) {
      var response = Helper.massageResponse(error.body);
      return callback(response);
    });
  } else {
    return callback('We are not handling POSTs');
  }
};

// DESCRIPTION: Massages the http request's response body.
// PRE-CONDITION: Parameter => "body" has to be an object, at the very least with the key value of "data",
// where "data" represents the results of the request.
// NOTES: requestStatus is being used to later determine failure/successful request.
// POST-CONDITIONS: Returns object with data or string with error message.
Helper.massageResponse = function (body) {
  Helper.requestStatus = false;
  if (body === null) return 'Error Making Your Request: Possible Timeout or Connection Issue';
  if (body.status && body.status.status === false) return body.status.description;
  if (body.statusCode) return body.message || body.error || body.statusCode;
  Helper.requestStatus = true;
  return body.data;
};

// DESCRIPTION: Sets environment variables.
// PRECONDITION: Must require a config file.
// NOTES: We are not using the node modules config and dotenv becuase installing these were
// giving us errors, so we extracted the config.json file entirely and the ability to use dotenv 
// POST-CONDITIONS: Returns an object with the configuration options. 
Helper.getEnvironmentVariables = function () {
  var config = __webpack_require__(83);
  var sdk = config.application;
  return sdk;
};

module.exports = Helper;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  FILENAME: Base.js
  DESCRIPTION: Is the class that sets all base configuration for InContact Requests,
  such as the "apiUrl", "headers", "timeout"
*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var config = __webpack_require__(78).getEnvironmentVariables();

module.exports = function Base(token) {
  _classCallCheck(this, Base);

  this.apiUrl = config.baseUrl;
  this.options = {
    headers: { Authorization: 'Bearer ' + token },
    timeout: config.timeout
  };
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  FILENAME: Customer.js
  DESCRIPTION: iis the class that creates the the necessary object(s) needed
  to make specific Customer requests. These include, getting the customer profile (getProfileObject)
  configuration object and so on.
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = __webpack_require__(78).getEnvironmentVariables();
var Base = __webpack_require__(79);

module.exports = function (_Base) {
  _inherits(Customer, _Base);

  function Customer(customerId, store, token) {
    _classCallCheck(this, Customer);

    var _this = _possibleConstructorReturn(this, (Customer.__proto__ || Object.getPrototypeOf(Customer)).call(this, token));

    _this.customerId = customerId || 0;
    _this.store = store || 0;
    return _this;
  }

  // Description: Prepares getting the custmoer profile object.
  // Notes: Intentions are that this function will be used to return the configuration
  // object for http-requests.
  // Post-Condition: Returns an object that ultimately follows the Vue-Resource
  // http request get paramters


  _createClass(Customer, [{
    key: 'getProfileObject',
    value: function getProfileObject() {
      var endpoint = config.endpoints.getCustomerProfile;
      var completeUri = endpoint.uri.replace('{customerId}', this.customerId).replace('{store}', this.store);
      return {
        url: '' + this.apiUrl + completeUri,
        get: config.endpoints.getCustomerProfile.method === 'GET' ? true : false,
        post: config.endpoints.getCustomerProfile.method === 'POST' ? true : false,
        options: this.options
      };
    }
  }]);

  return Customer;
}(Base);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  FILENAME: CustomerTransaction.js
  DESCRIPTION: is the class that creates the the necessary object(s) needed
  to make specific Customer Transaction requests. These include, getting the
  customer transaction history (getTransactionObject) configuration object and so on.
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = __webpack_require__(78).getEnvironmentVariables();
var Base = __webpack_require__(79);

module.exports = function (_Base) {
  _inherits(CustomerTransaction, _Base);

  function CustomerTransaction(customerId, store, token) {
    _classCallCheck(this, CustomerTransaction);

    var _this = _possibleConstructorReturn(this, (CustomerTransaction.__proto__ || Object.getPrototypeOf(CustomerTransaction)).call(this, token));

    _this.customerId = customerId || 0;
    _this.store = store || 0;
    return _this;
  }

  // Description: Prepares getting the custmoer transaction history object.
  // Notes: Intentions are that this function will be used to return the configuration
  // object for http-requests related to getting the customer transaction history.
  // Post-Condition: Returns an object that ultimately follows the Vue-Resource
  // http request get paramters


  _createClass(CustomerTransaction, [{
    key: 'getTransactionObject',
    value: function getTransactionObject() {
      var endpoint = config.endpoints.getCustomerTransactionHistory;
      var completeUri = endpoint.uri.replace('{customerId}', this.customerId).replace('{store}', this.store);

      return {
        url: '' + this.apiUrl + completeUri,
        get: config.endpoints.getCustomerTransactionHistory.method === 'GET' ? true : false,
        post: config.endpoints.getCustomerTransactionHistory.method === 'POST' ? true : false,
        options: this.options
      };
    }
  }]);

  return CustomerTransaction;
}(Base);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  FILENAME: Search.js
  DESCRIPTION:
  AUTHORS: Alvaro Castillo
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var config = __webpack_require__(78).getEnvironmentVariables();
var Base = __webpack_require__(79);

module.exports = function (_Base) {
  _inherits(Search, _Base);

  function Search(store, employeeId, query, token) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, token));

    _this.employeeId = employeeId || 0;
    _this.query = query || 0;
    _this.store = store || 0;
    return _this;
  }

  _createClass(Search, [{
    key: 'searchObject',
    value: function searchObject() {
      var endpoint = config.endpoints.searchCustomers;
      var completeUri = endpoint.uri.replace('{employee}', this.employeeId).replace('{store}', this.store).replace('{query}', this.query);
      return {
        url: '' + this.apiUrl + completeUri,
        get: config.endpoints.searchCustomers.method === 'GET' ? true : false,
        options: this.options
      };
    }
  }]);

  return Search;
}(Base);

/***/ }),

/***/ 83:
/***/ (function(module, exports) {


/*
  FILENAME: config.js
  DESCRIPTION: contains InContact configuration options
  NOTES: We are not using the node modules config and dotenv becuase installing these were
  giving us errors, so we extracted the config.json file entirely and the ability to use dotenv,
  in order for us to continue developing.
*/

module.exports = {
  application: {
    name: 'In-Contact',
    version: '0.1.0',
    baseUrl: 'http://localhost:9988', // TODO: Change to https://asapiuat.cityfurniture.com, when CORS is enabled.
    timeout: 5000,
    endpoints: {
      getCustomerProfile: {
        label: 'Get Customer Profile',
        method: 'GET',
        uri: '/customer/{customerId}/store/{store}'
      },
      getCustomerTransactionHistory: {
        label: 'Get Customer Transaction History',
        method: 'GET',
        uri: '/customer/{customerId}/orders/store/{store}'
      },
      searchCustomers: {
        label: 'Search for customers with a query param (phone number)',
        method: 'GET',
        uri: '/customer/search/store/{store}/employee/{employee}?searchString={query}'
      }
    }
  }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

/*
  FILENAME: index.js
  DESCRIPTION: The root library of InContact Functions And Functionality.
  FUNCTIONS: Getting Customer Profile, and Transaction History, Search Results
  AUTHORS: Alvaro Castillo, Vanessa Plugues
*/

var Customer = __webpack_require__(80);
var CustomerTransaction = __webpack_require__(81);
var Search = __webpack_require__(82);
var Helper = __webpack_require__(78);

var inContact = {};

// DESCRIPTION: Gets you the customer profile 
// PRE-CONDITION: All parameters => "context" is *this (vue instance), "customerId", "store" (store number),
// and "token" (authorization token). 
// NOTES: Initiates a new Customer Class.
// POST-CONDITIONS: Returns a callback. An error if the request failed, a success with the result if the request
// when successful.
inContact.getCustomerProfile = function (context, customerId, store, token, callback) {
  var config = new Customer(customerId, store, token).getProfileObject();
  return Helper.makeRequest(context, config, callback);
};

// DESCRIPTION: Gets you the customer order transaction history
// PRE-CONDITION: All parameters => "context" is *this (vue instance), "customerId", "store" (store number),
// and "token" (authorization token). 
// NOTES: Initiates a new CustomerTransaction Class
// POST-CONDITIONS: Returns a callback. An error if the request failed, a success with the result if the request
// when successful.
inContact.getTransactionHistory = function (context, customerId, store, token, callback) {
  var config = new CustomerTransaction(customerId, store, token).getTransactionObject();
  return Helper.makeRequest(context, config, callback);
};

inContact.searchCustomers = function (context, store, employeeId, token, query, callback) {
  var config = new Search(store, employeeId, query, token).searchObject();
  return Helper.makeRequest(context, config, callback);
};

module.exports = inContact;

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

/*
  FILENAME: parse.js
  DESCRIPTION: Parses results from InContact API Calls
  AUTHORS: Alvaro Castillo, Rabea Abdelwahab
*/

var parse = {};

parse.parsePhone = function (context, phone) {
  var cleanPhones = {};
  if (phone && Object.keys(phone).length > 0) {
    var regexExpression = /^phone\d$/g;
    for (var prop in phone) {
      if (prop.match(regexExpression) !== null) {
        var propLabel = prop + 'Label';
        if (typeof phone[propLabel] !== 'undefined' && phone[propLabel].length > 0) {
          cleanPhones[phone[propLabel]] = phone[prop];
        }
      }
    }
    context.customer.phone = cleanPhones;
  } else {
    context.customer.phone = 'N/A';
  }
};

parse.parseAddress = function (context, address, type) {
  if (address && Object.keys(address).length > 0) {
    // the looping will be on all items of the object, to join at the end we
    // push to an array which helps in to things:
    // 1. smaller snippet
    // 2. if the whole array is empty, we get an empty string instead of commas.

    var addressArray = [];
    for (var prop in address) {
      var cleanField = address[prop] ? address[prop].trim() : '';
      if (cleanField.length > 0) {
        addressArray.push(cleanField.toLowerCase());
      }
    }
    if (addressArray.length > 0) {
      context.customer[type + 'Address'] = addressArray.join(', ');
    } else {
      context.customer[type + 'Address'] = 'N/A';
    }
  } else {
    context.customer[type + 'Address'] = 'N/A';
  }
};

parse.parseCustomerInfo = function (context, res) {
  var listOfCustomers = res.map(function (customer) {
    var customerObject = {
      firstName: customer.firstName.toLowerCase(),
      lastName: customer.lastName.toLowerCase(),
      email: customer.email.toLowerCase(),
      customerId: customer.customerId,
      url: 'customers/' + customer.customerId
    };
    return customerObject;
  });
  context.customers = listOfCustomers;
};

module.exports = parse;

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_CEN4010__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_CEN4010___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_js_CEN4010__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_CEN4010_parse__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_CEN4010_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_js_CEN4010_parse__);
//
//
//
//
//
//
//
//
//
//
//

// Dream Team Modules



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "login",
    data: function data() {
        return {};
    },

    methods: {},
    mounted: function mounted() {},
    updated: function updated() {}
});

/***/ })

});
webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: "Joe"
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "City" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", id: "city", onChange: this.props.handleChange },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "homeType" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "homeType",
              id: "homeType",
              onChange: this.props.handleChange
            },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "bedrooms" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            {
              name: "bedrooms",
              id: "bedrooms",
              onChange: this.props.handleChange
            },
            _react2.default.createElement(
              "option",
              { value: "0" },
              "0+ br"
            ),
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              className: "min-price",
              onChange: this.props.handleChange,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              className: "max-price",
              onChange: this.props.handleChange,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", {
              type: "text",
              name: "min_floor_space",
              className: "min-floor-space",
              onChange: this.props.handleChange,
              value: this.props.globalState.min_floor_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_floor_space",
              className: "max-floor-space",
              onChange: this.props.handleChange,
              value: this.props.globalState.max_floor_space
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators "
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                value: "elevator",
                name: "elevator",
                id: "extras",
                onChange: this.props.handleChange
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                value: "swimming_pool",
                name: "swimming_pool",
                id: "extras",
                onChange: this.props.handleChange
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Basement"
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                value: "basement",
                name: "basement",
                id: "extras",
                onChange: this.props.handleChange
              })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "Gym "
              ),
              _react2.default.createElement("input", {
                type: "checkbox",
                value: "gym",
                name: "gym",
                id: "extras",
                onChange: this.props.handleChange
              })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About Us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Login"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Joe"
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  //function


  _createClass(Header, [{
    key: "loopListings",
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;

      if (listingsData === undefined || listingsData.length == 0) {
        return "Sorry you filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        // THIS BOX VIEW
        if (_this2.props.globalState.view == "box") {
          return _react2.default.createElement(
            "div",
            { className: "col-md-3", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-img",
                  style: {
                    background: "url(\"" + listing.image + "\")no-repeat center/cover"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "far fa-square" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " ft\xB2 "
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fas fa-bed" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$",
                  listing.price
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                  listing.city,
                  " ",
                  listing.state
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW
          return _react2.default.createElement(
            "div",
            { className: "col-md-12 col-lg-6", key: index },
            _react2.default.createElement(
              "div",
              { className: "listing" },
              _react2.default.createElement(
                "div",
                {
                  className: "listing-img",
                  style: {
                    background: "url(\"" + listing.image + "\")no-repeat center/cover"
                  }
                },
                _react2.default.createElement(
                  "span",
                  { className: "address" },
                  listing.address
                ),
                _react2.default.createElement(
                  "div",
                  { className: "details" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-3" },
                    _react2.default.createElement("div", { className: "user-img" })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-md-9" },
                    _react2.default.createElement(
                      "div",
                      { className: "user-details" },
                      _react2.default.createElement(
                        "span",
                        { className: "user-name" },
                        "Nina Smith"
                      ),
                      _react2.default.createElement(
                        "span",
                        { className: "post-date" },
                        "05/05/2017"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "listing-details" },
                      _react2.default.createElement(
                        "div",
                        { className: "floor-space" },
                        _react2.default.createElement("i", { className: "far fa-square" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.floorSpace,
                          " ft\xB2 "
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "bedrooms" },
                        _react2.default.createElement("i", { className: "fas fa-bed" }),
                        _react2.default.createElement(
                          "span",
                          null,
                          listing.rooms
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bottom-info" },
                _react2.default.createElement(
                  "span",
                  { className: "price" },
                  "$",
                  listing.price
                ),
                _react2.default.createElement(
                  "span",
                  { className: "location" },
                  _react2.default.createElement("i", { className: "fas fa-map-marker-alt" }),
                  listing.city,
                  " ",
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search", onChange: this.props.handleChange })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            this.props.globalState.filterData.length,
            " results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              {
                name: "sortby",
                className: "sortby",
                onChange: this.props.handleChange
              },
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", {
                className: "fas fa-th",
                onClick: this.props.changeView.bind(null, "box")
              }),
              _react2.default.createElement("i", {
                className: "fas fa-th-list",
                onClick: this.props.changeView.bind(null, "long")
              })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              "Prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "4"
            ),
            _react2.default.createElement(
              "li",
              null,
              "5"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Next"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: "20-34 Grand Ave",
  city: "Ridgewood",
  state: "NY",
  rooms: 3,
  price: 220000,
  floorSpace: 2000,
  extras: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F80%2FOlympia_Apartments%252C_DC.jpg%2F250px-Olympia_Apartments%252C_DC.jpg&f=1&nofb=1"
}, {
  address: "3724 Bickers St",
  city: "Dallas",
  state: "TX",
  rooms: 4,
  price: 364900,
  floorSpace: 2179,
  extras: ["basement", "swimming-pool"],
  homeType: "Studio",
  image: "https://photos.zillowstatic.com/fp/11c9782a6922dc4885f0edcdf681bc39-cc_ft_1536.jpg"
}, {
  address: "11203 Ranch Road 2222 APT 2201",
  city: "Austin",
  state: "TX",
  rooms: 2,
  price: 245000,
  floorSpace: 1350,
  extras: ["swimming-pool"],
  homeType: "Condo",
  image: "https://photos.zillowstatic.com/fp/99de43cc987582adc4a3c4831c0fea1e-cc_ft_1536.jpg"
}, {
  address: "3672 Crystal Bay Ln",
  city: "Orlando",
  state: "FL",
  rooms: 4,
  price: 319900,
  floorSpace: 2179,
  extras: ["gym", "swimming-pool"],
  homeType: "Studio",
  image: "https://photos.zillowstatic.com/fp/c22f0d74decea5d32f77a7b099d53ed5-cc_ft_1536.jpg"
}, {
  address: "12 Washington Pl APT 11H",
  city: "Pittsburgh",
  state: "PA",
  rooms: 1,
  price: 184500,
  floorSpace: 932,
  extras: ["elevator", "gym"],
  homeType: "Apartment",
  image: "https://photos.zillowstatic.com/fp/db854bdf1bc499c3832fa48349f654ab-cc_ft_1536.jpg"
}, {
  address: "5302 E Van Buren St UNIT 2052,",
  city: "Phoenix",
  state: "AZ",
  rooms: 2,
  price: 223900,
  floorSpace: 847,
  extras: ["gym", "swimming-pool"],
  homeType: "Studio",
  image: "https://photos.zillowstatic.com/fp/b3ca6aa881f300c64c7e4244e91bf7f0-cc_ft_1536.jpg"
}];

exports.default = listingsData;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: "Joe",
      listingsData: _listingsData2.default,
      city: "All",
      homeType: "All",
      bedrooms: 0,
      min_price: 0,
      max_price: 1000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      basement: false,
      swimming_pool: false,
      gym: false,
      sortby: "price-dsc",
      view: "box",
      search: "",

      filterData: _listingsData2.default,
      populateFormsData: ""
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }

    // Events

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value),
      // call back function
      function () {
        console.log(_this2.state);
        _this2.filterData();
      });
    }
  }, {
    key: "changeView",
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }

    // filter data

  }, {
    key: "filterData",
    value: function filterData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby === "price-dsc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby === "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filterData: newData
      });
    }
  }, {
    key: "populateForms",
    value: function populateForms() {
      var _this4 = this;

      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      // homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          "section",
          { id: "content-area" },
          _react2.default.createElement(_Filter2.default, {
            handleChange: this.handleChange,
            globalState: this.state,
            populateAction: this.populateForms
          }),
          _react2.default.createElement(_Listings2.default, {
            listingsData: this.state.filterData,
            handleChange: this.handleChange,
            globalState: this.state,
            changeView: this.changeView
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);
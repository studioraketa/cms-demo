module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AdminBuilder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__raketa_cms_raketa_cms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widgets__ = __webpack_require__("./components/widgets/index.js");
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/AdminBuilder.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import styled from 'styled-components';
// import jQuery from 'jquery';




var AdminBuilder = function (_React$Component) {
  _inherits(AdminBuilder, _React$Component);

  function AdminBuilder(props) {
    _classCallCheck(this, AdminBuilder);

    var _this = _possibleConstructorReturn(this, (AdminBuilder.__proto__ || Object.getPrototypeOf(AdminBuilder)).call(this, props));

    _this.state = {
      dirty: false,
      isLoading: false,
      page: props.page
    };
    return _this;
  }

  _createClass(AdminBuilder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check for changes and warn user
      // jQuery(window).bind('beforeunload', () => {
      //   if (this.state.dirty) return 'You have unsaved changes';
      // });
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.setState({ dirty: true });
    }
  }, {
    key: 'handleSave',
    value: function handleSave(page) {
      var save_url = this.props.save_url;

      // this.setState({ isLoading: true }, () => {
      //   jQuery.ajax({
      //     method: 'PATCH',
      //     beforeSend: (xhr) => { xhr.setRequestHeader('X-CSRF-Token', jQuery('meta[name="csrf-token"]').attr('content')); },
      //     contentType: 'application/json; charset=utf-8',
      //     url: save_url,
      //     data: JSON.stringify({ widgets: page.widgets }),
      //     dataType: 'json',
      //     success: (resp) => {
      //       this.setState({ isLoading: false, dirty: false });
      //     },
      //     error: (xhr, err, e) => {
      //       alert('An error occured saving this page. ');
      //     },
      //   });
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var host = this.props.host;
      var _state = this.state,
          isLoading = _state.isLoading,
          dirty = _state.dirty,
          page = _state.page;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widgets-spacings-reset', __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__raketa_cms_raketa_cms__["PageBuilder"], {
          host: host,
          dirty: dirty,
          library: __WEBPACK_IMPORTED_MODULE_2__widgets__["a" /* default */],
          themes: [['none', 'None'], ['white', 'White'], ['grey', 'Grey'], ['black', 'Black']],
          navigation: [{ url: '/admin/pages', label: 'Pages' }],
          page: page,
          onChange: function onChange(changedPage) {
            return _this2.handleChange(changedPage);
          },
          onSave: function onSave(pageToSave) {
            return _this2.handleSave(pageToSave);
          },
          onExit: function onExit() {
            return console.log('on exit');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        })
      );
    }
  }]);

  return AdminBuilder;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_1__raketa_cms_raketa_cms__["PageBuilder"].defaultProps = {
  host: 'http://localhost:3000/'
};

/* harmony default export */ __webpack_exports__["a"] = (AdminBuilder);

/***/ }),

/***/ "./components/widgets/ArticleTitleWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/ArticleTitleWidget.js';




var ArticleTitleWidget = function ArticleTitleWidget(_ref) {
  var title = _ref.title,
      tagline = _ref.tagline,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'shift-2', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'article-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              tagline
            )
          )
        )
      )
    )
  );
};

ArticleTitleWidget.title = 'Article Title';
ArticleTitleWidget.category = 'General';

ArticleTitleWidget.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  tagline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

ArticleTitleWidget.defaults = {
  title: 'Page Title',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {}
};

ArticleTitleWidget.adminFields = {
  title: { type: 'text' },
  tagline: { type: 'text' }
};

/* harmony default export */ __webpack_exports__["a"] = (ArticleTitleWidget);

/***/ }),

/***/ "./components/widgets/HtmlWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/HtmlWidget.js';




var HtmlWidget = function HtmlWidget(_ref) {
  var code = _ref.code,
      variant = _ref.variant,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      dangerouslySetInnerHTML: { __html: code },
      className: variant === 'contained' ? 'container' : '',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
};

HtmlWidget.title = 'HTML';
HtmlWidget.category = 'General';

HtmlWidget.propTypes = {
  code: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  variant: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};

HtmlWidget.defaults = {
  code: '<h1>Custom HTML</h1>',
  variant: 'contained'
};

HtmlWidget.adminFields = {
  code: { type: 'textarea' },
  variant: { type: 'select', options: [['full-width', 'Full width'], ['contained', 'Contained']] }
};

/* harmony default export */ __webpack_exports__["a"] = (HtmlWidget);

/***/ }),

/***/ "./components/widgets/ImageWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/ImageWidget.js';




var ImageWidget = function ImageWidget(_ref) {
  var variant = _ref.variant,
      image = _ref.image,
      description = _ref.description,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: variant === 'inset' ? 'shift-2' : 'full-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'figure',
            { className: 'image-widget', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Img"], { src: image, variant: variant === 'inset' ? 'vertical' : 'image', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }),
            description === '' ? '' : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'figcaption',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              description
            )
          )
        )
      )
    )
  );
};

ImageWidget.title = 'Image';
ImageWidget.category = 'Media';

ImageWidget.propTypes = {
  variant: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  image: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

ImageWidget.defaults = {
  variant: 'normal',
  image: 'http://placehold.it/1120x720',
  description: 'Image description',
  containerSettings: {}
};

ImageWidget.adminFields = {
  variant: { type: 'select', options: [['normal', 'Normal'], ['inset', 'Inset']] },
  image: { type: 'image' },
  description: { type: 'text' }
};

/* harmony default export */ __webpack_exports__["a"] = (ImageWidget);

/***/ }),

/***/ "./components/widgets/LeadImageWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/LeadImageWidget.js';




var LeadImageWidget = function LeadImageWidget(_ref) {
  var image = _ref.image,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'lead-image', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Img"], { src: image, variant: 'image', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    )
  );
};

LeadImageWidget.title = 'Lead Image';
LeadImageWidget.category = 'Highlights';

LeadImageWidget.propTypes = {
  image: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

LeadImageWidget.defaults = {
  image: 'http://placehold.it/1920x1080',
  containerSettings: {}
};

LeadImageWidget.adminFields = {
  image: { type: 'image' }
};

/* harmony default export */ __webpack_exports__["a"] = (LeadImageWidget);

/***/ }),

/***/ "./components/widgets/NavigationWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/NavigationWidget.js';




var NavigationWidget = function NavigationWidget(_ref) {
  var list = _ref.list,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'full-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'nav',
            { className: 'nav', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            list.map(function (item, idx) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: item.link, key: idx, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  }
                },
                item.title
              );
            })
          )
        )
      )
    )
  );
};

NavigationWidget.title = 'Navigation';
NavigationWidget.category = 'General';

NavigationWidget.defaultProps = {
  list: []
};

NavigationWidget.propTypes = {
  list: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

NavigationWidget.defaults = {
  list: [{ id: 1, title: 'Link 1', link: '#' }, { id: 3, title: 'Link 2', link: '#' }, { id: 2, title: 'Link 3', link: '#' }],
  variant: '3_columns',
  containerSettings: {}
};

var NavigationItem = function NavigationItem(_ref2) {
  var settings = _ref2.settings,
      onChangeItem = _ref2.onChangeItem;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["TextInput"], {
      label: 'Title',
      onChange: function onChange(value) {
        return onChangeItem('title', value);
      },
      value: settings.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["TextInput"], {
      label: 'Link',
      onChange: function onChange(value) {
        return onChangeItem('link', value);
      },
      value: settings.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    })
  );
};

NavigationItem.defaultProps = {
  settings: {}
};

NavigationItem.propTypes = {
  settings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onChangeItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

NavigationWidget.adminFields = function (items, onChange, settings) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["List"], {
      listItem: function listItem(settings, onChangeItem) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigationItem, { settings: settings, onChangeItem: onChangeItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        });
      },
      onChangeList: onChange,
      items: items,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NavigationWidget);

/***/ }),

/***/ "./components/widgets/PageTitleWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/PageTitleWidget.js';




var PageTitleWidget = function PageTitleWidget(_ref) {
  var title = _ref.title,
      tagline = _ref.tagline,
      topSpacing = _ref.topSpacing,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'full-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'page-title', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'hgroup',
              { className: topSpacing === 'no' ? 'padding-top-no' : '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h1',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  }
                },
                title
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                tagline
              )
            )
          )
        )
      )
    )
  );
};

PageTitleWidget.title = 'Page Title';
PageTitleWidget.category = 'General';

PageTitleWidget.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  topSpacing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  tagline: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

PageTitleWidget.defaults = {
  title: 'Page Title',
  tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  topSpacing: 'yes',
  containerSettings: {}
};

PageTitleWidget.adminFields = {
  topSpacing: { type: 'select', options: [['yes', 'Yes'], ['no', 'No']] },
  title: { type: 'text' },
  tagline: { type: 'text' }
};

/* harmony default export */ __webpack_exports__["a"] = (PageTitleWidget);

/***/ }),

/***/ "./components/widgets/SectionTitleWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/SectionTitleWidget.js';




var SectionTitleWidget = function SectionTitleWidget(_ref) {
  var title = _ref.title,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'section-title', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            title
          )
        )
      )
    )
  );
};

SectionTitleWidget.title = 'Section Title';
SectionTitleWidget.category = 'General';

SectionTitleWidget.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

SectionTitleWidget.defaults = {
  title: 'Headline',
  containerSettings: {}
};

SectionTitleWidget.adminFields = {
  title: { type: 'text' }
};

/* harmony default export */ __webpack_exports__["a"] = (SectionTitleWidget);

/***/ }),

/***/ "./components/widgets/SloganWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/SloganWidget.js';




var SloganWidget = function SloganWidget(_ref) {
  var text = _ref.text,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'shift-3', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'slogan', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              text
            )
          )
        )
      )
    )
  );
};

SloganWidget.title = 'Slogan';
SloganWidget.category = 'Highlights';

SloganWidget.propTypes = {
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

SloganWidget.defaults = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {}
};

SloganWidget.adminFields = {
  text: { type: 'textarea' }
};

/* harmony default export */ __webpack_exports__["a"] = (SloganWidget);

/***/ }),

/***/ "./components/widgets/TestimonialWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/TestimonialWidget.js';




var TestimonialWidget = function TestimonialWidget(_ref) {
  var author = _ref.author,
      text = _ref.text,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'shift-2', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'testimonial', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              author
            )
          )
        )
      )
    )
  );
};

TestimonialWidget.title = 'Testimonial';
TestimonialWidget.category = 'Highlights';

TestimonialWidget.propTypes = {
  author: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

TestimonialWidget.defaults = {
  author: 'John Doe',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  containerSettings: {}
};

TestimonialWidget.adminFields = {
  author: { type: 'text' },
  text: { type: 'textarea' }
};

/* harmony default export */ __webpack_exports__["a"] = (TestimonialWidget);

/***/ }),

/***/ "./components/widgets/TextBoxWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/TextBoxWidget.js';




var TextBoxWidget = function TextBoxWidget(_ref) {
  var variant = _ref.variant,
      text = _ref.text,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'text-widget ' + (variant === 'centered' ? 'centered' : ''), __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: text }, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        )
      )
    )
  );
};

TextBoxWidget.title = 'Text';
TextBoxWidget.category = 'General';

TextBoxWidget.propTypes = {
  variant: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

TextBoxWidget.defaults = {
  variant: 'normal',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor semper est in porta. Vestibulum fringilla justo in magna ornare, non commodo justo consectetur. Mauris ut tristique nisi, sed tristique lectus. Sed diam mauris, aliquet quis imperdiet sed, viverra sit amet lorem. Quisque urna sapien, molestie a bibendum nec, tempor vitae magna.',
  containerSettings: {}
};

TextBoxWidget.adminFields = {
  variant: { type: 'select', options: [['normal', 'Normal'], ['centered', 'Centered']] },
  text: { type: 'rich' }
};

TextBoxWidget.dialogSize = 'large';

/* harmony default export */ __webpack_exports__["a"] = (TextBoxWidget);

/***/ }),

/***/ "./components/widgets/VideoWidget.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__ = __webpack_require__("@raketa-cms/raketa-cms");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__);
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/components/widgets/VideoWidget.js';




var VideoWidget = function VideoWidget(_ref) {
  var videoUrl = _ref.videoUrl,
      containerSettings = _ref.containerSettings;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["Container"],
    { className: 'video-widget', settings: containerSettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'full-width', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__raketa_cms_raketa_cms__["EmbeddedVideo"], { videoUrl: videoUrl, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        )
      )
    )
  );
};

VideoWidget.title = 'Video';
VideoWidget.category = 'Media';

VideoWidget.propTypes = {
  videoUrl: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  containerSettings: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

VideoWidget.defaults = {
  videoUrl: 'https://www.youtube.com/watch?v=TJ1SDXbij8Y',
  containerSettings: {}
};

VideoWidget.adminFields = {
  videoUrl: { type: 'text' }
};

/* harmony default export */ __webpack_exports__["a"] = (VideoWidget);

/***/ }),

/***/ "./components/widgets/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SectionTitleWidget__ = __webpack_require__("./components/widgets/SectionTitleWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ImageWidget__ = __webpack_require__("./components/widgets/ImageWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextBoxWidget__ = __webpack_require__("./components/widgets/TextBoxWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VideoWidget__ = __webpack_require__("./components/widgets/VideoWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LeadImageWidget__ = __webpack_require__("./components/widgets/LeadImageWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NavigationWidget__ = __webpack_require__("./components/widgets/NavigationWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SloganWidget__ = __webpack_require__("./components/widgets/SloganWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TestimonialWidget__ = __webpack_require__("./components/widgets/TestimonialWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PageTitleWidget__ = __webpack_require__("./components/widgets/PageTitleWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ArticleTitleWidget__ = __webpack_require__("./components/widgets/ArticleTitleWidget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__HtmlWidget__ = __webpack_require__("./components/widgets/HtmlWidget.js");












/* harmony default export */ __webpack_exports__["a"] = ({
  SectionTitleWidget: __WEBPACK_IMPORTED_MODULE_0__SectionTitleWidget__["a" /* default */],
  ImageWidget: __WEBPACK_IMPORTED_MODULE_1__ImageWidget__["a" /* default */],
  TextBoxWidget: __WEBPACK_IMPORTED_MODULE_2__TextBoxWidget__["a" /* default */],
  VideoWidget: __WEBPACK_IMPORTED_MODULE_3__VideoWidget__["a" /* default */],
  LeadImageWidget: __WEBPACK_IMPORTED_MODULE_4__LeadImageWidget__["a" /* default */],
  NavigationWidget: __WEBPACK_IMPORTED_MODULE_5__NavigationWidget__["a" /* default */],
  SloganWidget: __WEBPACK_IMPORTED_MODULE_6__SloganWidget__["a" /* default */],
  TestimonialWidget: __WEBPACK_IMPORTED_MODULE_7__TestimonialWidget__["a" /* default */],
  PageTitleWidget: __WEBPACK_IMPORTED_MODULE_8__PageTitleWidget__["a" /* default */],
  ArticleTitleWidget: __WEBPACK_IMPORTED_MODULE_9__ArticleTitleWidget__["a" /* default */],
  HtmlWidget: __WEBPACK_IMPORTED_MODULE_10__HtmlWidget__["a" /* default */]
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AdminBuilder__ = __webpack_require__("./components/AdminBuilder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_widgets__ = __webpack_require__("./components/widgets/index.js");
var _jsxFileName = '/Users/vestimir/dev/os/cms-demo/pages/index.js';




var PAGE = {
  id: null,
  slug: 'example-slug',
  title: 'Example page',
  description: 'Example description',
  widgets: []
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AdminBuilder__["a" /* default */], { library: __WEBPACK_IMPORTED_MODULE_2__components_widgets__["a" /* default */], page: PAGE, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  });
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@raketa-cms/raketa-cms":
/***/ (function(module, exports) {

module.exports = require("@raketa-cms/raketa-cms");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
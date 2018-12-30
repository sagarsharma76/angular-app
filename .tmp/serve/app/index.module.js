/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _githubContributor = __webpack_require__(5);
	
	var _webDevTec = __webpack_require__(6);
	
	var _navbar = __webpack_require__(7);
	
	var _malarkey = __webpack_require__(8);
	
	var _title = __webpack_require__(9);
	
	var _title2 = __webpack_require__(10);
	
	var _mockTitles = __webpack_require__(11);
	
	var _titleDetails = __webpack_require__(12);
	
	/* global malarkey:false, moment:false */
	
	angular.module("project", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngMessages", "ngAria", "ngRoute", "toastr"]).constant("malarkey", malarkey).constant("moment", moment).constant("heroes", _mockTitles.HEROES).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service("githubContributor", _githubContributor.GithubContributorService).service("webDevTec", _webDevTec.WebDevTecService).service("titleService", _title2.TitleService).controller("MainController", _main.MainController).controller("TitleController", _title.TitleController).controller("TitleDetailController", _titleDetails.TitleDetailController).directive("acmeNavbar", _navbar.NavbarDirective).directive("acmeMalarkey", _malarkey.MalarkeyDirective);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$routeProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($routeProvider) {
	  'ngInject';
	
	  $routeProvider.when('/', {
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  }).when('/title', {
	    templateUrl: 'app/title/title.html',
	    controller: 'TitleController',
	    controllerAs: 'titleCtrl'
	  }).when('/title/:id/detail', {
	    templateUrl: 'app/title-details/title-detail.html',
	    controller: 'TitleDetailController',
	    controllerAs: 'titleDetailCtrl'
	  }).otherwise({
	    redirectTo: '/'
	  });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
	  MainController.$inject = ["$timeout", "webDevTec", "toastr"];
	  function MainController($timeout, webDevTec, toastr) {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1544175515712;
	    this.toastr = toastr;
	
	    this.activate($timeout, webDevTec);
	  }
	
	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;
	
	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();
	
	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
	      this.classAnimation = '';
	    }
	  }]);
	
	  return MainController;
	}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TitleController = exports.TitleController = function () {
	    TitleController.$inject = ["$location", "titleService"];
	    function TitleController($location, titleService) {
	        'ngInject';
	
	        _classCallCheck(this, TitleController);
	
	        this.titles = [];
	        this.testValue = '';
	        this.selectedTitle = '';
	        this.titleService = titleService;
	        this.selectedFilter = '';
	        this.$location = $location;
	        this.populateTitles();
	    }
	
	    _createClass(TitleController, [{
	        key: 'populateTitles',
	        value: function populateTitles() {
	            this.titles = this.titleService.getTitles();
	        }
	    }, {
	        key: 'updateSelection',
	        value: function updateSelection(title) {
	            this.selectedTitle = title;
	            this.$location.path('/title/' + title.id + '/detail');
	        }
	    }, {
	        key: 'callMethod',
	        value: function callMethod() {
	            alert('111');
	            console.log('Method called');
	        }
	    }]);
	
	    return TitleController;
	}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TitleService = exports.TitleService = function () {
	    TitleService.$inject = ["$http", "$log", "heroes"];
	    function TitleService($http, $log, heroes) {
	        'ngInject';
	
	        _classCallCheck(this, TitleService);
	
	        this.$http = $http;
	        this.$log = $log;
	        this.heroes = heroes;
	    }
	
	    _createClass(TitleService, [{
	        key: 'getTitles',
	        value: function getTitles() {
	            return this.heroes;
	        }
	    }, {
	        key: 'getSelectedTitle',
	        value: function getSelectedTitle(selectedId) {
	            // return new Promise((resolve, reject) => {
	            var title = this.heroes.filter(function (title) {
	                return title.id == selectedId;
	            });
	            return title[0];
	            // if(title){
	            //     resolve(title);
	            // }
	
	            // });
	        }
	    }]);
	
	    return TitleService;
	}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var HEROES = exports.HEROES = [{ id: 11, name: 'Mr. Nice' }, { id: 12, name: 'Narco' }, { id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }, { id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }, { id: 17, name: 'Dynama' }, { id: 18, name: 'Dr IQ' }, { id: 19, name: 'Magma' }, { id: 20, name: 'Tornado' }];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TitleDetailController = exports.TitleDetailController = function () {
	    TitleDetailController.$inject = ["$routeParams", "$log", "titleService"];
	    function TitleDetailController($routeParams, $log, titleService) {
	        'ngInject';
	
	        _classCallCheck(this, TitleDetailController);
	
	        this.selectedTitle = '';
	        this.titleService = titleService;
	        this.$routeParams = $routeParams;
	        this.$log = $log;
	        this.getSelectedTitle(this.$routeParams.id);
	    }
	
	    _createClass(TitleDetailController, [{
	        key: 'getSelectedTitle',
	        value: function getSelectedTitle(id) {
	            this.selectedTitle = this.titleService.getSelectedTitle(id);
	            this.$log.log('Selected Title::' + this.selectedTitle);
	        }
	    }]);
	
	    return TitleDetailController;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjczMWYxMDMwNmJiZTAyZjVjNDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90aXRsZS90aXRsZS5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGl0bGUvdGl0bGUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21vY2stdGl0bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGl0bGUtZGV0YWlscy90aXRsZS1kZXRhaWxzLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJIRVJPRVMiLCJjb25maWciLCJyb3V0ZXJDb25maWciLCJydW4iLCJydW5CbG9jayIsInNlcnZpY2UiLCJHaXRodWJDb250cmlidXRvclNlcnZpY2UiLCJXZWJEZXZUZWNTZXJ2aWNlIiwiVGl0bGVTZXJ2aWNlIiwiY29udHJvbGxlciIsIk1haW5Db250cm9sbGVyIiwiVGl0bGVDb250cm9sbGVyIiwiVGl0bGVEZXRhaWxDb250cm9sbGVyIiwiZGlyZWN0aXZlIiwiTmF2YmFyRGlyZWN0aXZlIiwiTWFsYXJrZXlEaXJlY3RpdmUiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsInJlZGlyZWN0VG8iLCIkbG9nIiwiZGVidWciLCIkdGltZW91dCIsIndlYkRldlRlYyIsInRvYXN0ciIsImF3ZXNvbWVUaGluZ3MiLCJjbGFzc0FuaW1hdGlvbiIsImNyZWF0aW9uRGF0ZSIsImFjdGl2YXRlIiwiZ2V0V2ViRGV2VGVjIiwiZ2V0VGVjIiwiZm9yRWFjaCIsImF3ZXNvbWVUaGluZyIsInJhbmsiLCJNYXRoIiwicmFuZG9tIiwiaW5mbyIsIiRodHRwIiwiYXBpSG9zdCIsImxpbWl0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJ0b0pzb24iLCJyZXN0cmljdCIsInNjb3BlIiwiTmF2YmFyQ29udHJvbGxlciIsImJpbmRUb0NvbnRyb2xsZXIiLCJyZWxhdGl2ZURhdGUiLCJmcm9tTm93IiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsImRlbGV0ZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImdldENvbnRyaWJ1dG9ycyIsIiRsb2NhdGlvbiIsInRpdGxlU2VydmljZSIsInRpdGxlcyIsInRlc3RWYWx1ZSIsInNlbGVjdGVkVGl0bGUiLCJzZWxlY3RlZEZpbHRlciIsInBvcHVsYXRlVGl0bGVzIiwiZ2V0VGl0bGVzIiwidGl0bGUiLCJwYXRoIiwiaWQiLCJhbGVydCIsImNvbnNvbGUiLCJsb2ciLCJoZXJvZXMiLCJzZWxlY3RlZElkIiwiZmlsdGVyIiwibmFtZSIsIiRyb3V0ZVBhcmFtcyIsImdldFNlbGVjdGVkVGl0bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUFBLFNBQ0dDLE9BQU8sV0FBVyxDQUNqQixhQUNBLGFBQ0EsV0FDQSxjQUNBLGNBQ0EsVUFDQSxXQUNBLFdBRURDLFNBQVMsWUFBWUMsVUFDckJELFNBQVMsVUFBVUUsUUFDbkJGLFNBQVMsVUFBVUcsb0JBQ25CQyxPQUFPQSxlQUNQQSxPQUFPQyxzQkFDUEMsSUFBSUMsa0JBQ0pDLFFBQVEscUJBQXFCQyw2Q0FDN0JELFFBQVEsYUFBYUUsNkJBQ3JCRixRQUFRLGdCQUFnQkcsc0JBQ3hCQyxXQUFXLGtCQUFrQkMsc0JBQzdCRCxXQUFXLG1CQUFtQkUsd0JBQzlCRixXQUFXLHlCQUF5QkcscUNBQ3BDQyxVQUFVLGNBQWNDLHlCQUN4QkQsVUFBVSxnQkFBZ0JFLDZCOzs7Ozs7QUN2QzdCOzs7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QUFFLFNBQVMsaUJBQWlCLFFBQVEsT0FBTyxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSyxFQUFFLElBQUksYUFBYSxNQUFNLElBQUksV0FBVyxhQUFhLFdBQVcsY0FBYyxPQUFPLFdBQVcsZUFBZSxNQUFNLElBQUksV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE9BQU8sZUFBZSxRQUFRLFdBQVcsS0FBSyxpQkFBaUIsT0FBTyxVQUFVLGFBQWEsWUFBWSxhQUFhLEVBQUUsSUFBSSxZQUFZLGlCQUFpQixZQUFZLFdBQVcsYUFBYSxJQUFJLGFBQWEsaUJBQWlCLGFBQWEsY0FBYyxPQUFPOztBQUVoaUIsVUFBUyxnQkFBZ0IsVUFBVSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixjQUFjLEVBQUUsTUFBTSxJQUFJLFVBQVU7Ozs4RUFFeEM7S0FScEUsK0JBQVlDLGNBQWM5RSxNQUFNNkQsY0FBYTtTQUN6Qzs7U0FEeUM7O1NBRXpDLEtBQUtHLGdCQUFnQjtTQUNyQixLQUFLSCxlQUFlQTtTQUNwQixLQUFLaUIsZUFBZUE7U0FDcEIsS0FBSzlFLE9BQU9BO1NBQ1osS0FBSytFLGlCQUFpQixLQUFLRCxhQUFhUjs7O0tBZTVDLGFBQWEsdUJBQXVCLENBQUM7U0FDakMsS0FBSztTQUNMLE9BQU8sU0FBUyxpQkFkSEEsSUFBRzthQUNoQixLQUFLTixnQkFBZ0IsS0FBS0gsYUFBYWtCLGlCQUFpQlQ7YUFDeEQsS0FBS3RFLEtBQUt5RSxJQUFJLHFCQUFxQixLQUFLVDs7OztLQWtCNUMsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNzMxZjEwMzA2YmJlMDJmNWM0MCIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuL2luZGV4LmNvbmZpZ1wiO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSBcIi4vaW5kZXgucm91dGVcIjtcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSBcIi4vaW5kZXgucnVuXCI7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gXCIuL21haW4vbWFpbi5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHsgV2ViRGV2VGVjU2VydmljZSB9IGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5hdmJhckRpcmVjdGl2ZSB9IGZyb20gXCIuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBUaXRsZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi90aXRsZS90aXRsZS5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlcnZpY2UgfSBmcm9tIFwiLi90aXRsZS90aXRsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIRVJPRVMgfSBmcm9tIFwiLi9tb2NrLXRpdGxlc1wiO1xuaW1wb3J0IHsgVGl0bGVEZXRhaWxDb250cm9sbGVyIH0gZnJvbSBcIi4vdGl0bGUtZGV0YWlscy90aXRsZS1kZXRhaWxzLmNvbnRyb2xsZXJcIjtcblxuYW5ndWxhclxuICAubW9kdWxlKFwicHJvamVjdFwiLCBbXG4gICAgXCJuZ0FuaW1hdGVcIixcbiAgICBcIm5nQ29va2llc1wiLFxuICAgIFwibmdUb3VjaFwiLFxuICAgIFwibmdTYW5pdGl6ZVwiLFxuICAgIFwibmdNZXNzYWdlc1wiLFxuICAgIFwibmdBcmlhXCIsXG4gICAgXCJuZ1JvdXRlXCIsXG4gICAgXCJ0b2FzdHJcIlxuICBdKVxuICAuY29uc3RhbnQoXCJtYWxhcmtleVwiLCBtYWxhcmtleSlcbiAgLmNvbnN0YW50KFwibW9tZW50XCIsIG1vbWVudClcbiAgLmNvbnN0YW50KFwiaGVyb2VzXCIsIEhFUk9FUylcbiAgLmNvbmZpZyhjb25maWcpXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxuICAucnVuKHJ1bkJsb2NrKVxuICAuc2VydmljZShcImdpdGh1YkNvbnRyaWJ1dG9yXCIsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcbiAgLnNlcnZpY2UoXCJ3ZWJEZXZUZWNcIiwgV2ViRGV2VGVjU2VydmljZSlcbiAgLnNlcnZpY2UoXCJ0aXRsZVNlcnZpY2VcIiwgVGl0bGVTZXJ2aWNlKVxuICAuY29udHJvbGxlcihcIk1haW5Db250cm9sbGVyXCIsIE1haW5Db250cm9sbGVyKVxuICAuY29udHJvbGxlcihcIlRpdGxlQ29udHJvbGxlclwiLCBUaXRsZUNvbnRyb2xsZXIpXG4gIC5jb250cm9sbGVyKFwiVGl0bGVEZXRhaWxDb250cm9sbGVyXCIsIFRpdGxlRGV0YWlsQ29udHJvbGxlcilcbiAgLmRpcmVjdGl2ZShcImFjbWVOYXZiYXJcIiwgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKFwiYWNtZU1hbGFya2V5XCIsIE1hbGFya2V5RGlyZWN0aXZlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gcm91dGVyQ29uZmlnICgkcm91dGVQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkcm91dGVQcm92aWRlclxuICAgIC53aGVuKCcvJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSkud2hlbignL3RpdGxlJywge1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdGl0bGUvdGl0bGUuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnVGl0bGVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3RpdGxlQ3RybCdcbiAgICB9KS53aGVuKCcvdGl0bGUvOmlkL2RldGFpbCcsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RpdGxlLWRldGFpbHMvdGl0bGUtZGV0YWlsLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1RpdGxlRGV0YWlsQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd0aXRsZURldGFpbEN0cmwnXG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNTQ0MTc1NTE1NzEyO1xuICAgIHRoaXMudG9hc3RyID0gdG9hc3RyO1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xuICAgICR0aW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XG4gICAgfSwgNDAwMCk7XG4gIH1cblxuICBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgKGF3ZXNvbWVUaGluZykgPT4ge1xuICAgICAgYXdlc29tZVRoaW5nLnJhbmsgPSBNYXRoLnJhbmRvbSgpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd1RvYXN0cigpIHtcbiAgICB0aGlzLnRvYXN0ci5pbmZvKCdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPicpO1xuICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAnJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0VTNiAoQmFiZWwgZm9ybWVybHkgNnRvNSknLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYmFiZWxqcy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVHVybnMgRVM2KyBjb2RlIGludG8gdmFuaWxsYSBFUzUsIHNvIHlvdSBjYW4gdXNlIG5leHQgZ2VuZXJhdGlvbiBmZWF0dXJlcyB0b2RheS4nLFxuICAgICAgICAnbG9nbyc6ICdiYWJlbC5wbmcnXG4gICAgICB9XG4gICAgXTtcbiAgfVxuXG4gIGdldFRlYygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE5hdmJhckRpcmVjdGl2ZSgpIHtcbiAgJ25nSW5qZWN0JztcblxuICBsZXQgZGlyZWN0aXZlID0ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChtb21lbnQpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnJm5ic3A7JyxcbiAgICBsaW5rOiBsaW5rRnVuYyxcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcblxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XG4gICAgICB0eXBlU3BlZWQ6IDQwLFxuICAgICAgZGVsZXRlU3BlZWQ6IDQwLFxuICAgICAgcGF1c2VEZWxheTogODAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIHBvc3RmaXg6ICcgJ1xuICAgIH0pO1xuXG4gICAgZWwuYWRkQ2xhc3MoJ2FjbWUtbWFsYXJrZXknKTtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsICgpID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHtcbiAgICAgIHdhdGNoZXIoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuY29udHJpYnV0b3JzID0gW107XG5cbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcbiAgfVxuXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udHJpYnV0b3JzO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGNsYXNzIFRpdGxlQ29udHJvbGxlcntcblxuICAgIGNvbnN0cnVjdG9yKCRsb2NhdGlvbiwgdGl0bGVTZXJ2aWNlKXtcbiAgICAgICAgJ25nSW5qZWN0JztcbiAgICAgICAgdGhpcy50aXRsZXMgPSBbXTtcbiAgICAgICAgdGhpcy50ZXN0VmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRpdGxlID0gJyc7XG4gICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlID0gdGl0bGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICAgICAgICB0aGlzLnBvcHVsYXRlVGl0bGVzKCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVUaXRsZXMoKSB7XG4gICAgICAgIHRoaXMudGl0bGVzID0gdGhpcy50aXRsZVNlcnZpY2UuZ2V0VGl0bGVzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2VsZWN0aW9uKHRpdGxlKXtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuJGxvY2F0aW9uLnBhdGgoJy90aXRsZS8nICsgdGl0bGUuaWQgKyAnL2RldGFpbCcpO1xuICAgIH1cblxuICAgIGNhbGxNZXRob2QoKXtcbiAgICAgICAgYWxlcnQoJzExMScpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWV0aG9kIGNhbGxlZCcpO1xuICAgIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90aXRsZS90aXRsZS5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoJGh0dHAsICRsb2csIGhlcm9lcyl7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuaGVyb2VzID0gaGVyb2VzO1xuICAgIH1cblxuICAgIGdldFRpdGxlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5oZXJvZXM7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRUaXRsZShzZWxlY3RlZElkKXtcbiAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5oZXJvZXMuZmlsdGVyKCh0aXRsZSkgPT4gdGl0bGUuaWQgPT0gc2VsZWN0ZWRJZCk7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGVbMF07XG4gICAgICAgICAgICAvLyBpZih0aXRsZSl7XG4gICAgICAgICAgICAvLyAgICAgcmVzb2x2ZSh0aXRsZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGl0bGUvdGl0bGUuc2VydmljZS5qcyIsIlxuZXhwb3J0IGNvbnN0IEhFUk9FUyAgPSBbXG4gICAgeyBpZDogMTEsIG5hbWU6ICdNci4gTmljZScgfSxcbiAgICB7IGlkOiAxMiwgbmFtZTogJ05hcmNvJyB9LFxuICAgIHsgaWQ6IDEzLCBuYW1lOiAnQm9tYmFzdG8nIH0sXG4gICAgeyBpZDogMTQsIG5hbWU6ICdDZWxlcml0YXMnIH0sXG4gICAgeyBpZDogMTUsIG5hbWU6ICdNYWduZXRhJyB9LFxuICAgIHsgaWQ6IDE2LCBuYW1lOiAnUnViYmVyTWFuJyB9LFxuICAgIHsgaWQ6IDE3LCBuYW1lOiAnRHluYW1hJyB9LFxuICAgIHsgaWQ6IDE4LCBuYW1lOiAnRHIgSVEnIH0sXG4gICAgeyBpZDogMTksIG5hbWU6ICdNYWdtYScgfSxcbiAgICB7IGlkOiAyMCwgbmFtZTogJ1Rvcm5hZG8nIH1cbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tb2NrLXRpdGxlcy5qcyIsImV4cG9ydCBjbGFzcyBUaXRsZURldGFpbENvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcigkcm91dGVQYXJhbXMsICRsb2csIHRpdGxlU2VydmljZSl7XG4gICAgICAgICduZ0luamVjdCc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaXRsZSA9ICcnO1xuICAgICAgICB0aGlzLnRpdGxlU2VydmljZSA9IHRpdGxlU2VydmljZTtcbiAgICAgICAgdGhpcy4kcm91dGVQYXJhbXMgPSAkcm91dGVQYXJhbXM7XG4gICAgICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRUaXRsZSh0aGlzLiRyb3V0ZVBhcmFtcy5pZCk7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRUaXRsZShpZCl7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaXRsZSA9IHRoaXMudGl0bGVTZXJ2aWNlLmdldFNlbGVjdGVkVGl0bGUoaWQpO1xuICAgICAgICB0aGlzLiRsb2cubG9nKCdTZWxlY3RlZCBUaXRsZTo6JyArIHRoaXMuc2VsZWN0ZWRUaXRsZSk7ICAgICAgICBcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90aXRsZS1kZXRhaWxzL3RpdGxlLWRldGFpbHMuY29udHJvbGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
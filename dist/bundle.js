/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _images = __webpack_require__(1);

	var _images2 = _interopRequireDefault(_images);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var imgUrlArray = _images2.default.urls;

	var grid = document.getElementById("grid");

	imgUrlArray.forEach(function (url, idx) {
		var imgElement = document.createElement("img");

		// Set attributes for image element
		imgElement.setAttribute("draggable", true);
		imgElement.setAttribute("src", url);
		imgElement.setAttribute("alt", url);
		imgElement.setAttribute("id", "" + idx);

		// Add event listeners to image element to enable drag, drop, swap
		imgElement.addEventListener("dragstart", function (e) {
			e.dataTransfer.setData("text", e.target.id);
		});

		imgElement.addEventListener("dragover", function (e) {
			e.preventDefault();
		});

		imgElement.addEventListener("drop", function (e) {
			e.preventDefault();

			var srcId = e.dataTransfer.getData("text");
			var srcIMG = document.getElementById(srcId);
			var tgtIMG = document.getElementById(e.target.id);
			var tmp = tgtIMG.cloneNode(true);

			srcIMG.parentNode.insertBefore(tmp, srcIMG);
			tgtIMG.parentNode.insertBefore(srcIMG, tgtIMG);
			tgtIMG.parentNode.replaceChild(tgtIMG, tmp);
		});

		// Add new img element to div#grid
		grid.appendChild(imgElement);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"urls": [
			"./pictures/1.png",
			"./pictures/10.png",
			"./pictures/11.png",
			"./pictures/12.png",
			"./pictures/2.png",
			"./pictures/3.png",
			"./pictures/4.png",
			"./pictures/5.png",
			"./pictures/6.png",
			"./pictures/7.png",
			"./pictures/8.png",
			"./pictures/9.png"
		]
	};

/***/ }
/******/ ]);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/heroic-features.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/heroic-features.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_backdrop_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/backdrop.jpg */ \"./src/images/backdrop.jpg\");\n/* harmony import */ var _images_comedian_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/comedian.png */ \"./src/images/comedian.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_backdrop_jpg__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_comedian_png__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \" body {\\n  padding-top: 20px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  color: #46494c;\\n}\\n\\n.jumbotron {\\n  background-color: white;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: 90%;\\n  background-size: 25%;\\n  background-repeat: no-repeat;\\n  border: solid black;\\n  border-width: 3px;\\n  box-shadow: 0px 10px 15px #000;\\n}\\n\\n.lead {\\n  text-align: justify;\\n  margin-right: 40%;\\n}\\n\\n.card {\\n  border: solid black;\\n  border-width: 3px;\\n  box-shadow: 0px 10px 20px #000;\\n}\\n\\n.icons {\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n}\\n\\n.fa-thumbtack {\\n  grid-area: 1 / 3;\\n}\\n\\n.fa-expand-alt {\\n  font-size: 1.25em;\\n  grid-area: 1 / 5;\\n  justify-self: end;\\n  cursor: pointer;\\n}\\n\\n.fa-expand-alt:hover {\\n  transform: scale(1.2);\\n  color: black;\\n}\\n\\n.btn-danger {\\n  background-color: rgb(252, 38, 38);\\n  border-color: rgb(252, 38, 38);\\n}\\n\\n.btn-danger:hover {\\n  background-color: rgb(219, 31, 31);\\n  border-color: rgb(219, 31, 31);\\n}\\n\\n#long-description {\\n  display: none;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://modern-js-application/./src/css/heroic-features.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://modern-js-application/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://modern-js-application/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/heroic-features.css":
/*!*************************************!*\
  !*** ./src/css/heroic-features.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_heroic_features_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./heroic-features.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/heroic-features.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_heroic_features_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_heroic_features_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://modern-js-application/./src/css/heroic-features.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://modern-js-application/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/backdrop.jpg":
/*!*********************************!*\
  !*** ./src/images/backdrop.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28df10c88d6228c13a31.jpg\";\n\n//# sourceURL=webpack://modern-js-application/./src/images/backdrop.jpg?");

/***/ }),

/***/ "./src/images/comedian.png":
/*!*********************************!*\
  !*** ./src/images/comedian.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0be21f02c0518d875f4c.png\";\n\n//# sourceURL=webpack://modern-js-application/./src/images/comedian.png?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_heroic_features_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/heroic-features.css */ \"./src/css/heroic-features.css\");\n/* harmony import */ var _modules_display_characters_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display-characters-cards.js */ \"./src/js/modules/display-characters-cards.js\");\n/* harmony import */ var _modules_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/style.js */ \"./src/js/modules/style.js\");\n/* harmony import */ var _modules_open_character_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/open-character-card.js */ \"./src/js/modules/open-character-card.js\");\n/* harmony import */ var _modules_create_image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/create-image.js */ \"./src/js/modules/create-image.js\");\n/* harmony import */ var _modules_create_character_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/create-character.js */ \"./src/js/modules/create-character.js\");\n/* harmony import */ var _modules_edit_character_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/edit-character.js */ \"./src/js/modules/edit-character.js\");\n/* harmony import */ var _modules_delete_character_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/delete-character.js */ \"./src/js/modules/delete-character.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_display_characters_cards_js__WEBPACK_IMPORTED_MODULE_1__.displayCharactersCards)().then(() => {\n    (0,_modules_style_js__WEBPACK_IMPORTED_MODULE_2__.changePinColor)()\n    ;(0,_modules_style_js__WEBPACK_IMPORTED_MODULE_2__.randomRotation)()\n    ;(0,_modules_open_character_card_js__WEBPACK_IMPORTED_MODULE_3__.openCharacterCard)()\n    ;(0,_modules_create_image_js__WEBPACK_IMPORTED_MODULE_4__.createImage)()\n    ;(0,_modules_create_character_js__WEBPACK_IMPORTED_MODULE_5__.createCharacter)()\n    ;(0,_modules_edit_character_js__WEBPACK_IMPORTED_MODULE_6__.editCharacter)()\n    ;(0,_modules_delete_character_js__WEBPACK_IMPORTED_MODULE_7__.deleteCharacter)()\n}).catch((error) => {\n    console.error(error)\n})\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/create-character.js":
/*!********************************************!*\
  !*** ./src/js/modules/create-character.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCharacter\": () => (/* binding */ createCharacter)\n/* harmony export */ });\n// create a character\nasync function createCharacter() {\n    document.getElementById('create').addEventListener('click', async () => {\n        try {\n            document.getElementById('submit').addEventListener('click', async () => {\n                const inputs = Array.from(document.getElementsByClassName('inputs'))\n                const values = inputs.map(({ value }) => value.trim())\n\n                if (values.some((value) => value === '')) {\n                    alert(\"there's an empty input!\")\n                } else {\n                    const [name, shortDescription, description] = values\n                    const response = await fetch('https://character-database.becode.xyz/characters', {\n                        method: 'POST',\n                        headers: {\n                            'Content-Type': 'application/json'\n                        },\n                        body: JSON.stringify({\n                            name,\n                            shortDescription,\n                            description,\n                            image\n                        })\n                    })\n\n                    const createdCharacter = await response.json()\n                    console.log(createdCharacter)\n                    location.reload()\n                }\n            })\n        } catch (error) {\n            console.error(error)\n        }\n    })\n}\n\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/create-character.js?");

/***/ }),

/***/ "./src/js/modules/create-image.js":
/*!****************************************!*\
  !*** ./src/js/modules/create-image.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createImage\": () => (/* binding */ createImage)\n/* harmony export */ });\n// create image\nasync function createImage() {\n    document.querySelector('#input-image').addEventListener('change', (element) => {\n        const file = element.target.files[0]\n        const reader = new FileReader()\n        reader.onloadend = () => {\n            image = reader.result.replace('data:', '').replace(/^.+,/, '')\n        }\n        reader.readAsDataURL(file)\n    })\n}\n\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/create-image.js?");

/***/ }),

/***/ "./src/js/modules/delete-character.js":
/*!********************************************!*\
  !*** ./src/js/modules/delete-character.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteCharacter\": () => (/* binding */ deleteCharacter)\n/* harmony export */ });\n/* harmony import */ var _display_characters_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-characters-cards.js */ \"./src/js/modules/display-characters-cards.js\");\n\n\n// delete a character\nfunction deleteCharacter() {\n    const deleteButton = document.getElementsByClassName('delete');\n\n    for (let i = 0; i < deleteButton.length; i++) {\n        deleteButton[i].addEventListener('click', async function () {\n\n            if (confirm('Are you sure you want to delete this character?')) {\n                const id = _display_characters_cards_js__WEBPACK_IMPORTED_MODULE_0__.newCharacterId[i];\n\n                try {\n                    const response = await fetch(`https://character-database.becode.xyz/characters/${id}`, {\n                        method: 'DELETE'\n                    });\n\n                    const deletedCharacter = await response.json();\n                    console.log(deletedCharacter);\n\n                    location.reload();\n                } catch (error) {\n                    console.error(error);\n                }\n            } else {\n                alert('This character has not been deleted');\n            }\n        });\n    };\n}\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/delete-character.js?");

/***/ }),

/***/ "./src/js/modules/display-characters-cards.js":
/*!****************************************************!*\
  !*** ./src/js/modules/display-characters-cards.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCharactersCards\": () => (/* binding */ displayCharactersCards),\n/* harmony export */   \"newCharacterId\": () => (/* binding */ newCharacterId)\n/* harmony export */ });\nlet characterId = new Array();\n\n// clone character's cards\nasync function displayCharactersCards() {\n    try {\n        const response = await fetch('https://character-database.becode.xyz/characters');\n        const character = await response.json();\n\n        const cardTemplate = document.querySelector('#template');\n        const target = document.querySelector('#target');\n\n        character.forEach(({ name, shortDescription, image, description, id }) => {\n            const cardClone = cardTemplate.cloneNode(true).content;\n\n            cardClone.querySelector('#name').innerHTML = name;\n            cardClone.querySelector('#short-description').innerHTML = shortDescription;\n            cardClone.querySelector('#image').src = `data:image/*;base64,${image}`;\n            cardClone.querySelector('#long-description').innerHTML = description;\n\n            target.appendChild(cardClone);\n\n            characterId.push(id);\n        });\n    } catch (error) {\n        console.error(error);\n    }\n}\n\nlet newCharacterId = characterId;\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/display-characters-cards.js?");

/***/ }),

/***/ "./src/js/modules/edit-character.js":
/*!******************************************!*\
  !*** ./src/js/modules/edit-character.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editCharacter\": () => (/* binding */ editCharacter)\n/* harmony export */ });\n/* harmony import */ var _display_characters_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-characters-cards.js */ \"./src/js/modules/display-characters-cards.js\");\n\n\n//edit character\nasync function editCharacter() {\n    const outerEditButton = document.getElementsByClassName('outer-edit');\n\n    for (let i = 0; i < outerEditButton.length; i++) {\n        outerEditButton[i].addEventListener('click', async () => {\n            const id = _display_characters_cards_js__WEBPACK_IMPORTED_MODULE_0__.newCharacterId[i];\n            try {\n                const response = await fetch(`https://character-database.becode.xyz/characters/${id}`);\n                const character = await response.json();\n\n                document.getElementById('input-name').value = character.name;\n                document.getElementById('input-short-description').value = character.shortDescription;\n                document.getElementById('input-long-description').textContent = character.description;\n\n                document.getElementById('submit').addEventListener('click', async () => {\n                    const inputs = Array.from(document.getElementsByClassName(\"inputs\"));\n                    const values = inputs.map(({ value }) => value.trim());\n                    const [name, shortDescription, description] = values;\n\n                    if (values.some((value) => value === \"\")) {\n                        alert(\"there's an empty input!\");\n                        return;\n                    }\n                    else {\n                        const edit = await fetch(`https://character-database.becode.xyz/characters/${id}`, {\n                            method: 'PUT',\n                            headers: {\n                                \"Content-Type\": \"application/json\",\n                            },\n                            body: JSON.stringify({\n                                name,\n                                shortDescription,\n                                description,\n                                image\n                            }),\n                        });\n                        const editedCharacter = await edit.json();\n                        console.log(editedCharacter);\n                        location.reload();\n                    }\n                });\n            } catch (error) {\n                console.error(error);\n            }\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/edit-character.js?");

/***/ }),

/***/ "./src/js/modules/open-character-card.js":
/*!***********************************************!*\
  !*** ./src/js/modules/open-character-card.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openCharacterCard\": () => (/* binding */ openCharacterCard)\n/* harmony export */ });\n// open character card\nfunction openCharacterCard() {\n    const longDescriptionButton = document.getElementsByClassName('long-description-button');\n    const cardName = document.getElementsByClassName('name-for-modal');\n    const shortDescription = document.getElementsByClassName('short-for-modal');\n    const longDescription = document.getElementsByClassName('long-for-modal');\n    const cardImage = document.getElementsByClassName('image-for-modal');\n\n    for (let i = 0; i < longDescriptionButton.length; i++) {\n        longDescriptionButton[i].addEventListener('click', function () {\n\n            let modalName = document.getElementById('name-modal');\n            let modalShortDescription = document.getElementById('short-modal-description');\n            let modalLongDescription = document.getElementById('long-modal-description');\n            let modalImage = document.getElementById('modal-image');\n\n            modalName.textContent = cardName[i].textContent;\n            modalShortDescription.textContent = shortDescription[i].textContent;\n            modalLongDescription.textContent = longDescription[i].textContent;\n            modalImage.src = cardImage[i].src;\n        });\n    }\n}\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/open-character-card.js?");

/***/ }),

/***/ "./src/js/modules/style.js":
/*!*********************************!*\
  !*** ./src/js/modules/style.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePinColor\": () => (/* binding */ changePinColor),\n/* harmony export */   \"randomRotation\": () => (/* binding */ randomRotation)\n/* harmony export */ });\n// change pin color randomly\nfunction changePinColor() {\n    const pins = Array.from(document.getElementsByClassName('fa-thumbtack'))\n    const colors = ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'gray']\n    pins.forEach(pin => {\n        pin.style.color = colors[Math.floor(Math.random() * colors.length)]\n    })\n}\n\n// change style of the cards\nfunction randomRotation() {\n    const cards = Array.from(document.getElementsByClassName('card'))\n    const rotate = ['rotate(1deg)', 'rotate(-1deg)', 'rotate(0deg)', 'rotate(0deg)', 'rotate(0deg)']\n    cards.forEach(card => {\n        card.style.transform = rotate[Math.floor(Math.random() * rotate.length)]\n    })\n}\n\n\n\n//# sourceURL=webpack://modern-js-application/./src/js/modules/style.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
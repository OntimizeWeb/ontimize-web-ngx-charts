webpackJsonp(["scripts"],{

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/domchange.js":
/***/ (function(module, exports) {

module.exports = "(function (window) {\r\n    var last = +new Date();\r\n    var delay = 100; // default delay\r\n\r\n    // Manage event queue\r\n    var stack = [];\r\n\r\n    function callback() {\r\n        var now = +new Date();\r\n        if (now - last > delay) {\r\n            for (var i = 0; i < stack.length; i++) {\r\n                stack[i]();\r\n            }\r\n            last = now;\r\n        }\r\n    }\r\n\r\n    // Public interface\r\n    var onDomChange = function (fn, newdelay) {\r\n        if (newdelay) delay = newdelay;\r\n        stack.push(fn);\r\n    };\r\n\r\n    // Naive approach for compatibility\r\n    function naive() {\r\n\r\n        var last = document.getElementsByTagName('*');\r\n        var lastlen = last.length;\r\n        var timer = setTimeout(function check() {\r\n\r\n            // get current state of the document\r\n            var current = document.getElementsByTagName('*');\r\n            var len = current.length;\r\n\r\n            // if the length is different\r\n            // it's fairly obvious\r\n            if (len != lastlen) {\r\n                // just make sure the loop finishes early\r\n                last = [];\r\n            }\r\n\r\n            // go check every element in order\r\n            for (var i = 0; i < len; i++) {\r\n                if (current[i] !== last[i]) {\r\n                    callback();\r\n                    last = current;\r\n                    lastlen = len;\r\n                    break;\r\n                }\r\n            }\r\n\r\n            // over, and over, and over again\r\n            setTimeout(check, delay);\r\n\r\n        }, delay);\r\n    }\r\n\r\n    //\r\n    //  Check for mutation events support\r\n    //\r\n\r\n    var support = {};\r\n\r\n    var el = document.documentElement;\r\n    var remain = 3;\r\n\r\n    // callback for the tests\r\n    function decide() {\r\n        if (support.DOMNodeInserted) {\r\n            window.addEventListener(\"DOMContentLoaded\", function () {\r\n                if (support.DOMSubtreeModified) { // for FF 3+, Chrome\r\n                    el.addEventListener('DOMSubtreeModified', callback, false);\r\n                } else { // for FF 2, Safari, Opera 9.6+\r\n                    el.addEventListener('DOMNodeInserted', callback, false);\r\n                    el.addEventListener('DOMNodeRemoved', callback, false);\r\n                }\r\n            }, false);\r\n        } else if (document.onpropertychange) { // for IE 5.5+\r\n            document.onpropertychange = callback;\r\n        } else { // fallback\r\n            naive();\r\n        }\r\n    }\r\n\r\n    // checks a particular event\r\n    function test(event) {\r\n        el.addEventListener(event, function fn() {\r\n            support[event] = true;\r\n            el.removeEventListener(event, fn, false);\r\n            if (--remain === 0) decide();\r\n        }, false);\r\n    }\r\n\r\n    // attach test events\r\n    if (window.addEventListener) {\r\n        test('DOMSubtreeModified');\r\n        test('DOMNodeInserted');\r\n        test('DOMNodeRemoved');\r\n    } else {\r\n        decide();\r\n    }\r\n\r\n    // do the dummy test\r\n    var dummy = document.createElement(\"div\");\r\n    el.appendChild(dummy);\r\n    el.removeChild(dummy);\r\n\r\n    // expose\r\n    window.onDomChange = onDomChange;\r\n})(window);"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/keyboard.js":
/***/ (function(module, exports) {

module.exports = "function __triggerKeyboardEvent(el, keyCode) {\r\n  var eventObj = document.createEventObject ?\r\n    document.createEventObject() : document.createEvent(\"Events\");\r\n\r\n  if (eventObj.initEvent) {\r\n    eventObj.initEvent(\"keydown\", true, true);\r\n  }\r\n\r\n  eventObj.keyCode = keyCode;\r\n  eventObj.which = keyCode;\r\n\r\n  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent(\"onkeydown\", eventObj);\r\n\r\n};\r\n\r\n\r\nonDomChange(function () {\r\n  setTimeout(function () {\r\n    __triggerKeyboardEvent(document.body, parseInt(\"13\"));\r\n  }, 0);\r\n}, 0);\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	try {
		if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else if (typeof execScript !== "undefined") {
			execScript(src);
		} else {
			console.error("[Script Loader] EvalError: No eval function available");
		}
	} catch (error) {
		console.error("[Script Loader] ", error.message);
	}
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/domchange.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/domchange.js"))

/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/keyboard.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/keyboard.js"))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/domchange.js");
module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/keyboard.js");


/***/ })

},[2]);
//# sourceMappingURL=scripts.bundle.js.map
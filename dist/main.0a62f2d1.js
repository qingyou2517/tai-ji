// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
// ???css???????????????"#html"
var style = document.querySelector('#style');

var string = '/*\u4F60\u597D\uFF0C\u6211\u53EB\u9752\u6E38\n *\u63A5\u4E0B\u6765\uFF0C\u6211\u8981\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n *\u9996\u5148\uFF0C\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\n **/\n #div1 {\n    border:1px solid red;\n    width:200px; \n    height:200px;\n\n}\n/*\u63A5\u4E0B\u6765\uFF0C\u628Adiv\u53D8\u6210\u53D8\u6210\u4E00\u5F20\u592A\u6781\u516B\u5366\u56FE\n *\u6CE8\u610F\u770B\u597D\u55BD\uFF01\uFF01\n *\u9996\u5148\uFF0C\u628Adiv\u53D8\u6210\u5706\n**/\n#div1{\n    position:relative;\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n/*\u516B\u5366\u662F\u4E00\u9634\u4E00\u9633\n *\u5148\u753B\u9634\u9633\u9C7C\n **/\n#div1{\n    \n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#div1::before{\n    display:block;\n    position:absolute;\n    content:\'\';\n    \n    width:100px;\n    height:100px;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius:50%;\n    background:black;\n}\n#div1::after{\n    display:block;\n    position:absolute;\n    content:\'\';\n    \n    width:100px;\n    height:100px;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius:50%;\n    background:white;\n    bottom:0;\n}\n/*\u800C\u9634\u4E2D\u6709\u9633\uFF0C\u9633\u4E2D\u6709\u9634\n *\u6545\u518D\u6DFB\u9634\u9633\u773C\n **/\n #div1::before{\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);\n}\n\n';
var string2 = '';
//string??????????????????????????????????????????????????????string2???????????? ???????????????????????????????????????????????????

// string=string.replace(/\n/g,'<br>')
//replace????????????????????????????????????html??????????????????????????????????????????????????????????????????replace??????????????????<br>??????????????????????????????????????? < ????????????????????????

var n = 0;

var step = function step() {
    setTimeout(function () {
        //???????????????string2?????????????????????
        if (string[n] === '\n') {
            string2 += '<br>';
            //<br>?????????string2???????????????????????????string2???????????????string
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
            //??????????????????????????????html?????????????????????&nbsp;
        }
        //?????????????????????string2???????????????string
        else {
                string2 += string[n];
            }

        // console.log(string2.substring(0,n))
        //substring????????????n?????????n???????????????1??????
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999999);
        html.scrollTo(0, 999999);
        //?????????html?????????string2????????????string2.substring(0,n)
        n++;

        if (n < string.length) {
            step();
        }
    }, 5);
};
//setTimeout()??????????????????setInterval()??????????????????????????????setTimeout()?????????????????????

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.0a62f2d1.map
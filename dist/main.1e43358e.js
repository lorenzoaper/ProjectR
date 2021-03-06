// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PRELOAD: "PRELOAD",
    PLAYSCENE: "PLAYSCENE",
    ENDING: "ENDING"
  }
};
exports.CST = CST;
},{}],"src/Scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  var _super = _createSuper(LoadScene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {
      this.readyCount = 0;
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      // add logo image
      this.load.image("title_bg", "./assets/image/background-menu.png");
      this.load.image("end_bg", "./assets/image/backgroundend.png");
      this.load.audio("title_music", "./assets/audio/menu-music.mp3");
      this.load.audio("end_music", "./assets/audio/failsound.mp3");
      this.load.audio("soundbutton", "./assets/audio/screenbuttons.wav");
      this.load.image('sablier', './assets/image/time-01.svg');
      this.load.image('mort', './assets/image/mort.svg');
      this.load.image('vitesse', './assets/image/vitesse.svg'); //  this.load.image("options_button", "./assets/image/options_button1.png");

      this.load.image("play_button", "./assets/image/play_button1.png"); //  this.load.image("logo", "./assets/image/logo.png");

      this.load.image("back_menu_button", "./assets/image/backtomenu.png");
      this.load.image("retry_button", "./assets/image/retry.png");
      this.load.spritesheet("cat", "./assets/sprite/cat.png", {
        frameHeight: 32,
        frameWidth: 32
      });
      this.load.spritesheet("eric", "./assets/sprite/eric.png", {
        frameHeight: 32,
        frameWidth: 29.5
      });
      this.load.audio("title_music", "./assets/audio/shuinvy-childhood.mp3"); // for(let i = 0; i < 100; i++){
      //     this.load.spritesheet("cat" + i++,"./assets/sprite/cat.png", {
      //         frameWidth: 32,
      //         frameHeight: 32
      //     })
      // }

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff //white

        }
      });
      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      }); // this.load.on("complete", ()=>{
      //     console.log("Done");
      // })
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
      this.scene.launch();
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/Scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  var _super = _createSuper(MenuScene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      // this.add.image(this.game.renderer.width / 2.35, this.game.renderer.height * 0.20, "logo").setDepth(1);
      this.add.image(0, 0, "title_bg").setOrigin(0); // Audio menu 

      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 1.5 + 100, "play_button").setDepth(1); //    let optionButton = this.add.image(this.game.renderer.width /2, this.game.renderer.height / 1.5 + 100, "options_button").setDepth(1);

      var musicmenu = this.sound.add("title_music", {
        loop: true
      });
      musicmenu.play();
      this.soundbutton = this.sound.add("soundbutton", {
        volume: 0.1
      });
      var hoverSprite = this.add.sprite(100, 100, "eric").setDepth(1); //hoverSprite.setScale(2);

      hoverSprite.setVisible(false);
      this.anims.create({
        key: "walk",
        frameRate: 12,
        repeat: -1,
        //repeat forever
        frames: this.anims.generateFrameNumbers("eric", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7]
        })
      }); // fonction sur les buttons
      // PointerEvents:
      // pointerover - hovering
      // pointerout - not hovering
      // pointerup - click and release
      // pointerdown - just click

      playButton.setInteractive();
      playButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = playButton.x - playButton.width;
        hoverSprite.y = playButton.y;
      });
      playButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      playButton.on("pointerup", function () {
        musicmenu.stop();

        _this.soundbutton.play();

        _this.scene.start(_CST.CST.SCENES.PRELOAD);

        _this.scene.launch();
      }); // optionButton.setInteractive();
      // optionButton.on("pointerover", ()=>{
      //     hoverSprite.setVisible(true);
      //     hoverSprite.play("walk");
      //     hoverSprite.x = optionButton.x - optionButton.width;
      //     hoverSprite.y = optionButton.y;
      // })
      // optionButton.on("pointerout", ()=>{
      //     hoverSprite.setVisible(false);
      // })
      // optionButton.on("pointerup", ()=>{
      //     this.scene.start();
      //     this.scene.launch();
      // })
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
;
},{"../CST":"src/CST.js"}],"src/Scenes/PreloadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreloadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PreloadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PreloadScene, _Phaser$Scene);

  var _super = _createSuper(PreloadScene);

  function PreloadScene() {
    _classCallCheck(this, PreloadScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.PRELOAD
    });
  }

  _createClass(PreloadScene, [{
    key: "preload",
    value: function preload() {
      this.load.image('sky', './assets/image/skyy.png');
      this.load.image('ground', './assets/image/ground.png');
      this.load.image('groundinvi', './assets/image/groundinvi.png');
      this.load.image('background', './assets/image/background.png'); //this.load.audio('hit', ['./assets/audio/hit.mp3']);

      this.load.audio('end', ['./assets/audio/end.mp3']); //this.load.audio('hit2', ['./assets/audio/hit2.mp3']);

      this.load.audio('jump', ['./assets/audio/jump.mp3']);
      this.load.audio('end2', ['./assets/audio/end2.mp3']);
      this.load.audio('pause', ['./assets/audio/pause.mp3']);
      this.load.audio('gogogo', ['./assets/audio/gogogo.mp3']);
      this.load.audio('loselife', ['./assets/audio/loselife.mp3']);
      this.load.audio('hit', ['./assets/audio/hitt.wav']);
      this.load.audio('hit2', ['./assets/audio/hitt2.wav']);
      this.load.audio('soundgame', ['./assets/audio/musicgame.mp3']);
      this.load.image('sablier', './assets/image/time-01.svg');
      this.load.image('coeur', './assets/image/coeur.png');
      this.load.image('score', './assets/image/score.png');
      this.load.spritesheet('perso', './assets/image/perso-run.png', {
        frameWidth: 88,
        frameHeight: 94
      });
      this.load.spritesheet('perso-down', './assets/image/perso-down-1.png', {
        frameWidth: 100,
        frameHeight: 94
      });
      this.load.spritesheet('perso-down2', './assets/image/perso-down-2.png', {
        frameWidth: 100,
        frameHeight: 94
      });
      this.load.spritesheet('perso-up', './assets/image/perso-jump.png', {
        frameWidth: 88,
        frameHeight: 94
      }); // enemies

      this.load.image('enemy-1', './assets/image/enemy1.png');
      this.load.image('enemy-2', './assets/image/enemy2.png');
      this.load.image('enemy-3', './assets/image/enemy3.png'); // specials enemies

      this.load.spritesheet('enemy-spe1', './assets/image/krugs.png', {
        frameWidth: 95,
        frameHeight: 110
      });
      this.load.spritesheet('enemy-spe2', './assets/image/soinc.png', {
        frameWidth: 95,
        frameHeight: 110
      });
      this.load.spritesheet('enemy-spe3', './assets/image/tourelle.png', {
        frameWidth: 95,
        frameHeight: 110
      });
      this.load.spritesheet('enemy-spe4', './assets/image/claptrap.png', {
        frameWidth: 95,
        frameHeight: 110
      });
      this.load.spritesheet('enemy-spe5', './assets/image/bulbizarre.png', {
        frameWidth: 95,
        frameHeight: 110
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.PLAYSCENE);
      this.scene.launch();
    }
  }]);

  return PreloadScene;
}(Phaser.Scene);

exports.PreloadScene = PreloadScene;
},{"../CST":"src/CST.js"}],"src/Scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PlayScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  var _super = _createSuper(PlayScene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.PLAYSCENE
    });
  }

  _createClass(PlayScene, [{
    key: "create",
    value: function create() {
      this.gameSpeed = 2;
      this.backgroundSpeed = 2;
      this.isGameRunning = true;
      this.gameOver = false;
      this.respawnTime = 900;
      this.score = 0;
      this.timePause = false;
      this.minute = 0;
      this.seconde = 0;
      this.bonusPoint = 10;
      this.data.set('score', this.gameSpeed);
      this.data.set('time', this.minute + " : " + this.seconde);
      this.enemyDead = this.data.set('kill', 0);
      this.vies = this.data.set('vies', 3);
      this.timePause = false;
      var _this$game$config = this.game.config,
          height = _this$game$config.height,
          width = _this$game$config.width;
      this.add.image(640, 360, 'sky');
      this.background = this.add.tileSprite(0, height, width, 720, 'background').setOrigin(0, 1);
      this.ground = this.add.tileSprite(0, height, width, 170, 'ground').setOrigin(0, 1);
      this.platforms = this.physics.add.staticGroup();
      this.platforms.create(400, 690, 'groundinvi').setScale(2).refreshBody();
      this.platforms.create(400, 245, 'groundinvi').setScale(2).refreshBody();
      this.player = this.physics.add.sprite(100, 400, 'perso').setCollideWorldBounds(true).setGravityY(8000);
      this.obsticles = this.physics.add.group();
      this.initTimeEvent();
      this.initText();
      this.initAnims();
      this.initColliders();
      this.initSound();
      this.handleInputs();
      this.initIcone();
      this.soundgame.play();
    }
  }, {
    key: "initIcone",
    value: function initIcone() {
      // this.iconeScore = this.add.image(30, 30, 'score');
      // this.iconeScore.setScale(2);
      // this.iconeKill = this.add.image(322, 30, 'mort');
      // this.iconeKill.setScale(2);
      this.iconeTime = this.add.image(614, 30, 'sablier');
      this.iconeTime.setScale(0.3); // this.iconeSpeed = this.add.image(906, 30, 'botte');
      // this.iconeSpeed.setScale(2);

      this.iconeVie = this.add.image(30, 690, 'coeur');
      this.iconeVie2 = this.add.image(60, 690, 'coeur');
      this.iconeVie3 = this.add.image(90, 690, 'coeur');
      this.iconeVie.setScale(0.10);
      this.iconeVie2.setScale(0.10);
      this.iconeVie3.setScale(0.10);
    }
  }, {
    key: "initSound",
    value: function initSound() {
      this.soundgame = this.sound.add('soundgame', {
        volume: 10
      });
      this.soundEnd = this.sound.add('end');
      this.soundHit = this.sound.add('hit', {
        volume: 1.5
      });
      this.soundEnd = this.sound.add('end');
      this.soundHit2 = this.sound.add('hit2', {
        volume: 1.5
      });
      this.soundEnd2 = this.sound.add('end2');
      this.soundJump = this.sound.add('jump', {
        volume: 2
      });
      this.soundPause = this.sound.add('pause', {
        volume: 0.15
      }); // this.soundGogogo = this.sound.add('gogogo');

      this.soundLoseLife = this.sound.add('loselife', {
        volume: 6
      });
    }
  }, {
    key: "initTimeEvent",
    value: function initTimeEvent() {
      this.timedEvent = this.time.addEvent({
        delay: 1000,
        callback: this.onEventTimer,
        callbackScope: this,
        loop: true
      });
      this.timedEventScore = this.time.addEvent({
        delay: 1000 / 10,
        callback: this.onEventScore,
        callbackScope: this,
        loop: true
      });
    }
  }, {
    key: "initText",
    value: function initText() {
      this.scoreText = this.add.text(30, 15, '', {
        fill: "#ffffff",
        font: '900 35px Roboto'
      });
      this.timeText = this.add.text(644, 15, '', {
        font: '900 35px Roboto',
        fill: '#ffffff'
      }); // this.textVies = this.add.text(1230, 15, '', { font: '900 35px Roboto', fill: '#ffffff' });

      this.textPause = this.add.text(400, 260, '', {
        font: '900 150px Roboto',
        fill: '#ffffff'
      });
      this.textVitesse = this.add.text(936, 15, '', {
        font: '900 35px Roboto',
        fill: '#ffffff'
      });
      this.highScoreText = this.add.text(1050, 0, '', {
        fill: "#535353",
        font: '900 35px Roboto'
      });
      this.textGameOver = this.add.text(300, 260, '', {
        font: '900 100px Roboto',
        fill: '#000000'
      });
      this.textEnemyDead = this.add.text(352, 15, '', {
        font: '900 35px Roboto',
        fill: '#ffffff'
      });
      this.textResumeGame = this.add.text(300, 360, '', {
        font: '900 70px Roboto',
        fill: '#ffffff'
      });
      this.textPause.visible = false;
      this.textGameOver.visible = false;
      this.textResumeGame.visible = false;
    }
  }, {
    key: "displayText",
    value: function displayText() {
      this.textPause.setText('PAUSE');
      this.textGameOver.setText('GAME OVER');
      this.scoreText.setText(this.score); // this.textVies.setText(this.data.get('vies'));
      // this.textEnemyDead.setText(this.data.get('kill'));
      // this.textVitesse.setText(Math.trunc(this.gameSpeed));

      this.timeText.setText(this.minute + " : " + this.seconde); // this.textResumeGame.setText('Votre score est de : ' + this.score + '\nVous avez tu?? ' + this.data.get('kill') + ' ennemies\nen ' + this.minute + " minutes et " + this.seconde + ' secondes !');
    }
  }, {
    key: "initColliders",
    value: function initColliders() {
      this.physics.add.collider(this.player, this.platforms);
    }
  }, {
    key: "initAnims",
    value: function initAnims() {
      this.anims.create({
        key: 'running',
        frames: this.anims.generateFrameNumbers('perso', {
          start: 0,
          end: 7
        }),
        frameRate: 12,
        repeat: -1
      });
      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('perso-down', {
          start: 0,
          end: 6
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'down2',
        frames: this.anims.generateFrameNumbers('perso-down2', {
          start: 0,
          end: 6
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('perso-up', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'enemy--spe1',
        frames: this.anims.generateFrameNumbers('enemy-spe1', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'enemy--spe2',
        frames: this.anims.generateFrameNumbers('enemy-spe2', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'enemy--spe3',
        frames: this.anims.generateFrameNumbers('enemy-spe3', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'enemy--spe4',
        frames: this.anims.generateFrameNumbers('enemy-spe4', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
      this.anims.create({
        key: 'enemy--spe5',
        frames: this.anims.generateFrameNumbers('enemy-spe5', {
          start: 0,
          end: 7
        }),
        frameRate: 16,
        repeat: -1
      });
    }
  }, {
    key: "handleInputs",
    value: function handleInputs() {
      var _this = this;

      var jumpTime = 0;
      var downTime = 0;
      var currentGameSpeed = 0;
      this.input.keyboard.on('keydown_ESC', function () {
        if (!this.gameOver) {
          if (this.anims.paused) {
            this.soundgame.resume();
            this.anims.resumeAll();
            this.textPause.visible = false;
            this.backgroundSpeed = 2;
            this.gameSpeed = currentGameSpeed;
            this.isGameRunning = true;
            this.timePause = false;
            this.soundPause.play(); // this.soundGogogo.play();
          } else {
            this.soundgame.pause();
            this.anims.pauseAll();
            this.textPause.visible = true;
            this.backgroundSpeed = 0;
            this.isGameRunning = false;
            currentGameSpeed = this.gameSpeed;
            this.gameSpeed = 0;
            this.timePause = true;
            this.soundPause.play();
          }
        }
      }, this);
      this.input.keyboard.on('keydown_SPACE', function () {
        if (_this.timePause == false) {
          if (!jumpTime == 0) {
            return;
          }

          _this.player.body.height = 92;
          _this.player.body.offset.y = 0;

          _this.player.setVelocityY(-2600);

          _this.soundJump.play();

          jumpTime = 1;
        }
      });
      this.input.keyboard.on('keyup_SPACE', function () {
        jumpTime = 0;
      });
      this.input.keyboard.on('keydown_DOWN', function () {
        if (_this.timePause == false) {
          if (!downTime == 0) {
            return;
          }

          _this.choiceDownImage = Math.floor(Math.random() * 2);
          _this.player.body.height = 58;
          _this.player.body.offset.y = 34;

          _this.player.setVelocityY(+2600);

          downTime = 1;
          setTimeout(function () {
            _this.player.body.height = 92;
            _this.player.body.offset.y = 0;
          }, 100);
        }
      });
      this.input.keyboard.on('keyup_DOWN', function () {
        downTime = 0;
      });
    }
  }, {
    key: "placeObsticle",
    value: function placeObsticle() {
      var obsticleNum = Math.floor(Math.random() * 4) + 1;
      var distance = Phaser.Math.Between(600, 900);
      var obsticle;
      var enemyHeight = [120, 350];

      if (obsticleNum > 3) {
        obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], "enemy-spe1");

        if (this.score >= 0 && this.score <= 399) {
          obsticle.play('enemy--spe4', 1);
        } else if (this.score >= 400 && this.score <= 799) {
          obsticle.play('enemy--spe2', 1);
        } else if (this.score >= 800 && this.score <= 1199) {
          obsticle.play('enemy--spe3', 1);
        } else if (this.score >= 1200 && this.score <= 1599) {
          obsticle.play('enemy--spe1', 1);
        } else if (this.score >= 1600) {
          obsticle.play('enemy--spe5', 1);
        }

        obsticle.body.height = 110;
        obsticle.body.width = 85;
      } else {
        obsticle = this.obsticles.create(this.game.config.width + distance, this.game.config.height - enemyHeight[Math.floor(Math.random() * 2)], "enemy-".concat(obsticleNum));
        obsticle.body.height = 70;
        obsticle.body.width = 60;
      }

      obsticle.setImmovable();
    }
  }, {
    key: "onEventTimer",
    value: function onEventTimer() {
      !this.timePause ? this.seconde++ : 0;

      if (this.seconde > 59) {
        this.minute++;
        this.seconde = 0;
      }
    }
  }, {
    key: "onEventScore",
    value: function onEventScore() {
      if (!this.isGameRunning) {
        return;
      }

      this.score++;
      this.gameSpeed += 0.02;

      if (this.score % 100 === 0) {
        //this.reachSound.play();
        this.tweens.add({
          targets: this.scoreText,
          duration: 100,
          repeat: 3,
          alpha: 0,
          yoyo: true
        });
      }

      var score = Array.from(String(this.score), Number);

      for (var i = 0; i < 5 - String(this.score).length; i++) {
        score.unshift(0);
      }
    }
  }, {
    key: "randomSound",
    value: function randomSound(sound1, sound2) {
      var randomNumber = Math.floor(Math.random() * 2);

      if (randomNumber == 0) {
        return sound1.play();
      } else {
        return sound2.play();
      }
    }
  }, {
    key: "randomImage",
    value: function randomImage(randomNumber) {
      if (randomNumber == 0) {
        return this.player.anims.play('down', true);
      } else {
        return this.player.anims.play('down2', true);
      }
    }
  }, {
    key: "bonusPoints",
    value: function bonusPoints() {
      if (this.data.get('kill') == this.bonusPoint) {
        this.soundPause.play();
        this.score += 100;
        this.bonusPoint += 10;
      }
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      var _this2 = this;

      if (this.data.get('vies') == 0) {
        this.soundgame.stop();
        this.scene.stop();
        this.scene.start(_CST.CST.SCENES.ENDING, [this.score, this.enemyDead, this.minute, this.seconde, this.gameSpeed]);
      } else if (this.data.get('vies') == 1) {
        this.iconeVie2.visible = false;
        this.iconeVie3.visible = false;
      } else if (this.data.get('vies') == 2) {
        this.iconeVie3.visible = false;
      }

      this.ground.tilePositionX += this.gameSpeed;
      this.background.tilePositionX += this.backgroundSpeed;
      Phaser.Actions.IncX(this.obsticles.getChildren(), -this.gameSpeed);
      this.displayText();
      this.respawnTime += delta * this.gameSpeed * 0.06;

      if (this.respawnTime >= 700) {
        this.placeObsticle();
        this.respawnTime = 0;
      }

      this.obsticles.getChildren().forEach(function (obsticle) {
        if (obsticle.getBounds().right < 0) {
          obsticle.destroy();

          _this2.soundLoseLife.play();

          _this2.vies = _this2.data.set('vies', _this2.data.get('vies') - 1);
        }
      });
      this.obsticles.getChildren().forEach(function (obsticle) {
        var player = _this2.player;

        _this2.physics.add.overlap(_this2.player, _this2.obsticles, killenemies, null, _this2);
      });

      function killenemies(player, obsticle) {
        if (this.player.body.onFloor() == false && obsticle.y == 370) {
          this.randomSound(this.soundHit, this.soundHit2);
          obsticle.destroy();
          this.enemyDead = this.data.set('kill', this.data.get('kill') + 1);
        } else if (!this.player.body.offset.y == 0 && obsticle.y == 600) {
          this.randomSound(this.soundHit, this.soundHit2);
          obsticle.destroy();
          this.enemyDead = this.data.set('kill', this.data.get('kill') + 1);
        }
      }

      if (this.player.body.onFloor() == false) {
        this.player.anims.play('jump', true);
      } else {
        this.player.body.height <= 58 ? // this.player.anims.play('down', true) :
        this.randomImage(this.choiceDownImage) : this.player.anims.play('running', true);
      } // if (this.data.get('vies') == 0) {
      //   this.gameOver = true;
      //   this.anims.pauseAll();
      //   this.randomSound(this.soundEnd, this.soundEnd2);
      //   this.isGameRunning = false;
      //   this.backgroundSpeed = 0;
      //   this.gameSpeed = 0;
      //   this.timePause = true;
      //   this.textGameOver.visible = true;
      //   this.textResumeGame.visible = true;
      //   this.data.set('vies', 3);
      // }


      this.bonusPoints();
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js"}],"src/Scenes/EndScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EndScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(EndScene, _Phaser$Scene);

  var _super = _createSuper(EndScene);

  function EndScene() {
    _classCallCheck(this, EndScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.ENDING
    });
  }

  _createClass(EndScene, [{
    key: "init",
    value: function init(data) {
      this.score = data[0];
      this.enemyDead = data[1].list.kill;
      this.minute = data[2];
      this.seconde = data[3];
      this.speed = data[4];
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      console.log(this.enemyDead);
      this.add.image(0, 0, "end_bg").setOrigin(0);
      var retryButton = this.add.image(this.game.renderer.width / 3, this.game.renderer.height / 2 + 180, "retry_button");
      var backMenuButton = this.add.image(this.game.renderer.width / 1.5, this.game.renderer.height / 2 + 180, "back_menu_button").setDepth(1);
      var music = this.sound.add("end_music", {
        loop: true,
        volume: 20
      });
      music.play();
      var hoverSprite = this.add.sprite(100, 100, "eric").setDepth(1); //hoverSprite.setScale(2);

      hoverSprite.setVisible(false);
      this.anims.create({
        key: "walk",
        frameRate: 12,
        repeat: -1,
        //repeat forever
        frames: this.anims.generateFrameNumbers("eric", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7]
        })
      });
      this.scoreText = this.add.text(this.game.renderer.width / 2 - 60, this.game.renderer.height / 2 - 100, '', {
        fill: "#ffffff",
        font: '900 35px Sans Serif'
      });
      this.scoreText.setText('Score: ' + this.score);
      this.killImg = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 50, "mort");
      this.killImg.setScale(0.3);
      this.killText = this.add.text(this.killImg.x + 30, this.killImg.y - 20, '', {
        fill: "#ffffff",
        font: '900 35px Sans Serif'
      });
      this.killText.setText(this.enemyDead);
      this.timerImg = this.add.image(this.game.renderer.width / 2 - 270, this.game.renderer.height / 2 + 50, "sablier");
      this.timerImg.setScale(0.3);
      this.timerText = this.add.text(this.timerImg.x + 30, this.timerImg.y - 20, '', {
        fill: "#ffffff",
        font: '900 35px Sans Serif'
      });
      this.timerText.setText(this.minute + " m " + this.seconde + " s");
      this.speedImg = this.add.image(this.game.renderer.width / 2 + 200, this.game.renderer.height / 2 + 50, "vitesse");
      this.speedImg.setScale(0.3);
      this.speedText = this.add.text(this.speedImg.x + 30, this.speedImg.y - 20, '', {
        fill: "#ffffff",
        font: '900 35px Sans Serif'
      });
      this.speedText.setText(this.speed.toFixed(2));
      this.soundbutton = this.sound.add("soundbutton"); // fonction sur les buttons
      // PointerEvents:
      // pointerover - hovering
      // pointerout - not hovering
      // pointerup - click and release
      // pointerdown - just click

      retryButton.setInteractive();
      retryButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = retryButton.x - retryButton.width;
        hoverSprite.y = retryButton.y;
      });
      retryButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      retryButton.on("pointerup", function () {
        music.stop();

        _this.scene.stop();

        _this.scene.start(_CST.CST.SCENES.PRELOAD);
      });
      backMenuButton.setInteractive();
      backMenuButton.on("pointerover", function () {
        hoverSprite.setVisible(true);
        hoverSprite.play("walk");
        hoverSprite.x = backMenuButton.x - backMenuButton.width;
        hoverSprite.y = backMenuButton.y;
      });
      backMenuButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      backMenuButton.on("pointerup", function () {
        music.stop();

        _this.soundbutton.play();

        _this.scene.stop();

        _this.scene.start(_CST.CST.SCENES.LOAD);
      });
    }
  }]);

  return EndScene;
}(Phaser.Scene);

exports.EndScene = EndScene;
;
},{"../CST":"src/CST.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./Scenes/LoadScene");

var _MenuScene = require("./Scenes/MenuScene");

var _PreloadScene = require("./Scenes/PreloadScene");

var _PlayScene = require("./Scenes/PlayScene");

var _EndScene = require("./Scenes/EndScene");

/** @type {import("../typings/phaser")}  */
var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    parent: "gameDiv",
    mode: Phaser.Scale.parent,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  transparent: true,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PreloadScene.PreloadScene, _PlayScene.PlayScene, _EndScene.EndScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
};
new Phaser.Game(config);
},{"./Scenes/LoadScene":"src/Scenes/LoadScene.js","./Scenes/MenuScene":"src/Scenes/MenuScene.js","./Scenes/PreloadScene":"src/Scenes/PreloadScene.js","./Scenes/PlayScene":"src/Scenes/PlayScene.js","./Scenes/EndScene":"src/Scenes/EndScene.js"}],"../../Users/Drizix/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54317" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/Drizix/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map
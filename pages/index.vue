<script setup lang="ts">
import { onMounted } from 'vue'
const { locales, setLocale, locale, baseUrl, defaultLocale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const localeRoute = useLocaleRoute();

function random(n) {
  return Math.floor(Math.random() * n) + 1;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function Canvas(elm) {
  this.elm = elm;
  this.canvasCtx = this.elm.getContext('2d');
  this.width = this.elm.width;
  this.height = this.elm.height;
  this.children = new Array();

  this.init();
}
Canvas.prototype = {
  resize: function (booleam) {
    this.width = this.elm.width = booleam ? this.elm.parentNode.clientWidth * 2 : window.innerWidth * 2;
    this.height = this.elm.height = booleam ? this.elm.parentNode.clientHeight * 2 : window.innerHeight * 2;
  },
  clear: function () {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
  },
  addChild: function (child) {
    this.children.push(child);
  },
  removeChild: function (num) {
    this.children.splice(num, 1);
  },
  rendering: function () {
    this.clear();
    var limit = this.children.length;
    for (var i = limit - 1; i >= 0; i--) {
      var child = this.children[i];
      if (child.draw(this.canvasCtx)) {
        this.removeChild(i);
      }
    }
  },
  createGolddust: function (num, x1, y1, x2, y2) {
    //var colors = ["#f29fb5", "#f5cbd4", "#783791"];
    var colors = ["#d9c79e", "#b78c58", "#cfae81"];
    for (var i = 0; i < num; i++) {
      var x_pos = Math.floor(Math.random() * (x2 - x1)) + x1;
      var y_pos = Math.floor(Math.random() * (y2 - y1)) + y1;
      this.addChild(new Golddust(
        this,
        x_pos,
        y_pos,
        0.5,//尺寸
        //Math.random() + 0.05,
        //randomRange(0.5,0.6),
        { x: random(360), y: random(360), z: random(360) },
        { x: random(10), y: random(10), z: random(10) },
        random(5),
        colors[random(3) - 1]
      ));
    }
  },
  animate: function () {
    var _this = this;
    // 创建数量随机的粒子
    // Math.random() > 0.01 && 
    if (this.children.length < 1000) {
      this.createGolddust(100, 1, 1, this.width, this.height);
    }
    this.rendering();

    window.requestAnimationFrame(function () {
      _this.animate();
    });
  },
  init: function () {
    this.resize(true);
    this.animate();
  }
}

function Golddust(parent, x, y, scale, direction, rotate, wind, color) {
  this.parent = parent;
  this.x_pos = x;
  this.y_pos = y;
  this.scale = scale;
  this.direction = direction;
  this.rotate = rotate;
  this.wind = wind;
  this.gr = 10;//速度
  this.phase = 0;
  this.color = color;
}
Golddust.prototype = {
  draw: function (ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x_pos, this.y_pos);

    ctx.rotate(this.direction.y / 100 * Math.PI);
    ctx.scale(this.scale, this.scale);
    ctx.fillStyle = this.color;

    var x_rad = Math.cos(this.direction.x * Math.PI / 100);
    var z_rad = Math.cos(this.direction.z * Math.PI / 100);
    ctx.moveTo(-6 * z_rad, -10 * x_rad);
    ctx.bezierCurveTo(-10 * z_rad, 0 * x_rad, -5 * z_rad, 10 * x_rad, 0 * z_rad, 10 * x_rad);
    ctx.bezierCurveTo(0 * z_rad, 0 * x_rad, 0 * z_rad, 0 * x_rad, -1 * z_rad, -1 * x_rad);
    ctx.fill();
    ctx.restore();

    return this.moveGolddust();
  },
  moveGolddust: function () {
    var move_y;
    if (this.phase === 0) {
      var ground = 1 + (this.scale / 10);
      if (this.y_pos > this.parent.height * ground) {
        this.gr = 0;
        this.wind = 0;
        this.rotate.x = 0;
        this.rotate.y = 0;
        this.rotate.z = 0;
        this.phase = 1;
        this.parent.fallenGolddust++;
      }
    } else if (this.phase === 2) {
      if (this.gr > -3) this.gr += this.gr / 10;
      move_y = (this.gr * this.scale);
    }

    this.y_pos = this.y_pos + (this.gr * this.scale) / 2;
    //this.y_pos = this.y_pos + (this.gr * this.scale) / 2;
    //this.x_pos = this.x_pos + this.wind / -2;
    this.direction.x += this.rotate.x / 3;
    this.direction.y += this.rotate.y / 3;
    this.direction.z += this.rotate.z / 3;
    if (this.x_pos > this.parent.width) return true;
    // 落到距离
    return this.y_pos > this.parent.height / 1 ? true : false;
  }
}

onMounted(() => {

  var canvas = document.getElementById("Golddust");
  var SakuraCanvas = new Canvas(canvas);
})

</script>

<template>
  <div :style="{
    height: '100vh'
  }">
    <div id="particles-js">
      <div class="pinzi-box-wrap">
        <div class="pinzi-box">
          <img src="/images/pro-3.png"
            class="pinzi" />
          <img src="/images/pro-4.png"
            class="pinzi" />
          <img src="/images/pro-2.png"
            class="pinzi" />
          <img src="/images/pro-1.png"
            class="pinzi" />
        </div>
      </div>
      <canvas id="Golddust" width="3806" height="2000"></canvas>
    </div>
  </div>
</template>

<style scoped lang="less">
#particles-js {
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url('../assets/css/WechatIMG3.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

#particles-js::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 20%;
  height: 100%;
  background: linear-gradient(90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(54deg);
  animation: sweep 2s linear infinite;
  // z-index: 1;
}

@keyframes sweep {
  0% {
    left: -100%;
  }

  100% {
    left: 200%;
  }
}

.pinzi-box-wrap {
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20%;
}

.pinzi-box {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
}

.pinzi {
  -webkit-box-reflect: below -6px linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
  width: 140px;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  transition: transform 0.3s ease;
}

.pinzi:hover {
  transform: scale(1.05);
}

/*Golddust*/

#Golddust {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 99;
  background: transparent;
}
</style>

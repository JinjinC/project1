$(function(){

    var browser = {
      versions:function(){ 
      var u = navigator.userAgent, app = navigator.appVersion; 
      return {//移动终端浏览器版本信息 
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1 , //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
        mqq: u.indexOf("MQQ") >-1
        };
      }(),
      language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }

    var params = {
      wave_timeModifier: function(){
        //移动终端 ios设备 qq 浏览器
        if (browser.versions.mobile && browser.versions.mqq && browser.versions.ios) {
          return 2
        }
        else if(browser.versions.mobile){
          return 4
        }
        else{
          return 1
        };
      }()
    }

    var waves = new SineWaves({
      el: document.getElementById('waves'),

      speed: 8,

      width: function() {
        return $('.mi-headline-bg').width()*1.4;
      },

      height: function() {
        return $('.mi-headline-bg').height();
      },

      wavesWidth: '100%',

      ease: 'SineInOut',

      waves: [
        {
          timeModifier: 0.5 * params.wave_timeModifier,
          lineWidth: 2,
          amplitude: 150,
          wavelength: 200,
          segmentLength: 1
        },
        {
          timeModifier: 0.5 * params.wave_timeModifier,
          lineWidth: 2,
          amplitude: 100,
          wavelength: 150,
          segmentLength: 1
        },
        {
          timeModifier: 0.5 * params.wave_timeModifier,
          lineWidth: 2,
          amplitude: 50,
          wavelength: 80,
          segmentLength: 1
        }
      ],

      initialize: function (){

      },

      resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1,"rgba(255, 255, 255, 0)");

        var index = -1;
        var length = this.waves.length;
          while(++index < length){
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      }
    });

    var sawtooth = new SineWaves({
      el: document.getElementById('sawtooth'),

      speed: 8,

      width: function() {
        return $('#sawtooth').parent().width()*1.4;
      },

      height: function() {
        return $('#sawtooth').parent().height();
      },

      wavesWidth: '100%',

      ease: 'SineInOut',

      waves: [
        {
          timeModifier: 0.2 * params.wave_timeModifier,
          lineWidth: 2,
          amplitude: -250,
          wavelength: 200,
          segmentLength: 1,
          type: function(x, waves) {
            return Math.abs(waves.sawtooth(x))-0.6;
          }
        }
      ],

      initialize: function (){

      },

      resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(1,"rgba(255, 255, 255, 0)");

        var index = -1;
        var length = this.waves.length;
          while(++index < length){
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      }
    });

  var waves2 = new SineWaves({
    el: document.getElementById('waves2'),

    speed: 8,

    width: function() {
      return $('#waves2').parent().width()*1.4;
    },

    height: function() {
      return $('#waves2').parent().height();
    },

    wavesWidth: '100%',

    ease: 'SineInOut',

    waves: [
      {
        timeModifier: 0.5 * params.wave_timeModifier,
        lineWidth: 2,
        amplitude: 120,
        wavelength: 200,
        segmentLength: 1
      },
      {
        timeModifier: 0.5 * params.wave_timeModifier,
        lineWidth: 2,
        amplitude: 100,
        wavelength: 150,
        segmentLength: 1
      },
      {
        timeModifier: 0.5 * params.wave_timeModifier,
        lineWidth: 2,
        amplitude: 50,
        wavelength: 80,
        segmentLength: 1
      }
    ],

    initialize: function (){

    },

    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(255, 255, 255, 0)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
      gradient.addColorStop(1,"rgba(255, 255, 255, 0)");

      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }

      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });
});
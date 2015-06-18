$(function(){
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
          timeModifier: 0.5,
          lineWidth: 2,
          amplitude: 150,
          wavelength: 200,
          segmentLength: 1
        },
        {
          timeModifier: 0.5,
          lineWidth: 2,
          amplitude: 100,
          wavelength: 150,
          segmentLength: 1
        },
        {
          timeModifier: 0.5,
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
          timeModifier: 0.2,
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
        timeModifier: 0.5,
        lineWidth: 2,
        amplitude: 120,
        wavelength: 200,
        segmentLength: 1
      },
      {
        timeModifier: 0.5,
        lineWidth: 2,
        amplitude: 100,
        wavelength: 150,
        segmentLength: 1
      },
      {
        timeModifier: 0.5,
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
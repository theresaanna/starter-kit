var App = SC.Application.create();

App.MyView = SC.View.extend({
  pinchChange: function(rec) {
    this.$().css('scale',function(index, value) {
      return rec.get('scale') * value
    });
  },

  panOptions: {
    numberOfRequiredTouches: 2
  },

  panChange: function(rec) {
    var val = rec.get('translation');
  
    this.$().css({
      translateX: '%@=%@'.fmt((val.x < 0)? '-' : '+',Math.abs(val.x)),
      translateY: '%@=%@'.fmt((val.y < 0)? '-' : '+',Math.abs(val.y))
    });
  }
});

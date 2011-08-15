var App = SC.Application.create();

App.MyView = SC.View.extend({
  pinchChange: function(gestureRecognizer) {
    this.$().css('scale',function(index, value) {
      return gestureRecognizer.get('scale') * value;
    })
  },
  
  mouseDown: function() {
    window.alert("hello world!");
  }
});

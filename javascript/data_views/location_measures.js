// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = {
    _id: '_design/location',
    views: {
      weather: {
        map: (function(doc) {
          if (doc.type === "measure" && (doc.apiary_id != null) && (doc.beehouse_id == null)) {
            return emit(doc.apiary_id, doc);
          }
        }).toString()
      }
    }
  };

}).call(this);

// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = {
    _id: '_design/locations',
    views: {
      all: {
        map: (function(doc) {
          if (doc.type === "location") {
            return emit(doc._id, doc);
          }
        }).toString()
      }
    }
  };

}).call(this);

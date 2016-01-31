// Generated by CoffeeScript 1.9.2
(function() {
  var Promise, fs;

  fs = require('fs');

  Promise = require('promise');

  module.exports = function(db, category) {
    return new Promise(function(fulfill, reject) {
      return fs.readdir(__dirname + "/" + category + "_views", (function(_this) {
        return function(err, filenames) {
          var promise;
          if (err) {
            reject(err);
            return;
          }
          promise = Promise.all(filenames.map(function(filename) {
            var view;
            view = require("./" + category + "_views/" + filename.split(".")[0]);
            return db["delete"](view);
          }));
          return promise.then(function(views) {
            return fulfill(views);
          });
        };
      })(this));
    });
  };

}).call(this);

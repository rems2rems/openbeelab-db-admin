// Generated by CoffeeScript 1.9.2
(function() {
  var db, dbConfig, insertFn, prompt;

  dbConfig = require('./config');

  db = require('../../openbeelab-db-util/javascript/dbUtil').database(dbConfig.databases.local.db);

  prompt = require('prompt');

  insertFn = require('./insert_' + process.argv[2]);

  insertFn(db, null, function(err, res) {
    console.log(err);
    return console.log(res);
  });

}).call(this);

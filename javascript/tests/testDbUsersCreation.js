// Generated by CoffeeScript 1.10.0
(function() {
  var Promise, config, createUsers, dbDriver, expect, mockCouch;

  expect = require('must');

  require('../../../openbeelab-util/javascript/objectUtils').install();

  require('../../../openbeelab-util/javascript/arrayUtils').install();

  config = require('../config');

  mockCouch = require('../../../mock-couch');

  dbDriver = require('../../../openbeelab-db-util/javascript/dbDriver');

  Promise = require('promise');

  createUsers = require('../create_users');

  describe("an admin and an uploader for a db", function() {
    var dbServer, instance, usersDb;
    instance = null;
    dbServer = null;
    usersDb = null;
    before(function(done) {
      instance = mockCouch.createServer();
      instance.listen(config.database.port);
      instance.addDB("_users");
      dbServer = dbDriver.connectToServer(config.database);
      usersDb = dbServer.useDb("_users");
      return done();
    });
    after(function(done) {
      instance.close();
      return done();
    });
    return it("should be created", function(done) {
      return createUsers(usersDb, config.database.name).then(function(users) {
        var adminProm, uploaderProm;
        adminProm = usersDb.get(users.admin._id);
        uploaderProm = usersDb.get(users.uploader._id);
        return Promise.all([adminProm, uploaderProm]);
      }).then(function(arg) {
        var admin, uploader;
        admin = arg[0], uploader = arg[1];
        admin.name.must.be(config.database.name + "_admin");
        admin._id.must.be("org.couchdb.user:" + config.database.name + "_admin");
        admin.roles.must.contain(config.database.name + "/admin");
        uploader.name.must.be(config.database.name + "_uploader");
        uploader._id.must.be("org.couchdb.user:" + config.database.name + "_uploader");
        uploader.roles.must.contain(config.database.name + "/uploader");
        return done();
      })["catch"](function(err) {
        console.log('err: ' + err);
        return done(err);
      });
    });
  });

}).call(this);

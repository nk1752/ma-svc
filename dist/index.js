"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_body_parser = require("body-parser");
var import_express2 = __toESM(require("express"));
var import_morgan = __toESM(require("morgan"));
var import_cors = __toESM(require("cors"));

// src/router.ts
var import_express = require("express");

// src/service.ts
function getStatus() {
  return __async(this, null, function* () {
    const report = {
      id: 2,
      name: "inaaya",
      age: 16
    };
    return report;
  });
}
function getHello(name) {
  return __async(this, null, function* () {
    return { message: `hello ${name}` };
  });
}

// src/controller.ts
function Status(req, res) {
  return __async(this, null, function* () {
    const report = yield getStatus();
    return res.status(200).contentType("application/json").send(report);
  });
}
function Hello(req, res) {
  return __async(this, null, function* () {
    const name = req.query.name;
    const msg = yield getHello(name);
    return res.status(200).contentType("application/json").send(msg);
  });
}

// src/router.ts
var router = (0, import_express.Router)();
console.log("router");
router.get("/status", Status);
router.get("/hello", Hello);
var router_default = router;

// src/server.ts
var createServer = () => {
  const app = (0, import_express2.default)();
  app.disable("x-powered-by").use((0, import_morgan.default)("dev")).use((0, import_body_parser.urlencoded)({ extended: true })).use((0, import_body_parser.json)()).use((0, import_cors.default)()).use("/api", router_default);
  return app;
};

// src/index.ts
var port = process.env.PORT || 5001;
var server = createServer();
server.listen(port, () => {
  console.log(`api running on ${port}`);
});

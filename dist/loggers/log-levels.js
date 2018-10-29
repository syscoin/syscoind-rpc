"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bunyan = require("bunyan");

var bunyan = _interopRequireWildcard(_bunyan);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var LOG_LEVELS = {
    debug: bunyan.DEBUG,
    error: bunyan.ERROR,
    info: bunyan.INFO,
    silent: 'silent',
    trace: bunyan.TRACE,
    warn: bunyan.WARN
};

exports.default = LOG_LEVELS;
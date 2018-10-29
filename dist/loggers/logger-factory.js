"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _debugLogger = require("./debug-logger");

var _debugLogger2 = _interopRequireDefault(_debugLogger);

var _errorLogger = require("./error-logger");

var _errorLogger2 = _interopRequireDefault(_errorLogger);

var _infoLogger = require("./info-logger");

var _infoLogger2 = _interopRequireDefault(_infoLogger);

var _traceLogger = require("./trace-logger");

var _traceLogger2 = _interopRequireDefault(_traceLogger);

var _warnLogger = require("./warn-logger");

var _warnLogger2 = _interopRequireDefault(_warnLogger);

var _silentLogger = require("./silent-logger");

var _silentLogger2 = _interopRequireDefault(_silentLogger);

var _loggingSupportMethods = require("./logging-support-methods");

var _bunyan = require("bunyan");

var bunyan = _interopRequireWildcard(_bunyan);

var _logLevels = require("./log-levels");

var _logLevels2 = _interopRequireDefault(_logLevels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Note: right now many of the loggers seem to have duplicated functionality.  This
// will evolve as the SDK evolves into more granularly detailed reporting.
var LoggerFactory = function () {
    function LoggerFactory() {
        (0, _classCallCheck3.default)(this, LoggerFactory);
    }

    (0, _createClass3.default)(LoggerFactory, null, [{
        key: "createLogger",
        value: function createLogger(logLevel, whitelist, blacklist) {
            if (logLevel === 'silent') {
                return new _silentLogger2.default();
            }

            var logger = bunyan.createLogger({
                name: 'syscoin-js',
                level: logLevel
            });
            var listing = (0, _loggingSupportMethods.createListing)(whitelist, blacklist);

            switch (logLevel) {
                case _logLevels2.default.debug:
                    return new _debugLogger2.default(logger.debug.bind(logger), listing);
                case _logLevels2.default.error:
                    return new _errorLogger2.default(logger.error.bind(logger), listing);
                case _logLevels2.default.info:
                    return new _infoLogger2.default(logger.info.bind(logger), listing);
                case _logLevels2.default.trace:
                    return new _traceLogger2.default(logger.trace.bind(logger), listing);
                case _logLevels2.default.warn:
                    return new _warnLogger2.default(logger.warn.bind(logger), listing);
                default:
                    return new _errorLogger2.default(logger.error.bind(logger), listing);
            }
        }
    }]);
    return LoggerFactory;
}();

exports.default = LoggerFactory;
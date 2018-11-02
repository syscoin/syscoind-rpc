"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.callRpcWithCoercedStringArguments = callRpcWithCoercedStringArguments;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Most consumers of syscoin-js won't be using "callRpc" directly - that's a power user call.
// However, depending on how the arguments to this call are made, we can run into some problems:
// for example, if you are getting the arguments for callRpc from a GET request, they will all come
// to the RPC in string format.  These calls will fail in situations where the RPC was expected to be
// passed, say, a numeric value or a boolean one.  

// To not pass this argument finangling onto a consumer of the library, this function acts as a proxy to
// the "real" syscoin RPC method and coerces the arguments where appropriate.   
// As there are incredibly few instances at the time of this writing where this would be used (it's
// *highly* unlikely that a user will be setting up a web API where they'll primarily use the callRpc method vs.
// the multitude of direct abstractions provided) we're accepting the potential perf hit from some of the repeated
// arg checks.

// This coerced method also assumes args is an array.


function callRpcWithCoercedStringArguments(callRpc) {
    var _this = this;

    // Order important - see below
    var coercers = [new NumericTypeCoercer(), new BooleanTypeCoercer(), new JsonObjectTypeCoercer()];

    return function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(method, args) {
            var coercedArgumentArray;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            coercedArgumentArray = args.map(function (arg) {
                                if (!(typeof arg === 'string' || arg instanceof String)) {
                                    return arg; // Not a string, no need to coerce
                                }
                                // Run through coercers in order of likelihood - if we match one of the types return and
                                // don't go through the other checks
                                for (var i = 0; i < coercers.length; ++i) {
                                    if (coercers[i].matchesType(arg)) {
                                        return coercers[i].coerce(arg);
                                    }
                                }
                                // Sometimes a string is just a string.
                                return arg;
                            });
                            _context.next = 3;
                            return callRpc(method, coercedArgumentArray);

                        case 3:
                            return _context.abrupt("return", _context.sent);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }));

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    }();
}

var NumericTypeCoercer = function () {
    function NumericTypeCoercer() {
        (0, _classCallCheck3.default)(this, NumericTypeCoercer);
    }

    (0, _createClass3.default)(NumericTypeCoercer, [{
        key: "matchesType",
        value: function matchesType(input) {
            return !isNaN(input);
        }
    }, {
        key: "coerce",
        value: function coerce(input) {
            return +input;
        }
    }]);
    return NumericTypeCoercer;
}();

var BooleanTypeCoercer = function () {
    function BooleanTypeCoercer() {
        (0, _classCallCheck3.default)(this, BooleanTypeCoercer);
    }

    (0, _createClass3.default)(BooleanTypeCoercer, [{
        key: "matchesType",
        value: function matchesType(input) {
            return input.toLowerCase() === "true" || input.toLowerCase() === "false";
        }
    }, {
        key: "coerce",
        value: function coerce(input) {
            return input.toLowercase() === "true"; // We assume this is only getting called if matchesType.
        }
    }]);
    return BooleanTypeCoercer;
}();

var JsonObjectTypeCoercer = function () {
    function JsonObjectTypeCoercer() {
        (0, _classCallCheck3.default)(this, JsonObjectTypeCoercer);
    }

    (0, _createClass3.default)(JsonObjectTypeCoercer, [{
        key: "matchesType",
        value: function matchesType(input) {
            try {
                var o = JSON.parse(input);
                return o && (typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) === "object";
            } catch (e) {
                return false;
            }
        }
    }, {
        key: "coerce",
        value: function coerce(input) {
            return JSON.parse(input);
        }
    }]);
    return JsonObjectTypeCoercer;
}();
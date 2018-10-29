'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RpcException = function RpcException(responseData) {
    (0, _classCallCheck3.default)(this, RpcException);

    this.result = responseData.result;
    this.message = responseData.error;
    this.code = responseData.code;
    this.methodName = responseData.methodName || '';
};

exports.default = RpcException;
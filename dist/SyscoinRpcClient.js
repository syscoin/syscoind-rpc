var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var SyscoinRpcClient = /** @class */ (function () {
    function SyscoinRpcClient(configOptions) {
        var _this = this;
        this.configOptions = configOptions;
        this.instance = axios_1.default.create(SyscoinRpcClient.createConfigurationObject(this.configOptions.username, this.configOptions.password, this.configOptions.useSsl, this.configOptions.timeout, this.configOptions.customHttpAgent));
        //this needs to be defined in constructor so the THIS references get setup
        this.callRpc = function (methodName, args) { return __awaiter(_this, void 0, void 0, function () {
            var url, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = (this.configOptions.useSsl ? "https" : "http") + "://" + this.configOptions.host + ":" + this.configOptions.rpcPort;
                        data = {
                            jsonrpc: "1.0",
                            method: methodName.toLowerCase(),
                            // so we'll take that knowledge burden here instead of making
                            // the consuming methods worry about it
                            params: args ? Array.from(args).filter(function (element) { return element !== undefined; }) : []
                        };
                        return [4 /*yield*/, this.getResponseFromRpcCall(url, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
    }
    SyscoinRpcClient.prototype.getResponseFromRpcCall = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var responseFromRpc, dataFromRpc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.instance.post(url, data)];
                    case 1:
                        responseFromRpc = _a.sent();
                        dataFromRpc = responseFromRpc.data;
                        if (dataFromRpc) {
                            return [2 /*return*/, dataFromRpc.result ? dataFromRpc.result : dataFromRpc];
                        }
                        else {
                            return [2 /*return*/, responseFromRpc];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SyscoinRpcClient.createConfigurationObject = function (username, password, useSsl, timeout, customHttpAgent) {
        var configurationObject = {
            auth: {
                username: username,
                password: password
            },
            timeout: timeout
        };
        if (customHttpAgent) {
            var agentProperty = useSsl ? "httpsAgent" : "httpAgent";
            configurationObject[agentProperty] = customHttpAgent;
        }
        return configurationObject;
    };
    return SyscoinRpcClient;
}());
exports.SyscoinRpcClient = SyscoinRpcClient;
//# sourceMappingURL=SyscoinRpcClient.js.map
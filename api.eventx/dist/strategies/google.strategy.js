"use strict";
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var google_auth_library_1 = require("google-auth-library");
var user_1 = require("../models/user");
var user_service_1 = require("../services/user.service");
var client_id = '1090440622633-7v13p3scj6r9u86obqfh9a1to6qk9tc7.apps.googleusercontent.com';
exports.client_id = client_id;
var client = new google_auth_library_1.OAuth2Client(client_id);
exports.client = client;
var userS = new user_service_1.UserService();
function googleStrategy(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var ticket, payload, user, doc, u, doc, u;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.headers.authorization) return [3 /*break*/, 7];
                    return [4 /*yield*/, client.verifyIdToken({
                            idToken: req.headers.authorization,
                            audience: client_id,
                        })];
                case 1:
                    ticket = _a.sent();
                    if (!ticket) return [3 /*break*/, 7];
                    payload = ticket.getPayload();
                    if (!payload) return [3 /*break*/, 7];
                    return [4 /*yield*/, userS.get(payload.sub)];
                case 2:
                    user = _a.sent();
                    if (!user) return [3 /*break*/, 5];
                    doc = {
                        imageUrl: payload.picture,
                        name: payload.name,
                    };
                    return [4 /*yield*/, user_1.UserModel.updateOne({ google_id: payload.sub }, doc).exec()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, userS.get(payload.sub)];
                case 4:
                    u = _a.sent();
                    if (u) {
                        req.user = u;
                    }
                    return [3 /*break*/, 7];
                case 5:
                    doc = {
                        google_id: payload.sub,
                        imageUrl: payload.picture,
                        name: payload.name,
                    };
                    return [4 /*yield*/, user_1.UserModel.create(doc)];
                case 6:
                    u = _a.sent();
                    req.user = u;
                    _a.label = 7;
                case 7:
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
exports.googleStrategy = googleStrategy;
//# sourceMappingURL=google.strategy.js.map
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var models_1 = require("../models");
var user_event_1 = require("../models/user-event");
var user_service_1 = require("../services/user.service");
var channelRouter = express_1.Router();
exports.channelRouter = channelRouter;
var userS = new user_service_1.UserService();
channelRouter.get('/channel/:id/events', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var events, result, userEvents, _loop_1, _i, events_1, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, models_1.EventModel.find({ authorId: req.params.id }).exec()];
            case 1:
                events = _a.sent();
                result = [];
                userEvents = [];
                if (!req.user) return [3 /*break*/, 3];
                return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 2:
                userEvents = _a.sent();
                _a.label = 3;
            case 3:
                _loop_1 = function (event) {
                    var author, added;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, userS.get(event.authorId)];
                            case 1:
                                author = _a.sent();
                                added = userEvents.find(function (use) { return use.event_id.toString() === event._id.toString(); });
                                result.push(Object.assign({ author: author, added: added }, event.toJSON()));
                                return [2 /*return*/];
                        }
                    });
                };
                _i = 0, events_1 = events;
                _a.label = 4;
            case 4:
                if (!(_i < events_1.length)) return [3 /*break*/, 7];
                event = events_1[_i];
                return [5 /*yield**/, _loop_1(event)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 4];
            case 7:
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
channelRouter.get('/channel/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var author;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userS.get(req.params.id)];
            case 1:
                author = _a.sent();
                res.json(author);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=channel.router.js.map
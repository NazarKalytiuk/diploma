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
var models_1 = require("../models");
var user_service_1 = require("./user.service");
var EventService = /** @class */ (function () {
    function EventService() {
        this.userS = new user_service_1.UserService();
    }
    EventService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var events, result, _i, events_1, event, author;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EventModel.find().exec()];
                    case 1:
                        events = _a.sent();
                        result = [];
                        _i = 0, events_1 = events;
                        _a.label = 2;
                    case 2:
                        if (!(_i < events_1.length)) return [3 /*break*/, 5];
                        event = events_1[_i];
                        return [4 /*yield*/, this.userS.get(event.authorId)];
                    case 3:
                        author = _a.sent();
                        result.push(Object.assign({ author: author }, event.toJSON()));
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    EventService.prototype.getNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            var events, result, _i, events_2, event, author;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EventModel.find().sort([['_id', -1]]).exec()];
                    case 1:
                        events = _a.sent();
                        result = [];
                        _i = 0, events_2 = events;
                        _a.label = 2;
                    case 2:
                        if (!(_i < events_2.length)) return [3 /*break*/, 5];
                        event = events_2[_i];
                        return [4 /*yield*/, this.userS.get(event.authorId)];
                    case 3:
                        author = _a.sent();
                        result.push(Object.assign({ author: author }, event.toJSON()));
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    EventService.prototype.getClosest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var events, result, _i, events_3, event, author;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, models_1.EventModel.find().sort([['date', -1]]).exec()];
                    case 1:
                        events = _a.sent();
                        result = [];
                        _i = 0, events_3 = events;
                        _a.label = 2;
                    case 2:
                        if (!(_i < events_3.length)) return [3 /*break*/, 5];
                        event = events_3[_i];
                        return [4 /*yield*/, this.userS.get(event.authorId)];
                    case 3:
                        author = _a.sent();
                        result.push(Object.assign({ author: author }, event.toJSON()));
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, result];
                }
            });
        });
    };
    EventService.prototype.create = function (event) {
        var model = new models_1.EventModel(event);
        return model.save();
    };
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map
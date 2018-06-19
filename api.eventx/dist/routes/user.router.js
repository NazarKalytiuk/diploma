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
var auth_middleware_1 = require("../middleware/auth.middleware");
var models_1 = require("../models");
var user_event_1 = require("../models/user-event");
var user_service_1 = require("../services/user.service");
var userRouter = express_1.Router();
exports.userRouter = userRouter;
var userS = new user_service_1.UserService();
userRouter.get('/events/day', auth_middleware_1.auth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userEvents, eventsIds, events, date, todayEvents, result, _i, todayEvents_1, event, author;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 1:
                userEvents = _a.sent();
                eventsIds = userEvents.map(function (c) { return c.event_id; });
                return [4 /*yield*/, models_1.EventModel.find({ _id: { $in: eventsIds } }).exec()];
            case 2:
                events = _a.sent();
                date = new Date().getDate();
                todayEvents = events.filter(function (e) {
                    return e.date.getDate() === date;
                });
                result = [];
                _i = 0, todayEvents_1 = todayEvents;
                _a.label = 3;
            case 3:
                if (!(_i < todayEvents_1.length)) return [3 /*break*/, 6];
                event = todayEvents_1[_i];
                return [4 /*yield*/, userS.get(event.authorId)];
            case 4:
                author = _a.sent();
                result.push(Object.assign({ author: author, added: true }, event.toJSON()));
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
userRouter.get('/events/week', auth_middleware_1.auth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userEvents, eventsIds, events, date, todayEvents, result, _i, todayEvents_2, event, author;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 1:
                userEvents = _a.sent();
                eventsIds = userEvents.map(function (c) { return c.event_id; });
                return [4 /*yield*/, models_1.EventModel.find({ _id: { $in: eventsIds } }).exec()];
            case 2:
                events = _a.sent();
                date = new Date().getDate();
                todayEvents = events.filter(function (e) {
                    return e.date.getDate() >= date + 6;
                });
                result = [];
                _i = 0, todayEvents_2 = todayEvents;
                _a.label = 3;
            case 3:
                if (!(_i < todayEvents_2.length)) return [3 /*break*/, 6];
                event = todayEvents_2[_i];
                return [4 /*yield*/, userS.get(event.authorId)];
            case 4:
                author = _a.sent();
                result.push(Object.assign({ author: author, added: true }, event.toJSON()));
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
userRouter.get('/events/month', auth_middleware_1.auth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userEvents, eventsIds, events, month, todayEvents, result, _i, todayEvents_3, event, author;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 1:
                userEvents = _a.sent();
                eventsIds = userEvents.map(function (c) { return c.event_id; });
                return [4 /*yield*/, models_1.EventModel.find({ _id: { $in: eventsIds } }).exec()];
            case 2:
                events = _a.sent();
                month = new Date().getMonth();
                todayEvents = events.filter(function (e) {
                    return e.date.getMonth() >= month;
                });
                result = [];
                _i = 0, todayEvents_3 = todayEvents;
                _a.label = 3;
            case 3:
                if (!(_i < todayEvents_3.length)) return [3 /*break*/, 6];
                event = todayEvents_3[_i];
                return [4 /*yield*/, userS.get(event.authorId)];
            case 4:
                author = _a.sent();
                result.push(Object.assign({ author: author, added: true }, event.toJSON()));
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
userRouter.post('/event/add/:id', auth_middleware_1.auth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var doc, event, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                doc = new user_event_1.UserEventModel();
                doc.google_id = req.user.google_id;
                doc.event_id = req.params.id;
                return [4 /*yield*/, doc.save()];
            case 1:
                _a.sent();
                return [4 /*yield*/, models_1.EventModel.findById(req.params.id).exec()];
            case 2:
                event = _a.sent();
                if (event) {
                    result = Object.assign(event.toJSON(), { added: true });
                    res.json(result);
                }
                return [2 /*return*/];
        }
    });
}); });
userRouter.post('/event/remove/:id', auth_middleware_1.auth, function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var doc, event, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_event_1.UserEventModel.findOneAndRemove({ google_id: req.user.google_id, event_id: req.params.id }).exec()];
            case 1:
                doc = _a.sent();
                console.log(doc);
                return [4 /*yield*/, models_1.EventModel.findById(req.params.id).exec()];
            case 2:
                event = _a.sent();
                if (event) {
                    result = Object.assign(event.toJSON(), { added: false });
                    res.json(result);
                }
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=user.router.js.map
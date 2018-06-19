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
var fs = require("fs");
var multer = require("multer");
var path = require("path");
var models_1 = require("../models");
var user_event_1 = require("../models/user-event");
var event_service_1 = require("../services/event.service");
var eventsRouter = express_1.Router();
exports.eventsRouter = eventsRouter;
var eventS = new event_service_1.EventService();
eventsRouter.get('/events', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var events, userEvents, result, _loop_1, _i, events_1, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, eventS.getAll()];
            case 1:
                events = _a.sent();
                userEvents = [];
                if (!req.user) return [3 /*break*/, 3];
                return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 2:
                userEvents = _a.sent();
                _a.label = 3;
            case 3:
                result = [];
                _loop_1 = function (event) {
                    var added = userEvents.find(function (use) { return use.event_id.toString() === event._id.toString(); });
                    result.push(Object.assign({ added: added }, event));
                };
                for (_i = 0, events_1 = events; _i < events_1.length; _i++) {
                    event = events_1[_i];
                    _loop_1(event);
                }
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
eventsRouter.get('/events/new', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var events, userEvents, result, _loop_2, _i, events_2, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, eventS.getNew()];
            case 1:
                events = _a.sent();
                userEvents = [];
                if (!req.user) return [3 /*break*/, 3];
                return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 2:
                userEvents = _a.sent();
                _a.label = 3;
            case 3:
                result = [];
                _loop_2 = function (event) {
                    var added = userEvents.find(function (use) { return use.event_id.toString() === event._id.toString(); });
                    result.push(Object.assign({ added: added }, event));
                };
                for (_i = 0, events_2 = events; _i < events_2.length; _i++) {
                    event = events_2[_i];
                    _loop_2(event);
                }
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
eventsRouter.get('/events/closest', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var events, userEvents, result, _loop_3, _i, events_3, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, eventS.getClosest()];
            case 1:
                events = _a.sent();
                userEvents = [];
                if (!req.user) return [3 /*break*/, 3];
                return [4 /*yield*/, user_event_1.UserEventModel.find({ google_id: req.user.google_id }).exec()];
            case 2:
                userEvents = _a.sent();
                _a.label = 3;
            case 3:
                result = [];
                _loop_3 = function (event) {
                    var added = userEvents.find(function (use) { return use.event_id.toString() === event._id.toString(); });
                    result.push(Object.assign({ added: added }, event));
                };
                for (_i = 0, events_3 = events; _i < events_3.length; _i++) {
                    event = events_3[_i];
                    _loop_3(event);
                }
                res.json(result);
                return [2 /*return*/];
        }
    });
}); });
eventsRouter.post('/events', multer().any(), function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var file, name, filePath, imgUrl, data, event;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                file = req.files[0];
                if (!file) {
                    return [2 /*return*/, res.status(400).json('No Image')];
                }
                name = new Date().getTime().toString();
                filePath = path.resolve(__dirname, '../', 'public', name);
                fs.writeFileSync(filePath, file.buffer, 'binary');
                imgUrl = 'http://localhost:3000/' + 'static/' + name;
                data = JSON.parse(req.body.data);
                event = new models_1.EventModel(data);
                event.imageUrl = imgUrl;
                event.authorId = req.user.google_id;
                return [4 /*yield*/, event.save()];
            case 1:
                _a.sent();
                res.json(event);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=events.router.js.map
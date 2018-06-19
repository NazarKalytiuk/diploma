"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userEventSchema = new mongoose_1.default.Schema({
    google_id: String,
    event_id: String,
});
var UserEventModel = mongoose_1.default.model('UserEvent', userEventSchema);
exports.UserEventModel = UserEventModel;
//# sourceMappingURL=user-event.js.map
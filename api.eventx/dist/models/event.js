"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var eventSchema = new mongoose_1.default.Schema({
    name: String,
    authorId: String,
    address: String,
    imageUrl: String,
    time: String,
    date: Date,
    description: String,
    category: String,
});
var EventModel = mongoose_1.default.model('Event', eventSchema);
exports.EventModel = EventModel;
//# sourceMappingURL=event.js.map
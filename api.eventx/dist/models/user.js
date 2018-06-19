"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    google_id: String,
    imageUrl: String,
    name: String,
    company: String,
});
var UserModel = mongoose_1.default.model('User', userSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=user.js.map
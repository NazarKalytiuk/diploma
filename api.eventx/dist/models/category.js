"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var categorySchema = new mongoose_1.default.Schema({
    name: String,
    imageUrl: String,
});
var CategoryModel = mongoose_1.default.model('Category', categorySchema);
exports.CategoryModel = CategoryModel;
//# sourceMappingURL=category.js.map
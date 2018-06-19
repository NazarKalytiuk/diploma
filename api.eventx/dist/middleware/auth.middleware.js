"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function auth(req, res, next) {
    if (req.user) {
        next();
    }
    else {
        return res.status(401).json('You must be authorized');
    }
}
exports.auth = auth;
//# sourceMappingURL=auth.middleware.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
var router_1 = require("./routers/router");
var port = process.env.PORT || 9000;
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use("/v1", router_1.Router);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - ".concat(err)
    });
});
app.listen(port, function () {
    console.log("\uD83D\uDE80 Server ready at: http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map
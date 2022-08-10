"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = require("./routers/router");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swaggerDocs = require("./swagger.json");
var port = process.env.PORT || 9000;
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swaggerDocs));
app.get("/terms", function (req, res) {
    return res.json({ message: "Terms and Conditions" });
});
app.use("/v1", router_1.Router);
app.listen(port, function () {
    console.log("\uD83D\uDE80 Server ready at: http://localhost:".concat(port));
});
//# sourceMappingURL=server.js.map
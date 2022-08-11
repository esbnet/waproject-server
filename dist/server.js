"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const router_1 = require("./routers/router");
const port = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/v1", router_1.Router);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err}`,
    });
});
app.listen(port, () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map
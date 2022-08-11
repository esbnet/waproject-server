"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const MovieController_1 = __importDefault(require("../controllers/MovieController"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const Router = express_1.default.Router();
exports.Router = Router;
const swaggerDocs = require("../swagger.json");
Router.get("/", (req, res) => {
    return res.send("<h1>Welcome API WAproject!</>");
});
Router.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
Router.get("/terms", (req, res) => {
    return res.json({ message: "Terms and Conditions" });
});
Router.get("/movies", MovieController_1.default.findMovies);
Router.get("/movies/count", MovieController_1.default.countMovies);
Router.get("/movies/load", MovieController_1.default.createManyMovies);
Router.get("/movies/reset", MovieController_1.default.resetMovies);
//# sourceMappingURL=router.js.map
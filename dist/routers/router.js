"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
var MovieController_1 = __importDefault(require("../controllers/MovieController"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var Router = express_1["default"].Router();
exports.Router = Router;
var swaggerDocs = require("../swagger.json");
Router.get("/", function (req, res) {
    return res.send("<h1>Welcome API WAproject!</>");
});
Router.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swaggerDocs));
Router.get("/terms", function (req, res) {
    return res.json({ message: "Terms and Conditions" });
});
Router.get("/movies", MovieController_1["default"].findMovies);
Router.get("/movies/count", MovieController_1["default"].countMovies);
Router.get("/movies/load", MovieController_1["default"].createManyMovies);
Router.get("/movies/reset", MovieController_1["default"].resetMovies);
//# sourceMappingURL=router.js.map
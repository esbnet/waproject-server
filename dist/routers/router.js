"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
var Router = express_1["default"].Router();
exports.Router = Router;
var MovieController_1 = __importDefault(require("../controllers/MovieController"));
Router.get("/");
Router.get("/movies", MovieController_1["default"].findMovies);
Router.get("/movies/count", MovieController_1["default"].countMovies);
Router.get("/movies/load", MovieController_1["default"].createManyMovie);
//# sourceMappingURL=router.js.map
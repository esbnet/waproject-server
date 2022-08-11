import express, { Response, Request } from "express";
import MovieController from "../controllers/MovieController";
import swaggerUi from "swagger-ui-express";

const Router = express.Router();
const swaggerDocs = require("../swagger.json");

Router.get("/", (req: Request, res: Response) => {
	return res.send("<h1>Welcome API WAproject!</></br><span>Versão: 1.0</span> ");
});
Router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
Router.get("/terms", (req, res) => {
	return res.json({ message: "Terms and Conditions" });
});

Router.get("/movies", MovieController.findMovies);
Router.get("/movies/count", MovieController.countMovies);
Router.get("/movies/load", MovieController.createManyMovies);
Router.get("/movies/reset", MovieController.resetMovies);

export { Router };

import express from "express";

const Router = express.Router();

import MovieController from "../controllers/MovieController";

Router.get("/");

Router.get("/movies", MovieController.findMovies);
Router.get("/movies/count", MovieController.countMovies);
Router.get("/movies/load", MovieController.createManyMovie);

export { Router };

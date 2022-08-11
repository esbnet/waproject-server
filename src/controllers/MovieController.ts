import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default {
	async createManyMovies(request: Request, response: Response) {
		try {
			const movies = await axios({
				method: "GET",
				baseURL: "https://ghibliapi.herokuapp.com/films/",
				responseType: "json",
				params: {
					fields: "title,movie_banner,description,director,producer",
					limit: 50,
				},
			}).then((response) => {
				return response.data;
			});

			await prisma.movie.createMany({
				data: movies,
				skipDuplicates: true, // Skip
			});

			return response
				.status(201)
				.json("Todos os registros foram gravados com sucesso!");
		} catch (error) {
			return response.status(500).send({ error: error });
		}
	},

	async resetMovies(request: Request, response: Response) {
		try {
			await prisma.movie.deleteMany();
			return response
				.status(200)
				.json("Todos os registros foram apagados com sucesso!");
		} catch (error) {
			return response.status(500).send({ error: error });
		}
	},

	async findMovies(request: Request, response: Response) {
		const movie = await prisma.movie.findMany({});
		return response.json(movie);
	},

	async countMovies(request: Request, response: Response) {
		const movieCount = await prisma.movie.count();
		response.json({ count: movieCount });
	},

	// async findMoviesPaginate(request: Request, response: Response) {
	// 	const { skip, take } = request.query;

	// 	const movie = await prisma.movie.findMany({
	// 		orderBy: { title: "asc" },
	// 		//@ts-ignore
	// 		skip: parseInt(skip),
	// 		//@ts-ignore
	// 		take: parseInt(take),
	// 	});
	// 	response.json(movie);
	// },
};

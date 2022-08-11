"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const axios_1 = __importDefault(require("axios"));
const prisma = new client_1.PrismaClient();
exports.default = {
    createManyMovies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield (0, axios_1.default)({
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
                yield prisma.movie.createMany({
                    data: movies,
                    skipDuplicates: true, // Skip
                });
                return response
                    .status(201)
                    .json("Todos os registros foram gravados com sucesso!");
            }
            catch (error) {
                return response.status(500).send({ error: error });
            }
        });
    },
    resetMovies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.movie.deleteMany();
                return response
                    .status(200)
                    .json("Todos os registros foram apagados com sucesso!");
            }
            catch (error) {
                return response.status(500).send({ error: error });
            }
        });
    },
    findMovies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield prisma.movie.findMany({});
            return response.json(movie);
        });
    },
    countMovies(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const movieCount = yield prisma.movie.count();
            response.json({ count: movieCount });
        });
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
//# sourceMappingURL=MovieController.js.map
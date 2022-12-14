import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
require("express-async-errors");

import { Router } from "./routers/router";

const port = process.env.PORT || 9000;
const app = express();

// app.use(cors({ origin: "https://waproject-web.vercel.app" }));
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	return res.send("<h1>Welcome API WAproject!</>");
});

app.use("/v1", Router);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof Error) {
			return response.status(400).json({
				message: err.message,
			});
		}
		return response.status(500).json({
			status: "error",
			message: `Internal server error - ${err}`,
		});
	}
);

app.listen(port, () => {
	console.log(`🚀 Server ready at: http://localhost:${port}`);
});

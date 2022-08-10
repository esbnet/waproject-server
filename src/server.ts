import express from "express";
import cors from "cors";

import { Router } from "./routers/router";

import swaggerUi from "swagger-ui-express";

const swaggerDocs = require("./swagger.json");

const port = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/terms", (req, res) => {
	return res.json({ message: "Terms and Conditions" });
});

app.use("/v1", Router);

app.listen(port, () => {
	console.log(`🚀 Server ready at: http://localhost:${port}`);
});

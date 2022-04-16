import express from "express";
import bodyParser from "body-parser";
import expressLogger from "express-bunyan-logger";
import cors from "cors";
import config from "./config";
import router from "./routes";

const app = express();

// Using body parser
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000
}));

// Using Express logger
app.use(
    expressLogger({
        excludes: [
            "headers",
            "req",
            "user-agent",
            "short-body",
            "http-version",
            "req-headers",
            "res-headers",
            "body",
            "res",
        ], // remove extra details from log
    })
);

// Enabling CORS
app.use(cors());

// Test route
app.get("/api/test", (req, res) => {
    res.status(200).send(`Release ${config.get("version")}`);
});

// Redirecting requests to Routes
app.use("/api", router);

// Handling invalid, 404 requests
app.use((req, res) => {
    return res.status(404).send("Invalid route, Route not found");
});

export default app;
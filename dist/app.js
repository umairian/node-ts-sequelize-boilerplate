"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_bunyan_logger_1 = __importDefault(require("express-bunyan-logger"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// Using body parser
app.use(body_parser_1.default.json({ limit: "10mb" }));
app.use(body_parser_1.default.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000
}));
// Using Express logger
app.use((0, express_bunyan_logger_1.default)({
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
}));
// Enabling CORS
app.use((0, cors_1.default)());
// Test route
app.get("/api/test", (req, res) => {
    res.status(200).send(`Release ${config_1.default.get("version")}`);
});
// Redirecting requests to Routes
app.use("/api", routes_1.default);
// Handling invalid, 404 requests
app.use((req, res) => {
    return res.status(404).send("Invalid route, Route not found");
});
exports.default = app;

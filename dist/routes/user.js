"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Controllers
const user_1 = __importDefault(require("../controllers/user"));
router.get("/", user_1.default.get);
exports.default = router;

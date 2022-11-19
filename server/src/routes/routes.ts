import { Router } from "express";
import authLogin from "../controllers/authLogin";
import authSignup from "../controllers/authSignup";
import sendAccessToken from "../controllers/sendAccessToken";
import verifyAccessToken from "../controllers/verifyAccessToken";

const routes = Router();

routes.post("/login", authLogin, sendAccessToken);
routes.post("/signup", authSignup, sendAccessToken);
routes.get("/protected", verifyAccessToken);

export default routes;

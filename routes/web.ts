import { Router } from "../deps.ts";
import PostController from "../app/controllers/posts.ts";
import auth from "../app/middlewares/authorize.ts";

const router = new Router();

router.get("/", context => {
  context.response.body = "Hello World";
}).get("/api/", context => {
  context.response.body = "API version 1.0";
}).get("/api/post", auth, PostController.index)
.post("/api/post", auth, PostController.store)
.patch("/api/post/:id", auth, PostController.update)
.delete("/api/post/:id", auth, PostController.delete);

export default router;

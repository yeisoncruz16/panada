import { Application } from "../deps.ts";
import Router from "../routes/web.ts";

const app = new Application();

app.use(Router.routes());

console.log("App is listening at: http://localhost:8000");

await app.listen({port: 8000});

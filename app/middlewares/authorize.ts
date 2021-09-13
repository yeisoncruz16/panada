import {RouterContext, Status} from "../../deps.ts";

export default async (context: RouterContext, next: Function) => {
  const token = context.request.headers.get("authorization");

  if(!token){
    context.throw(Status.Unauthorized, "No enviaste el token");
  } else {
    if(token !== Deno.env.get("TOKEN")){
      context.throw(Status.Unauthorized, "No estas autorizado");
    }

    await next();
  }
}

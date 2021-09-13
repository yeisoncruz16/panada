import {connect, env as getEnvs} from "../../deps.ts";

const env = getEnvs();

const db = await connect({
  type: "mysql",
  database: env.DATABASE_DATABASE,
  hostname: env.DATABASE_HOST,
  port: parseInt(env.DATABASE_PORT),
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
});

export default db.getManager();

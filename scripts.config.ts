import { DenonConfig, env } from "./deps.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run ./bootstrap/app.ts",
      desc: "run my server automatically",
      unstable: true,
      allow: [
        "net",
        "read",
        "env"
      ],
      lock: "lock.json",
      tsconfig: "tsconfig.json",
      env: env()
    },
  },
};

export default config;

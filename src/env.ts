exports.get = get;
exports.set = set;
const def: any = {
  LOG_LEVEL: "silly",
  CORS: "*"
};

const dynamic: any = {};

export function get(key: string): any {
  return typeof dynamic[key] !== "undefined"
    ? dynamic[key]
    : typeof process.env[key] !== "undefined"
    ? process.env[key]
    : def[key];
}
export function set(key: string, val: any) {
  dynamic[key] = val;
}

export function checkEnv(): any {
  const log = require("./log").default;
  for (const key in def) {
    if (process.env[key] === undefined) {
      log.warn(`Env var ${key} is not set. Default will be used: ${def[key]}`);
    }
  }
}

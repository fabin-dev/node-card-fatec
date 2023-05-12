//* Libraries imports
import z from "zod";
import dotenv from "dotenv";

const { JWT_SECRET } = dotenv.config().parsed || {};
const JWT_SECRET_SCHEMA = z.string().nonempty();
if (!JWT_SECRET) throw new Error("Missing JWT_SECRET env variable");

const env = {
  JWT_SECRET: JWT_SECRET_SCHEMA.parse(JWT_SECRET),
};

export default env;

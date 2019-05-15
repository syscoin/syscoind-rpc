import { RpcConfigOptions } from "./index";

const config: RpcConfigOptions = {
  host: process.env.DOCKER_GATEWAY_IP || "localhost",
  rpcPort: 8368, // This is the port used in the docker-based integration tests, change at your peril
  username: "u",
  password: "p"
};

export default config;
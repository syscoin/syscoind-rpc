const config = {
    baseUrl: process.env.DOCKER_GATEWAY_IP || "localhost",
    port: 8336,
    username: "u",
    password: "p"
}

export default config;
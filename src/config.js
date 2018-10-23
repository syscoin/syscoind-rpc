const config = {
    baseUrl: process.env.DOCKER_GATEWAY_IP || "localhost",
    port: 8336, // This is the port used in the docker-based integration tests, change at your peril
    username: "u",
    password: "p",
    logLevel: 'error'
}

export default config;
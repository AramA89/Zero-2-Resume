const apiAccessProtocol = "http";
const apiDomain = "localhost";
const apiPort = 3001;

console.log('Hello there')
//API MIDDLEWARE --> CREATE CUSTOM DOMAINS//
function getApiUrl() {
    const apiUrl = `${apiAccessProtocol}://${apiDomain}:${apiPort}`;
    return apiUrl;
}
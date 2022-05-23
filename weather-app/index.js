import { AsyncWeather } from "@cicciosgamino/openweather-apis";
import http from "http";
// import your own logger
import { myLogger } from "mondayu-logger-assh";

// step 1: install lib and print temp to console
const apiKey = "14ff40f2254b5c3396c112b5bdc582b8";
const weatherInitializer = new AsyncWeather();
const weatherAPI = await weatherInitializer;

weatherAPI.setApiKey(apiKey);
weatherAPI.setCityId(293397);
const temp = await weatherAPI.getTemperature();
console.log("temp", temp);

// step 2: server
// create your server here from http module
// example in the slides or here: https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/

const requestListener = function (req, res) {
  res.writeHead(200);
  // res.end('hi')
  res.end(JSON.stringify({"temp": temp}));
}
const server = http.createServer(requestListener);
server.listen(8080);
// start your server

// step 3: install your logger and log temp and server start
// log that the service has started
myLogger.log("server started");
myLogger.log("temp", temp);

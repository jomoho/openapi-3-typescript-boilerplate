import app from "./application";
import log from "./log";
const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8001;

app.listen(serverPort, (err?: any) => {
  if (err) {
    log.error(err);
  } else {
    log.info(`server is listening on ${serverPort}`);
  }
});

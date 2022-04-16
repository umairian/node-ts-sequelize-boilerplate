import app from "./app";
import config from "./config";

const port: number = config.get("port");

app.listen(port, () => console.log(`Node Application running on port: ${port}`));
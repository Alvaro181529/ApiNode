const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("port", 3000);

app.use("morgan");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get("port"), () => {
  console.log("se habrio el servidor");
});

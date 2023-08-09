import express from "express";
import morgan from "morgan";
import correoRoutes from "./routes/correo.route.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use('/api',correoRoutes);
app.use(indexRoutes);

app.listen(app.get("port"), () => {
  console.log("se habrio el servidor");
});

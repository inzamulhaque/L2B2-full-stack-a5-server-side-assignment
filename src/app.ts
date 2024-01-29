import express, { Application } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser";
import router from "./routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["https://l2b2-fullstack-a5.netlify.app"],
    credentials: true,
  })
);
app.use(cookieParser());

// applications routes
app.use("/api/v1", router);

// api not found
app.all("*", notFound);

app.use(globalErrorHandler);
export default app;

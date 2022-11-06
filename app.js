import express, { urlencoded } from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import Razorpay from "razorpay";
import cors from "cors";
import { connectDB } from "./config/database.js";
import { connectPassport } from "./utils/Provider.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/ErrorMiddleware.js";
const app = express();

//accessing env file
dotenv.config({
  path: "./config/config.env",
});

//accessing middleware
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

connectPassport();

//accessing routes
app.use(userRoutes);
app.use(orderRoutes);

//connect DB
connectDB();

//using razorpay integration
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

//accessing client/build/index.html
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});

//using errorHandler middleware
app.use(errorMiddleware);

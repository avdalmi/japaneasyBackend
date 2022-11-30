//packages
const express = require("express");
const corsMiddleWare = require("cors");

//routers
const authRouter = require("./routers/auth");
const recipeRouter = require("./routers/recipeRouter");
const categoryRouter = require("./routers/categoryRouter");
const prefectureRouter = require("./routers/prefectureRouter");
const tipsRouter = require("./routers/tipsRouter");
const savedRouter = require("./routers/savedRouter");
const userRouter = require("./routers/userRouter");
//constants
const { PORT } = require("./config/constants");

// Create an express app
const app = express();


// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json() to be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());


//routes
app.use("/", authRouter);
app.use("/recipes", recipeRouter);
app.use("/categories", categoryRouter);
app.use("/prefectures", prefectureRouter);
app.use("/tips", tipsRouter);
app.use("/saved", savedRouter);
app.use("/user", userRouter);

//start listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

// require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/routing");

const port = 5000;

const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
};

const app = express();

app.use(express.json());

app.use(cors);

app.use((req, res, next) => {
  next();
});

app.use("/api", router);


app.listen(process.env.PORT || 3000,()=>{
  console.log(`Server running @ ${process.env.PORT||3000}`);
})
  app.use(express.static("veg_fe/dist/m-cart"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "veg_fe", "dist","m-cart","index.html")
  );
  });

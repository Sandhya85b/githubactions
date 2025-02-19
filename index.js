const express = require("express");
const mongoose=require("mongoose");
const taskRoute = require("./routes/task.route");

const app = express();
app.use(express.json());
app.get("/home", (req, res) => {
  res.status(200).json({ msg: "This is get route" });
});
app.use("/task",taskRoute)
// app.listen(8080,()=>{
//     console.log("Server started")
// })

module.exports = app;

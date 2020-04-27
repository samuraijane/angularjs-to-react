const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/src", express.static(__dirname + "/src"));

app.get("/heartbeat", function(req, res) {
  res.json({
    is: "working"
  });
});

const PORT = 4200;

app.listen(PORT, function() {
  console.log(`The server at port ${PORT} is listening.`);
});

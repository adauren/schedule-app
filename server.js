const express = require("express");
const connectDb = require("./config/db");
const app = express();

app.use(
  express.json({
    extended: true
  })
);

connectDb();

app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

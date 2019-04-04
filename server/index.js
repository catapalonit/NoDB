const express = require("express");
const app = express();
const port = 9090;
const { getData } = require("./controller");

app.get("/api/data", getData);
// app.post("api/data", addData);
// app.put("api/data:id", putData);
// app.delete("api/data:id", deleteData);

app.listen(port, () => console.log(`listening on ${port}`));

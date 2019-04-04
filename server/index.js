const express = require("express");
const app = express();
const port = 9090;

app.listen(port, () => console.log(`listening on ${port}`));

// app.get("api/decks", getDecks);
// app.post("api/decks", addDecks);
// app.put("api/decks:id", putDecks);
// app.delete("api/decks:id", deleteDecks);

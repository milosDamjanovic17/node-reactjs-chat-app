const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
 
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
   const r = await axios.put(
         'https://api.chatengine.io/users/',
         {username: username, secret:username, first_name: username},
         {headers: {"private_key": '570dbbf3-871f-42c8-9dde-a3861f97d86b'}}
      )
      return res.status(r.status).json(r.data);
  } catch (error) {
      return res.status(error.response.status).json(error.response.data);
  }

//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
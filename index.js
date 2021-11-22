const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs").promises
var id = 0
// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});
app.get("/people/:id", (req, res) => {
  res.render("homepage");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});
app.post("/", (req, res) => {
  fs.readFile("./database.json").then((content)=>JSON.parse(content)).then((obj)=>console.log(obj.users)).catch((err)=>console.log(err))
  let name = document.getElementById("name")
  let desc = document.getElementById("desc")
  let git = document.getElementById("git")
  let twit = document.getElementById("twitter")
  let book = document.getElementById("book")
  let art = document.getElementById("artist")
  document.getElementById("Create").onclick = function() {
    obj.users.push({"id": id,
    "fullName": name,
    "aboutMe": desc,
    "knownTechnologies": [
      "HTML",
      "CSS",
      "JS",
      "Git",
      "React",
      "Node.js"
    ],
    "githubUrl": git,
    "twitterUrl": twit,
    "favoriteBooks": book,
    "favoriteArtists": art
  })
  }
  id =+ 1
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});


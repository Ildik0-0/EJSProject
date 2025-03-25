// buils the server
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

// create a post
let posts = [];


app.get("/", (req, res) => {
  res.render("home.ejs", { posts: posts });
  //res.render("test.html", {posts: posts})
});

// go to the cerate post page
app.get("/createPost", (req, res) => {
  res.render("createPost.ejs");
});
// create a post
app.post("/createPost", (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(post);
  res.redirect("/");
});

//server 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
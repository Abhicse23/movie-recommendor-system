
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
// app.use(express.static('public'))
app.get("/", (req, res) => {
  // res.send("hi");
  res.render("index.ejs");
});
app.get("/shows", (req, res) => {
  // res.send("hi");
  res.render("./shows.ejs");
});
app.post("/shows", urlencodedParser, async (req, res) => {

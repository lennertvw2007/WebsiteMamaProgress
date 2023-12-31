const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const cors = require("cors");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
	cors({
		origin: ["https://website-mama-progress-xsgn.vercel.app"],
		methods: ["post", "get"],
		credentials: true,
	})
);

app.all("*", (req, res) => {
	res.render("./pages/home.ejs");
});

app.listen(3000, () => {
	console.log("Running on port 3000");
});

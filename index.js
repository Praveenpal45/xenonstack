const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const URI = "mongodb+srv://praveenpalbmu45:APhFUXgOmVZOxA85@cluster0.xi5nm6w.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI).then(() => {
    console.log("Database connected")
}).catch((error) => {
    console.log(error);
})

const PORT = 5000;

const user_route = require("./routes/userRoute");

app.use("/", user_route.user_route);

app.listen(PORT, ()=> {
    console.log(`Server is running on port : ${PORT}`);
})

// https://chat.openai.com/share/16abb5f9-d577-46a1-a524-3a08157b9f4f
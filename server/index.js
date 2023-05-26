// 1. import dependencies

const express = require("express")
const app = express()
require('dotenv').config();
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/users.routes");
const postRoute = require("./routes/posts.routes");
const categoryRoute = require("./routes/categories.routes");
const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images")
    },filename:(req,file,cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded");
});

// 2. config
require("./configs/mongoose.config")

// 3. add express config
// make sure these lines are above any app.get or app.post code blocks
app.use(cors())
app.use(express.json()); // recongnize JSON object
app.use(express.urlencoded({extended:true})); // to recognize the incoming Req object as strings/arrays
// 4. routes

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categores", categoryRoute)

 // 5. listen to the port
app.listen(8000, () => console.log("Listening to port 8000"))
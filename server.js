const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package
const connectDB = require("./config/db");
const path=require('path')

dotenv.config();
connectDB();

const app = express();

// Use the CORS middleware with '*' to allow all origins
app.use(cors());

app.use(express.json());

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin",require("./routes/adminRoutes"));
const PORT = process.env.PORT || 8080;

//STATIC FOLDER
app.use(express.static(path.join(__dirname,'/client/build')))

// STATIC ROUTES
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.listen(PORT, () => {
    console.log(`Node Server Running On Port ${PORT}`);
});

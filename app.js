import express from "express";
import agentsCRUD from "./CRUD/agentsCRUD.js";
import reportsCRUD from "./CRUD/reportsCRUD.js";
import usersCRUD from "./CRUD/usersCRUD.js";

const app = express();
const port = 3002;
app.use(express.json());

app.get("/health",(req,res)=>{
    return res.json({"ok": true})
})

// agent routes

// report routes 

// users routes



app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})
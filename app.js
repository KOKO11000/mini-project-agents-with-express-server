import express from "express";
import agentsRouter from "./Routers/agentsRouter.js";



const app = express();
const port = 3002;
app.use(express.json());

app.get("/health",(req,res)=>{
    return res.json({"ok": true})
})

// agent routes
app.use("/agents",agentsRouter)
// report routes 

// users routes



app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})
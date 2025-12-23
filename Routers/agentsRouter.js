import express from "express"

import { getAllAgents } from "../AgentsController/agentsCtrl.js"
import { validateAdmin, validateData } from "../middelware/auth.js"
import { jsonToArr } from "../fsFiles/fsFunc.js"

const router = express.Router()


router.get("", validateAdmin, getAllAgents)


router.get("/:id",validateAdmin ,async (req, res) => {
    const getIdFromUser = req.params.id
    try {
        const convToStr = await jsonToArr("./data/agents.json")
        const fountId = convToStr.find((val)=>{return val.id == getIdFromUser})
        if (!fountId) {
            res.sendStatus(404)
        } else {
            console.log(fountId);
            
            res.json(fountId)
        }
    } catch (error) {
        console.error(error)
        res.send("Error")
    }
})
router.post("", async (req, res) => {
    
})
router.put("/:id", async (req, res) => {
    res.send()
})
router.delete("/:id", async (req, res) => {
    res.send()
})

export default router;





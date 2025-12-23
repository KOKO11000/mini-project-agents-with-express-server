import express from "express"

import { getAgentById, getAllAgents } from "../AgentsController/agentsCtrl.js"
import { validateAdmin, validateData } from "../middelware/auth.js"
import { jsonToArr, writeFile } from "../fsFiles/fsFunc.js"

const router = express.Router()
const PATH_AGENGTS_DB ="./data/agents.json"


router.get("", validateAdmin, getAllAgents)
router.get("/:id", validateAdmin, getAgentById)


router.post("", validateAdmin, async (req, res) => {
    try {
        const { name, nickname } = req.body
        const getAgents = await jsonToArr(PATH_AGENGTS_DB);
        const newAgent = {
            id: getAgents.reduce((a, b) => { return a + Number(b.id) },0),
            name,
            nickname,
            reportCount: 0
        }
        getAgents.push(newAgent)
        await writeFile(PATH_AGENGTS_DB,getAgents)
        res.json(newAgent)
    } catch (error) {
        console.error(error)
    }
})
router.put("/:id", async (req, res) => {
    res.send()
})
router.delete("/:id", async (req, res) => {
    res.send()
})

export default router;





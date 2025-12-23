import {jsonToArr} from "../fsFiles/fsFunc.js"

export const getAllAgents = async (req, res) => {
    const dataArr = await jsonToArr("./data/agents.json")
    res.json(dataArr)
}

export const getAgentById = async (req, res) => {
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
}
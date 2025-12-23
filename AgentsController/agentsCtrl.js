import {jsonToArr} from "../fsFiles/fsFunc.js"

export const getAllAgents = async (req, res) => {
    const dataArr = await jsonToArr("./data/agents.json")
    res.json(dataArr)
}
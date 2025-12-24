import { jsonToArr } from "../fsFiles/fsFunc.js"

export const validateData = async (req,res,next)=>{
    //Add Validation
    console.log(req.heders);
     
    next()
}
export const validateAdmin = async (req,res,next)=>{
    const getUsers = await jsonToArr("./data/users.json")
    //   const {name,password} = req.headers
    if (getUsers) {
        next()
    } else {
     res.sendStatus(403)   
    }
}
export const validateAgent = async (req,res,next)=>{
    const {name,nickName} = req.body

    if (!name || !nickName ) {
        res.json("missing ditails")
    } else {
        next()   
    }
}
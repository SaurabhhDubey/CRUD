import User from "../model/user.model.js"

export const registerUser = async (req , res )=>{
    try{
    const {username , tag }= req.body;
    if (!username || !tag){return res.status(400).json({message:"all fields are required"})};
    const user = await User.create({username , tag});
    res.status(201).json({message:"user registered successfully:" , user});
    } catch(error){
        res.status(500).json({message:"registerError:",error});
    }
};


export const read = async (req ,res)=>{
try{
    const users = await User.find();
    return res.status(201).json({message:"user fetched successfully" , users});
}
catch(error){
    res.status(500).json({message:"reading error :" , error});
}
};

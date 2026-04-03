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


export const updateUser = async (req, res)=>{
    try{
        const{id} = req.params;
        const {username , tag} = req.body;
         
        const user = await User.findById(id);
        if(!user){return res.status(400).json({message:"user not found"});}

        if(username) user.username = username;
        if(tag) user.tag = tag;
        await user.save();
        res.status(201).json({message:"user updated successfully" , user});
    }
    catch(error){
        res.status(500).json({message:"update error" , error})
    }
};


export const deleteUser = async (req , res)=>{
    try{
        const{id}=req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){return res.status(401).json({message:"user not found for delete"});}
        return res.status(201).json({message:"user deleted successfully " , user});
    }
    catch(error){
        res.status(500).json({message:"delete error" , error})
    }
};
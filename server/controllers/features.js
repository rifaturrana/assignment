const dataSchema=require('../models/data.js');

const index=async (req,res)=>{

    try {
        const data=await dataSchema.find();
        if(!data){
            return res.status(404).json({message:'data not found'});
        }
        return res.status(200).json(data);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
};

module.exports={index};
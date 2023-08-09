const arr = require('../struct/model');
const reg = arr[2];
const user= arr[0];
exports.getReg = async(req,res) =>{
    try{
        const registers = await reg.find({},{__id : 0, __v:0});
        
        if (registers.length > 0) {
            console.log(registers);
            return res.status(200).json(registers);
        }
        else {
            return res.status(400).json({
                status: "success",
                result: "no data to get"
            });
        }
    }
    catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}
exports.addReg = async(req,res) =>{
    try{
        const aReg=req.body;
        console.log(aReg);
        const aUser = new user({
            "userName":aReg['userName'],
            "password":aReg['password'],
            "email":aReg['email'],
        });
        console.log(aUser);
        const newReg = await reg.create(aReg);
        const newUser = await user.create(aUser);
        res.status(201).json({
            status:"success",
            data:{newReg}
        });
    }
    catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}

const arr = require('../struct/model');
const user = arr[0];
exports.getUsers = async(req,res) =>{
    try{
        const users = await user.find({},{__id : 0, __v:0});
        
        if (users.length > 0) {
            return res.status(200).json(users);
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
    

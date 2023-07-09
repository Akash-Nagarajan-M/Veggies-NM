const arr = require('../struct/model');
const veg = arr[1];
exports.getVegetables = async(req,res) =>{
    try{
        const veggies = await veg.find({'type':"vegetable"},{__id : 0, __v:0});
        
        if (veggies.length > 0) {
            return res.status(200).json(veggies);
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
exports.getFruits = async(req,res) =>{
    try{
        const veggies = await veg.find({"type":"fruit"},{__id : 0, __v:0});
        
        if (veggies.length > 0) {
            return res.status(200).json(veggies);
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
   
exports.getAll = async(req,res) =>{
    try{
        const veggies = await veg.find({},{__id : 0, __v:0});
        
        if (veggies.length > 0) {
            return res.status(200).json(veggies);
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
   

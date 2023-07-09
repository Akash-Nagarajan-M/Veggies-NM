const arr = require('../struct/model');
const order = arr[3];
const nodemail = require('./nodemail');
exports.getOrder = async(req,res)=>{
    try{
        const orders = await order.find({},{__id : 0, __v:0});
        if (orders.length > 0) {
            return res.status(200).json(orders);
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
exports.addOrder = async(req,res) =>{
    try{
        const aOrder1=req.body;
        const aOrder = aOrder1.order;
        const newOrder = await order.create(aOrder);
        
        // const newOrder = await order.create(aOrder);
        res.status(201).json({
            status:"success",
            data:{newOrder}
        });
        nodemail.mailto(req);
    }
    catch (err) {
        return res.status(404).json({
            status: "fail",
            message: err.message
        })
    }
}


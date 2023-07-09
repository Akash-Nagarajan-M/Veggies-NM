const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akash:akash@cluster0.a8nabs9.mongodb.net/veggies?retryWrites=true&w=majority').then(()=>{
    console.log("db connection established...");
});
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Required Field']
    },
    password:{
        type:String,
        required:[true,'Required Field']
    },
    email:{
        type:String,
        required:[true,'Required Field']
    }
});
const veggiesSchema =  new mongoose.Schema(
    {
        productId:{
            type:Number,
            required:[true,'Required Field']
        }, 
        productName:{
            type:String,
            required:[true,'Required Field']
        }, 
        price:{
            type: Number,
            required:[true,'Required Field']
        },
        description:{
            type:String,
            required:[true,'Required Field']
        }, 
        imageUrl:{
            type:String,
            required:[true,'Required Field']
        },
        type:{
            type:String,
            required:[true,'Required Field']
        } 
        
    }
)
const registerSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Required Field']
    },
    email:{
        type:String,
        required:[true,'Required Field']
    },
    userName:{
        type:String,
        required:[true,'Required Field']
    },
    password:{
        type:String,
        required:[true,'Required Field']
    },
    address:{
        type:String,
        required:[true,'Required Field']
    }
});
const orderSchema = new mongoose.Schema({
    orderId:{
        type:String,
        required:[true,'Required Field']
    },
    productId:{
        type:Number,
        required:[true,'Required Field']
    }, 
    userId:{
        type:String,
        required:[true,'Required Field']
    },
    productName:{
        type:String,
        required:[true,'Required Field']
    },
    quantity:{
        type:Number,
        required:[true,'Required Field']
    },
    dateOfPurchase:{
        type:String,
        required:[true,'Required Field']
    },
    price:{
        type:Number,
        required:[true,'Required Field']
    },
    totalPrice:{
        type:Number,
        required:[true,'Required Field']
    }
});
module.exports=[userSchema,veggiesSchema,registerSchema,orderSchema];
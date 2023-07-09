const nodemailer = require('nodemailer');
const reghandler = require('./registerHandler');
exports.mailto = async(req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"hotmail",
        auth:{
            user:"akashnagarajan5@outlook.com",
            pass:"Akash@11"
        }
    });
    const user= req.body;
    const email = user['email'];
    const order1= user.order;
    const curuser = user['userID'];
    var content = order1.reduce(function(a, b) {
        return a + '<tr><td style="text-align:center;border:2px solid black">' + b.orderId + '</a></td><td style="text-align:center;border:2px solid black">' + b.productId +'</td><td style="text-align:center;border:2px solid black">' + b.quantity + '</td><td style="text-align:center;border:2px solid black">' + b.price + '</td><td style="text-align:center;border:2px solid black">' + b.totalPrice +'</td><td style="text-align:center;border:2px solid black">' + b.dateOfPurchase + '</td></tr>';
      }, '');
    const options = {
        from:"akashnagarajan5@outlook.com",
        to:email,
        subject:"Demo mail for order",
        html:`
        <div><h1> GoVeggies</h1></div>
        <table>
         <thead>
            <tr style="background-color:blue;">
            <th style="text-align:center;border:2px solid black">Order Id</th>
            <th style="text-align:center;border:2px solid black">Product</th>
            <th style="text-align:center;border:2px solid black">Quantity</th>
            <th style="text-align:center;border:2px solid black">Price</th>
            <th style="text-align:center;border:2px solid black">Total Price</th>
            <th style="text-align:center;border:2px solid black">Date of Purchase</th>
            <th></th>
            </tr>
        </thead>
        <tbody>`+content+`</tbody></table></div>`+
        `<br><p>Thank you for ordering with GoVeggies<br>Please pay the cash during delivery</p>`
    
        
    };
    
    transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent "+info.response);
    })
}

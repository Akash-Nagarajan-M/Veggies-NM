const mongoose = require('mongoose');
const schema = require('./schema');

const user= mongoose.model("myUsers",schema[0]);
const veggies = mongoose.model("myVeggies",schema[1]);
const register = mongoose.model("myregs",schema[2]);
const order= mongoose.model("myorders",schema[3]);
module.exports = [user,veggies,register,order];
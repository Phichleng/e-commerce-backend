const{ default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
      const conn = mongoose.connect("mongodb://localhost:27017/leng");
    }
    catch (error){
        console.log("Databacse error");
    }
 };

module.exports = dbConnect;
import mongoose from "mongoose";

const Connection = async (URL) => {
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("connect ho gya")
    }
    catch(error){
        console.log('error while connecting with the database',error)
    }
}

export default Connection;
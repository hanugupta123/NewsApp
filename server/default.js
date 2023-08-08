
import { data } from "./constants/data.js"
import News from "./model/news-schema.js"


const DefaultData = async () => {
    try{
        await News.insertMany(data);
        console.log('data import successfully');
    }
    catch(error){
        console.log('error', error.message)
    }
}

export default DefaultData;
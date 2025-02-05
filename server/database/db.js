import mongoose from "mongoose";



export const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.xq1i4w1.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
    try{
        await mongoose.connect (URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch(error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;
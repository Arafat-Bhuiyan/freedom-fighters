import mongoose from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect(process.env.DB_URL!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('Database Connected Successfully!');
        });

        connection.on('error', (error) => {
            console.log(`Can not connect to Database: ${error}`);
            process.exit();
        });

    } catch (error) {
        console.log(`Something wents wrong : ${error}`);
    }
};
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function seedData() {

    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully");

        const hashedPassword = await bcrypt.hash("12345", 10);

        await User.findOneAndUpdate(
            { username: "admin" },
            {
                username: "admin",
                password: hashedPassword
            },
            {
                upsert: true,
                returnDocument: "after"
            }
        );

        console.log("User Data Inserted Successfully");

    } catch (error) {
        console.log(error);
    } finally {
        await mongoose.connection.close();
    }
}

seedData();
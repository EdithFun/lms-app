import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {

        
        fullName : {
            type : String , 
            required : [true , "Name is Required"], 
            min : 8
       },

        email: {
            type: String,
            required: [true, "email is Required"],
            unique: [true, 'Email Already Exist'],
            min: 8,
            max: 50,

        },

        phoneNumber : {
            type: String,
            required: [true, "contact is Required"],
        },

        
        gender : {
            type: String,
            required: [true, "gender is Required"],
            min : 4,
            max: 8,
        } , 

        dob : {
            type : String, 
            required: [true, "date of birth is Required"],

        }
    },


    {
        timestamps: true
    }
);

const User = mongoose.model("User",userSchema);
export default User;
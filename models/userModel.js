const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required:[true,`please add the user name`]
    },
    email:{
        type:String,
        required:[true,"please add the user email"],
        unique:[true,"email Id is alrady taken"]
    },
    password:{
        type:String,
        required:[true,'please add the password']
    }
},
{
    timestamps: true,
}
);


module.exports= mongoose.model('Users', UserSchema);
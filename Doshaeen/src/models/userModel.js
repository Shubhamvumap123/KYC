const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, require: true, minLength: 8 },
    adharID:{type:String,required:false},
    panID:{type:String,required:false},
    kycID:{type:String,required:false},
    passportID:{type:String,required:false},
    Date:{type:String,required:false},
    mobileNO:{type:Number,required:false,minLength: 10}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
userSchema.pre("save",function (next){
  const hash=bcrypt.hashSync(this.password,8)
  this.password=hash
  return next()
})

userSchema.methods.checkPassword=function (password){
  return bcrypt.compareSync(password, this.password);
}

const User=mongoose.model("user",userSchema)


module.exports=User
const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, require: true, minLength: 8 },
    adharID:{type:String,required:true},
    panID:{type:String,required:true},
    kycID:{type:String,required:true},
    passportID:{type:String,required:true},
    mobileNO:{type:Number,required:true,minLength: 10}

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
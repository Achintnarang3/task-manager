require('../src/db/mongoose')
var User=require('../src/models/user')
var Task=require('../src/models/task')
//const { findById } = require('../src/models/user')


// User.findByIdAndUpdate('5f3186376b64727220759674',{age:1}).then((result)=>{

//     console.log(result)

//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

// Task.findByIdAndDelete('5f2be54bdada25794c7a48d0').then((result)=>{
//     console.log(result)
// return Task.countDocuments({completed:false})

// }).then((result)=>{
// console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

var FindAndDelete=async (id)=>{

    var c=await Task.findByIdAndDelete(id)
    return c

}

FindAndDelete('5f31cc98f1751448dcc67361').then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

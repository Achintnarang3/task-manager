const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task=require('./models/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
   
    try{
        await user.save()
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(200).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })




    
})

app.post('/tasks',async (req,res)=>{
     const task=new Task(req.body)
     
    try{
        await task.save()
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }



    // task.save().then(()=>{
    //     console.log(task)
    //     res.send(task)

    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })



})

app.get('/users',async (req,res)=>{
    // User.find({}).then((user)=>{
      
    //     res.send(user)
    // }).catch((e)=>{
    //     res.send(e)
    // })

const user=await User.find({})
res.send(user)

    
})

app.get('/users/:id',(req,res)=>{

    console.log(req.params)

     res.status(200).send(req.params.id)

    })

    app.patch('/users/:id',async (req,res)=>{

        const Updates=Object.keys(req.body)
        const allowedUpdates=['name','email','password','age']

        const isvalid=Updates.every((update)=>allowedUpdates.includes(update))

        if(!isvalid){
            return res.status(400).send({error:'Invalid Updates'})
        }

        try{
            const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
            if(!user)
            return res.status(404).send()
        }
        catch(e){
            return res.send(e)
        }
    })

    app.get('/tasks',async (req,res)=>{
        // Task.find({}).then((user)=>{
        //     res.status(200).send(user)
        // }).catch((e)=>{
        //     res.status(500).send(user)
        // })
        const task=await Task.find({})
        
        res.send(task)

        
    })
    
    app.get('/tasks/:id',(req,res)=>{
    
        console.log(req.params)
    
        res.status(200).send(req.params.id)
    
        })




app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})
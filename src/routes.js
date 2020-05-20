const {Router} = require('express')
const User = require('./app/models/User')
const routes =  new Router()

routes.get('/', (req, res)=>{
    return res.json({message:'Word'})
})

routes.get('/teste', async (req, res)=>{
   const user =  await User.findAll()
   return res.json(user)
})

module.exports = routes
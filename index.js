import express from "express";
import path from "path"
import dateroute from "./routes/data.js"
import sequelize from "./utils/database.js"



const PORT =  process.env.PORT || 6000

const app = express()


app.use('/api/date', dateroute)




async function start(){
    try {
        await sequelize.sync()
        app.listen(PORT, ()=>{
            console.log(`server run on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}



start()

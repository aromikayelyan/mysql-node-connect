import { Router } from "express"
import Repo from "../models/modelsql.js"

const router = Router()


const data = [{name:   'awesome'    ,
            starcount:    326319   ,
            link:  'https://github.com/sindresorhus/awesome'       
},{name:   'awesome2'    ,
    starcount:    326319   ,
    link:  'https://github.com/sindresorhus/awesome'       
},{name:   'awesome3'    ,
    starcount:    326319   ,
    link:  'https://github.com/sindresorhus/awesome'       
},{name:   'awesome4'    ,
    starcount:    326319   ,
    link:  'https://github.com/sindresorhus/awesome'       
},{name:   'awesome5'    ,
    starcount:    326319   ,
    link:  'https://github.com/sindresorhus/awesome'       
},]




router.get('/', async (req,res)=>{
     try {
        const repos = await Repo.findAll()
        res.status(200).json(repos)
     } catch (error) {
        console.log(error)
     }
})


router.post('/', async (req,res)=>{
    try {
       data.forEach(async repoes => {
            const repo = await Repo.create({
                name: repoes.name,
                starcount: repoes.starcount,
                link: repoes.link
            })
        })
        res.status(201).json({
            message: "All repos are saved",
            post
        })
    } catch (error) {
        console.log(error)
    }
})



export default router
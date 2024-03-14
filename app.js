
import express from "express";
import sql from 'mssql'
import cors from 'cors'
import { sqlConfig } from "./config.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

await sql.connect(sqlConfig)

app.get('/', async (req,res)=>{
    const { recordset } = await sql.query`select * from Produtos`
    return res.status(200).json(recordset)
})

app.listen(3000,()=>{
    console.log('running')
})
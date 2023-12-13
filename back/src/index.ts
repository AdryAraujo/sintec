// import express from 'express';
// import { PostgresDataSource } from './config/DataSource'

// PostgresDataSource.initialize().then(()=>{
//     const app = express()
//     app.use(express.json())
//     app.get('/', (req, res) =>{
//         return res.json('tudo certo')
//     })

//     return app.listen(process.env.PORT)
// })

import express, {Application, Request, Response} from 'express'
import Database from './config/database';

class App{
    public app: Application;

    constructor(){
        this.app = express();
        this.databaseSync();
        this.routes();
    }

    protected databaseSync():void{
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes():void{
        this.app.route('/').get((req:Request, res:Response)=>{
            res.send('welcome home');
        });
    }
}

const port: number = 8000
const app = new App().app

app.listen(port, ()=>{
    console.log('Server rodando com sucesso!')
})

// import { DataSource } from "typeorm"
// import { User } from "./entity/User"

// const PostgresDataSource = new DataSource({
//     type: "postgres",
//     host: "172.25.76.71",
//     port: 5432,
//     username: "prg_adryelle",
//     password: "Vs@B66Q9Sa6q",
//     database: "dbsintec",
//     entities: [User],
//     synchronize: true,
//     logging: false,
// })

// PostgresDataSource.initialize()
//     .then(() => {
//         console.log("Data Source has been initialized!")
//     })
//     .catch((err) => {
//         console.error("Error during Data Source initialization", err)
//     })
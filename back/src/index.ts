// import express from 'express';
// import { AppDataSource } from './data-source';

// AppDataSource.initialize().then(()=>{
//     const app = express()
//     app.use(express.json())
//     app.get('/', (req, res) =>{
//         return res.json('tudo certo')
//     })

//     return app.listen(process.env.PORT)
// })

import express, {Application, Request, Response} from 'express'

class App{
    public app: Application;

    constructor(){
        this.app = express()
        this.routes()
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
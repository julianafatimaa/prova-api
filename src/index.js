import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import {dobro} from './services.js'
import {febre} from './services.js'

const server = express ();
server.use(cors());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})


try{
server.get('dobro/:numero' ,(req, resp) => {
    const d= dobro(10);
    resp.send({
       dobro = d
    })
})

server.post ('/somar',(req,resp) => {
    let a= Number(req.query.a);
    let b= Number(req.query.b);
    let x=a+b;
    resp.send({
        soma= x
    })
})

server.post ('/media',(req,resp) => {
    let a= Number(req.query.a);
    let b= Number(req.query.b);
    let c= Number(req.query.c);
    let x=a+b+c;
    resp.send({
        media= x
    })
})

server.get('/dias/corprimaria/:cor' ,(req,resp) => { 
    const corp= corprimaria;
    resp.send({
      corp=corprimaria
    })
})

server.post('/dias/ingresocinema' , (req,resp) => {
    const igre= ingresso;
    resp.send({
        igre= ingresso 
    })
})

server.get('/temperatura',(req ,resp)  => { 
     const d= febre;
     resp.send({
        febre= d
    })
})

server.post('/dia2/maiornumero' ,(req,resp) => {
        const maior=maiornumero;
        resp.send({
         maior=maiornumero
})
}
}






catch(err)
{
console.log('deu erro');
console.log(ex.err);
}


server.listen(process.env.PORT,
    () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));




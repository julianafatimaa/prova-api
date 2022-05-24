import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {dobro} from './services.js'
import {febre} from './services.js'

const server = express ();
server.use(cors());

server.get('/ping', (req, resp) => {
    return 'pong';
})


try{
server.get('dobro/:numero' ,(req, resp) => {
    const d= dobro(10);
})

server.post ('/somar',(req,resp) => {
    let a= Number(req.query.a);
    let b= Number(req.query.b);
    let x=a+b;
    resp.send({
        soma= x
    })
})

server.get ('/media',(req,resp) => {
    let a= Number(req.query.a);
    let b= Number(req.query.b);
    let c= Number(req.query.c);
    let x=a+b+c;
    resp.send({
        media= x
    })
})

server.get('/temperatura',(req,resp)  => { 
     const d= febre;
     resp.send({
        febre= d
    })
})
}
catch(err)
{
console.log('deu erro');
console.log(ex.err);
}


server.listen(process.env.PORT,
    () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));




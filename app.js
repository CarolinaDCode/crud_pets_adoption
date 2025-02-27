import 'dotenv/config';
import express from 'express';
// import bodyParser from 'body-parser';
import routesMascotas from './routes/mascotas.js'

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// o Usar el middleware de Express para analizar JSON y datos urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/mascotas', routesMascotas);
try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('Servidor activo en el puerto ' + PORT));
} catch(e){
    console.log(e);
}
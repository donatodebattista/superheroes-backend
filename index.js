import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import "dotenv/config"

const app = express()

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('🟢 Conectado exitosamente a MongoDB'))
    .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

// Ruta base de prueba
app.get('/', (req, res) => {
    res.send('API de Superhéroes funcionando correctamente');
});

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
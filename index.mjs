import express from 'express'
import servicesRoutes from './routes/servicesRoutes.js'

//configurar app
const app = express()

//definir una ruta
app.use('/api/services', servicesRoutes)

//definir puert
const PORT = process.env.PORT || 4000

//arrancar la app
app.listen(PORT, () => {
  console.log('El puerto se esta ejecutando en el puerto:', PORT )
})
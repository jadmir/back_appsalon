import { services } from '../data/beautyServices.js'

const createService = async (req, res) => {
  if(Object.values(req.body).includes('')) {
    res.json({
      msq:'Todos los campos son obligatorios '
    })
  }
}

const getServices = (req, res) => {
  res.send(services)
}

export {
  createService,
  getServices
}
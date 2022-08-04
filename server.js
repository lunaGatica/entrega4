const { Router } = require('express')
const { Router } = express

const app = express() 
const routerProductos = Router()

routerProductos.post('/', (req, res)=>{
const objProducto = req.body
//const contenedor = new Contenedor('ruta')
//Contenedor.save(objProducto)
res.json({ 
    msg:'producto guardado',
    objProducto
})
})
routerProductos.get('/', )
routerProductos.put('/:id', (req, res)=>{
  const { id } = req.params
  const { title, price, thumbnail} = req.body
  console.log(objProducto)
  const contenedor = new Contenedor('./productos.txt')
  contenedor.updateById({id: parseint(id),  ...objProducto})
  const respuesta = updateById( { id, title, price, thumbnail} )
  res.json({ respuesta })
} )

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


app.use('/api/productos', routerProductos)


app.listen(8080, err => {
    if(err) throw err
    console.log('Server is running on port 8080')

})
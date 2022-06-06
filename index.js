import express from 'express'
import {v4} from 'uuid'
import cors from 'cors'

const port = 3002
const app = express()
app.use(express.json())
app.use(cors())

const status = "Em preparação"
const Pedidos = []


const checkUserId = (request, response, next) =>{
    const {id} = request.params
    
    const index = Pedidos.findIndex( user => user.id === id )

    if(index < 0 ){
        return response.status(404).json({error: "User not foud"})
    }

    request.userIndex = index
    request.userId = id

    next()
}

const CheckMethod = (request, response, next) =>{
    const method = request.app.me

    console.log(`✅ Esta requisição tem o método: ${request.method} e URL: ${request.url}`)
    next()
}


app.get('/users/',CheckMethod, (request, response)=>{
    return response.json(Pedidos)
})


app.post('/users/',CheckMethod, (request, response)=>{
    const {order,clientName,price} = request.body

    const pedido = {id: v4(),order,clientName,price,status}

    Pedidos.push(pedido)
    return response.json(pedido)
})

app.put('/users/:id',checkUserId, CheckMethod, (request,response)=>{
    const {order,clientName,price} = request.body
    const index = request.userIndex
    const id = request.userId

    const PedidoAlt = {id, order, clientName, price, status}

    Pedidos[index] = PedidoAlt

    return response.json(PedidoAlt)
})


app.delete('/users/:id',checkUserId, CheckMethod, (request, response)=>{
    const index = request.userIndex

    Pedidos.splice(index,1)

    return response.status(204).json()
})

app.get('/users/:id',checkUserId, CheckMethod, (request, response)=>{
    const index = request.userIndex

    return response.json(Pedidos[index])
})

app.patch('/users/:id',checkUserId,CheckMethod,  (request, response)=>{
    const index = request.userIndex
    Pedidos[index].status = "Pronto"

    return response.json(Pedidos[index])
})


app.listen(port, ()=>{
    console.log(`👺 Server started on port ${port}`)
})
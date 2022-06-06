# project node

<h2>Sistema de gerenciamento de uma hamburgueria<h2>
  
<img src="./assets/Hamburguer.gif">


> Projeto finalizado 
<br>

## 💻 Sobre o Projeto

Esta é uma aplicação que fará o cadastro e gerenciamento dos pedidos de uma hamburgueria, utilindo Node, Express, Uuid e Cors.

Criei as seguintes Rotas
POST /order: A rota receber o pedido do cliente, o nome do cliente e o valor do pedido, em seguinda gera o ID e Status seguindo o seguinte formato: { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }.

GET /order: Rota que lista todos os pedidos já feitos.

PUT /order/:id: Essa rota utiliza o id do pedido para alterar o pedido já feito. Pode alterar,um ou todos os dados do pedido.

DELETE /order/:id:Essa rota utiliza o id do pedido para deletar um pedido já feito.

GET /order/:id: Essa rota utiliza o id do pedido para retornar apenas um pedido específico.

PATCH /order/:id: Essa rota utiliza o id do pedido para alterar o status do pedido recebido para "Pronto".

Exemplo
Se eu chamar a rota POST /order repassando { order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }, o array ficara assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array ficara assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];

Middlewares

O Middleware: checkUserId é  utilizado em todas rotas que recebem o parâmetro ID, ele verifica se o ID passado existe, se não existi retorne um erro, caso contrário permite que a requisição continue normalmente;

O Middleware: CheckMethod é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.

## ☕ tecnologias utilizadas

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<br>

## 🤝 Colaborador

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="./components/../src/img/Eu.png" width="100px;" alt="Foto do Gabriel Silva no GitHub"/><br>
        <sub>
          <a >Gabriel Ibiapino</a>
        </sub>
      </a>
    </td>
  </tr>
</table>

<div>
 <a href="https://www.linkedin.com/in/gabriel-ibiapino-louren%C3%A7o-da-silva-749b78198/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href = "mailto:lourencogabriel77@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>
<br>


[⬆ Voltar ao topo](#project-node)<br>

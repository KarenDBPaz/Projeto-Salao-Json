const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_servicos": "/servicos",
  "/adicionar_servico": "/servicos",
  "/editar_servico/:id": "/servicos/:id",
  "/deletar_servico/:id": "/servicos/:id"
  
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })

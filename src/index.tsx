import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    // primeira "tabela" a salvar no banco de dados
    transaction: Model, // Importar o Model do Mirage
  },


  // Quais rotas teremos na API ficticia
  routes() {
    // As nossas chamadas serão a partir
    // de api
    this.namespace = "api";
    // para cada uma das rotas faremos devolveremos alguma coisa
    // Nesse exemplo um objeto com alguns dados.
    this.get("/transactions", () => {
      // Retornamos todas as transaction que tem no banco de dados
      return this.schema.all("transaction");
    });
    // Aqui podemos receber 2 parametros, schema e request
    this.post("/transactions", (schema, request) => {
      // preciso converter o formato texto para o json
      const data = JSON.parse(request.requestBody);
      // No banco de dados vamos colocar como primeiro parâmetro
      // qual o model inserido e segundo os dados que vamos salvar.
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

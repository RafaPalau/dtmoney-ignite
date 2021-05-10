import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  // Quais rotas teremos na API ficticia
  routes() {
    // As nossas chamadas serão a partir
    // de api
    this.namespace = "api";

    // para cada uma das rotas faremos devolveremos alguma coisa
    // Nesse exemplo um objeto com alguns dados. 
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import routes from "./routes";
import dotenv from "dotenv";
import express from "express";
import "@database";

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + "/public"));
app.post('/mail', (req, res) => {
  // aqui vai o código para processar o e-mail
  res.send('Rota /mail recebida com sucesso!');
});

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log("📦 Server running");
});

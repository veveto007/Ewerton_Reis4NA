import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Utilizando as rotas de usuários
app.use(userRoutes);
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
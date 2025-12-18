import express from 'express';
import helmet from "helmet";

const app = express();

app.use(helmet.hidePoweredBy());

app.get('/', (_req, res) => {
  res.json({ message: `Hello from TypeScript app!` });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;

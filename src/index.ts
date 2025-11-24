import 'reflect-metadata';
import './shared/container';
import { createServer } from './infra/http/express/server';

const app = createServer();

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

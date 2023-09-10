import express from 'express';
import { createUserController } from './infrastructure/express/UserController';
import { CreateUserUseCase } from './application/useCases/createUser';
import { UserRepositoryImpl } from './infrastructure/persistence/UserRespositoryImpl';

const app = express();
const port = 3000;

app.use(express.json());

const userRepository = new UserRepositoryImpl();
const createUserUseCase = new CreateUserUseCase(userRepository);

app.use('/api', createUserController(createUserUseCase));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

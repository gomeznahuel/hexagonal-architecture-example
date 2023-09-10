import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import { errorHandler } from './infrastructure/express/errorHandler';

import { UserRepositoryImpl } from './infrastructure/persistence/UserRespositoryImpl';

// Create User.
import { CreateUserUseCase } from './application/useCases/createUser';
import { createUserController } from './infrastructure/express/UserController';

// Get Users.
import { GetUsersUseCase } from './application/useCases/getUsers';
import { getAllUsersController } from './infrastructure/express/UserController';

// Get User by Id.
import { GetUserByIdUseCase } from './application/useCases/getUserById';
import { getUserById } from './infrastructure/express/UserController';

// Connect to MongoDB.
mongoose.connect(process.env.MONGODB_CNN!, {});

const app = express();
const port = 3000;

app.use(express.json());

const userRepository = new UserRepositoryImpl();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetUsersUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);

app.use('/api', createUserController(createUserUseCase));
app.use('/api', getAllUsersController(getAllUsersUseCase));
app.use('/api', getUserById(getUserByIdUseCase));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';

// Load Environment Variables.
dotenv.config();

// Error Handler.
import { errorHandler } from './infrastructure/express/errorHandler';

// User Repository Implementation.
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

// Update User.
import { UpdateUserUseCase } from './application/useCases/updateUser';
import { updateUserController } from './infrastructure/express/UserController';

// Delete User.
import { DeleteUserUseCase } from './application/useCases/deleteUser';
import { deleteUserController } from './infrastructure/express/UserController';

// Connect to MongoDB.
connect(process.env.MONGODB_CNN!, {});

const app = express();
const port = 3000;

app.use(express.json());

const userRepository = new UserRepositoryImpl();
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetUsersUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

app.use('/api', createUserController(createUserUseCase));
app.use('/api', getAllUsersController(getAllUsersUseCase));
app.use('/api', getUserById(getUserByIdUseCase));
app.use('/api', updateUserController(updateUserUseCase));
app.use('/api', deleteUserController(deleteUserUseCase));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
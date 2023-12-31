import { Request, Response, Router } from "express";
import { CreateUserUseCase } from "../../application/useCases/createUser";
import { GetUsersUseCase } from "../../application/useCases/getUsers";
import { GetUserByIdUseCase } from "../../application/useCases/getUserById";
import { UpdateUserUseCase } from "../../application/useCases/updateUser";
import { DeleteUserUseCase } from "../../application/useCases/deleteUser";

const router = Router();

export const createUserController = (createUserUseCase: CreateUserUseCase) => {
  router.post("/users", async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const user = await createUserUseCase.execute(name);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};

export const getAllUsersController = (getAllUsersUseCase: GetUsersUseCase) => {
  router.get("/users", async (req: Request, res: Response) => {
    try {
      const users = await getAllUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};

export const getUserById = (getUserByIdUseCase: GetUserByIdUseCase) => {
  router.get("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await getUserByIdUseCase.execute(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}

export const updateUserController = (updateUserUseCase: UpdateUserUseCase) => {
  router.put("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const user = await updateUserUseCase.execute(id, name);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}

export const deleteUserController = (deleteUserUseCase: DeleteUserUseCase) => {
  router.delete("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await deleteUserUseCase.execute(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
}
import express, { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/useCases/createUser";

const router = express.Router();

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

// export const getUserController = (getUserUseCase: GetUserUseCase) => {
//   router.get("/users", async (req: Request, res: Response) => {
//     try {
//       const user = await getUserUseCase.execute(name);
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
// };

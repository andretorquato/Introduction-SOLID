import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      let id: string = JSON.stringify(user_id);
      id = JSON.parse(id);
      const all = this.listAllUsersUseCase.execute({
        user_id: id,
      });

      return response.status(201).json(all);
    } catch (error) {
      const { message } = error;
      return response.status(400).json({ error: message });
    }
  }
}

export { ListAllUsersController };

import { TodoRepository } from "./storage/repositories";

export interface Dependencies {
  todoRepository: TodoRepository;
}

import { Resolvers } from "../@generated/types";
import { Dependencies } from "./dependencies";
import { createOneTodoUseCase } from "./usecases/createOneTodoUseCase";
import { getAllTodosUseCase } from "./usecases/getAllTodosUseCase";
import { getManyTodosByIdsUseCase } from "./usecases/getManyTodosByIdsUseCase";
import { updateTodoUseCase } from "./usecases/updateTodoUseCase";
import { runUseCase } from "./utils/runUseCase";

export const createResolvers = ({ todoRepository }: Dependencies): Resolvers => ({
  Query: {
    todos: (_, __) => runUseCase(getAllTodosUseCase(), todoRepository),
    todoByIds: (_, { ids }) => runUseCase(getManyTodosByIdsUseCase(ids), todoRepository),
  },
  Mutation: {
    createTodo: (_, { content }) => runUseCase(createOneTodoUseCase(content), todoRepository),
    updateTodo: (_, { changes }) => runUseCase(updateTodoUseCase(changes), todoRepository),
  },
});

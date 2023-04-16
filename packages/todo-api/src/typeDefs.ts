import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    todos: [Todo]
    todoByIds(ids: [ID]): [Todo]
  }

  type Mutation {
    createTodo(content: String): Todo
    updateTodo(changes: UpdateTodoInput): Todo
  }

  type Todo {
    id: ID
    createdAt: String
    updatedAt: String
    content: String
    done: Boolean
  }

  input UpdateTodoInput {
    id: ID!
    content: String
    done: Boolean
  }
`;

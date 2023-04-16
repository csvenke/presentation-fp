import { TaskEither, map } from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { DataSource, DataSourceOptions, EntitySchema, Repository } from "typeorm";
import { Todo } from "../entities/Todo";
import { fromPromise } from "../utils/promise";

export type TodoRepository = Repository<Todo>;

export interface Repositories {
  todoRepository: TodoRepository;
}

const TodoEntitySchema = new EntitySchema<Todo>({
  name: "Todo",
  tableName: "todos",
  columns: {
    id: {
      type: "varchar",
      primary: true,
      nullable: false,
    },
    createdAt: {
      type: "varchar",
      createDate: true,
      nullable: false,
    },
    updatedAt: {
      type: "varchar",
      updateDate: true,
      nullable: false,
    },
    content: {
      type: "varchar",
      nullable: false,
    },
    done: {
      type: "boolean",
      nullable: false,
    },
  },
});

export const IN_MEMORY_DATA_SOURCE: DataSourceOptions = {
  type: "sqlite",
  database: ":memory:",
  entities: [TodoEntitySchema],
  synchronize: true,
  logging: false,
};

export const SQLITE_DATA_SOURCE: DataSourceOptions = {
  type: "sqlite",
  database: "todosDB",
  entities: [TodoEntitySchema],
  synchronize: true,
};

const createDataSource = (options: DataSourceOptions): TaskEither<Error, DataSource> =>
  fromPromise(new DataSource(options).initialize());

export const createRepositories = (options: DataSourceOptions): TaskEither<Error, Repositories> =>
  pipe(
    createDataSource(options),
    map((datasource) => ({
      todoRepository: datasource.getRepository(TodoEntitySchema),
    }))
  );

export const createInMemoryRepositories = (): TaskEither<Error, Repositories> =>
  createRepositories(IN_MEMORY_DATA_SOURCE);

export const createSqliteRepositories = (): TaskEither<Error, Repositories> =>
  createRepositories(SQLITE_DATA_SOURCE);

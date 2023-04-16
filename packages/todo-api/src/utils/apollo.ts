import { ApolloServer, BaseContext } from "@apollo/server";
import { StartStandaloneServerOptions, startStandaloneServer } from "@apollo/server/standalone";
import { TaskEither, map } from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { ListenOptions } from "net";
import { Dependencies } from "../dependencies";
import { createResolvers } from "../resolvers";
import { typeDefs } from "../typeDefs";
import { fromPromise } from "./promise";

type ApolloServerOptions = StartStandaloneServerOptions<BaseContext> & {
  listen?: ListenOptions;
};

export const startApolloServer =
  (options: ApolloServerOptions) =>
  (server: ApolloServer<BaseContext>): TaskEither<Error, string> =>
    pipe(
      fromPromise(startStandaloneServer(server, options)),
      map(({ url }) => url)
    );

export const createApolloServer = (dependencies: Dependencies): ApolloServer<BaseContext> =>
  new ApolloServer({ typeDefs, resolvers: createResolvers(dependencies) });

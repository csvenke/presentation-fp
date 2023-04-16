import { chain, map, match } from "fp-ts/TaskEither";
import { pipe } from "fp-ts/function";
import { createApolloServer, startApolloServer } from "./utils/apollo";
import { createInMemoryRepositories } from "./storage/repositories";

const main = pipe(
  createInMemoryRepositories(),
  map(createApolloServer),
  chain(startApolloServer({ listen: { port: 4000 } })),
  match(
    (error) => console.error(error.message),
    (url) => console.log(`🚀 Server ready at ${url}`)
  )
);

main();

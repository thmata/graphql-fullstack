import "reflect-metadata";
import path from "path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver], // Como se fosse os controllers da REST = é como se fossem as rotas do graphql
    emitSchemaFile: path.resolve(__dirname, "schema.gql"), //Onde você quer salvar os arquivos de Schema do graphql
  });

  // Começando o servidor.
  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server running on ${url}`);
}

main();

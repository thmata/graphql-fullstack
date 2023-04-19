import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query()
  async users() {
    return "Hello World";
  }
}

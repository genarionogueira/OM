import { Context } from "./context.js" // Adjust the import path as needed
import * as schema from "./generated/graphql.js" 

const queryResolvers: schema.QueryResolvers<Context> = {  
    getUsers: async (_parent, args, context) => {
      const users = await context.api.getAll(
        args.filter
      );
      
      return users.map((user) => {
        return {
          __typename: 'User',
          id: user.id,
          name: user.name,
        }
      });
    }
}

const mutationResolvers: schema.MutationResolvers<Context> = {

  upsertUsers: async (_parent: any, args: schema.MutationUpsertUserArgs, context: Context) => {
    
    const users = await context.api.upsert(
      args.users
    );
    return users.map((user) => {
      return {
        __typename: 'User',
        id: user.id,
        name: user.name,
      }
    }
    );
  },

  deleteUsers: async (_parent: any, args: schema.MutationDeleteUserArgs, context: Context) => {
    const deleted = await context.api.delete(
      args.ids
    );
    return deleted;
  }

 }

const resolvers: schema.Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
}

export default resolvers;
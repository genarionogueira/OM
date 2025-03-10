import { readFileSync } from 'fs';
import resolvers from './resolvers.js';
import context, { Context } from "./context.js";
import config from './config.js';

//Apollo
import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServerPluginUsageReportingDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import connectDB from './db/mongodb.js';
import { ListenOptions } from 'net';

// Create the Apollo Server
export const createApolloServer = async (listenOptions: ListenOptions = {port:4000}) => {  
  const server = new ApolloServer<Context>({
    schema: buildSubgraphSchema([{ typeDefs: gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' })), resolvers }]),
    plugins: [
      ApolloServerPluginUsageReportingDisabled(),
      ApolloServerPluginInlineTraceDisabled(),
    ],
  });
  const { url } = await startStandaloneServer<Context>(server, { 
    context,
    listen: listenOptions 
  });
  return {server, url};
}
  
if (process.env.NODE_ENV !== 'test') {
  connectDB();
  const { url } = await createApolloServer({port: config.APP_PORT});
  console.log(`🚀 ${config.APP_NAME}\t${url}`);
}

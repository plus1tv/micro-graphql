import { GraphQLSchema } from 'graphql';
import Query from './../queries/query.js';
import Mutation from './../mutations/mutation.js';

const Schema = new GraphQLSchema({ query: Query, mutation: Mutation });

export default Schema;

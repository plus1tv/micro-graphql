import { GraphQLObjectType } from 'graphql';
import CreateKnock from './createKnock.js';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return { CreateKnock };
  },
});

export default Mutation;

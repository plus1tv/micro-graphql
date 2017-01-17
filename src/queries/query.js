import { GraphQLObjectType } from 'graphql';
import knockknock from './Knock.js';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields() {
    return { knockknock };
  },
});

export default Query;

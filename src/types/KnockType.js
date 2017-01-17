import { GraphQLObjectType, GraphQLString } from 'graphql';

const Knock = new GraphQLObjectType({
  name: 'Knock',
  description: 'KnockKnock to say hello.',
  fields() {
    return {
      knock: {
        type: GraphQLString,
        resolve(knock) {
          return knock;
        },
      },
    };
  },
});

export default Knock;

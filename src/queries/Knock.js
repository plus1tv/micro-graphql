import { GraphQLString } from 'graphql';
import Knock from './../types/KnockType.js';

const knockknock = {
  type: Knock,
  args: { knock: { type: GraphQLString } },
  resolve() {
    return 'Waddup fam!';
  },
};

export default knockknock;

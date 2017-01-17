import { GraphQLString, GraphQLBoolean } from 'graphql';
import Knock from './../types/KnockType.js';

const CreateKnock = {
  type: Knock,
  args: { isHome: { type: GraphQLBoolean } },
  resolve(root, args, context) {
    return 'Walking to the door!';
  },
};

export default CreateKnock;

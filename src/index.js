import micro from 'micro';
import graphqlHTTP from 'express-graphql';
import Schema from './schema/schema.js';

exports.default = graphqlHTTP({ schema: Schema, pretty: true, graphiql: true });

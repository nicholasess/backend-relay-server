import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField, connectionDefinitions } from "graphql-relay";

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "Post Type", 
    fields: () => ({
        id: globalIdField("Post"),
        title: {
            type: GraphQLString,
            resolve: post => post.title
        },
        body: {
            type: GraphQLString,
            resolve: post => post.body
        }
    })
})

const {connectionType: PostConnection, edgeType: PostEdge} = connectionDefinitions({
    nodeType: PostType
})

export {
    PostConnection, PostEdge
}

export default PostType
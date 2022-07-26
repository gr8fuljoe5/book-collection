export const schema = gql`
  type Book {
    id: Int!
    title: String!
    author: String!
    description: String
    category: String!
    image: String
    cover: Boolean
    dateAdded: DateTime!
  }

  type Query {
    books: [Book!]! @requireAuth
    book(id: Int!): Book @requireAuth
  }

  input CreateBookInput {
    title: String!
    author: String!
    description: String
    category: String!
    image: String
    cover: Boolean
    dateAdded: DateTime!
  }

  input UpdateBookInput {
    title: String
    author: String
    description: String
    category: String
    image: String
    cover: Boolean
    dateAdded: DateTime
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book! @requireAuth
    updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
    deleteBook(id: Int!): Book! @requireAuth
  }
`

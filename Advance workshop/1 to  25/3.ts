/**
 * QS
 * 
 * type UserId = Brand<string, "UserId">
type PostId = Brand<string, "PostId">

interface User{
    id: string,
    name: string
}

interface Post{
    id: string,
    title: string,
    content: string
}

const db: {users: User[]; posts: Post[]} = {
    users:[
        {
            id: "1",
            name: "Miles"
        },
    ],
    posts: [
        {
            id: "1",
            title: "Hello World",
            content: "This is my first post"
        }
    ]
}

const getUserById = (id : string ) => {
    return db.users.find(user => user.id === id)
}

const getPostById = (id: string) => {
    return db.posts.find(post => post.id === id);
}

 */

//Sol
type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
  content: string;
}

const db: { users: User[]; posts: Post[] } = {
  users: [
    {
      id: "1" as UserId,
      name: "Miles",
    },
  ],
  posts: [
    {
      id: "1" as PostId,
      title: "Hello World",
      content: "This is my first post",
    },
  ],
};

const getUserById = (id: UserId) => {
  return db.users.find(user => user.id === id);
};

const getPostById = (id: PostId) => {
  return db.posts.find(post => post.id === id);
};

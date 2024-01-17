// Using index signatures with branded types

/**
 * 
// import { Brand } from "./_brand"

// type PostId = Brand<string, "PostId">;
// type UserId = Brand<string, "UserId">;

// interface User{
//     id: UserId,
//     name: string
// }

// interface Post{
//     id: PostId,
//     title: string
// }

/**
* Change this type definition! We should be able to
* add users and posts to the db by their id.
* 
* You'll need an index signature of some kind - or maybe
* two!
 */
// const db : Record<string, User | Post > = {};

// const postId = "post_1" as PostId;
// const userId = "user_1" as UserId;

// db[postId] = {
//     id: postId,
//     title: "Hello World"
// }

// db[userId] = {
//     id: userId,
//     name: "Miles"
// }

// const post = db[postId];
// const user = db[userId]
//

//Ans

import { Brand } from "./_brand";

type PostId = Brand<string, "PostId">;
type UserId = Brand<string, "UserId">;

interface User {
  id: UserId;
  name: string;
}

interface Post {
  id: PostId;
  title: string;
}

/**
 * Change this type definition! We should be able to
 * add users and posts to the db by their id.
 *
 * You'll need an index signature of some kind - or maybe
 * two!
 */

//we can use two intersection of two record also.
const db: {
  [postId: PostId]: Post;
  [userId: UserId]: User;
} = {};

const postId = "post_1" as PostId;
const userId = "user_1" as UserId;

db[postId] = {
  id: postId,
  title: "Hello World",
};

db[userId] = {
  id: userId,
  name: "Miles",
};

const post = db[postId];
const user = db[userId];

interface User {
  id: string;
}

export class SDK {
  loggedInUser?: User;

  constructor(loggedInUser?: User) {
    this.loggedInUser = loggedInUser;
  }

  //How do we type this assertion function ?
  assertIsLoggedIn(): asserts this is this & { loggedInUser: User } {
    if (!this.loggedInUser) {
      throw new Error("Not logged in");
    }
  }

  createPost(title: string, body: string) {
    this.loggedInUser;
    this.assertIsLoggedIn();
    this.loggedInUser;
  }
}

//so yes we can use it inside or outside of the classes

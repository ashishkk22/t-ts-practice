// 0214_Checking_Types_with_Assertion_Functions

interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  role: "admin";
  organizations: string[];
}

interface NormalUser extends User {
  role: "normal";
}

function assertUserIsAdmin(user: NormalUser | AdminUser) : asserts user is AdminUser  {
  if (user.role !== "admin") {
    throw new Error("Not an admin user");
  }
}

const example = (user: NormalUser | AdminUser) => {
  assertUserIsAdmin(user);

  //here after this user's type should be AdminUser and we have to assert as Admin and if user is not admin then it will throw the error
  const ak = user;
  // ^? (parameter) user: AdminUser
  //so here we will get the Admin user or execution won't be here due to thrown error inside assertUserIsAdmin function  
}

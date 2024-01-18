//Avoiding typescript's most confusing error

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

const assertUserIsAdmin = (
  user: NormalUser | AdminUser
): asserts user is AdminUser => {
  if (user.role !== "admin") {
    throw new Error("Not an admin user");
  }
};

const example = (user: NormalUser | AdminUser) => {
  assertUserIsAdmin(user); // this error occurs due to arrow function if we converts that function in to normal function then we won't face that issue

  //   Assertions require every name in the call target to be declared with an explicit type annotation.ts(2775)

  //here after this user's type should be AdminUser and we have to assert as Admin and if user is not admin then it will throw the error
  const ak = user;
  // ^? (parameter) user: AdminUser
  //so here we will get the Admin user or execution won't be here due to thrown error inside assertUserIsAdmin function
};

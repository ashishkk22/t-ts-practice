//generic mapper solution

const concatenateFirstNameAndLastName = <
  TUser extends {
    firstName: string;
    lastName: string;
  }
>(
  user: TUser
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const users = [
  {
    firstName: "Ashish",
    lastName: "Kachhadiya",
  },
];

const newUsers = users.map(concatenateFirstNameAndLastName);

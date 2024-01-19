// Extract_Types_to_Extend_an_External_Library

/**
 * We're using a function from fake-external lib, but we need
 * to extend the types. Extract the types below.
 */

export const fetchUser = async (id: string) => {
  return {
    id,
    fistName: "ashish",
    lastName: "kachhadiya",
  };
};

type ParametersOfFetchUser = Parameters<typeof fetchUser>;

type ReturnTypeOfFetchUserWithFullName = Awaited<
  ReturnType<typeof fetchUser>
> & {
  fullName: string;
};

export const fetchUserWithFullName = async (
  ...args: ParametersOfFetchUser
): Promise<ReturnTypeOfFetchUserWithFullName> => {
  const user = await fetchUser(...args);
  return {
    ...user,
    fullName: `${user.fistName} ${user.lastName}`,
  };
};

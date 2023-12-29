//H C
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganizationPath = "/users/:id/organizations/:organizationId";

/**
 * S.Split<TPath, "/">
 * So here we will get the array from the provided string
 *
 * S.Split<TPath, "/">[number]
 * So with the number we will get the union of the array member
 *
 * K extends `:${infer P}` ? P : never
 * So here if the K extends that start with : then infer rest of that and return else never
 */

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type Result = ExtractPathParams<UserOrganizationPath>;

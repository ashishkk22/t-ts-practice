//extract the value and assign it 
export const fakeDataDefaults = {
    String: "Default string",
    Int: 1,
    Float: 1.14,
    Boolean: true,
    Id: "id"
};

/**
 * get the type from the object
 * export type StringType = string
 */

//here we can access with the index ( we can not do fakeDataDefault.String)
export type StringType = typeof fakeDataDefaults["String"]
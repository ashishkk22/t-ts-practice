interface Example {
    name: string,
    age: number,
    id: string;
    organizationId: string;
    groupId: string
}

type SearchForId = `${string}${"id" | "Id" | "ID"}${string}`

type OnlyIdKeys<T extends Record<string,any>> = {
  [K in keyof T as K extends SearchForId ? K : never] : T[K]
};

type Result = OnlyIdKeys<Example>
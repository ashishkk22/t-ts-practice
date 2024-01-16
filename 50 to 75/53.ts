// inference inside generic function

type Person = {
  name: string;
  age: number;
  birthDate: Date;
};

export function remapPerson<Key extends keyof Person>(
  key: Key,
  value: Person[Key]
): Person[Key] {
  if (key === "birthDate") {
    // return new Date() // due to narrowing error
    /**
     * remapPerson<"age" | "birthDate">("age", new Date())
     * due to this we can pass the date or number so ts can't trust
     */
    return new Date() as Person[Key];
  }
  return value;
}

//create a type safe may with the builder pattern

/**
 * In this problem we need to type the return type of set()
 * method to make it add keys to the TMap generic.
 *
 * In the return type of set(), we'll need to modify the TMap generic to add the new key/value pair.
 */

//here if we don't pass the default generic then it was going to default as Record<string,string> and then in the get function we won't get proper autocomplete

// so here after setting the {} in the keyof section it will be as never

/**
 * type Example  = keyof {}
 *      ^? type Example = never
 */

class TypeSafeStringMap<TMap extends Record<string, string> = {}> {
  private map: TMap;
  constructor() {
    this.map = {} as TMap;
  }

  get(key: keyof TMap): string {
    return this.map[key];
  }
  /**
   *
   * set<K extends string>(key: K, value: string): TypeSafeStringMap<TMap & Record<K,string>>{
   * above is the answer
   */

  set<K extends string>(
    key: K,
    value: string
  ): TypeSafeStringMap<TMap & Record<K, string>> {
    (this.map[key] as any) = value;
    return this;
  }
}

const map = new TypeSafeStringMap()
  .set("ashish", "kachhadiya")
  .set("m", "k")
  .set("j", "r");

const getKey = map.get("j");

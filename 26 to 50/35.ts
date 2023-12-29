/**
 * Mutually exclusive properties problem
 * output
 * {
 *   id: string
 * } |
 * {
 *   email: string
 * } |
 * {
 *   username: string
 * }
 */

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes ?
 */

type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type Result = MutuallyExclusive<Attributes>;

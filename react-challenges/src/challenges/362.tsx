/**
 * Let's say we wanted to add a new optional attribute to all react
 * elements. How would we do that ?
 *
 * 1. Make use of declaration merging in the global scope to add a new
 * attribute to all react elements
 */

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      test?: string;
    }
  }
}

<>
  <div test="123"></div>
  <audio src="" test="123"></audio>
</>;

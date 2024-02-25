/**
 * Let's say we're working with an external library that adds a new
 * global element to the DOM. we want to strongly type this element
 * so that it can only be used with the correct attributes
 *
 * In this case, we're adding a <something/> element to the Dom,
 * which takes a required 'id' attribute.
 *
 * Hint - You'll need to declaration merge with an existing
 * interface in the JSX namespace.
 *
 */

declare global {
  // namespace JSX {
  //   interface IntrinsicElements {
  //     something: {
  //       id: string;
  //     };
  //   }
  // }
}

//or it is also available in the react
/**
declare global {
  namespace React {
    namespace JSX {
    interface IntrinsicElements {
      something: {
        id: string;
      };
    }
   }
  }
}
 */

<>
  <something id="123"></something>

  {/* expect the error  */}
  <something></something>

  {/* expect the error  */}
  <something id={123}></something>
</>;

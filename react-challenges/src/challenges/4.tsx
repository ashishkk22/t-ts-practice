// Empty object type explainer
// In ts {} <== this tells that zero or more property

// const Component = (props: { config: {} }) => {

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Component = (props: { config: Record<string, never> }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config ?
 *
 * {} <== with {} we can pass anything but
 *
 * if we do it with
 * Record<string, never> then we must have to pass the empty object
 */

const Test4 = () => {
  return (
    // <Component config={{
    //     foo: "bar",
    //     whatever: {},
    //     awdawd: 123
    // }}/>
    <Component config={{}} />
  );
};

export default Test4;

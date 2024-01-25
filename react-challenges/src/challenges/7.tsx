const classNamesMap = {
  primary: "bg-blue-500 text-while",
  secondary: "bg-gray-200 text-black",
  success: "bg-green-500 text-white",
};

type ButtonProps = {
  /**
   * This isn't ideal - we have to manually sync the
   * type of variant with the object above.
   *
   * 1. How do we rearrange this code so that we don't
   * have to manually sync the types ?
   *
   * Hint: you'll need "typeof" and "keyof"
   */
  variant: keyof typeof classNamesMap;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={classNamesMap[props.variant]}>{props.variant}</button>
    </div>
  );
};

const Test7 = () => {
  return (
    <div>
      <Button variant="primary" />
    </div>
  );
};

export default Test7;

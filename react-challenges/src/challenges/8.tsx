const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

/**
 * In this exercise, we're using presetSizes to
 * Provide a set of preset sizes for our Icon component.
 *
 * We want to allow  users to pass in either a string,
 * or a Size. But there's an issue (see below).
 */

// to make it work just wrap it in the () and add & with {}
// type LooseSize = Size | string;

type LooseSize = Size | (string & {});
// ^ ? type LooseSize = "xs" | "sm" | (string & {})

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[
                /**
                 * The 'as' is necessary here because TS can't seem to narrow
                 * props.size to Size properly
                 */
                props.size as Size
              ]
            : props.size,
      }}
    ></div>
  );
};

//here try to find a way to express the type LooseSize in a way that gives autoComplete for 'sm' and 'xs' while also letting the user pass any value

const Test8 = () => {
  return (
    <div>
      <Icon size="sm" />
    </div>
  );
};

export default Test8;

//302

// huuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
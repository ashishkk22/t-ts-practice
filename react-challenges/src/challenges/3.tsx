/**
 * 1. Rewrite the embeddedPlaygroundProps type so that it enforces this
 *
 * Hint: You'll need a discriminated union!
 */

/**
 * 
 * QS
type EmbeddedPlaygroundProps = {
    useStackblitz?: boolean,
    stackblitzId?: string,
    codeSandboxId?: string,
}
 */

type EmbeddedPlaygroundProps =
  | { useStackblitz: true; stackblitzId: string }
  | { useStackblitz?: false; codeSandboxId: string };
  
//  or we can make the above union's useStackblitz as optional  | { useStackblitz?: undefined, codeSandboxId: string}

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props?.useStackblitz) {
    return <div>stack blitz</div>;
  }

  return <div>code sand box {props.codeSandboxId}</div>;
};

const Test3 = () => {
  return (
    <div>
      <EmbeddedPlayground codeSandboxId="asdf" />
    </div>
  );
};

export default Test3;

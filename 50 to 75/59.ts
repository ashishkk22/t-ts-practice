//refactoring generics for a cleaner api
import { CSSProperties } from "react";

/**
 * In this implementation, we need to specify the theme
 * inside useStyled wherever we use it. This is not ideal.
 *
 * See if you can refactor useStyled into a function called
 * makeUseStyled which returns a useStyled function, typed with the theme.
 *
 * Desired API:
 *
 * const useStyled = makeUseStyled<MyTheme>();
 */

const useStyled = <TTheme = {}>(func: (theme: TTheme) => CSSProperties) => {
  return {} as CSSProperties;
};

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}

/** const buttonStyle = useStyled(theme => ({
    color: theme.color.primary,
    fontSize: theme.fontSize.small
})) 
    It should infer where we have called it 
    like 
    const useStyled = makeUseStyled<MyTheme>();
*/

const makeUseStyled =
  <TTheme = {}>() =>
  (func: (theme: TTheme) => CSSProperties) => {
    return {} as CSSProperties;
  };

const useStyledAns = makeUseStyled<MyTheme>();

const buttonStyleAns = useStyledAns(theme => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));

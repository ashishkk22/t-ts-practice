type Icon = "home" | "settings" | "about";
type ButtonVariant = "primary" | "secondary" | "tertiary"

//how do we refactor this to make it DRY ?

/**
 *  (string & {}
 * here everything is working fine but we have to refactor it so it 
 * doesn't look like terrifying to someone while reviewing the code
 * 
 * so we have to make the loose autocomplete for it 
 * 
 */
type LooseIcon = Icon | (string & {})
type LooseButtonVariant = ButtonVariant | (string & {})

//so we can make something like below and we don't have to write everywhere string & {} 
//so our code can become more readable

type LooseAutoComplete<T> = T | (string & {});

type Example = LooseAutoComplete<Icon>;

const looseAutoComplete = (t: any) => {
    return "hello"
}

export const Icons: LooseIcon[] = [
    "home",
    "settings",
    "about",
    "any-other-string",
    //I should get autoComplete if I add a new item here !
]

export const buttonVariant: LooseButtonVariant[] = [
    "primary",
    "secondary",
    "tertiary"
    // I should get autocomplete if I add a new item here !
]




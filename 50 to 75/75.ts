//build an internationalization library

type GetParamKeys<TTranslation extends string> = TTranslation extends ""
  ? []
  : TTranslation extends `${string}{${infer Param}}${infer Tail}`
  ? [Param, ...GetParamKeys<Tail>]
  : [];

const translate = <
  TTranslations extends Record<string, string>,
  TKey extends keyof TTranslations,
  TDynamicKEy = GetParamKeys<TTranslations[TKey]
>(
  translations: TTranslations,
  key: TKey,
  ...args: TKey extends string
    ? GetParamKeys<TTranslations[TKey]> extends [] ? []
      : [dynamicArgs: Record<>, string>]
      : []
) => {
  const translation = translations[key];
  const params = args[0] || {};

  return translation.replace(/{(\w+)}/g, (_, key) => params[key]);
};

const translations = {
  title: "Hello, {name}!",
  subtitle: "You have {count} {hii} unread messages",
  button: "Click me!",
} as const;

const buttonText = translate(translations, "button");
const subtitle = translate(translations, "subtitle");

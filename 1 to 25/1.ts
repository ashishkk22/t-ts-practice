// 1 => how to get the type of the function's return value
const Logger = (str: string, num: number) => {
  return 22;
};

//here we will get the return type from the function
type LoggerType = ReturnType<typeof Logger>;

//to get the parameter of the function
type LoggerArgument = Parameters<typeof Logger>;
type LoggerFistArgument = LoggerArgument[0];


//function overloads vs union types
function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): {
  result: string;
};
function runGenerator(generator) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

const result = runGenerator({
  run: () => "hello",
});

//so we can say that function overloads is best when we have different return type
//but
//if we have the same return type then we can do the same thing with union type (don't need function overloads)

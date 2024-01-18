// 0224_Classes_as_Types_and_Values

class CustomError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "CustomError";
  }
}

const customError = new CustomError("Ohh noo", 400);

//How do we type the "error" parameter ?
const handleCustomError1 = error => {
  if (error instanceof CustomError) {
    console.error(error.message);
  }
};

const handleCustomError2 = (error: CustomError) => {
  console.error(error.message);
};

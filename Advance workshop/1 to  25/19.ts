class Form<TValues> {
  error?: string;

  constructor(
    public values: TValues, // this is the shorthand instead of assigning values to the values in constructor function
    private validate: (values: TValues) => string | void
  ) {}

  /**
   * add type predicate 
   * isInvalid() {
    const result = this.validate(this.values);

    if (typeof result === "string") {
      this.error = result;
      return true;
    }

    this.error = undefined;
    return false;
  }
   */
  //   isInvalid(): this is Form<TValues> & { error: string } {
  //or both of them are valid
  isInvalid(): this is this & { error: string } {
    const result = this.validate(this.values);

    if (typeof result === "string") {
      this.error = result;
      return true;
    }

    this.error = undefined;
    return false;
  }
}

const form = new Form(
  {
    username: "",
    password: "",
  },
  values => {
    if (!values.username) {
      return "Username is required";
    }

    if (!values.password) {
      return "Password is required";
    }
  }
);

if (form.isInvalid()) {
  form.error; // so here form.error is going to be always as string due to the type predicate
} else {
  form.error;
}

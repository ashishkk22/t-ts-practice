//react hook form problem

/**
 * When you provide default values to useForm, the return type of getValues
 * get inferred as the shape of those values.
 *
 * Investigate why this is, what TFieldValues is being used for.
 */
import { useForm } from "react-hook-form";

const Example1 = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <form
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
    >
      <input {...form.register("firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};

const Example2 = () => {
  const form = useForm();
  return (
    <form
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
    >
      <input {...form.register("firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
};

const Example3 = () => {
  const form = useForm<FormValues>();
  return (
    <form
      onSubmit={form.handleSubmit(values => {
        console.log(values);
      })}
    >
      <input {...form.register("firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};

export default Example1;

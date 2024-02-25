//react hook form wrapper
import {
  useForm,
  DefaultValues,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormGetValues,
} from "react-hook-form";
/**
 * Here we are creating a wrapper around react-hook-form's useForm hook.
 *
 * We want to change the API slightly so that only certain methods are exposed.
 * We also want to make sure that defaultValues is ALWAYS required
 *
 * A clue: you'll need this line of code:
 *
 * defaultValues as DefaultValues<TValue>
 */

const useCustomForm = <TValues extends FieldValues>(
  defaultValues: TValues
): {
  register: UseFormRegister<TValues>;
  handleSubmit: UseFormHandleSubmit<TValues>;
  getValues: UseFormGetValues<TValues>;
} => {
  const form = useForm({
    defaultValues: defaultValues as DefaultValues<TValues>,
  });

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    getValues: form.getValues,
  };
};

const Example1 = () => {
  const form = useCustomForm({
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
      <input {...form.register("defaultValues.firstName")} />
      <input {...form.register("lastName")} />
    </form>
  );
};
//390

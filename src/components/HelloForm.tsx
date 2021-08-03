import { useForm } from "react-hook-form";
import { Hello } from "types/hello.type";

interface Props {}

const HelloForm: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Hello) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} /> <br />
      <input type="email" {...register('email')} /> <br />
      <button type="submit">Submit</button>
      <small>Result below developer console</small>
    </form>
  );
};

export default HelloForm;

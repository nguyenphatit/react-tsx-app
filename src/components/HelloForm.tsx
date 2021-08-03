import { useForm } from "react-hook-form";
import { Login } from "types/auth.type";

interface Props {}

const HelloForm: React.FC<Props> = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Login) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} /> <br />
      <input type="email" {...register('email')} /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HelloForm;

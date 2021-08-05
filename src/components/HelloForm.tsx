import { useForm } from "react-hook-form";
import { Hello } from "types/hello.type";

interface Props {
  login: Function
}

const HelloForm: React.FC<Props> = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Hello) => props.login(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('username')} /> <br />
      <input type="text" {...register('password')} /> <br />
      <button type="submit">Submit</button>
      <small>Result below developer console</small>
    </form>
  );
};

export default HelloForm;

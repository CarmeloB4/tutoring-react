import { useForm } from "react-hook-form";

const Card = ({ login }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="Card flex flex-col items-center bg-zinc-400 rounded">
      <h1 className="font-bold p-1">Insert your data</h1>
      <form
        className="flex flex-col justify-between mt-4"
        onSubmit={handleSubmit(login)}
      >
        <input
          type="text"
          name="name"
          placeholder="Mario"
          {...register("name")}
        />
        <input
          type="text"
          name="surname"
          placeholder="Rossi"
          {...register("surname")}
        />
        <input
          type="email"
          name="email"
          placeholder="mariorossi@mail.it"
          {...register("email")}
        />
        <input type="date" name="birthday" {...register("birthday")} />
        <button type="submit" className="bg-cyan-700 text-white rounded p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Card;

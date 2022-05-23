const Card = () => {
  return (
    <div className="Card flex flex-col items-center bg-zinc-400 rounded">
      <h1 className="font-bold p-1">Insert your data</h1>
      <form className="flex flex-col justify-between mt-4">
        <input type="text" placeholder="Mario" />
        <input type="text" placeholder="Rossi" />
        <input type="date" />
        <button type="button" className="bg-cyan-700 text-white rounded p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Card;

const Card = ({ handleFormChange, login }) => {
  return (
    <div className="Card flex flex-col items-center bg-zinc-400 rounded">
      <h1 className="font-bold p-1">Insert your data</h1>
      <form className="flex flex-col justify-between mt-4">
        <input
          type="text"
          name="name"
          placeholder="Mario"
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Rossi"
          onChange={handleFormChange}
        />
        <input
          type="email"
          name="email"
          placeholder="mariorossi@mail.it"
          onChange={handleFormChange}
        />
        <input type="date" name="birthday" onChange={handleFormChange} />
        <button
          type="button"
          className="bg-cyan-700 text-white rounded p-2"
          onClick={login}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Card;

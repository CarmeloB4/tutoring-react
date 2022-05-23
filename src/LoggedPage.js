const LoggedPage = ({ user }) => {
  return (
    <div className="Logged-Page text-sky-800 font-black">
      <h1>Hi {user.name}, Thank you for the registration</h1>
      <h2>Check your email {user.email}</h2>
    </div>
  );
};

export default LoggedPage;

import "./Card.css";

export function Card({ user, setSelectedUser, setErrorMessage }) {
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedUser(user.name);
        setErrorMessage("");
      }}
    >
      Id:{user.id}
      <div className="name">Name:{user.name}</div>
      <div className="email">Email:{user.email}</div>
    </div>
  );
}

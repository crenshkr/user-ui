import "./Card.css";

export function Card({ user, setSelectedUser }) {
  return (
    <div
      className="card"
      onClick={() => {
        setSelectedUser(user.name);
      }}
    >
      Id:{user.id}
      <div className="name">Name:{user.name}</div>
      <div className="email">Email:{user.email}</div>
    </div>
  );
}



export function Card({ user }) {
  return (
    <div className="user-card">
      Id:{user.id}
      <div className="name">Name:{user.name}</div>
      <div className="email">Email:{user.email}</div>
    </div>
  );
}

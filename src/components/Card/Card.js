import "./Card.css";

export function Card({ user, dispatch }) {
  return (
    <div
      className="card"
      onClick={() => {
        // setSelectedUser(user.name);
        dispatch({ type: "SET_SELECTED_USER", payload: user.name });
        dispatch({ type: "SET_ERROR_MESSAGE", payload: "" });
      }}
    >
      Id:{user.id}
      <div className="name">Name:{user.name}</div>
      <div className="email">Email:{user.email}</div>
    </div>
  );
}

import "./Card.css";

export function Card({ user, chosenTeamMembers, dispatch }) {
  const isChosen = chosenTeamMembers.includes(user.name);
  const isOdd = user.id % 2; // odd numbers result in 1, even resolves to 0
  return (
    <div className={`${isOdd ? "card--odd" : "card--even"}`}>
      <div
        className={`card ${isChosen && "card--chosen"}  `}
        onClick={() => {
          dispatch({ type: "SET_SELECTED_USER", payload: user.name });
          dispatch({ type: "SET_ERROR_MESSAGE", payload: "" });
        }}
      >
        Id:{user.id}
        <div className="name">Name:{user.name}</div>
        <div className="email">Email:{user.email}</div>
      </div>
    </div>
  );
}

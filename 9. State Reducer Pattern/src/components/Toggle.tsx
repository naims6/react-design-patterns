import { useReducer } from "react";
import toggleReducer from "../reducers/toggle-reducer";

interface IToggle<S = { on: boolean; clicks: number }, A = { type: string }> {
  reducer?: (state: S, action: A) => S;
}

const Toggle = ({ reducer = toggleReducer }: IToggle) => {
  const [state, dispatch] = useReducer(reducer, { on: false, clicks: 0 });

  const { on, clicks } = state;

  function handleToggle() {
    dispatch({ type: "toggle" });
  }

  return (
    <button onClick={handleToggle}>
      {on ? "ON" : "OFF"} (Clicks: {clicks})
    </button>
  );
};

export default Toggle;

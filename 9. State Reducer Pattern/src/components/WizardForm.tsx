import { useReducer } from "react";
import formReducer from "../reducers/form-reducer";

const WizardForm = ({ reducer = formReducer }: any) => {
  const [state, dispatch] = useReducer(reducer, {
    steps: 0,
    totalStep: 4,
    form: { fullName: "", email: "", password: "", hobby: "" },
    errors: {},
  });

  const { errors, form, totalStep, steps } = state;
  const percentage = (steps / totalStep) * 100;

  const handleStartFillupForm = () => {
    dispatch({ type: "start" });
  };
  const handlePrev = () => {
    dispatch({ type: "prev" });
  };
  const handleNext = () => {
    dispatch({ type: "next" });
  };
  const handleResubmit = () => {
    dispatch({ type: "start" });
  };

  const handleChange = (e: any) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "submit",
      payload: { fullName: "", email: "", password: "", hobby: "" },
    });
    console.log(form);
  };

  return (
    <div>
      {state.steps === 0 && (
        <button onClick={handleStartFillupForm}>Fill Up Form</button>
      )}
      <br />
      <div
        style={{
          width: `${percentage}%`,
          height: "2px",
          background: "green",
        }}
      ></div>
      <form>
        {state.steps === 1 && (
          <>
            <input
              onChange={(e) => handleChange(e)}
              name="fullName"
              type="text"
              value={state.form.fullName}
              placeholder="Full Name"
              required
            />{" "}
            <br />
            {errors?.fullName && (
              <>
                {" "}
                <span>{errors?.fullName}</span> <br />
              </>
            )}
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              type="email"
              value={state.form.email}
              placeholder="Email"
              required
            />{" "}
            <br />
          </>
        )}

        {state.steps === 2 && (
          <>
            <input
              onChange={(e) => handleChange(e)}
              name="password"
              type="password"
              value={state.form.password}
              placeholder="Pasword.."
              required
            />{" "}
            <br />
          </>
        )}

        {state.steps === 3 && (
          <>
            <input
              onChange={(e) => handleChange(e)}
              name="hobby"
              type="text"
              value={state.form.hobby}
              placeholder="Hobby.."
              required
            />{" "}
            <br />
          </>
        )}

        {state.steps === state.totalStep && (
          <>
            <h1>Hurray! You have completed form</h1>
            <button type="button" onClick={handleResubmit}>
              Resubmit The Form
            </button>
          </>
        )}

        {/* actions */}
        {state.steps > 0 && !(state.steps === state.totalStep) && (
          <div>
            <button type="button" onClick={handlePrev}>
              Prev
            </button>
            {state.steps === state.totalStep - 1 ? (
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default WizardForm;

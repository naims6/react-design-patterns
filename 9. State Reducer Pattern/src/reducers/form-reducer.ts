const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "start":
      return { ...state, steps: 1 };
    case "prev":
      if (state.steps < 0) return state;
      return { ...state, steps: state.steps-- };
    case "next":
      if (state.steps > state.totalStep) return state;
      if (state.form.fullName === "") {
        return { ...state, errors: { fullName: "fullName is Required" } };
      } else if (state.form.fullName.length <= 2) {
        return {
          ...state,
          errors: { fullName: "fullName should more than 2 words" },
        };
      } else {
        delete state.errors.fullName;
      }
      return { ...state, steps: state.steps++ };
    case "CHANGE_FIELD": {
      const { name, value } = action.payload;
      if (state.form.fullName === "") {
        return {
          ...state,
          form: { ...state.form, [name]: value },
          errors: { fullName: "fullName is Required" },
        };
      } else if (state.form.fullName.length <= 2) {
        return {
          ...state,
          form: { ...state.form, [name]: value },
          errors: { fullName: "fullName should more than 2 words" },
        };
      } else {
        delete state.errors.fullName;
      }

      return { ...state, form: { ...state.form, [name]: value } };
    }
    case "submit": {
      return { ...state, steps: state.steps++, form: action.payload };
    }
  }
};

export default formReducer;


function toggleReducer(state: {on: boolean, clicks: number }, action: {type: string}) {
  switch (action.type) {
    case "toggle":
      if (state.clicks > 3) return state
      return { on: !state.on, clicks: state.clicks++ };
    default:
      return state;
  }
}

export default toggleReducer;

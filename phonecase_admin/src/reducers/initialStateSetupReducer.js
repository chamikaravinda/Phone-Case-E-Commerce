const sidebarState = {
  sidebarShow: "responsive",
};

const initialState = (state = sidebarState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

export default initialState;

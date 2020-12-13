export const actionStage = (stage) => {
  return {
    type: 'SET_STAGE',
    payload: stage,
  };
};

export const actionSelectedDeveloper = (name) => {
  return {
    type: 'SELECTED_DEVELOPER',
    payload: name,
  };
};

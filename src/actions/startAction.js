export const rotateAction = (payload) => {
    console.log(payload);
    const startAction = {
      type: "rotate",
      payload
    };
    return startAction;
  };
  
export const logger =(store) =>(next) =>(action) =>{
    console.log(store)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
      ...actionInfo,
      action: { ...actionInfo.action, payload: featured },
    };
    next(updatedActionInfo);
};

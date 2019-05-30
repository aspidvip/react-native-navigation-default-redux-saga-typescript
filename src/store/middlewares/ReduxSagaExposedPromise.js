const createExposedPromise = () => {
  const deferred = {};

  const promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return [promise, deferred];
};

// eslint-disable-next-line
  export default store => next => action => {
  if (action.payload) {
    if (!action.payload.deferred) {
      return next(action);
    }

    const [promise, deferred] = createExposedPromise();
    next({ type: action.type, payload: { ...action.payload, deferred } });
    return promise;
  }
  return next(action);
};

function useDebounceWithFunction(fn, delay = 500) {
  let timerId = null;

  function debouncedFunction(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFunction;
}

export default useDebounceWithFunction;

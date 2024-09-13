function useDebounceWithFunction(fn, delay = 500) {
  let timerId = null;
  function debouncedFunction(...args) {
    if (timerId) {
      clearTimeout(timerId);
    } else {
      timerId = setTimeout(() => {
        fn(...args);
      }, delay);
    }
  }
  return debouncedFunction;
}

export default useDebounceWithFunction;

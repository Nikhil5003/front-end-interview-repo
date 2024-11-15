import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const data = ["nikhil", "sonika", "gourav", "tanuj", "rajat", "saptarshi"];
function useMultiSearch() {
  const [query, setQuery] = useState("");
  const [pillsData, setPillsData] = useState([]);
  const set = new Set(pillsData);
  const debouncedValue = useDebounce(query);
  console.log(debouncedValue);
  const filteredUsers = data.filter((ele) =>
    ele.toLowerCase().includes(debouncedValue.toLowerCase())
  );
  const onInputChange = (value) => {
    setQuery(value);
  };
  const onClick = (name) => {
    setPillsData((prev) => [...prev, name]);
  };

  const onCloseClick = (name) => {
    setPillsData((prev) => prev.filter((pill) => pill !== name));
  };

  return {
    onChange: onInputChange,
    query,
    filteredUsers: filteredUsers.filter((ele) => !set.has(ele)),
    onClick,
    pillsData,
    onCloseClick,
  };
}

export default useMultiSearch;

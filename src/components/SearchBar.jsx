import { useEffect, useState } from "react";
function useDebounce(value, timer) {
  const [debval, setDebval] = useState("");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebval(value);
    }, timer);

    return () => {
      clearTimeout(timeout);
    };
  }, [value,timer]);

  return debval;
}

const SearchBar = () => {
  const [value, setValue] = useState("");
  const debval = useDebounce(value, 300);
  return (
    <div>
      Search for any prodcuct
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {debval}
    </div>
  );
};

export default SearchBar;

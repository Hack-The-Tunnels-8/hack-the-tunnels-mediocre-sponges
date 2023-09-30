import { useState } from "react";
import "./Seachbar.style.scss";

function Searchbar() {
  const [searchTerm, setSearchTerm] = useState(null);

  const search = async () => {
    try {
      setSearchTerm(searchTerm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div>
        <input type="text" placeholder="Search..." className="searchbar"></input>
      </div>
  );
}

export default Searchbar;

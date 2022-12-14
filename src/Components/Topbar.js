import { useContext, useState } from "react";
import myContext from "../context/context";
const Topbar = () => {
  const { close, openSidebar } = useContext(myContext);
  const [searchValue, setSearchValue] = useState("");
  return (

    <>
      <nav
        className={
          close
            ? "TopbarFull navbar navbar-light bg-light"
            : "Topbar navbar navbar-light bg-light"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" onClick={openSidebar}>
            {close ? <i class="fa fa-bars" aria-hidden="true"></i> : ""}
          </a>
          <div className="search">
            <label htmlFor="search">
              <i className="fa fa-search" aria-hidden="true"></i>
            </label>
            <input
              type="search"
              placeholder="search"
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};


export default Topbar;

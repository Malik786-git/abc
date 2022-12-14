import { useContext } from "react";
import myContext from "../context/context";

const Statis = () => {
    const { close } = useContext(myContext);

  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
            <h1 className="text-center py-5">Statistics</h1>
    </div>
  )
}

export default Statis;

import { useContext } from "react";
import myContext from "../context/context";


const Customize = () => {
    const { close } = useContext(myContext);
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
            <h1 className="text-center py-5">Customize</h1>
    </div>
  )
}

export default Customize

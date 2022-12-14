import { useContext } from "react";
import myContext from "../context/context";

const Admin = () => {
    const { close } = useContext(myContext);
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
      <h1 className="text-center py-5">Admin</h1>
    </div>
  )
}

export default Admin

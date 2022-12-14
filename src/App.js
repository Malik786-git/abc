import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { AppProvider } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Topbar from "./Components/Topbar";
import Admin from "./Components/Admin";
import Statis from "./Components/Statis";
import Customize from "./Components/Customize";
import Setting from "./Components/Setting";
function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Sidebar />
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/static" element={<Statis />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/setting" element={<Setting/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;

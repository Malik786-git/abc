import { useContext, useState } from "react";
import myContext from "../context/context";
import DisplayFrom from "./DisplayFrom";

const Dashboard = () => {
    const { close } = useContext(myContext);
    const [IsFormDataInput, setIsFormDataInput] = useState(false);

    const [form, setForm] = useState({
        fname: "",
        lname: "",
        age: "",
        class: "One",  
        checkbox: false
    })
    
    const handleChange = (e)=>{
        if (e.target.id === 'checkbox') {
            setForm({
                ...form,
                [e.target.id] : e.target.checked
            })
        }else{

            setForm({
                ...form,
                [e.target.id] : e.target.value
            })
        }
    }
  
  const getFormData = (e)=>{

    e.preventDefault();
            if (form.fname !== '' && form.lname !== '' && 
                form.age !== '' && form.class !== '' && 
                form.checkbox === true)
            {
                     setIsFormDataInput(true);
            }
   
  }
  return (
    <div className={close ? "DashboardFull" : "Dashboard"}>
    <form className="Dashboard-form" onSubmit={getFormData}>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fname"
          value={form.fname}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lname"
          value={form.lname}
          onChange={(handleChange)}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={form.age}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="class">
          Class
        </label>
        <select className="form-select"
        onChange={handleChange}
        id='class'
        aria-label="Default select example">
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="checkbox"
          defaultChecked={form.checkbox}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="checkbox">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    {
      IsFormDataInput? 
      <DisplayFrom  data={form}/>
      :
      ""
    }
  </div>
  );
};


export default Dashboard;

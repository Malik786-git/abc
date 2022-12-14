const DisplayFrom = ({ data }) => {

  return (
    <div className="DisplayFrom">
      <div className="card">
        <div className="card-header">User Data</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name: {`${data.fname} ${data.lname}`}</li>
          <li className="list-group-item">Age: {data.age}</li>
          <li className="list-group-item">Class: {data.class}</li>
          <li className="list-group-item">T & C: {data.checkbox ? "agree": "disagree"}</li>
        </ul>
      </div>
    </div>
  );
};

export default DisplayFrom;

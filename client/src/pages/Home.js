import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import RowDetails from "../components/RowDetails";
import axios from "axios";
import Alert from "../components/Alert";


function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.post('/api/users', form)
    .then(res=>{
      setMessage(res.data.message)
      /* hide form after save */
      setForm({})
      /* hide errors after save */
      setErrors({})
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  /* delete */
  const OnDelete = (id__)=>{
    if(window.confirm("are you sure to delete this user")){
 
     axios.delete(`/api/users/${id__}`)
     .then(res=>{
      setMessage(res.data.message)
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 4000);
     })
    }
   }
  /* find all users */
  useEffect(async () => {
    await axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  });
  return (
    <div className="row p-4">
      <Alert message={message} show={show}/>
      <div className="mt-4">
        <h2>Customers</h2>
        <h3>Valid phone number format example: if your number is '+961 71 852535' the input becomes: '+96171852535'</h3>
      </div>
      <div className="col-12 col-lg-4">
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Name"
            type="text"
            name="Name"
            onChangeHandler={onChangeHandler}
            errors={errors.Name}
          />
          <InputGroup
            label="Address"
            type="text"
            name="Address"
            onChangeHandler={onChangeHandler}
            errors={errors.Address}
          />
          <InputGroup
            label="Number"
            type="text"
            name="Number"
            onChangeHandler={onChangeHandler}
            errors={errors.Number}
          />
          <button className="btn btn-primary" type="submit">Add customer</button>
        </form>
      </div>
      <div className="col-12 col-lg-7">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ Name, Address, Number, _id }) => (
              <RowDetails
                Name={Name}
                Address={Address}
                Number={Number}
                Id={_id}
                OnDelete={OnDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
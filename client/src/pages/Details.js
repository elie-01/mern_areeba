import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../components/InputGroup'

function Details() {
 
  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/api/users/${id}`, form)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>setErrors(err.response.data))
    
  }

  useEffect(async () => {
    await axios.get(`/api/users/${id}`).then((res) => {
      setForm(res.data);
    });
  }, []);
  return (
    
    <div className="container mt-4 col-12 col-lg-4">
       <h3>Valid phone number format example: if your number is '+961 71 852535' the input becomes: '96171852535'</h3>
        <form onSubmit={onSubmitHandler}>
          <InputGroup
            label="Name"
            type="text"
            name="Name"
            onChangeHandler={onChangeHandler}
            errors={errors.Name}
            value={form.Name}
          />
          <InputGroup
            label="Address"
            type="text"
            name="Address"
            onChangeHandler={onChangeHandler}
            errors={errors.Address}
            value={form.Address}
          />
          <InputGroup
            label="Number"
            type="text"
            name="Number"
            onChangeHandler={onChangeHandler}
            errors={errors.Number}
            value={form.Number}
          />
          <button className="btn btn-primary" type="submit">Add customer</button>
        </form>
      </div>
  )
}

export default Details
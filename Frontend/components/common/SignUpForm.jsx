'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [confirm_password, setPassword] = useState('')
  const router = useRouter()
  
  const changeHandler = (e)=>{
    let {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
  }));
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(formData.password != confirm_password){
      alert('Password does not match.....!')
      setFormData((prevData)=>({...prevData, password: ''}));
      setPassword('')
    }
    else{
      let resp = await fetch('http://localhost:3000/api/user/register',{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify(formData)
      });
      let data = await resp.json();
      if(data.success) {
        alert('User successfully loggedIn')
        router.push('/login')}
    }
  }

  return (
    <form className="row y-gap-20" onSubmit={handleSubmit} method="POST">
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{" "}
          <Link href="/login" className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="first_name" value={formData.first_name} onChange={changeHandler} required />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="last_name" value={formData.last_name} onChange={changeHandler} required />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="email" value={formData.email} onChange={changeHandler} required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" name="password" value={formData.password} onChange={changeHandler} required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" value={confirm_password} onChange={(e)=>setPassword(e.target.value)} required />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="d-flex ">
          <div className="form-checkbox mt-5">
            <input type="checkbox" name="name" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive Agoda promotions. I can opt out later as stated
            in the Privacy Policy.
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default SignUpForm

'use client'; 

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const router = useRouter()
    
    const handleChange = (e)=>{
      let {name, value} = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
        let resp = await fetch('http://localhost:3000/api/user/login',{
          method: 'POST',
          headers:{ 'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data=> console.log(data))
        router.push('/')
    }
    
    
  return (
    <form className="row y-gap-20" method="POST" onSubmit={handleSubmit}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link href="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="text" name="email" value={formData.email} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a href="#" className="text-14 fw-500 text-blue-1 underline">
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;

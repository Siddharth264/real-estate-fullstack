import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice'
import Oauth from "../components/Oauth";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error} = useSelector((state)=> state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //setLoading(true);
      dispatch(signInStart())
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        //setError(data.message);
        //setLoading(false);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (err) {
      // setLoading(false);
      // setError(err.message);
      dispatch(signInFailure(err.message));
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          className="border p-3 rounded-xs"
          id="email"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="password"
          className="border p-3 rounded-xs"
          id="password"
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-800 disabled:bg-slate-500"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <Oauth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Dont have an account? </p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign-up</span>
        </Link>
      </div>
      {error && <p className="text-red-400 mt-5">{error}</p>}
    </div>
  );
}

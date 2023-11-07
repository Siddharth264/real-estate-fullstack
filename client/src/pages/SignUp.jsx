import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../components/Oauth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (err) {
      setLoading(false);
      setError(err.message);
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
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          type="text"
          placeholder="username"
          className="border p-3 rounded-xs"
          id="username"
        />
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <Oauth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign-in</span>
        </Link>
      </div>
      {error && <p className="text-red-400 mt-5">Some error occured!!! Please try again!!!!</p>}
    </div>
  );
}

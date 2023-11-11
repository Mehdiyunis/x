"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { singInPopClose } from "@/feature/singInPopUp";
export default function Login({}) {
  const router = useRouter();
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function getAccounts(formData) {
    const req = await fetch("https://x-json.vercel.app/accounts");
    const res = await req.json();

    let found = false;

    res.map((item) => {
      if (
        (item.username === formData.username ||
          item.email === formData.username) &&
        item.password === formData.password
      ) {
        router.push("/home");
        found = true;
      }
    });

    found ? setError(null) : setError("*Username or password is invalid");
  }

  return (
    <div className="bg-[#000] absolute inset-0 px-5 md:bg-transparent md:backdrop-blur-md md:flex md:items-center md:justify-center">
      <div className="bg-[#000] mx-auto w-full py-10 md:w-1/2 md:px-3 md:border md:border-white md:rounded-2xl">
        <AiOutlineClose className="text-white w-6 h-6" onClick={()=>dispatch(singInPopClose())}/>

        <h1 className="text-center text-[#fff] text-4xl font-bold">Log in</h1>
        <form
          onSubmit={(e) => {
            getAccounts(formData);
            e.preventDefault();
          }}
          className="flex flex-col gap-2"
        >
          <label htmlFor="username">Username or e-mail: </label>
          <input
            className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
            type="text"
            name="username"
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
          <br />
          {error && (
            <p className="text-xs text-[red] font-semibold tracking-widest">
              {error}
            </p>
          )}
          <button className="bg-[#fff] text-[#000] px-5 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

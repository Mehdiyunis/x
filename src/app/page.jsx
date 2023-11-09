"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function FirstPage() {
  const router = useRouter();
  const [error, setError] = useState(null);

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
    <div className="bg-[#000]">
      <h1 className="text-center text-[#fff] text-4xl font-bold">First page</h1>

      <div className="mx-auto w-1/2 py-10">
        <form
          onSubmit={(e) => {
            getAccounts(formData);
            e.preventDefault();
          }}
          className="flex flex-col gap-2"
        >
          <label htmlFor="username">Username or e-mail: </label>
          <input
            className="px-3 py-1 bg-[#000] border border-[#fff] outline-none"
            type="text"
            name="username"
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            className="px-3 py-1 bg-[#000] border border-[#fff] outline-none"
            type="password"
            name="password"
            onChange={handleInputChange}
          />
          <br />
          {error && <p className="text-xs text-[red] font-semibold tracking-widest">{error}</p>}
          <button className="bg-[#fff] text-[#000] px-5 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

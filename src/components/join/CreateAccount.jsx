"use client";
import { AiOutlineClose } from "react-icons/ai";
import { closeCreatePopup } from "@/feature/createPopUp";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAccount() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [countrys, setCountrys] = useState();
  const [selectedCountry, setSelectedCountry] = useState("Select Country"); // selected country
  const [openDropCountry, setOpenDropCountry] = useState(false); // open drop down country
  const [password2, setPassword2] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    userImg: false,
    bornDay: "",
    bornMonth: "",
    bornYear: "",
    gender: "",
    countryNumber: "",
    phoneNumber: "",
  });
  const [accounts, setAccounts] = useState([]);

  function handleInputChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      countryNumber: selectedCountry,
    });
  }, [selectedCountry]);

  const getCountrys = async function () {
    const req = await axios.get("https://x-json.vercel.app/countrys");
    setCountrys(req.data);
  };

  const getAccounts = async function() {
    const req = await axios.get("https://x-json.vercel.app/accounts");
    console.log(req.data);
    setAccounts(req.data);
  }

  useEffect(() => {
    getCountrys();
    getAccounts();
  }, []);

  async function postUserInfo() {
    const haveAccount = await accounts.find(
      (item) =>
        item.username == userInfo.username || item.email == userInfo.email
    );
    if (userInfo.name === "") {
      alert("Enter name!");
    } else if (userInfo.surname === "") {
      alert("Enter surname!");
    } else if (userInfo.username === "") {
      alert("Enter username!");
    } else if (userInfo.password === "") {
      alert("Enter password!");
    } else if (userInfo.password !== password2) {
      alert("First and second password are different");
    } else if (userInfo.bornDay === "") {
      alert("Enter born day!");
    } else if (userInfo.bornMonth === "") {
      alert("Enter born month!");
    } else if (userInfo.bornYear === "") {
      alert("Enter born year!");
    } else if (haveAccount) {
      alert("This name or email is available");
    } else {
      axios
        .post("https://x-json.vercel.app/accounts", userInfo)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      alert("Accound saved");
      router.push("/home");
    }
  }

  return (
    <div className="bg-[#000] absolute inset-0 px-5 md:bg-transparent md:backdrop-blur-md md:flex md:items-center md:justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postUserInfo()
        }}
        className="bg-[#000] mx-auto w-full  flex flex-col gap-2 py-10 text-white md:w-1/2 md:px-3 md:border md:border-white md:rounded-2xl"
      >
        <AiOutlineClose
          className="text-white w-6 h-6"
          onClick={() => dispatch(closeCreatePopup())}
        />{" "}
        {/* x buton */}
        <h1 className="text-center text-[#fff] text-4xl font-bold">
          Create Account
        </h1>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="Name: Mehdi"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <input
          onChange={handleInputChange}
          name="surname"
          type="text"
          placeholder="Surname: Asgerov"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <input
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="Username: Mehdi_12"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <input
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email: ma@gmail.com"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <div>
          <p>Birthday</p>
          <div>
            <input
              onChange={handleInputChange}
              name="bornDay"
              type="text"
              placeholder="DD"
              className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
            />
            <input
              onChange={handleInputChange}
              name="bornMonth"
              type="text"
              placeholder="MM"
              className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
            />
            <input
              onChange={handleInputChange}
              name="bornYear"
              type="text"
              placeholder="YYYY"
              className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
            />
          </div>
        </div>
        <div>
          <p>Gender</p>
          <div className="border border-white w-fit flex gap-6 px-3 py-1">
            <div>
              <label htmlFor="male">Male</label>{" "}
              <input
                onChange={handleInputChange}
                type="radio"
                name="gender"
                value="male"
                id="male"
              />
            </div>
            <div>
              <label htmlFor="female">Female</label>{" "}
              <input
                onChange={handleInputChange}
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
            </div>
          </div>
        </div>
        <div>
          <p>Country</p>
          <div className="grid grid-cols-12 ">
            <div
              className="col-span-4 relative "
              onClick={() => setOpenDropCountry(!openDropCountry)}
            >
              <input
                type="text"
                name="countryNumber"
                value={selectedCountry}
                onChange={handleInputChange}
                readOnly
                className="w-full px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
              />
              {countrys && (
                <ul
                  className={`absolute flex flex-col top-full left-0 max-h-52 bg-black border border-white p-2 ${
                    openDropCountry ? "" : "hidden"
                  }`}
                >
                  {countrys &&
                    countrys.map((country) => (
                      <li
                        className="hover:bg-white hover:text-black transition-colors cursor-pointer"
                        key={country.id}
                        onClick={() => setSelectedCountry(country.id)}
                      >
                        {country.name}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <input
              onChange={handleInputChange}
              name="phoneNumber"
              type="number"
              placeholder="Number"
              maxLength={10}
              className="col-span-8 px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white appearance-none"
            />
          </div>
        </div>
        <input
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Password: ********"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Password: again"
          className="px-3 py-1 bg-[#000] border border-[#fff] outline-none text-white"
        />
        <button type="submit" className="bg-[#fff] text-[#000] px-5 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/img/logo.png";
import Login from "@/components/join/Login";
import CreateAccount from "@/components/join/CreateAccount";
import { useSelector, useDispatch } from "react-redux";
import { singInPopOpen } from "@/feature/singInPopUp";
import { openCreatePopup } from "@/feature/createPopUp";

export default function JoinPage() {
  const singInSituation = useSelector((state) => state.singInPopUp.value);
  const createPopup = useSelector((state) => state.createPopup.value);
  const dispatch = useDispatch();

  return (
    <main>
      <section className="mx-auto py-4 px-5 max-w-[343px] sm:max-w-[540px] lg:max-w-[1320px] lg:grid lg:grid-cols-2 gap-16">
        <div className="mb-8 lg:blur-sm">
          <Image
            src={Logo}
            width={5000}
            height={5000}
            className="w-11 h-11 lg:w-full lg:h-auto"
          />
        </div>
        <div className="text-white">
          <h1 className="text-[40px] font-bold leading-[52px] mb-8 sm:text-[64px] sm:leading-[84px]">
            Happening now
          </h1>

          <h3 className="text-[23px] font-bold leading-[28px] mb-3 sm:text-[31px] sm:leading-[36px]">
            Join today.
          </h3>

          <button
            onClick={() => dispatch(openCreatePopup())}
            className="w-full mb-10 text-[17px] leading-[20px] font-bold text-center bg-amber-400 py-3 rounded-3xl hover:bg-amber-600 transition-colors"
          >
            Create account
          </button>

          <p className="text-[17px] leading-[20px] font-bold mb-4">
            Already have an account?
          </p>

          <button
            className="w-full text-[17px] leading-[20px] font-bold text-center py-3 border border-[#ffde201a] rounded-3xl hover:bg-[#ffde200a] transition-colors"
            onClick={() => dispatch(singInPopOpen())}
          >
            Sing in
          </button>

          <p className="mt-3 text-[12px]">
            Creator, dolor sit amet{" "}
            <span className="text-blue-700">consectetur</span> adipisicing elit.
            Fugiat iste doloremque enim quidem mehdi accusantium voluptatibus
            earum tenetur fugit iusto! Placeat iste dolor{" "}
            <span className="text-blue-700">nostrum</span> sapiente reiciendis
            quis quas numquam amet provident.
          </p>
        </div>

        {singInSituation && <Login />}
        {createPopup && <CreateAccount />}
      </section>
    </main>
  );
}

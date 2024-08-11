"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { TreePalm } from "lucide-react";

const NavBar = () => {
  // const addUser = () => {
  //   fetch("/api/add-user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Elliott",
  //       phone: 6789785678,
  //     }),
  //   });
  // };

  // const deleteUser = async () => {
  //   await fetch("/api/delete-user", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       number: 6789785678,
  //     }),
  //   }).catch((er) => console.log(er));
  // };

  return (
    <div className="bg-gray-200 flex justify-between px-5 lg:px-16 dark:bg-slate-900 h-14 align-middle items-center absolute w-full">
      <div className="flex lg:pl-20 gap-4 items-center">
        <TreePalm size={28} color="#faf4f4" className="hidden dark:block" />
        <TreePalm size={28} color="#050505" className="dark:hidden" />
        <p className="font-bold">Games & Quizzes</p>
      </div>
      <div className="flex gap-2 items-start">
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;

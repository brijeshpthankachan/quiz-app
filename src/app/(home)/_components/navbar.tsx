"use client";

import { Button } from "@/components/ui/button";

const NavBar = () => {
  const addUser = () => {
    fetch("/api/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Elliott",
        phone: 6789785678,
      }),
    });
  };

  const deleteUser = async () => {
    await fetch("/api/delete-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: 6789785678,
      }),
    }).catch((er) => console.log(er));
  };

  return (
    <div className="bg-gray-200 flex justify-end px-16 py-2 sticky dark:bg-slate-800 h-16 items-center">
      <div className="flex gap-2 items-start h-full">
        {/* <ModeToggle /> */}
        <Button className="h-full" variant="default" onClick={deleteUser}>
          Log in
        </Button>
        <Button className="h-full" variant="default">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default NavBar;


import React from "react";
import { sayHello } from "@/lib/action";
const ServerActionTest = () => {
  const actionInComponent = async () => {
    "use server"
    console.log("hello");
  };
  return (
    <div>
      <form action={actionInComponent}>
        {" "}
        <button> test </button>{" "}
      </form>
    </div>
  );
};

export default ServerActionTest;

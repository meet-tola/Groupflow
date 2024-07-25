import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
    <UserButton />
      <Button>Click me</Button>
    </>
  );
};

export default page;

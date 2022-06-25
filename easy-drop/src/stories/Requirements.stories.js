import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { EasyDropDown } from "../components/EasyDropDown";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const department = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resource",
    "Legal",
  ];
  return (
    <EasyDropDown
      data={department}
      placeholder={"--- Department ---"}
      label={"States"}
    />
  );
});

import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { EasyDrop } from "../components/EasyDrop";

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
    <EasyDrop
      data={department}
      placeholder={"--- Department ---"}
      label={"States"}
      name={department}
    />
  );
});

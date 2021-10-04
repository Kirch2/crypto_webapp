import React from "react";
import { Navbar, NavBarProps } from "./Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args: NavBarProps) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
// @ts-ignore
LoggedIn.args = {
  user: {},
  isLoggedIn: true,
};

export const NotLoggedIn = Template.bind({});
// @ts-ignore
NotLoggedIn.args = {
  user: {},
  isLoggedIn: false,
};

import { Card } from "./Card";
import image from "assets/images/atomic/image.png";
import time from "assets/images/atomic/time.svg";
import action from "assets/images/atomic/action-small.png";

const Image = () => {
  return <img src={image} alt="empty-img" />;
};
const Time = () => {
  return <img src={time} alt="time" />;
};
const Action = () => {
  return <img src={action} alt="action" />;
};

export default {
  title: "Design System/Atoms/Card",
  component: Card,
  args: { label: "Card", size: "normal", effect: "fill" },
};

const Template = (args) => <Card {...args}></Card>;

export const Normal = Template.bind({});
Normal.args = {
  width: 495,
  action: <Action />,
  image: <Image />,
  headerInfo: "Header info",
  headerIcon: <Time />,
  headerTitle: "Header title name",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/>Eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
};

export const secondary = Template.bind({});
secondary.args = { type: "secondary" };

export const success = Template.bind({});
success.args = { type: "success" };

export const fail = Template.bind({});
fail.args = { type: "fail" };

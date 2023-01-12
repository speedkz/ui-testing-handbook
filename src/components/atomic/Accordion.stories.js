import { Accordion } from "./Accordion";
import * as Collapsible from "./Collapsible.stories";

export default {
  title: "Design System/Atoms/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    Collapsible.Default.args.item,
    Collapsible.Active.args.item,
    Collapsible.PrefixIcon.args.item,
  ],
  defaultActive: [1],
};

export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = { ...Default.args, alwaysOpen: true };

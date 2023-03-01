import { faker } from "@faker-js/faker";
import { Grid, GridArea } from "./Grid";

export default {
  component: "Grid",
  title: "CSS/Grid",
};

const Template = (args) => <Grid {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [...Array(10).keys()].map((x) => faker.music.songName()),
};

const TemplateArea = (args) => <GridArea {...args} />;
export const Area = TemplateArea.bind({})
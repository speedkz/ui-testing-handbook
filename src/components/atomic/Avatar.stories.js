import { Avatar } from "./Avatar";

export default {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  args: {
    size: "small",
  },
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Image = Template.bind({});
Image.args = {
  image:
    "https://static1.bestie.vn/Mlog/ImageContent/202209/goc-nghieng-than-thanh-cua-idol-nu-gen-4-hanni-newjeans-dang-yeu-0f05c6.jpg",
};

export const Text = Template.bind({});
Text.args = {
  name: "Tzu",
};

export const GroupAvatar = Template.bind({});
GroupAvatar.args = {
  items: [
    {
      image:
        "https://static1.bestie.vn/Mlog/ImageContent/202209/goc-nghieng-than-thanh-cua-idol-nu-gen-4-hanni-newjeans-dang-yeu-0f05c6.jpg",
    },
    {
      image:
        "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2022/12/20/3210524285216270965649041980489803503112279n-1671518772391710290761.jpg",
    },
    {
      image:
        "https://phunuvietnam.mediacdn.vn/thumb_w/700/179072216278405120/2022/12/20/3210524285216270965649041980489803503112279n-1671518772391710290761.jpg",
    },
    {
      image:
        "https://static1.bestie.vn/Mlog/ImageContent/202209/goc-nghieng-than-thanh-cua-idol-nu-gen-4-hanni-newjeans-dang-yeu-0f05c6.jpg",
    },
    {
      image:
        "https://static1.bestie.vn/Mlog/ImageContent/202209/goc-nghieng-than-thanh-cua-idol-nu-gen-4-hanni-newjeans-dang-yeu-0f05c6.jpg",
    },
  ],
};

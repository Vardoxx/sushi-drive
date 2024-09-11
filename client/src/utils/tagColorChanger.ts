import { ITagColorChanger, ITagColors } from "../types/tag-color-changer";

export const tagColorChanger = (tags: ITagColorChanger): ITagColors => {
  if (!tags || !Array.isArray(tags)) {
    return {};
  }

  const tagColors: ITagColors = {};

  tags.forEach((tag) => {
    switch (tag) {
      case "острое":
        tagColors[tag] = "#DC143C";
        break;
      case "классическое":
        tagColors[tag] = "#3CB371";
        break;
      case "постное":
        tagColors[tag] = "#BDB76B";
        break;
      case "сладкое":
        tagColors[tag] = "#7B68EE";
        break;
    }
  });

  return tagColors;
};

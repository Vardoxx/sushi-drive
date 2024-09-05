import { IoMdClock } from "react-icons/io";
import { GetItemsProps } from "../../types/layout-items";
import { getItem } from "../../utils/getItem";
import { IoFastFood } from "react-icons/io5";
import { BiSolidSushi } from "react-icons/bi";
import { GiFastNoodles, GiSausage } from "react-icons/gi";
import { PiPizzaBold } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";

export const layoutItems: GetItemsProps[] = [
  {
    label: "Сезонное меню",
    key: "/season",
    icon: <IoMdClock style={{ fontSize: "20px" }} />,
  },
  {
    label: "Комбо наборы",
    key: "/combo",
    icon: <IoFastFood style={{ fontSize: "20px" }} />,
  },
  {
    label: "Роллы",
    key: "/sushi",
    icon: <BiSolidSushi style={{ fontSize: "20px" }} />,
  },
  {
    label: "Пицца",
    key: "/pizza",
    icon: <PiPizzaBold style={{ fontSize: "20px" }} />,
  },
  {
    label: "Закуски",
    key: "/appetizers",
    icon: <GiSausage style={{ fontSize: "20px" }} />,
  },
  {
    label: "Воки",
    key: "/woks",
    icon: <GiFastNoodles style={{ fontSize: "25px" }} />,
  },
  {
    label: "Дополнительно",
    key: "/additional",
    icon: <FaCirclePlus style={{ fontSize: "20px" }} />,
  },
];

getItem(layoutItems);

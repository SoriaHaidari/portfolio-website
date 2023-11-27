import p3 from "../../assets/carstore.png";
import p2 from "../../assets/guessnumber.png";
import p1 from "../../assets/expensessitem.png";
import p4 from "../../assets/rockpaper.png";
import p5 from "../../assets/simon.png";
import { useTranslation } from "react-i18next";
export function GetProjectData() {
  const { t } = useTranslation("project");

  return [
    {
      id: 1,
      category: "React",
      image: p1,
      title: t("project.title1"),
      github: "https://github.com/SoriaHaidari/expense-item",
    },
    {
      id: 2,
      category: "Java Script",
      image: p2,
      title: t("project.title2"),
      github: "https://github.com/SoriaHaidari/Guess-Number",
    },
    {
      id: 3,
      category: "Raect",
      image: p3,
      title: t("project.title3"),
      github: "https://github.com/SoriaHaidari/Car-Store-Project",
    },
    {
      id: 4,
      category: "Java Script",
      image: p4,
      title: t("project.title4"),
      github: "https://github.com/SoriaHaidari/rock-paper-scissorsgame",
    },
    {
      id: 5,
      category: "HTML",
      image: p5,
      title: t("project.title5"),
      github: "https://github.com/SoriaHaidari/SimonGame",
    },
  ];
}

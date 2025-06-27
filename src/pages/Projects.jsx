import Geometry from "../components/Geometry";
import { useState } from "react";
import ShopShopping from "../assets/ShopShopping.png";
import StudentReview from "../assets/StudentReview.png";
import themAIguy from "../assets/themAIguy.png";
import Bubble from "../assets/Bubble.png";
import "../css/Projects.css";

export default function Projects() {
  const [items, setItems] = useState([
    {
      name: "themAIguy",
      website: "website",
      url: "https://themaiguys.bubbleapps.io/version-test/landing?",
      img: themAIguy,
      technologies: "AI, Bubble.io, UX",
      tech: [Bubble],
    },
    {
      name: "StudentReview",
      website: "website",
      url: "https://studentreviewapp.io/version-test/login?",
      img: StudentReview,
      technologies: "Reviews, Educational Tools",
      tech: [Bubble],
    },
    {
      name: "ShopShopping",
      website: "website",
      url: "https://shopshopping.bubbleapps.io/version-test/user_shop?",
      img: ShopShopping,
      technologies: "E-commerce, Bubble.io",
      tech: [Bubble],
    },
  ]);

  return (
    <div className="w-full h-auto relative pb-[115px] overflow-hidden mt-[-80px]">
      <Geometry className="-z-10" />
      <div className="flex w-full h-[10vh]"></div>
      <div className="flex w-full h-[10vh] justify-center items-center mt-[100px]">
        <h1 className="font-semibold text-[55px] font-poppins">Projects</h1>
      </div>
      <div className="flex flex-col w-full h-auto p-[10px] justify-center items-center z-10">
        <div className="flex h-auto w-[91%] gap-[40px] p-[20px] justify-start items-center flex-wrap max-lg:justify-center">
          {items.map((item, index) => (
            <div key={index}>
              <div className=" flex flex-col h-auto w-[435px] justify-start pt-[20px] pb-[20px] pr-[10px] pl-[10px] gap-[10px] max-xl:w-[300px] bg-gray-200 rounded-md">
                <img src={item.img} className="flex h-[230px] w-full" />
                <div className="flex justify-between">
                  <h1 className="text-[20px] font-medium font-poppins">
                    {item.name}
                  </h1>
                  <a
                    href={item.url}
                    target="_blank"
                    className="inline-block underline text-blue-500 hover:text-blue-800 px-4 py- rounded transition-colors duration-200"
                  >
                    URL Link
                  </a>
                </div>
                <div className="flex gap-[10px]">
                  {item.tech.map((techIcon, techIndex) => (
                    <img
                      key={techIndex}
                      src={techIcon}
                      alt={`Technology ${techIndex}`}
                      className="h-[30px] w-[30px]"
                    />
                  ))}
                </div>
                <p>Description: {item.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

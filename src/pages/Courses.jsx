import { useEffect, useState } from "react";

export default function Courses() {
  const titles = [
    {
      id: 1,
      name: "الدروس",
      type: "lessons",
    },
    {
      id: 2,
      name: "التوقيت",
      type: "times",
    },
    {
      id: 3,
      name: "التمارين",
      type: "lectures",
    },
    {
      id: 4,
      name: "البحوث",
      type: "research",
    },
  ];

  return (
    <section className="w-full h-fit p-5 flex flex-col justify-start items-center">
      {/* Navigation Titles */}
      <div className="flex flex-row gap-x-7">
        {titles.map((title) => (
          <div className="text-2xl cursor-pointer hover:underline" key={title.id} type={title.type}>{title.name}</div>
        ))}
      </div>

      {/* Content Section */}
      <section className="w-full grid grid-cols-3 md:grid-cols-3 items-center md:gap-1 gap-2 my-10">
        {/* <Content key={id} title={name} date={updated_at} pdf={cours || pdf} /> */}
      </section>
    </section>
  );
}
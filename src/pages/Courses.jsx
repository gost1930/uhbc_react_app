import { useEffect, useState } from "react";
import { getSubjectByClasse } from "../utils/api/subject";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import { getLessonBySubject } from "../utils/api/lesson";

export default function Courses() {
  const titles = [
    { id: 0, name: "الدروس", type: "lessons" },
    { id: 1, name: "التوقيت", type: "times" },
    // { id: 2, name: "التمارين", type: "lectures" },
    { id: 2, name: "البحوث", type: "research" },
  ];
  const [selectTypeText, setSelectTypeText] = useState(0);
  const { classId } = useParams();
  const [subjectData, setSubjectData] = useState(null);
  const [lessonData, setLessonData] = useState(null);

  const onSelectTitle = (type) => {
    setSelectTypeText(type);
    console.log(type);
    setLessonData([])
  };

  const onSelectSubject = (subjectId) => {
    console.log(subjectId);
    
    getLessonBySubject(subjectId).then((data) => {
      console.log(data);
      setLessonData(data);
    });
  };
  useEffect(() => {
    getSubjectByClasse(classId).then((data) => {
      setSubjectData(data);
    });
  }, [classId]);

  return (
    <section className="w-full h-fit p-5 flex flex-col justify-start">
      {/* Navigation Titles */}
      <div className="flex flex-row justify-center gap-x-7 w-full">
        {titles.map((title) => (
          <div
            className="text-xl md:text-2xl cursor-pointer hover:underline"
            key={title.id}
            type={title.type}
            onClick={() => onSelectTitle(title.id)}
          >
            {title.name}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <section className="w-full flex justify-evenly items-center md:gap-1 gap-2 my-10">
        {selectTypeText === 0 ? (
          subjectData &&
          subjectData.map((subject) => (
            <div
              onClick={() => onSelectSubject(subject.id)}
              className="cursor-pointer hover:underline hover:text-orange-500 text-xl"
            >
              {subject.name}
            </div>
          ))
        ) : selectTypeText === 1 ? (
          <div>التوقيت</div>
        ) : (
          <div>التمارين</div>
        )}
      </section>
        {/* lessons */}
        <div className="grid grid-cols-3 gap-3">
              {
              subjectData && lessonData ?
              lessonData.map((lesson) => (
                <Content
                  title={lesson.name}
                  date={lesson.created_at}
                  pdf={lesson.pdfLesson}
                />
              ))
              : <div>لا يوجد دروس</div>
            }
        </div>
    </section>
  );
}
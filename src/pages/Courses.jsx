import { useEffect, useState } from "react";
import { getSubjectByClasse } from "../utils/api/subject";
import { useParams } from "react-router-dom";
import Content from "../components/generics/Content";
import { getLessonBySubject } from "../utils/api/lesson";
import { getWeeklyTimeByClass } from "../utils/api/WeeklyTime";

// قائمة العناوين التي يتم عرضها
const titles = [
  { id: 0, name: "الدروس", type: "lessons" },
  { id: 1, name: "التوقيت", type: "times" },
  { id: 2, name: "البحوث", type: "research" },
];

export default function Courses() {
  const { classId } = useParams();  // استرجاع معرّف الصف من الـ URL
  const [selectTypeText, setSelectTypeText] = useState(0);  // المتغير الذي يحدد العنصر المحدد
  const [subjectData, setSubjectData] = useState([]);  // البيانات المتعلقة بالمادة
  const [lessonData, setLessonData] = useState([]);  // بيانات الدروس
  const [weeklyTimeData, setWeeklyTimeData] = useState([]);  // بيانات التوقيت الأسبوعي
  const [loading, setLoading] = useState(true);  // حالة التحميل

  // دالة لتحميل بيانات المواد
  const getSubjectData = () => {
    setLoading(true);  // بداية التحميل
    getSubjectByClasse(classId).then((data) => {
      setSubjectData(data);
      setLoading(false);
    });
  };

  // دالة لتحميل بيانات التوقيت
  const getTimesData = () => {
    setLoading(true);  // بداية التحميل
    getWeeklyTimeByClass(classId).then((data) => {
      setWeeklyTimeData(data);
      setLoading(false);
    });
  };

  // دالة لتحميل بيانات الدروس
  const onSelectSubject = (subjectId) => {
    setLoading(true);  // بداية التحميل
    getLessonBySubject(subjectId).then((data) => {
      setLessonData(data);
      setLoading(false);
    });
  };

  // دالة لاختيار النوع (مواد أو توقيت أو بحوث)
  const onSelectTitle = (type) => {
    setSelectTypeText(type);
    setLessonData([]);  // إعادة تعيين بيانات الدروس عند التبديل
  };

  // استخدام useEffect لتحميل البيانات بناءً على النوع المحدد
  useEffect(() => {
    if (selectTypeText === 0) {
      getSubjectData();  // تحميل المواد
    } else if (selectTypeText === 1) {
      getTimesData();  // تحميل التوقيت
    }
  }, [selectTypeText]);

  // دالة لعرض المكونات المختلفة بناءً على اختيار المستخدم
  const renderContent = () => {
    if (selectTypeText === 0) {
      return subjectData.length > 0 ? (
        subjectData.map((subject) => (
          <div
            key={subject.id}
            className="cursor-pointer hover:underline hover:text-orange-500 text-xl mx-2 min-w-fit"
            onClick={() => onSelectSubject(subject.id)}
          >
            {subject.name}
          </div>
        ))
      ) : (
        <div>لا توجد مواد</div>
      );
    } else if (selectTypeText === 1) {
      return weeklyTimeData.length > 0 ? (
        weeklyTimeData.map((time) => (
          <div
            key={time.id}
            className="cursor-pointer hover:underline hover:text-orange-500 text-xl mx-2 min-w-fit"
          >
            {time.name}
          </div>
        ))
      ) : (
        <div>لا يوجد توقيت</div>
      );
    } else {
      return <div>التمارين</div>;
    }
  };

  return (
    <section className="w-full h-fit p-5 flex flex-col justify-start">
      {/* Navigation Titles */}
      <div className="flex flex-row justify-center gap-x-7 w-full">
        {titles.map((title) => (
          <div
            key={title.id}
            className="text-xl md:text-2xl cursor-pointer hover:underline"
            onClick={() => onSelectTitle(title.id)}
          >
            {title.name}
          </div>
        ))}
      </div>

      {/* Content Section */}
      <section className="w-full flex overflow-x-scroll overflow-y-hidden md:flex-wrap md:overflow-hidden scroll-hidden justify-evenly items-center md:gap-1 gap-2 my-10">
        {renderContent()}
      </section>

      {/* Lessons */}
      <div className="grid grid-cols-3 gap-3">
        {loading ? (
          <div>Loading...</div>
        ) : lessonData.length > 0 ? (
          lessonData.map((lesson) => (
            <Content
              key={lesson.id}
              title={lesson.name}
              date={lesson.created_at}
              pdf={lesson.pdfLesson}
            />
          ))
        ) : (
          <div>لا توجد دروس</div>
        )}
      </div>
    </section>
  );
}

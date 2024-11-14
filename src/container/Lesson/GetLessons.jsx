import { useState, useEffect, memo } from "react";
import { getAllLesson } from "../../utils/api/lesson";
import { getAllClasse } from "../../utils/api/classe";
import { getAllSubject } from "../../utils/api/subject";
import { Table } from "../../components";

const GetLessons = () => {
  const [allLessons, setAllLessons] = useState([]);
  const [rows, setRows] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const columns = {
    name: "الدرس",
    subject: "المادة",
    pdfLesson: "الملف الدرسي",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lessonData = await getAllLesson();
        const formattedLessons = lessonData.map(
          ({ name, subject: { name: subjectName, classesId }, pdfLesson }) => ({
            name,
            subject: subjectName,
            classe: classesId,
            pdfLesson:"ملف",
          })
        );
        setAllLessons(formattedLessons);
        setRows(formattedLessons);
        const classData = await getAllClasse();
        setClasses(classData);

        const subjectData = await getAllSubject();
        setSubjects(subjectData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const filterLessons = (classId, subjectName) => {
    let filteredLessons = allLessons;

    if (classId) {
      filteredLessons = filteredLessons.filter(
        (lesson) => lesson.classe === parseInt(classId)
      );
    }

    if (subjectName) {
      filteredLessons = filteredLessons.filter(
        (lesson) => lesson.subject === subjectName
      );
    }

    setRows(filteredLessons);
  };

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClass(classId);
    filterLessons(classId, selectedSubject);
  };

  const handleSubjectChange = (e) => {
    const subjectName = e.target.value;
    setSelectedSubject(subjectName);
    filterLessons(selectedClass, subjectName);
  };

  return (
    <div>
      <select onChange={handleClassChange} value={selectedClass}>
        <option value="">الكل</option>
        {classes.map((classe) => (
          <option key={classe.id} value={classe.id}>
            {classe.name}
          </option>
        ))}
      </select>

      <select onChange={handleSubjectChange} value={selectedSubject}>
        <option value="">الكل</option>
        {subjects
          .filter(
            (subject) =>
              !selectedClass || subject.classesId === parseInt(selectedClass)
          )
          .map((subject) => (
            <option key={subject.id} value={subject.name}>
              {subject.name}
            </option>
          ))}
      </select>

      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default memo(GetLessons);

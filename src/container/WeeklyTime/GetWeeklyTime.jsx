import { useState, useEffect, memo } from "react";
import { getAllClasse } from "../../utils/api/classe";
import { getAllWeeklyTime } from "../../utils/api/WeeklyTime";
import { Table } from "../../components";

const GetWeeklyTime = () => {
  const [allWeeklyTime , setAllWeeklyTime] = useState([]);
  const [rows, setRows] = useState([]);
  const [classes, setClasses] = useState([]);

  const columns = {
    name: "التوقيت",
    classe: "القسم",
    pdfTime: "الملف التوقيتي"
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllWeeklyTime();
        const formattedWeeklyTime = data.map(({ name, pdfTime, classes: { name: classeName }, id }) => ({
          name,
          classe: name,
          pdfTime: pdfTime,
          classe: classeName,
        }));
        setAllWeeklyTime(formattedWeeklyTime);
        setRows(formattedWeeklyTime);
        const classData = await getAllClasse();
        setClasses(classData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
   // Load all classes
   useEffect(() => {
    getAllClasse().then((data) => {
      setClasses(data);
    });
  }, []);

  const filterByClass = (className) => {
    if (className === "") {
      setRows(allWeeklyTime); // reset to all subjects
    } else {
      const filteredRows = allWeeklyTime.filter(
        (row) => row.classe === className
      );
      setRows(filteredRows);
    }
  };
  return (
    <div className="md:p-2">
      <select name="classes" 
      id="classes"
      onChange={(e) => filterByClass(e.target.value)}
      className="block w-fit px-3 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {
          classes.map((classe) => (
            <option key={classe.id} value={classe.name}>{classe.name}</option>
          ))
        }
      </select>
      <Table columns={columns} rows={rows} />
    </div>
  )
}

export default memo(GetWeeklyTime);
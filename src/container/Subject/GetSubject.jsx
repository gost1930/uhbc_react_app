import { useState, useEffect } from "react";
import { getAllSubject } from "../../utils/api/subject";
import Table from "../../components/generics/Table";
import { getAllClasse } from "../../utils/api/classe";

const GetSubject = () => {
  const [allSubjects, setAllSubjects] = useState([]); // store unfiltered subjects
  const [rows, setRows] = useState([]); // store filtered subjects for display
  const [classes, setClasses] = useState([]); // store all classes
  const columns = {
    name: "المادة",
    classe: "القسم",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSubject();
        const formattedData = data.map(
          ({ name, Classes: { name: classeName } }) => ({
            name,
            classe: classeName,
          })
        );
        setAllSubjects(formattedData);
        setRows(formattedData); // initialize rows with all subjects
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

  // Filter by class
  const filterByClass = (className) => {
    if (className === "") {
      setRows(allSubjects); // reset to all subjects
    } else {
      const filteredRows = allSubjects.filter(
        (row) => row.classe === className
      );
      setRows(filteredRows);
    }
  };

  return (
    <div className="md:p-2">
      <select 
      onChange={(e) => filterByClass(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5">
        <option value="">الكل</option>
        {classes.map((classe) => (
          <option key={classe.id} value={classe.name}>
            {classe.name}
          </option>
        ))}
      </select>
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default GetSubject;

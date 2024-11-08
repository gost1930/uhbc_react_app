import { useState, useEffect } from "react";
import { getAllSubject } from "../../utils/api/subject";
import Table from "../../components/Table";

const GetSubject = () => {
  const [rows, setRows] = useState([]);
  const columns = {
    name: "المادة",
    classe: "الصف",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSubject();
        setRows(
          data.map(({ name, Classes: { name: classeName } }) => ({
            name,
            classe: classeName,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
};
export default GetSubject;

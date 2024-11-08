import { useEffect, useState } from "react";
import { Table } from "../../components";
import { getAllClasse } from "../../utils/api/classe";

const GetClasse = () => {
  const [rows, setRows] = useState([]);
  const columns = {
    name: "الأسم",
  };

  useEffect(() => {
    let isMounted = true;

    getAllClasse().then((data) => isMounted && setRows(data));

    return () => (isMounted = false);
  }, []);

  return (
    <section>
      {/* Table */}
      <Table columns={columns} rows={rows} />
    </section>
  );
};

export default GetClasse;

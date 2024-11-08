import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Table = ({
  columns,
  rows,
  children,
  setselectedId,
  setshowEdit,
  setshowDelete,
  readOnly = false,
}) => {
  const onDelete = (id) => {
    if (!readOnly) {
      setselectedId(id);
      setshowDelete(true);
    }
  };

  const onEdit = (id) => {
    if (!readOnly) {
      setselectedId(id);
      setshowEdit(true);
    }
  };

  return (
    <div className="overflow-x-auto mt-5">
      <table className="min-w-full text-center text-sm font-light border-collapse bg-white">
        <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <tr>
            {Object.values(columns).map((column, index) => (
              <th
                key={index}
                className="p-4 border-b dark:border-gray-600 font-semibold text-base"
              >
                {column}
              </th>
            ))}
            <th className="p-4 border-b dark:border-gray-600 font-semibold text-base">
              -----
            </th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index1) => (
            <tr
              key={index1}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {Object.keys(columns).map((cell, index2) => (
                <td
                  key={index2}
                  className="p-4 border-b dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  {row[cell]}
                </td>
              ))}
              <td className="p-4 flex items-center justify-center gap-4 border-b dark:border-gray-600">
                {!readOnly ? (
                  <>
                    <CiEdit
                      onClick={() => onEdit(index1)}
                      className="cursor-pointer text-2xl text-green-500 hover:text-green-600"
                    />
                    <AiOutlineDelete
                      onClick={() => onDelete(index1)}
                      className="cursor-pointer text-2xl text-red-500 hover:text-red-600"
                    />
                  </>
                ) : (
                  <div className="text-gray-400">
                    <CiEdit className="text-2xl" />
                    <AiOutlineDelete className="text-2xl" />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {children}
    </div>
  );
};

export default Table;

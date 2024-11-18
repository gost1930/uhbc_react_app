import { IoEyeSharp } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import logo from "../../assets/pdf.png";

const Content = ({ title, date, pdf }) => {
  const pdfUrl = `http://localhost:3001/api/v1/lesson/${pdf}`;

  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center h-fit border-gray-300 border rounded-tl-[2rem] rounded-b-xl md:rounded-xl
      hover:backdrop-blur-md hover:-translate-y-2 hover:z-30 duration-100 hover:shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-x-3">
        <img src={logo} className="w-full md:w-20" loading="lazy" alt="PDF Icon" />
        <div className="flex flex-col gap-y-4 p-2">
          <p className="text-gray-500">{title}</p>
          <p>{date}</p>
        </div>
      </div>

      <div className="flex gap-x-5 p-2">
        <a href={pdfUrl} download aria-label={`Download ${title}`}>
          <GoDownload className="text-2xl hover:text-blue-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Content;

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, showModal, CloseModal }) => {
  return (
    <section
      className={`${
        showModal
          ? "flex justify-center pt-52 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 w-full min-h-full bg-gray-300/50 cursor-not-allowed"
          : "hidden"
      }`}
    >
      <div className="flex flex-col items-center relative bg-white rounded-lg w-3/4 h-fit">
        <AiOutlineClose
          className="absolute top-2 right-2 cursor-pointer bg-red-400 hover:bg-red-500 text-white text-3xl rounded p-1"
          onClick={CloseModal}
        />
        <div className="pt-20 pb-5 px-8">{children}</div>
      </div>
    </section>
  );
};

export default Modal;

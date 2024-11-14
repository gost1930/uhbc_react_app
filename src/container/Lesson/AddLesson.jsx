import React, { useState, useEffect, memo } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import { createLesson } from "../../utils/api/lesson";
import { getAllSubject, getSubjectByClasse } from "../../utils/api/subject";
import { getAllClasse } from "../../utils/api/classe";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddLesson = () => {
  const [subject, setSubject] = useState([]);
  const [classe, setClasse] = useState([]);

  const formik = useFormik({
    initialValues: {
      subject_id: '',
      name: "",
      pdfLesson: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("هذا الحقل مطلوب"),
      subject_id: Yup.string().required("هذا الحقل مطلوب"),
      pdfLesson: Yup.mixed().required("هذا الحقل مطلوب"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("subject_id", values.subject_id);
      formData.append("pdfLesson", values.pdfLesson);

      try {
        await createLesson(formData);
        showSuccessAlert("تم اضافة درس بنجاح");
        window.location.reload();
      } catch (error) {
        showErrorAlert("حدث خطاء ما!!");
        console.error("Error creating lesson:", error);
      }
    },
  });

  useEffect(() => {
    getAllClasse().then(setClasse).catch(console.error);
  }, []);

  const getSubByClasse = (id) => {
    getSubjectByClasse(id).then(setSubject).catch(console.error);
  };

  return (
    <div className="p-5 md:p-10 w-full max-w-lg mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-5 text-center">إضافة درس</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="اسم الدرس"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
        
        <div className="flex items-center gap-x-2">
          <select
            name="classe_id"
            onChange={(e) => {
              getSubByClasse(e.target.value);
              formik.setFieldValue('classe_id', e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">اختر الصف</option>
            {classe.map((classe) => (
              <option key={classe.id} value={classe.id}>
                {classe.name}
              </option>
            ))}
          </select>
          <Link to={`/classe`} className="text-green-600 text-lg">
            <IoAddCircleOutline />
          </Link>
        </div>

        <div className="flex items-center gap-x-2">
          <select
            name="subject_id"
            value={formik.values.subject_id}
            onChange={(e) => formik.setFieldValue('subject_id', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">اختر المادة</option>
            {subject.length > 0
              ? subject.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))
              : <option>إختر القسم أولا</option>}
          </select>
          <Link to={`/subject`} className="text-green-600 text-lg">
            <IoAddCircleOutline />
          </Link>
        </div>

        <input
          type="file"
          name="pdfLesson"
          onChange={(e) => formik.setFieldValue('pdfLesson', e.target.files[0])}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {formik.errors.pdfLesson && formik.touched.pdfLesson && (
          <div className="text-red-500 text-sm">{formik.errors.pdfLesson}</div>
        )}
        
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          اضافة
        </button>
      </form>
    </div>
  );
};

export default memo(AddLesson);

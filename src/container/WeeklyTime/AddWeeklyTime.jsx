import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { showSuccessAlert, showErrorAlert } from "../../utils/alert";
import { BtnLink } from "../../components";
import { IoAddCircleOutline } from "react-icons/io5";
import { createWeeklyTime } from "../../utils/api/WeeklyTime";
import { getAllClasse } from "../../utils/api/classe";

const AddWeeklyTime = () => {
  const [classes, setClasses] = useState([]);

  const formik = useFormik({
    initialValues: { name: "", 
      classesId: "", 
      pdfTime: null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("هذا الحقل مطلوب"),
      classesId: Yup.string().required("هذا الحقل مطلوب"),
      pdfTime: Yup.mixed().required("هذا الحقل مطلوب"),
    }),

    onSubmit: async (value) => {
      const formData = new FormData();
      formData.append("name", value.name);
      formData.append("classesId", value.classesId);
      formData.append("pdfTime", value.pdfTime);
      try {
        await createWeeklyTime(formData);
        showSuccessAlert("تم اضافة مادة بنجاح");
        formik.resetForm();
        // window.location.reload();
      } catch (error) {
        showErrorAlert("حدث خطأ ما!!");
        console.error("Error creating subject:", error);
      }
    },
  });

  useEffect(() => {
    getAllClasse()
      .then(setClasses)
      .catch((error) => console.error("Error fetching classes:", error));
  }, []);
  return (
    <section className="p-5 md:p-10 max-w-lg mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-5 text-center">
        إضافة توقيت
      </h1>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-1">
            اسم التوقيت
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="classesId" className="font-medium mb-1">
            القسم
          </label>
          <div className="flex items-center gap-x-2">
            <select
              name="classesId"
              id="classesId"
              onChange={formik.handleChange}
              value={formik.values.classesId}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">اختر القسم</option>
              {classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.name}
                </option>
              ))}
            </select>
            {formik.errors.classesId && formik.touched.classesId && (
              <div className="text-red-500 text-sm">
                {formik.errors.classesId}
              </div>
            )}
            <BtnLink path="/classe" titel={<IoAddCircleOutline />} />
          </div>
        </div>
        <input
          type="file"
          name="pdfTime"
          onChange={(e) => formik.setFieldValue("pdfTime", e.target.files[0])}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {formik.errors.pdfTime && formik.touched.pdfTime && (
          <div className="text-red-500 text-sm">{formik.errors.pdfTime}</div>
        )}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          اضافة
        </button>
      </form>
    </section>
  );
};

export default AddWeeklyTime;

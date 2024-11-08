import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { getAllClasse } from "../../utils/api/classe";
import { useFormik } from "formik";
import { createSubject } from "../../utils/api/subject";
import { showSuccessAlert, showErrorAlert } from "../../utils/alert";

const AddSubject = () => {
  const [classes, setClasses] = useState([]);
  const [selectClasse, setSelectClasse] = useState("");
  const formik = useFormik({
    initialValues: { name: "", classesId: +selectClasse },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("هذا الحقل مطلوب"),
      classesId: Yup.string().required("هذا الحقل مطلوب"),
    }),
    onSubmit: async (values) => {
      try {
        await createSubject(values);
        showSuccessAlert("تم اضافة مادة بنجاح");
        window.location.reload();
      } catch (error) {
        showErrorAlert("حدث خطاء ما!!");
        console.error("Error creating subject:", error);
      }
    },
  });

  useEffect(() => {
    getAllClasse().then(setClasses).catch(console.error);
  }, []);

  return (
    <section className="p-10">
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <h1>إضافة مادة</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">اسم المادة</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border border-gray-300 p-2 rounded"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="classesId">القسم</label>
            <select
              name="classesId"
              id="classesId"
              onChange={(e) => {
                setSelectClasse(e.target.value);
                formik.setFieldValue("classesId", +e.target.value);
              }}
              value={formik.values.classesId}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="">اختر القسم</option>
              {classes.map((classe) => (
                <option key={classe.id} value={classe.id}>
                  {classe.name}
                </option>
              ))}
            </select>
            {formik.errors.classesId && formik.touched.classesId && (
              <div className="text-red-500">{formik.errors.classesId}</div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-5 rounded w-fit"
        >
          اضافة
        </button>
      </form>
    </section>
  );
};

export default AddSubject;

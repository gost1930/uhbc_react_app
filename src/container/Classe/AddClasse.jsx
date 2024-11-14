import { addClasse } from "../../utils/api/classe";
import * as Yup from "yup";
import { useFormik } from "formik";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";

const AddClasse = () => {
  const classeFormValidationSchema = Yup.object().shape({
    name: Yup.string().required("هذا الحقل مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: classeFormValidationSchema,
    onSubmit: async (values) => {
      try {
        await addClasse(values);
        showSuccessAlert("تم اضافة قسم بنجاح");
        formik.resetForm();
      } catch (error) {
        showErrorAlert("حدث خطأ ما!!");
        console.error("Error adding classe:", error);
      }
    },
  });

  return (
    <div className="p-5 md:p-10 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">إضافة قسم</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="اسم القسم"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
        
        <button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          اضافة
        </button>
      </form>
    </div>
  );
};

export default AddClasse;

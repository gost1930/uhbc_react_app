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
        await showSuccessAlert("تم اضافة قسم بنجاح");
        window.location.reload();
      } catch (error) {
        showErrorAlert("حدث خطأ ما!!");
        console.log(error);
      }
    },
  });

  return (
    <div className="p-10 w-full">
      <h1>إضافة قسم</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          id="name"
          onChange={formik.handleChange}
          placeholder="اضافة صف"
          className="border border-gray-300 p-2 rounded"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500 mt-1">{formik.errors.name}</div>
        )}
        <button
          type="submit"
          className="py-2 px-10 bg-green-600 rounded-lg hover:bg-green-800 text-white flex items-center mt-5"
        >
          اضافة
        </button>
      </form>
    </div>
  );
};

export default AddClasse;

import { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCheckbox } from "react-icons/bi";

export default function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <div className="h-[100vh] flex flex-col items-center bg-slate-400 justify-center text-white">
      <div className="h-[400px] w-80 bg-slate-500 rounded-xl px-6 my-4">
        <div className="">
          <h2 className="text-3xl font-bold pb-4 m-4 text-center">Login</h2>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full relative">
              <input
                className="border border-gray-600 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                name="email"
                placeholder="Email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
              <IoMdMail className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input
                className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                name="password"
                placeholder="Password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
              <FaLock className="absolute top-[35%] right-3" />
            </div>
            
              <div className="py-4 cursor-pointer">Forgot Password</div>
            
            <button className="my-2 py-2 w-full rounded-full bg-slate-500">
              Login
            </button>
            <span>
              Don't have an account?{" "}
              <span className="cursor-pointer">
                <Link to="/register">Register</Link>
              </span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

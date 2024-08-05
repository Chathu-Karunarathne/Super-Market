import { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import Registerimage from "../assets/Registerimage.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  const initialValues = { username: "", email: "", password: "" };
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
    if (!values.username) {
      errors.username = "Username is required";
    }
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
    <div className="h-[100vh] flex items-center bg-slate-400 justify-center text-white">
      <div className="flex items-center gap-20 w-[95%] p-5 rounded-md overflow-hidden">
        <img
          className="w-[75%] h-[500px] object-cover rounded-xl"
          src={Registerimage}
          alt="Register"
        />
        <div className="h-[450px] w-[25%] bg-slate-500 rounded-xl px-6">
          <div className="">
            <h2 className="text-3xl font-bold pb-2 m-4 text-center">Register</h2>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                  name="username"
                  placeholder="Username"
                  type="text"
                  value={formValues.username}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formErrors.username}</p>
                <FaUser className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-red-500">{formErrors.email}</p>
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
                <p className="text-red-500">{formErrors.password}</p>
                <FaLock className="absolute top-[35%] right-3" />
              </div>
              <div className="w-full relative">
                <input
                  className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                />
                <FaRegEyeSlash className="absolute top-[35%] right-3" />
              </div>

              <button className="my-2 py-2 w-full rounded-full bg-slate-500">
                Register
              </button>
              <span>
                Already have an account?{" "}
                <span className="cursor-pointer">
                  <Link to="/login">Login</Link>
                </span>
              </span>
            </form>
            {Object.keys(formErrors).length === 0 && isSubmit && (
              <div className="ui message success px-8 py-5 font-bold">Signed in successfully</div>
            )}
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          </div>
        </div>
      </div>
    </div>
  );
}

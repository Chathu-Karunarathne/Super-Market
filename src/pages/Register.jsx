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
  const [formErrors, setFormerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(formValues);
    setFormerrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   console.log(formValues);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = "abc";
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    }
    // else if (!regex.test(values.email)) {
    // errors.email = "This is not a valid email format!";
    // }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!regex.test(values.password.length < 4)) {
      errors.password = "password must be more than 4 characters";
    } else if (!regex.test(values.password.length > 10)) {
      errors.email = "Password connot exceed more than 10 characters";
    }

    return (
      <div>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="h-[100vh] flex  items-center bg-slate-400 justify-center text-white">
            <div className="flex items-center gap-20  w-[95%] p-5 rounded-md overflow-hidden">
              <img
                className="w-[75%] h-[450px] object-cover  rounded-xl"
                src={Registerimage}
                alt="Register"
              />
              <div className="h-[400px] w-[25%]  bg-slate-500 rounded-xl  px-6 ">
                <div className="">
                  <h2 className="text-3xl font-bold pb-2 m-4 text-center">
                    {" "}
                    Register
                  </h2>
                  <form className="flex flex-col items-center" action="">
                    <div className="w-full relative">
                      <input
                        className="border border-gray-600 w-full rounded-full py-2 px-4 my-2 bg-transparent"
                        name="username"
                        placeholder="Username"
                        type="text"
                        // value={formValues.username}
                        // onChange={handleChange}
                      />
                      {/* <p>{formErrors.username}</p> */}
                      <FaUser className="absolute top-[35%]  right-3" />
                    </div>
                    <div className="w-full  relative">
                      <input
                        className="border border-gray-600 w-full rounded-full  py-2 px-4 my-2 bg-transparent"
                        name="email"
                        placeholder="Email"
                        type="email"
                        // value={formValues.email}
                        // onChange={handleChange}
                      />
                      {/* <p>{formErrors.email}</p> */}
                      <IoMdMail className="absolute top-[35%] right-3" />
                    </div>
                    <div className="w-full relative">
                      <input
                        className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                        name="password"
                        placeholder="Password"
                        type="password"
                        // value={formValues.password}
                        // onChange={handleChange}
                      />
                      {/* <p>{formErrors.password}</p> */}
                      <FaLock className="absolute top-[35%] right-3" />
                    </div>
                    <div className="w-full relative">
                      <input
                        className="border border-gray-600 w-full rounded-full py-2 px-4 mt-2 bg-transparent"
                        name="confirmpassword"
                        placeholder="ConfirmPassword"
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

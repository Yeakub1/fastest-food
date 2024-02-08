import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (form) => {
    const email = form.email;
    const password = form.password;
    const name = form.name;
    const photo = form.photo;
    const number = form.userPhone;
    console.log(name, email, number, photo, password);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-8 border-[3px] border-gray-300 bg-gray-100">
        <h1 className="text-center text-3xl font-bold">Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full transition-all duration-300 border-none"
              {...register("name", { required: true, maxLength: 40 })}
            />
            {errors.name && (
              <span className="text-red-800">Name is required</span>
            )}
          </div>
          <div className="form-control w-full mt-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full transition-all duration-300 border-none"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email && (
              <span className="text-red-800">Email is required</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered ps-28 w-full transition-all duration-300 border-none"
                {...register("userPhone", {
                  required: true,
                  pattern: /^\d+$/,
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              <p className="absolute h-full top-0 flex p-2 items-center bg-base-300 rounded-s-lg">
                (BD) +880
              </p>
            </div>
            {errors.userPhone?.type == "required" && (
              <span className="text-red-800">Number is required</span>
            )}
            {errors.userPhone?.type == "pattern" && (
              <span className="text-red-800">Phone number is must number</span>
            )}
            {(errors.userPhone?.type == "minLength" ||
              errors.userPhone?.type == "maxLength") && (
              <span className="text-red-800">Phone number must 10 number</span>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="file"
              placeholder="Your full name"
              className="file-input  w-full"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <span className="text-red-800">Photo is required</span>
            )}
          </div>
          <div className="relative mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full transition-all duration-300"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[a-z]).{8,}$/,
              })}
            />
            <span
              className="absolute top-[58%] right-3 transform -translate-y-1/2 text-[#222222] text-xs font-semibold cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
            {errors.password && (
              <div
                role="alert"
                className=" flex flex-row items-center gap-2 mt-1"
              >
                <p className="text-xs text-[#c13515]">
                  At least 8 characters & Contains a number or symbol
                </p>
              </div>
            )}
            <p
              className={`text-xs text-[#717171] mt-1 ${
                errors.password ? "hidden" : "block opacity-60"
              }`}
            >
              At least 8 characters & Contains a number or symbol
            </p>
          </div>
          <div className="w-[300px] sm:w-[400px] mt-5">
            <button
              disabled={isLoading}
              className={`w-full py-3 rounded-md text-white font-medium bg-orange-500 hover:bg-orange-600 duration-300 transition ease-in-out disabled:bg-[#dddddd] ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <PulseLoader
                  color="#5cd183"
                  size={7}
                  margin={4}
                  speedMultiplier={0.6}
                />
              ) : (
                "Login"
              )}
            </button>
            <p className=" text-sm mt-2 flex gap-1 justify-center">
              Already have an account?
              <Link to="/login" className=" text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

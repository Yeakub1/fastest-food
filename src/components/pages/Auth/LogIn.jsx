import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const LogIn = () => {
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
          console.log(email, password)
    }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg rounded-lg p-10 border-[3px] border-gray-300 bg-gray-100">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="relative mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full transition-all duration-300 "
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span className="text-red-800">Password is required</span>
            )}
            <span
              className="absolute top-[70%] right-3 transform -translate-y-1/2 text-[#222222] text-xs font-semibold cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
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
              New to Fastest Food?
              <Link to="/register" className=" text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

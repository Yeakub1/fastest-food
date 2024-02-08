import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useBaseAPI from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import PageTitle from "../../utility/PageTitle";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [baseApi] = useBaseAPI();
  const { setAuthUser } = useAuth();
  const location = useLocation();
  const redirect = location?.state?.from || "/";

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (data) => {
    const { password, email } = data;
    const userInfo = {
      password,
      email,
    };

    baseApi.post("/auth/login", userInfo).then(({ data }) => {
      if (data.token) {
        setAuthUser(data.user);
        localStorage.setItem("RepliqCommerceToken", data.token);
        toast.success("Successfully Login!");
        reset();
        return navigate(redirect, { replace: true });
      }
      if (data.error) {
        return toast.error(data.message);
      } else {
        toast.error("Something is wrong!");
      }
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <PageTitle title="Login" />
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
              className={`w-full py-3 rounded-md text-white font-medium bg-orange-500 hover:bg-orange-600 duration-300 transition ease-in-out disabled:bg-[#dddddd]`}
            >
              Login
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

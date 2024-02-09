/* eslint-disable no-unused-vars */
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import PageTitle from "../../utility/PageTitle";
import useBaseAPI from "../../Hooks/useAxios";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddCustomerPage = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [baseApi] = useBaseAPI();

  const onSubmit = (data) => {
    const imgdata = new FormData();
    imgdata.append("image", data.photo[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((uploadImage) => {
        if (uploadImage.success) {
          const imgUrl = uploadImage.data.display_url;
          const { userName, phone, email, photo } = data;
          const customerInfo = {
            userName,
            phone: `+880${data.phone}`,
            email,
            photo: imgUrl,
          };
          console.log(customerInfo)
          baseApi.post("/admin/add-customer", customerInfo).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("Customer Add Successfully!");
            }
          });
          console.log(baseApi)
        }
      });
  };

  return (
    <main>
      <PageTitle title="Add Customer" />
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1>Add Customer</h1>
      </div>
      <div className="max-w-7xl mx-auto mt-7 md:h-[80vh] flex items-center justify-center">
        <div className="card mx-auto flex-shrink-0 max-w-4xl shadow-xl bg-base-100 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body border-[3px] border-gray-300 rounded-lg"
          >
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Name</span>
                </label>

                <input
                  type="text"
                  {...register("userName", { required: true })}
                  placeholder="Customer Name"
                  className="input input-bordered"
                />
                {errors.userName && (
                  <span className="text-red-800">
                    Customer Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Phone Number</span>
                </label>

                <input
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="Customer Phone Number"
                  className="input input-bordered"
                />
                {errors.productPrice && (
                  <span className="text-red-800">
                    Customer Phone Number is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Email</span>
                </label>

                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Customer Email"
                  className="input input-bordered"
                />
                {errors.productQuantity && (
                  <span className="text-red-800">
                    Customer Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Image</span>
                </label>

                <input
                  type="file"
                  {...register("photo", { required: true })}
                  placeholder="Customer Image"
                  className=" input-bordered file-input "
                />
                {errors.productImage && (
                  <span className="text-red-800">
                    Customer Image is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6 ">
              <input
                className="btn bg-[#09867E] text-white hover:bg-[#04514b] "
                type="submit"
                value="Add Customer"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddCustomerPage;

/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useBaseAPI from "../../Hooks/useAxios";
import PageTitle from "../../utility/PageTitle";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddProducts = () => {
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
          const {
            productName,
            productPrice,
            productQuantity,
            photo,
            productdescription,
            productItem,
          } = data;
          const productInfo = {
            productName,
            productPrice,
            productQuantity,
            photo: imgUrl,
            productItem,
            productdescription,
          };
          baseApi.post("/admin/add-product", productInfo).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("User Register Successfully!");
            }
          });
        }
      });
  };

  return (
    <div className="">
      <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
        <h1> Add Procuct</h1>
      </div>
      <PageTitle title="Add Product" />
      <div className="max-w-7xl mx-auto mt-7 md:h-[80vh] flex items-center justify-center">
        <div className="card mx-auto flex-shrink-0 max-w-4xl shadow-xl bg-base-100 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body border-[3px] border-gray-300 rounded-lg"
          >
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product name</span>
                </label>

                <input
                  type="text"
                  {...register("productName", { required: true })}
                  placeholder="product Name"
                  className="input input-bordered"
                />
                {errors.productName && (
                  <span className="text-red-800">product Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product price</span>
                </label>

                <input
                  type="number"
                  {...register("productPrice", { required: true })}
                  placeholder="Product price"
                  className="input input-bordered"
                />
                {errors.productPrice && (
                  <span className="text-red-800">
                    Product price is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product quantity</span>
                </label>

                <input
                  type="number"
                  {...register("productQuantity", { required: true })}
                  placeholder="Product quantity"
                  className="input input-bordered"
                />
                {errors.productQuantity && (
                  <span className="text-red-800">
                    Product quantity is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product Image</span>
                </label>

                <input
                  type="file"
                  {...register("photo", { required: true })}
                  placeholder="product Image"
                  className=" input-bordered file-input "
                />
                {errors.productImage && (
                  <span className="text-red-800">
                    product Image is required
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product description</span>
                </label>

                <input
                  type="text"
                  {...register("productdescription", { required: true })}
                  placeholder="Product description"
                  className="input input-bordered"
                />
                {errors.productdescription && (
                  <span className="text-red-800">
                    Product description is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Item</span>
                </label>

                <select
                  {...register("productItem", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled value="">
                    select item
                  </option>
                  <option value="chicken">Chicken</option>
                  <option value="fruits">Fruits</option>
                  <option value="softDrinks">Soft Drinks</option>
                  <option value="desserts">Desserts</option>
                  <option value="icecreams">Icecreams</option>
                  <option value="fish">Fish</option>
                  <option value="rice">Rice</option>
                  <option value="curry">Curry</option>
                </select>
              </div>
            </div>
            <div className="form-control mt-6 ">
              <input
                className="btn bg-[#09867E] text-white hover:bg-[#04514b] "
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProducts;

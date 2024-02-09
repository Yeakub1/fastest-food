import {
  FaShippingFast,
  FaShoppingCart,
  FaSlack,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Loding from "../../utility/Loding";
import PageTitle from "../../utility/PageTitle";
import useFetchData from "../../Hooks/useFetchData";

const AHome = () => {
  const { data: adminData, isLoading: isAdminDataLoading } = useFetchData(
    "/admin/",
    {},
    ["adminData"]
  );

  return (
    <main>
      <PageTitle title="Admin Home" />
      <section>
        <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
          <h1> Admin Home</h1>
        </div>
        {isAdminDataLoading || !adminData ? (
          <Loding />
        ) : (
          <div className="max-w-7xl mx-auto mt-7 md:h-[80vh] flex items-center justify-center">
            <div className="grid md:grid-cols-2 gap-5 justify-center">
              <div>
                <Link
                  to="/admin/products"
                  className="w-96 h-40 border-[3px] border-gray-300 p-5 flex justify-between items-center rounded-lg hover:shadow-lg"
                >
                  <div className="flex flex-col">
                    <p className="text-xl">Total Product</p>
                    <p className="text-5xl">{adminData.totalProduct || 0}</p>
                  </div>
                  <div className="text-7xl">
                    <FaSlack />
                  </div>
                </Link>
              </div>

              <div className="">
                <Link
                  to="/customers"
                  className="w-96 h-40 border-[3px] border-gray-300 p-5 flex justify-between items-center  rounded-lg hover:shadow-lg"
                >
                  <div className="flex flex-col">
                    <p className="text-xl">Total Customer</p>
                    <p className="text-5xl">{adminData.totalCustomer || 0}</p>
                  </div>
                  <div className="text-7xl">
                    <FaUser />
                  </div>
                </Link>
              </div>

              <div className="">
                <Link
                  to="/admin/orders"
                  className="w-96 h-40 border-[3px] border-gray-300 p-5 flex justify-between items-center  rounded-lg hover:shadow-lg"
                >
                  <div className="flex flex-col">
                    <p className="text-xl">Total Orders</p>
                    <p className="text-5xl">{adminData.totalOrder || 0}</p>
                  </div>
                  <div className="text-7xl">
                    <FaShippingFast />
                  </div>
                </Link>
              </div>

              <div className="w-96 h-40 p-5 flex justify-between items-center  rounded-lg hover:shadow-lg border-[3px] border-gray-300">
                <div className="flex flex-col">
                  <p className="text-xl">Total Carts</p>
                  <p className="text-5xl">{adminData.totalCart || 0}</p>
                </div>
                <div className="text-7xl">
                  <FaShoppingCart />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AHome;

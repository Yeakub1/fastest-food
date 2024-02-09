import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loding from "../../utility/Loding";
import PageTitle from "../../utility/PageTitle";
import useFetchData from "../../Hooks/useFetchData";

const CustomersList = () => {
  const { data: customers, isLoading: isCustomerLoading } = useFetchData(
    "/admin/customers",
    [],
    ["customers"]
  );

  return (
    <main>
      <PageTitle title="Customers" />
      <section className="  mx-auto">
        <div className="flex justify-center p-5 bg-[#09867E] text-white text-2xl font-semibold">
          <h1>Customers List</h1>
        </div>
        {isCustomerLoading || !customers ? (
          <Loding />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th className="text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, idx) => (
                  <tr key={customer._id} className="hover:shadow-xl h-full">
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar ">
                        <div className="w-16 h-16 rounded-full">
                          <img src={customer.photo} alt={customer.name} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2 className="text-xl font-semibold">
                        {customer.userName}
                      </h2>
                    </td>
                    <td>
                      <h2 className="text-xl">{customer.phone}</h2>
                    </td>
                    <th className="text-center">
                      <Link
                        to={`/dashboard/customers/${customer._id}`}
                        className="btn btn-circle bg-[#09867E] hover:bg-[#09867E] text-white text-xl"
                      >
                        <FaEye />
                      </Link>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default CustomersList;

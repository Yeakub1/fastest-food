import useAuth from "../Hooks/useAuth";
import PageTitle from "./PageTitle";
import SectionTitle from "./SectionTitle";

const ProfilePage = () => {
  const { authUser } = useAuth();
  return (
    <main className="my-10">
      <PageTitle title="Profile" />

      <section className="mx-auto">
        <SectionTitle heading="MY Profile!" />
        <div className="flex flex-col items-center p-5 gap-5 my-5 justify-center border w-fit mx-auto rounded-2xl hover:scale-105 hover:shadow-2xl duration-500">
          <div className="avatar">
            <div className="w-40 h-40  ring rounded-full">
              <img src={authUser?.photo} alt={authUser?.name} />
            </div>
          </div>
          <div className="w-full text-center">
            <h1 className="text-2xl">{authUser?.userName}</h1>
            <h1 className="text-2xl">{authUser?.userPhone}</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;

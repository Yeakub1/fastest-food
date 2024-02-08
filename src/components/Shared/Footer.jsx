import images from "../../../src/assets/images/nav-Logo.png";

const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className=" max-w-screen-xl px-5 mx-auto">
        <div className="grid md:grid-cols-3 py-16 gap-5">
          <div className="">
            <img
              className="h-16 w-16"
              src={images}
              alt="images"
              draggable="false"
            />
            <p className="my-5">
              Fastest Food: Your Ultimate Destination for Quick and Delicious
              Meals!
            </p>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Quick Links</h1>
            <div className="mt-3">
              <p>Menu</p>
              <p>Food</p>
              <p>Registion</p>
            </div>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Opening Hours</h1>
            <div className="mt-3">
              <p>Saturday to Thursday - 10 am to 12 am</p>
              <p>Friday - 08 am to 02 am</p>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center pb-8">
          {`© Copyright ${new Date().getFullYear()}. All right reserved by Fastest Food`}
        </p>
      </div>
    </div>
  );
};

export default Footer;

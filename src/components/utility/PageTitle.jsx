import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Fastest Food` : "Fastest Food"}</title>
    </Helmet>
  );
};

export default PageTitle;

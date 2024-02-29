import MainScreenHeader from "../../components/header/main-screen-header";
import Layout from "../../components/layout/layout";
import ServicesCard from "../../components/services/services-card";
const Services = () => {
  return (
    <Layout>
      <MainScreenHeader heading={"Services"} subHeading={"Services Rendered"} />
      <div className="w-full px-8 py-8">
        <ServicesCard />
      </div>
    </Layout>
  );
};

export default Services;

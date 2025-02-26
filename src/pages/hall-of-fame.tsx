/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import { useEffect } from "react";

const HallOfFame = () => {
  const { getHallOfFameList } = useServices();
  const fetchData = getHallOfFameList();

  useEffect(() => {
    fetchData.then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />
      <PageHeader heading="Hall of Fame" />
      <Footer />
    </div>
  );
};

export default HallOfFame;

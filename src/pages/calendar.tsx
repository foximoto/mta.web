import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <PageHeader heading="Ride Calendar" />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      <Footer />
    </div>
  );
}

export default Calendar;

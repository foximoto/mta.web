/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useServices } from "@/hooks/useServices";
import { calendarDataType } from "@/types/service";
import moment from "moment";

function Calendar() {
  const [events, setEvents] = useState<Array<calendarDataType>>();
  const { getCalendarDates } = useServices();
  useEffect(() => {
    getCalendarDates(
      moment().startOf("month").format("YYYY-MM-DD"),
      moment().endOf("month").format("YYYY-MM-DD")
    ).then((response) => {
      setEvents(response);
    });
  }, []);
  return (
    <div className="container mx-auto ">
      <Navbar />
      <PageHeader heading="Ride Calendar" />
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events?.map((obj) => ({ title: obj.rideName, date: obj.date }))}
        initialView="dayGridMonth"
        datesSet={(payload) => {
          getCalendarDates(
            moment(payload.start).format("YYYY-MM-DD"),
            moment(payload.end).format("YYYY-MM-DD")
          ).then((response) => {
            setEvents(response);
          });
          console.log(payload);
        }}
      />
      <Footer />
    </div>
  );
}

export default Calendar;

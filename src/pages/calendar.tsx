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
import Meta from "@/meta/meta";

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
    <div className="container mx-auto">
      <Meta title="Calendar" favicon="/favicon-home.ico" />
      <Navbar />
      <PageHeader heading="Ride Calendar" />
      {/* Responsive wrapper for FullCalendar */}
      <div className="w-full px-4 py-5">
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={events?.map((obj) => ({
            title: obj.rideName,
            date: obj.date,
          }))}
          initialView="dayGridMonth"
          contentHeight="auto"
          height="auto"
          datesSet={(payload) => {
            getCalendarDates(
              moment(payload.start).format("YYYY-MM-DD"),
              moment(payload.end).format("YYYY-MM-DD")
            ).then((response) => {
              setEvents(response);
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Calendar;

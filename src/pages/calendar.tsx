/* eslint-disable react-hooks/exhaustive-deps */
import PageHeader from "@/components/PageHeader";
import Meta from "@/meta/meta";
import { calendarDataType } from "@/types/service";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useEffect, useState } from "react";

function Calendar() {
  const [events, setEvents] = useState<Array<calendarDataType>>();

  useEffect(() => {
    //
  }, []);

  return (
    <div>
      <Meta title="Calendar" favicon="/favicon.ico" />
      <PageHeader headingFirst="Ride" headingSecond="Calendar" description="" />
      {/* Responsive wrapper for FullCalendar */}
      <div className="container mx-auto px-4 py-20">
        <FullCalendar
          plugins={[dayGridPlugin]}
          events={events?.map((obj) => ({
            title: obj.rideName,
            date: obj.date,
          }))}
          initialView="dayGridMonth"
          contentHeight="auto"
          height="auto"
        />
      </div>
    </div>
  );
}

export default Calendar;

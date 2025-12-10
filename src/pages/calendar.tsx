/* eslint-disable react-hooks/exhaustive-deps */
import PageHeader from "@/components/PageHeader";
import { useServices } from "@/hooks/useServices";
import Meta from "@/meta/meta";
import { calendarDataType } from "@/types/service";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import moment from "moment";
import { useEffect, useState } from "react";

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
      <Meta title="Calendar" favicon="/favicon.ico" />
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
    </div>
  );
}

export default Calendar;

import { useEffect, useState } from "react";

const URL_sche = "http://localhost:3001";

export default function RealizedSchedule() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch(`${URL_sche}/appointments`);
        const data = await res.json();
        setSchedule(data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    }
    fetchSchedule();
  }, []);

  return (
    <div className="px-8 overflow-y-auto max-h-[500px] ">
      <h2 className="text-xl font-semibold mb-4 uppercase text-center py-5">
        Programari
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {schedule.map((appointment) => (
          <div key={appointment.id} className="border border-gray-300 p-4">
            <p>
              <strong>Nume:</strong> {appointment.name}
            </p>
            <p>
              <strong>Telefon:</strong> {appointment.phone}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email}
            </p>
            <p>
              <strong>Mașină:</strong> {appointment.car}
            </p>
            <p>
              <strong>Acțiune:</strong> {appointment.action}
            </p>
            <p>
              <strong>Interval de timp:</strong> {appointment.timeSlot}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

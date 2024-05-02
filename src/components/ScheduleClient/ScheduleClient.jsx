import { useState } from "react";

export default function ScheduleClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    action: "",
    timeSlot: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.car ||
      !formData.action ||
      !formData.timeSlot
    ) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Appointment scheduled successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          car: "",
          action: "",
          timeSlot: "",
        });
      } else {
        alert("Failed to schedule appointment. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to schedule appointment. Please try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 overflow-y-auto max-h-[500px] px-4 pb-[50px]">
      <h2 className="text-xl font-semibold mb-4 uppercase text-center py-4">
        Programeaza client
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4  font-semibold">
        <div>
          <label className="block mb-1" htmlFor="name">
            Nume
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="phone">
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="car">
            Masina
          </label>
          <input
            type="text"
            id="car"
            name="car"
            value={formData.car}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="action">
            Descriere
          </label>
          <input
            type="text"
            id="action"
            name="action"
            value={formData.action}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="timeSlot">
            Timp de rezolvare
          </label>
          <input
            type="text"
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="py-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600   "
          >
            Programeaza
          </button>
        </div>
      </form>
    </div>
  );
}

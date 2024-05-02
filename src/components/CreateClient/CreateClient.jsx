import { useState } from "react";
import { useClients } from "../../contexts/UserContext";

export default function CreateClient() {
  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    email: "",
    phone: "",
    license_plate: "",
    chassis_number: "",
    brand: "",
    model: "",
    manufacture_year: "",
    engine_type: "",
    engine_capacity: "",
    horsepower: "",
    kw_power: "",
  });

  const { createClient } = useClients();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      last_name: formData.last_name,
      first_name: formData.first_name,
      email: formData.email,
      phone: [formData.phone],
      cars: [
        {
          license_plate: formData.license_plate,
          chassis_number: formData.chassis_number,
          brand: formData.brand,
          model: formData.model,
          manufacture_year: formData.manufacture_year,
          engine_type: formData.engine_type,
          engine_capacity: formData.engine_capacity,
          horsepower: formData.horsepower,
          kw_power: formData.kw_power,
        },
      ],
    };
    createClient(newClient);
    setFormData({
      last_name: "",
      first_name: "",
      email: "",
      phone: "",
      license_plate: "",
      chassis_number: "",
      brand: "",
      model: "",
      manufacture_year: "",
      engine_type: "",
      engine_capacity: "",
      horsepower: "",
      kw_power: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8  overflow-y-auto max-h-[500px] pb-[50px]">
      <h2 className="text-xl font-semibold mb-4 uppercase text-center py-4">
        Adauga Client
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 px-4 text-stone-950 font-semibold"
      >
        <div>
          <label className="block mb-1" htmlFor="last_name">
            Nume
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="first_name">
            Prenume
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
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
          <label className="block mb-1" htmlFor="license_plate">
            Numar placuta
          </label>
          <input
            type="text"
            id="license_plate"
            name="license_plate"
            value={formData.license_plate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Adauga client
        </button>
      </form>
    </div>
  );
}

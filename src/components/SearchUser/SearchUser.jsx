import { useState } from "react";
import { useClients } from "../../contexts/UserContext";

export default function SearchUser() {
  const [query, setQuery] = useState("");
  const { getClient, currentClient } = useClients();

  async function handleSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    await getClient(query);
  }

  return (
    <div className="max-w-lg mx-auto px-3 ">
      <form onSubmit={handleSubmit} className="flex items-center mt-3">
        <input
          placeholder="Search User by Id, ex: 1 "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 mr-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Search
        </button>
      </form>
      {currentClient ? (
        <div className="mt-8 overflow-y-auto max-h-[400px] text-stone-950">
          <h2 className="text-xl font-semibold py-3">
            {currentClient.last_name} {currentClient.first_name}
          </h2>
          <p> 📪 Email: {currentClient.email}</p>
          <p> ☎ Phone Numbers:</p>
          <ul className="list-disc ml-8">
            {currentClient.phone.map((phoneNumber, index) => (
              <li key={index}>{phoneNumber}</li>
            ))}
          </ul>

          <p className="  uppercase py-2 font-bold  "> 🚙 Cars: </p>

          <ul className="list-disc ml-8  ">
            {currentClient.cars.map((car, index) => (
              <li key={index}>
                <p className=" uppercase font-semibold">
                  License Plate: <span>{car.license_plate} </span>{" "}
                </p>
                <p>
                  Chassis Number: <span>{car.chassis_number}</span>
                </p>
                <p>
                  Brand: <span> {car.brand} </span>
                </p>
                <p>
                  Model: <span>{car.model} </span>
                </p>
                <p>
                  Manufacture Year: <span> {car.manufacture_year} </span>
                </p>
                <p>
                  Engine Type:<span> {car.engine_type} </span>
                </p>
                <p>
                  Engine Capacity: <span>{car.engine_capacity} </span>
                </p>
                <p>
                  Horsepower: <span>{car.horsepower} </span>
                </p>
                <p>
                  KW Power: <span>{car.kw_power}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

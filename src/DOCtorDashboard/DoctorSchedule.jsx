import React, { useState } from "react";
import Sidebar from "./Sidebar";

const DoctorSchedule = () => {
  const [availableDays, setAvailableDays] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [savedSchedule, setSavedSchedule] = useState(null);

  const toggleDay = (day) => {
    setAvailableDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { start: "", end: "" }]);
  };

  const updateTimeSlot = (index, field, value) => {
    const newSlots = [...timeSlots];
    newSlots[index][field] = value;
    setTimeSlots(newSlots);
  };

  const removeTimeSlot = (index) => {
    setTimeSlots(timeSlots.filter((_, i) => i !== index));
  };

  const addUnavailableDate = (event) => {
    const date = event.target.value;
    if (!unavailableDates.includes(date)) {
      setUnavailableDates([...unavailableDates, date]);
    }
  };

  const removeUnavailableDate = (date) => {
    setUnavailableDates(unavailableDates.filter((d) => d !== date));
  };

  const saveSchedule = () => {
    setSavedSchedule({ availableDays, timeSlots, unavailableDates });
  };

  const resetSchedule = () => {
    setAvailableDays(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
    setTimeSlots([]);
    setUnavailableDates([]);
    setSavedSchedule(null);
  };

  return (
    <div className="flex ">
        <div>
            <Sidebar/>
        </div>
    <div className="  absolute top-[100px] shadow border right-[300px] left-[500px] max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Schedule your Appointment</h2>

      {/* Available Days Selection */}
      <div className="mb-4 p-6 ">
        <h3 className="font-semibold">Available Days:</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
            <button
              key={day}
              className={`px-3 py-1 rounded border ${
                availableDays.includes(day) ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-4">
        <h3 className="font-semibold">Available Time Slots:</h3>
        {timeSlots.map((slot, index) => (
          <div key={index} className="flex gap-2 mt-2">
            <input
              type="time"
              value={slot.start}
              onChange={(e) => updateTimeSlot(index, "start", e.target.value)}
              className="border p-1 rounded"
            />
            <span>to</span>
            <input
              type="time"
              value={slot.end}
              onChange={(e) => updateTimeSlot(index, "end", e.target.value)}
              className="border p-1 rounded"
            />
            <button className="text-red-500" onClick={() => removeTimeSlot(index)}>
              ❌
            </button>
          </div>
        ))}
        <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded" onClick={addTimeSlot}>
          Add Time Slot
        </button>
      </div>

      {/* Unavailable Dates */}
      <div className="mb-4">
        <h3 className="font-semibold">Unavailable Dates:</h3>
        <input type="date" className="border p-1 rounded" onChange={addUnavailableDate} />
        <ul className="mt-2">
          {unavailableDates.map((date, index) => (
            <li key={index} className="flex justify-between items-center border-b py-1">
              {date}
              <button className="text-red-500" onClick={() => removeUnavailableDate(date)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Save and Reset Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={saveSchedule}>
          Save Schedule
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={resetSchedule}>
          Reset
        </button>
      </div>

      {/* Display Saved Schedule */}
      {savedSchedule && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">Saved Schedule:</h3>
          <p><strong>Available Days:</strong> {savedSchedule.availableDays.join(", ")}</p>
          <p><strong>Time Slots:</strong> {savedSchedule.timeSlots.map(slot => `${slot.start} - ${slot.end}`).join(", ")}pm </p>
          <p><strong>Unavailable Dates:</strong> {savedSchedule.unavailableDates.join(", ")}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default DoctorSchedule;

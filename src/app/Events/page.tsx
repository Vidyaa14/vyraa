'use client'; // Ensure that this page is treated as a client component

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [events, setEvents] = useState([]); // State to hold events fetched from the API
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Function to fetch events from the API
  const fetchEvents = async () => {
    try {
      const response = await fetch(
        'https://volt-backend.vercel.app/api/events?athlete_id=66852d56e9fca7880bfc534d'
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setEvents(data); // Update events state with data from the API
      setLoading(false); // Stop loading spinner
    } catch (error) {
      setError(error.message); // Handle any errors
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="bg-[#e4e4e4] min-h-screen">
      {/* Header */}
      <div className="flex justify-between mt-10 items-center p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Explore</h1>
      </div>

      {/* Categories Tabs */}
      <div className="flex space-x-4 p-4 border-b border-gray-800">
        <button className="text-xl font-semibold text-red-600">Events</button>
        <button className="text-xl font-semibold text-red-600">Clubs</button>
        <button className="text-xl font-semibold text-red-600">Gyms</button>
      </div>

      {/* Event Cards */}
      <div className="p-4 space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-gray-400 p-4 rounded-lg flex items-center space-x-4 cursor-pointer"
            onClick={() => handleCardClick(event)} // Set the selected event on click
          >
            <Image
              src={event.image || '/assetslimages.image.png'} // Fallback for missing image
              alt={event.name}
              width={120}
              height={120}
              className="rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-black">{event.name}</h3>
              <p className="text-sm text-black">{event.description}</p>
              <p className="mt-2 text-sm text-black">Starting from {event.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Event Description */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 w-1/2 h-3/4 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold">{selectedEvent.name}</h2>
            <p className="mt-4">{selectedEvent.description}</p>
            <p className="mt-2 text-sm text-gray-500">Price: {selectedEvent.price}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                onClick={handleCloseModal} // Close the modal on click
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

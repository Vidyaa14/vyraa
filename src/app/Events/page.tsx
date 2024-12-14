'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://volt-backend.vercel.app/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-auto gap-4">
      {events.map((event, index) => (
        <div
          key={event.event_id}
          className="border border-gray-300 p-4 rounded shadow-sm hover:shadow-md transition"
        >
          {/* Event Image */}
          {event.photos && event.photos.length > 0 ? (
            <Image
              src={event.photos[0]} // Display the first photo of the event
              alt={event.event_name}
              width={200}
              height={200}
              className="rounded mb-2"
            />
          ) : (
            <div className="h-40 bg-gray-200 flex items-center justify-center rounded mb-2">
              <span>No Image</span>
            </div>
          )}

          {/* Event Details */}
          <h3 className="text-lg font-semibold">{event.event_name}</h3>
          <p className="text-sm text-gray-500">{event.event_description}</p>
          <p className="text-sm mt-2">
            <strong>Cost:</strong>{' '}
            {event.event_cost !== null ? `₹${event.event_cost}` : 'Free'}
          </p>
          <p className="text-sm">
            <strong>Date:</strong> {event.event_date || 'TBD'}
          </p>
          <p className="text-sm">
            <strong>Location:</strong>{' '}
            {event.event_location?.address || 'TBD'} {/* Safely access `address` */}
          </p>
          <p className="text-sm">
            <strong>Sports:</strong> {event.sports.join(', ')}
          </p>
          <p className="text-sm">
            <strong>Registered Athletes:</strong>{' '}
            {event.registered_athletes_count}
          </p>
          <p className="text-sm">
            <strong>Interested Athletes:</strong>{' '}
            {event.interested_athletes_count}
          </p>

          {/* Conditional Registration Button */}
          <button
            className={`mt-3 px-4 py-2 rounded text-white ${
              event.isRegistered
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {event.isRegistered ? 'Registered' : 'Register'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;

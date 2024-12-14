'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt } from 'react-icons/fa';


const Page = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  
const calculateCountdown = (date) => {
  const eventDate = new Date(date);
  const diff = eventDate - new Date();
  if (diff < 0) return "Event Passed";
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} days remaining`;
};

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
    <>
    <h1 className="text-3xl font-bold mt-32 text-center text-gray-800 mb-4 ">
    Discover Events
      </h1>
      <p className='text-xl  text-center text-gray-800  '>Explore a world of exciting sports events near you. 
        </p><p className='text-xl  text-center text-gray-800 mb-10'> Find competitions, workshops, and activities tailored to your interests.Join the action and be part of the thrill today!</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {events.map((event, index) => (
        <div
          key={event.event_id}
          className="border hover:scale-105 p-6 hover:shadow-lg hover:border-red-400 border-gray-300 text-black mt-4 p-4 rounded shadow-sm hover:shadow-md transition rounded-xl "
        
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
          <p className="text-sm text-black">{event.event_description}</p>
          <p className="text-sm mt-2">
          <FaMoneyBillAlt className="inline-block text-red-500 mr-1" /> 
            <strong>Cost:</strong>{' '}
            {event.event_cost !== null ? `₹${event.event_cost}` : 'Free'}
          </p>
          <p className="text-sm">
          <FaCalendarAlt className="inline-block text-red-500 mr-1" /> 
            <strong>Date:</strong> {event.event_date || 'TBD'}
          </p>

          <p className="text-sm mt-2 text-red-500">
  {calculateCountdown(event.event_date)}
</p>

          <p className="text-sm">
          <FaMapMarkerAlt className="inline-block text-red-500 mr-1" /> 
          <strong>Location:</strong> {event.event_location?.address || 'TBD'}
          </p>

          <p className="text-sm inline-block bg-red-200 text-black rounded-full px-2 py-1 text-xs">
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
                : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {event.isRegistered ? 'Registered' : 'Register'}
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Page;

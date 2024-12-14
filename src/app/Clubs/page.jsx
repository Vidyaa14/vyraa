'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ListedClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the listed clubs from the API
    const fetchClubs = async () => {
      try {
        const response = await fetch('https://volt-backend.vercel.app/api/clubs/listed');
        if (!response.ok) {
          throw new Error('Failed to fetch clubs');
        }
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) {
    return <p>Loading clubs...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {clubs.map((club) => (
        <div
          key={club.club_id}
          className="border border-gray-300 p-4 rounded shadow-sm hover:shadow-md transition"
        >
          {/* Club Image */}
          {club.club_img && club.club_img.length > 0 ? (
            <Image
              src={club.club_img[0]} // Display the first image of the club
              alt={club.name}
              width={200}
              height={200}
              className="rounded mb-2"
            />
          ) : (
            <div className="h-40 bg-gray-200 flex items-center justify-center rounded mb-2">
              <span>No Image</span>
            </div>
          )}

          {/* Club Details */}
          <h3 className="text-lg font-semibold">{club.name}</h3>
          <p className="text-sm text-gray-500">{club.description || 'No description available'}</p>
          <p className="text-sm mt-2">
            <strong>Organizer:</strong> {club.organizer_name || 'Unknown'}
          </p>
          <p className="text-sm">
            <strong>Sports Taught:</strong> {club.sports_taught.join(', ') || 'N/A'}
          </p>
          <p className="text-sm">
            <strong>Location:</strong>{' '}
            {club.location?.address || 'Location not specified'}
          </p>
          <p className="text-sm">
            <strong>Contact:</strong>{' '}
            {club.contact_numbers.length > 0 ? club.contact_numbers.join(', ') : 'No contact info'}
          </p>
          <p className="text-sm">
            <strong>Members:</strong> {club.member_count}
          </p>
          <p className="text-sm">
            <strong>Created At:</strong> {new Date(club.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListedClubsPage;

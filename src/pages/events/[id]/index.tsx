import { useRouter } from 'next/router';
import EventPage from '@/components/MuftiEvents/EventPage';
import React from 'react';

const Events = () => {
  const router = useRouter();
  const { id } = router.query;

  // Prevent rendering until router is ready and id is available
  if (!id || Array.isArray(id)) return <div>Loading...</div>;

  return <EventPage eventID={id} />;
};

export default Events;

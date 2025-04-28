'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Button from '@/components/button';
import { Clock, MessageCircle, ThumbsUp, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import EventsHero from './EventsHero';
import Text from '@/components/UI/Text';
import FilterDropdown from '@/components/MuftiEvents/FilterDropdown';
import { AskQuestion } from '@/components/MuftiEvents/AskQuestion'; // adjust path as needed
import Pagination from '@/components/blogs/Pagination';

const EventPage = ({ eventID }: { eventID: string }) => {
  const router = useRouter();

  interface Scholar {
    id: number;
    name: string;
    fiqa: string;
    image: string;
    category: string[]; // Added optional 'interest' property
  }

  interface Interest {
    id: number;
    user_id: number;
    interest: string;
  }

  interface Host {
    id: number;
    name: string;
    email: string;
    image: string;
    phone_number: string;
    fiqa: string;
    mufti_status: number;
    user_type: string;
    interests: Interest[];
  }

  interface Event {
    id: number;
    event_title: string;
    event_category: string[];
    question_end_time: number;
    date: string;
    duration: string;
    location: string;
    about: string;
    hosted_by: Host;
    scholars: Scholar[];
    event_questions: any[];
    image: string;
    event_status: number;
    latitude: number;
    longitude: number;
  }

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAskQuestion, setShowAskQuestion] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `https://dashboard.mymuftiapp.com/public/api/testing/event/eventDetail/${eventID}?page=1`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        if (data && data.status && data.data) {
          setEvent(data.data);
        } else {
          throw new Error('Event data is in an unexpected format');
        }
      } catch (err) {
        console.error('Error fetching event data:', err);
        setError(`Unable to load event details: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventID]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!event) return <div className="p-6">No event data available.</div>;

  // Format date
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <EventsHero />

      <div className="p-6 pt-10">
        {/* Title */}
        <div className="flex justify-between items-center">
          <div>
            <Text as="h2">
              {event.event_title
                ? event.event_title
                    .split(' ')
                    .map((word) =>
                      [
                        'at',
                        'by',
                        'for',
                        'in',
                        'of',
                        'on',
                        'to',
                        'with',
                        'up',
                        'and',
                        'but',
                        'or',
                        'nor',
                        'so',
                        'yet',
                        'a',
                        'an',
                        'the',
                      ].includes(word.toLowerCase())
                        ? word.toLowerCase()
                        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
                    )
                    .join(' ')
                : 'No Title'}
            </Text>
            <Text as="p" className="font-Raleway text-[#959B99] mt-1">
              {event.event_category.join(', ') || 'No Category'}
            </Text>
          </div>
          <span className="bg-[#38B89A1A] text-teal-500 text-sm font-medium px-3 py-1 rounded-md">
            {event.event_status === 2 ? 'Upcoming' : 'Inactive'}
          </span>
        </div>

        <Text as="p" className="mt-3 font-Poppins text-black text-sm bg-[#38B89A1A] px-3 py-2 rounded-md">
          <span className="text-teal-500 font-medium">Note:</span> You can ask questions up to{' '}
          {event.question_end_time || '10'} minutes before the event ends.
        </Text>

        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-md">
          {/* Date */}
          <div className="flex flex-col items-center text-[#38B89A] font-Raleway pr-4 ml-4">
            <span className="text-md text-[#959B9A]">
              {eventDate.toLocaleString('default', { month: 'short' })}, {eventDate.getFullYear()}
            </span>
            <span className="text-2xl font-semibold">{eventDate.getDate()}</span>
          </div>

          <div className="w-px h-12 bg-[#38B89A] opacity-80 mx-6" />

          {/* Location and Time */}
          <div className="flex flex-col flex-grow font-Raleway text-black pr-4">
            <Text as="p" className="text-md text-black font-semibold leading-snug">
              {event.location}
            </Text>
            <div className="flex font-Poppins items-center mt-2 text-md text-[#959B9A] space-x-2">
              <Clock className="h-4 w-4 text-[#38B89A]" />
              <span>{eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span className="text-[#B0B0B0]">|</span>
              <span>{event.duration}</span>
            </div>
          </div>

          {/* Map */}
          <a
            href={`https://www.google.com/maps?q=${event.latitude},${event.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden block"
          >
            <iframe
              title="map"
              width="160"
              height="100"
              frameBorder="0"
              style={{ border: 0, pointerEvents: 'none' }}
              src={`https://maps.google.com/maps?q=${event.latitude},${event.longitude}&z=15&output=embed`}
              allowFullScreen
            ></iframe>
          </a>
        </div>

        {/* Host */}
        {event.hosted_by && (
          <div className="mt-6">
            <Text as="h4" className="font-Raleway mb-2">
              Hosted By
            </Text>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border rounded-full mr-3 flex items-center justify-center">
                <AvatarImage src={`/images/${event.hosted_by.image || 'default-avatar.png'}`} alt="Host" />
                <AvatarFallback className="flex items-center justify-center">
                  {event.hosted_by.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <Text as="h5" className="font-Raleway font-semibold text-[#3A3A3A] text-md">
                  {event.hosted_by.name}
                </Text>
                <Text as="p" className="text-xs text-DM Sans text-[#8D9D9A]">
                  {event.hosted_by.interests.map((interest) => interest.interest).join(', ')}
                </Text>
              </div>
            </div>
          </div>
        )}

        {/* Scholars */}
        {Array.isArray(event.scholars) && event.scholars.length > 0 && (
          <div className="mt-6">
            <Text as="h4" className="font-Raleway mb-2">
              Scholars
            </Text>
            <div className="flex flex-wrap gap-3">
              {event.scholars.map((scholar, index) => (
                <div key={index} className="flex items-center mx-2 mb-2">
                  <Avatar className="h-10 w-10 border rounded-full mr-3 flex items-center justify-center">
                    <AvatarImage src={`/images/${scholar.image || 'default-avatar.png'}`} alt="User" />
                    <AvatarFallback className="flex items-center justify-center">
                      {scholar.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <Text as="h5" className="font-Raleway text-[#3A3A3A] font-semibold text-md">
                      {scholar.name}
                    </Text>
                    <Text as="p" className="text-xs text-DM Sans text-[#8D9D9A]">
                      {scholar.category && scholar.category.length > 0
                        ? scholar.category.join(', ')
                        : 'No categories available'}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Event */}

        <div className="mt-6">
          <Text as="h4" className="font-Raleway mb-2">
            About Event
          </Text>
          <Text as="p" className="text-[#959B9A]">
            {event.about}
          </Text>
        </div>

        {/* Questions */}
        <div className="bg-[#E7ECE980] rounded-lg mt-6 px-4 py-4">
          {/* Header Row */}
            <div className="flex flex-row justify-between items-center mb-6 gap-4">
            <Text as="h4" className="font-Raleway text-lg whitespace-nowrap">
              All Events Questions
            </Text>

            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <FilterDropdown />

              <Button
                variant="filled"
                className="font-Poppins text-sm h-7 px-4 py-1"
                onClick={() => setShowAskQuestion(true)}
              >
                Ask a Question
              </Button>
            </div>
          </div>

          {/* Questions Section */}
          <div className="mx-2 md:mx-6">
            {event.event_questions.length > 0 ? (
              <div className="space-y-6">
                {event.event_questions.map((question, index) => (
                  <div key={index}>
                    <div className="flex items-start mb-2">
                      <Avatar className="h-10 w-10 border rounded-full mr-3 flex items-center justify-center">
                        <AvatarImage src={`/images/${question.user?.image || 'default-avatar.png'}`} alt="Scholar" />
                        <AvatarFallback>{question.user?.name?.charAt(0).toUpperCase() || 'A'}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Text as="p" className="text-black font-semibold">
                          {question.user?.name || 'Anonymous User'}
                        </Text>
                        <div className="flex items-center gap-2 mt-1">
                          <Text as="p" className="text-[#7E908C]">
                            {question.question || 'No question text'}
                          </Text>
                          <div className="flex text-gray-500 text-xs">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{question.likes || 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interaction buttons per question */}
                    <div className="flex justify-between text-xs text-gray-500 px-1">
                      <div className="flex items-center bg-white rounded-lg px-2 py-1">
                        <Text as="p" className="text-black font-semibold">
                          Answer
                        </Text>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg text-center">
                <p className="text-md text-gray-500">No questions yet. Be the first to ask!</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination (if necessary) */}
        {event.event_questions.length > 5 && (
          <div className="mt-6 flex justify-center">
            <Pagination
              currentPage={1}
              totalPages={Math.ceil(event.event_questions.length / 5)}
              onPageChange={(page) => {
                console.log('Page changed to:', page);
              }}
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 flex justify-center border-t mt-12">
        <div className="flex justify-between items-center w-full px-6">
          <span className="text-md font-Segoe UI font-semibold text-black">Download The App</span>
          <div className="flex gap-4">
            <Image src="/images/appstore.svg" width={120} height={40} alt="App Store" />
            <Image src="/images/playstore.svg" width={120} height={40} alt="Play Store" />
          </div>
        </div>
      </footer>

      {/* Ask Question Modal */}
      {showAskQuestion && (
        <AskQuestion
          isOpen={showAskQuestion}
          onClose={() => setShowAskQuestion(false)}
          onSubmit={(data) => {
            console.log('Question submitted:', data);
            setShowAskQuestion(false);
          }}
        />
      )}
    </div>
  );
};

export default EventPage;

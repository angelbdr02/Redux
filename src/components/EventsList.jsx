import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents, joinEvent, leaveEvent } from "../redux/slices/eventsSlice";
import { fetchEvents } from "../redux/services/events";
import QRCodeGenerator from "./QRCodeGenerator";

const EventsList = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);
  const joinedEvents = useSelector(state => state.events.joinedEvents);

  useEffect(() => {
    fetchEvents().then(data => dispatch(setEvents(data)));
  }, [dispatch]);

  return (
    <div className="container py-6">
      <h2 className="text-2xl font-bold mb-4">Eventos</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map(event => (
          <li key={event.id} className="card">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.location}</p>
            <img
  src={`/${event.image}`} // Toma la imagen desde "public/eventos/"
  alt={event.title}
  className="w-full h-48 object-cover rounded-md shadow-md"
/>


            <button 
              className={`button mt-2 ${joinedEvents.some(e => e.id === event.id) ? 'button-danger' : 'button-primary'}`}
              onClick={() => joinedEvents.some(e => e.id === event.id) ? dispatch(leaveEvent(event.id)) : dispatch(joinEvent(event))}
            >
              {joinedEvents.some(e => e.id === event.id) ? "❌ Cancelar" : "✅ Apuntarse"}
            </button>

            {joinedEvents.some(e => e.id === event.id) && (
              <div className="flex justify-center mt-4">
                <QRCodeGenerator text={`http://localhost:5173/event/${event.id}`} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;

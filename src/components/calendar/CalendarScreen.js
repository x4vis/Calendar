import React from 'react';
import Navbar from '../ui/Navbar';

import moment from 'moment';
import 'moment/locale/es'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { messages } from '../../helpers/calendar-messages-es';

moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
  title: 'Cumpleaños del Jefe',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#fafafa',
}]

const CalendarScreen = () => {
  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
      />
    </div>
  )
}

export default CalendarScreen

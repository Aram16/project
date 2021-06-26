import React from 'react';
import NewsEvents from '../../components/events/eventscard';
import Navbar from '../../components/navbar';
import { eventsText } from '../../constants/events'
import image from '../../assets/logo/Image.png'
import activity from '../../assets/logo/Activity.png'
import './index.css';
import Footer from '../../components/footer';
// import EventCard from '../../components/events/cards'
import EventCard from '../../components/events/cards'

const eventNews = [
    {
        src: image, //image src
        activity: activity,
        title: 'News Title',
        type: 'News',
        time: '11.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
    {
        src: image, //image src
        activity: activity,
        title: 'Event Title',
        type: 'Event',
        time: '12.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '13.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
];

const EventsPage = () => {
    return (
        <div className="div-events">
            <Navbar />
            <NewsEvents
                eventsText={eventsText} 
            />
            <p className="related-news">RELATED NEWS</p>
            <div>
                <EventCard />
            </div>
            <Footer />
        </div>
    );
};
export default EventsPage;
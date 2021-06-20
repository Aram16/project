import React from 'react';
import AllNewsCard from '../../components/allnews/allnewsCard';
import Footer from '../../components/footer';
import image from '../../assets/logo/Image.png'
import activity from '../../assets/logo/Activity.png'
import './index.css';
import Navbar from '../../../armenia/components/navbar/index';

const news = [
    {
        src: image, //image src
        activity: activity,
        title: 'News Title',
        type: 'News',
        time: '11.06.2021',
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
        time: '12.06.2021',
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
        time: '13.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
];
const news2 = [
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '13.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '13.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '13.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
];
const news3 = [
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '23.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '22.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '21.06.2021',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
]
const AllNewsPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="news-h1">Նորություններ</h1>
            <p className="news-inovation">Նորարարությունների էթնիկ տարածաշրջանային կենտրոն</p>
            <div className="root">
                {news.map((item) => {
                    return (
                        <AllNewsCard
                            src={item.src}
                            type={item.type}
                            time={item.time}
                            title={item.title}
                            text={item.text}
                        />
                    );
                })}
            </div>
            <div className="root">
                {news2.map((item) => {
                    return (
                        <AllNewsCard
                            src={item.src}
                            type={item.type}
                            time={item.time}
                            title={item.title}
                            text={item.text}
                        />
                    );
                })}
            </div>
            <div className="root">
                {news3.map((item) => {
                    return (
                        <AllNewsCard
                            src={item.src}
                            type={item.type}
                            time={item.time}
                            title={item.title}
                            text={item.text}
                        />
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default AllNewsPage;
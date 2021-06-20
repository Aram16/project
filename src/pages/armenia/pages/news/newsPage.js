import React from 'react';
import AllNewsCard from '../../components/allnews/allnewsCard';
import Footer from '../../components/footer';
import image from '../../assets/logo/Image.png'
import activity from '../../assets/logo/Activity.png'
import './newsPage.css';
import NewsNavbar from './welcomeNavbar/welcomNavbar';
import { Link } from 'react-router-dom';

const news = [
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
    
const NewsPage = () => {
    return (
        <div id="news">
            <NewsNavbar />
            <h1 className="news-h1">Նորություններ</h1>
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
            <div className="all-news">
                <Link to="/am/allNews">
                    <a href="" >Բոլոր նորությունները և իրադարձությունները</a>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default NewsPage;
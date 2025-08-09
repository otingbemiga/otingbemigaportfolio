/**
* @copyright 2024 otingbemiga
* @license Apache-2.0
*/ 


/**
* Node modules
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
* Register gsap plugins
*/

gsap.registerPlugin(useGSAP, ScrollTrigger );


/**
* Components
*/
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      
      content: 'Creative and highly skilled! Developed a modern, user-friendly site that went beyond expectations. Excellent communication throughout.',
      name: 'Victoria Ibikunle',
      imgSrc: '/img/people-4.png',
      company: 'Worldbesthub'
    },
    {
      content: 'Exceptional web development! Delivered a highly responsive and seamless website with clean, efficient code and an outstanding user experience.',
      name: 'Dele Oshibotu',
      imgSrc: '/img/people-2.png',
      company: 'BamishayTravels'
    },
    {
      content: 'Outstanding developer! Delivered a highly robust site with flawless functionality. Efficient, meticulous, and detail-oriented.',
      name: 'Adebayo Adebusoye',
      imgSrc: '/img/people-3.png',
      company: 'Prime Fidelity LLC'
    },
    {
      
      content: 'Impressive work! Lightning-fast load times, intuitive design, and seamless backend integration. Highly recommended',
      name: 'Dr. Charles',
      imgSrc: '/img/people-1.png',
      company: 'LfcUpdate'
    },
    {
      content: 'Professional and timely delivery! Created a polished design with a seamless user experience. A top-tier developer.',
      name: 'Pst. Onimisi',
      imgSrc: '/img/people-5.png',
      company: 'Onimisi Bakery'
    },
    {
      content: 'Excellent execution! Delivered high-quality code, a responsive design, and showcased exceptional problem-solving skills.',
      name: 'Eniola Emmanuel',
      imgSrc: '/img/people-6.png',
      company: 'TheFriendCity'
    }
  ];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide', 
        start: '-200% 10%',
        end: '300% 80%',
        scrub: true
      },
      x: '-1000'
    })

  });

  return (
    <section
        id="reviews" 
        className="section overflow-hidden"
        >
        
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                Feedback From Our Customers
            </h2>

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
              {reviews.map(({content, name, imgSrc, company}, key) =>(
                <ReviewCard 
                
                key={key}
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                />
              ))}
            </div>

        </div>
    </section>
  )
}

export default Review
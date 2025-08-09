/**
* @copyright 2024 otingbemiga
* @license Apache-2.0
*/ 


/**
* Component
*/

import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/image/html-5.png',
      label: 'HTML5',
      desc: 'User Interface'
    },
    {
      imgSrc: '/image/css-3.png',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/image/tailwind.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/image/js.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/image/react.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/image/nextjs.jpg',
      label: 'Nextjs',
      desc: 'Library'
    },
    {
      imgSrc: '/image/nodejs.png',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/image/python.png',
      label: 'Python',
      desc: 'Interaction'
    },
    {
      imgSrc: '/image/django.png',
      label: 'Django',
      desc: 'Framework'
    },
    {
      imgSrc: '/image/docker.png',
      label: 'Docker',
      desc: 'running applications by using containers'
    },
    {
      imgSrc: '/image/mysql.png',
      label: 'MySQL',
      desc: 'Database'
    },
   
    {
      imgSrc: '/image/firebase.png',
      label: 'Firebase',
      desc: 'Database'
    },
    {
      imgSrc: '/image/supabase.png',
      label: 'Supabase',
      desc: 'Database'
    },
    {
      imgSrc: '/image/apprite.png',
      label: 'Apprite',
      desc: 'Database'
    },
    {
      imgSrc: '/image/payload.png',
      label: 'Payloadcms',
      desc: 'Database'
    },
    {
      imgSrc: '/image/photoshop.png',
      label: 'PhotoShop',
      desc: 'Design tool'
    },
    {
      imgSrc: '/image/corel.png',
      label: 'CorelDraw',
      desc: 'Design tool'
    },
    {
      imgSrc: '/image/sentry.png',
      label: 'Sentry',
      desc: 'trace very slow transaction'
    },
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                 Essential Tools That Drive My Success
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                 Uncover the tools and technologies I use to build high-performance, exceptional websites and applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes='reveal-up'
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
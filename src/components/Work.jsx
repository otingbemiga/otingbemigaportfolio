/**
* @copyright 2024 otingbemiga
* @license Apache-2.0
*/ 


/**
* Components
*/


import ProjectCard from './ProjectCard';



const works = [
    {
      imgSrc: '/img/project-1.png',
      title: 'Full stack web blog',
      tags: ['API', 'Auth', 'Development'],
      projectLink: 'https://lfcupdate.com/'
    },
    {
      imgSrc: '/img/project-2.png',
      title: 'Personal Finance app',
      tags: ['API', 'Javascript'],
      projectLink: 'https://otingbemiga-personalfinance.netlify.app/'
    },
    {
      imgSrc: '/img/project-5.png',
      title: 'Forex Trading Platform',
      tags: ['API', 'Database'],
      projectLink: 'https://otetraders.com/'
    },
    {
      imgSrc: '/img/project-4.png',
      title: 'Image editor App',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://easyimageditor.netlify.app/'
    },
    {
      imgSrc: '/img/project-3.png',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://thefriendscity-farm.netlify.app/'
    },
    {
      imgSrc: '/img/project-6.png',
      title: 'Web App for coaching',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://onefirstech.netlify.app/'
    },
  ];

export const Work = () => {
  return (
    <section id="work"
     className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                Highlights from My Portfolio
            </h2>

            <div className="grid gap-x-4 gay-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) =>(
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

/**
* @copyright 2024 otingbemiga
* @license Apache-2.0
*/ 


/**
* Node modules
*/



const aboutItems = [
    {
      label: 'Project done',
      number: 63
    },
    {
      label: 'Years of experience',
      number: 4
    }
  ];


const About = () => {
  return (
   <section
   id="about"
   className="section"
   >
    <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m Gbenga Daniel, a professional software developer with a passion for building scalable, visually stunning, and highly functional web applications. With a unique blend of creativity and technical expertise, I turn your ideas into digital masterpieces that are not only beautiful but also optimized for performance and scalability. Let’s bring your vision to life and elevate your online presence.

            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({ label, number}, key) =>(
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-pink-400 font-semibold md:text-3xl">+</span>
                        </div>

                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
            }

            <img 
            src="/images/logo.jpg" 
            alt="Logo" 
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]" 
            />
            </div>
        </div>

    </div>
   </section>
  )
}

export default About
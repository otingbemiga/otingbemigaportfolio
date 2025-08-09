/**
* @copyright 2024 otingbemiga
* @license Apache-2.0
*/ 


/**
* Components
*/

import { ButtonPrimary, ButtonOutline } from "./Button"

const Hero = () => {
  return (
   <section 
    id="home" 
    className="pt-28 lg:pt-36"
   >

    <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
            <div className="flex items-center gap-3">
                <figure className="img-box w-9 h-9 rounded-lg">
                    <img 
                    src="/images/gbenga.jpg" 
                    width={50}
                    height={40}
                    alt="Gbenga portrait" 
                    className="img-cover" 
                    />
                </figure>

                <div className="flex items-center gap-1.5 text-pink-500 animate-pulse-color text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                    </span>

                    Available for work
                </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-20ch lg:max-w-[15] mt-5 mb-8 lg:mb-10 ">
            Designing Scalable, Future-Proof Web Experiences That Transform Businesses
            </h2>

            <div className="flex items-center gap-3">
                <ButtonPrimary 
                  action='download'
                  label="Download CV"
                  icon="download"
                  classes='my-button-class'
                />

                <ButtonOutline 
                    href="#about"
                    label="scroll down"
                    icon="arrow_downward"
                />
            </div>
        </div>

        <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-pink-400 via-25% via-pink-400/40 to-65% rounded-[60px] overflow-hidden">
                <img 
                    src="/images/Gbe2.png" 
                    width={600}
                    height={400}
                    alt="Gbenga Daniel" 
                    className="w-full"
                />
            </figure>
        </div>

    </div>

   </section>
  )
}

export default Hero
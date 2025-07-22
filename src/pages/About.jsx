import { useEffect } from "react";
import "../App.css";
import { Divider } from "@heroui/react";

function About() {
  useEffect(() => {
    document.title = "Mattsmatt | About";
  }, []);

  return (
    <>
      <h1
        className="font-avantgarde-demi"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        About
      </h1>
      <div
        className="flex flex-col"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1250"
      >
        <div className="my-16">
          <div className="text-3xl pb-2 font-avantgarde-demi">
            Hello, I'm Matthew 👋
          </div>
          <Divider className="my-4 bg-gray-300" />
          <div className="pt-4">
            I am a Computer Science graduate, specializing in software
            engineering, capable of transforming calamity to clarity with an
            urgency to beat the clock. I thrive in the heat of chaos, delivering
            solutions that work, not just workarounds. After all, uncertainty is
            just another opportunity.
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
        >
          <div className="text-3xl pb-2 font-avantgarde-demi">Skills</div>
          <Divider className="my-4 bg-gray-300" />
          <div className="text-xl">
            <div className="py-4 ">
              <div>Frontend</div>
              <img
                src="https://go-skill-icons.vercel.app/api/icons?i=dotnet,react,tailwind,html,css,js"
                alt="Frontend Skills"
                className="pt-2"
                loading="lazy"
              />
            </div>
            <div className="py-4">
              <div>Backend</div>
              <img
                src="https://go-skill-icons.vercel.app/api/icons?i=cs,laravel,php"
                alt="Backend Skills"
                className="pt-2"
                loading="lazy"
              />
            </div>
            <div className="py-4">
              <div>Database</div>
              <img
                src="https://go-skill-icons.vercel.app/api/icons?i=mysql"
                alt="Database Skills"
                className="pt-2"
                loading="lazy"
              />
            </div>
            <div className="py-4 pb-0">
              <div>Others</div>
              <img
                src="https://go-skill-icons.vercel.app/api/icons?i=java,python,cpp,figma,unity,github,git"
                alt="Others Skills"
                className="pt-2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

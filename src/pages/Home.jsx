import { useEffect } from "react";
import "../App.css";
import { Tabs, Tab, Card, CardBody, Button } from "@heroui/react";
import { jobs } from "../json/jobs.js";
import { schools } from "../json/schools.js";
import JobItem from "../components/JobItem.jsx";
import SchoolItem from "../components/SchoolItem.jsx";
import portrait from "../assets/portrait/photo.webp";
import resume from "../assets/resume/matthew-avrillio-cv.pdf";

function Home() {
  useEffect(() => {
    document.title = "Mattsmatt | Home";
  }, []);

  return (
    <>
      <h1
        className="font-avantgarde-demi"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        Home
      </h1>
      <div
        className="my-16 flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1250"
      >
        <img
          src={portrait}
          alt="Photo"
          className="rounded-lg"
          width="175"
          loading="lazy"
        />
        <div className="flex flex-col gap-8">
          <div className="title text-balance text-4xl sm:text-5xl font-medium">
            Hi, I'm Matthew 👋
          </div>
          <div className="text-balance text-xl flex gap-6 items-center">
            <div>
              <svg
                width="50px"
                height="50px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#f0f0f0"
              >
                <path
                  d="M8 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H16M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7M8 7H16"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-semibold opacity-90">
                Software Engineer
              </div>
              <div className="text-medium opacity-80">
                Based in Jakarta, Indonesia
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href={resume}
              target="_blank"
              name="Matthew Avrillio - CV"
              rel="noopener noreferrer"
            >
              <Button radius="md" className="flex gap-2" size="md">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 10L16 10"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 18L16 18"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8 14L12 14"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Resume</span>
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/matthew-avrillio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              <svg
                width="30px"
                height="30px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#f0f0f0"
              >
                <path
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 17V13.5V10"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7 7.01L7.01 6.99889"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/mattsmatt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              <svg
                width="30px"
                height="30px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#f0f0f0"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>

            <a
              href="mailto:mattavrillio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              <svg
                width="30px"
                height="30px"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#f0f0f0"
              >
                <path
                  d="M7 9L12 12.5L17 9"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                  stroke="#f0f0f0"
                  stroke-width="1.5"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="flex w-full flex-col"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
      >
        <Tabs fullWidth aria-label="Options" size="md" variant="bordered">
          <Tab key="work" title="Work">
            {jobs.map((job) => (
              <Card className="bg-transparent text-inherit border-medium border-default-200">
                <CardBody>
                  <JobItem job={job} />
                </CardBody>
              </Card>
            ))}
          </Tab>
          <Tab key="education" title="Education">
            {schools.map((school) => (
              <Card className="bg-transparent text-inherit border-medium border-default-200">
                <CardBody>
                  <SchoolItem school={school} />
                </CardBody>
              </Card>
            ))}
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Home;

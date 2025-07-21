import "../App.css";
import { Chip, Button } from "@heroui/react";
import { getImageUrl } from "../utils/image-util.js";

function ProjectItem({ project }) {
  return (
    <>
      <div
        className={`flex flex-col items-start justify-center lg:gap-5 gap-3 py-8`}
      >
        <div>
          <img
            src={getImageUrl(project.image, "project")}
            alt=""
            width={"100%"}
          />
        </div>
        <div>
          <div>
            <h2>{project.name}</h2>
          </div>
          <div>
            <ul className="flex gap-2 my-2">
              {project.tools.map((tool) => (
                <li>
                  <Chip variant="faded" className="bg-[#242424] text-[#f0f0f0]">
                    {tool}
                  </Chip>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 py-3">
            <div className={project.sourceCode == "" ? "hidden" : "block"}>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button radius="md" className="flex gap-2" size="md">
                  <svg
                    width="20px"
                    height="20px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Github</span>
                </Button>
              </a>
            </div>
            <div className={project.website == "" ? "hidden" : "block"}>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button radius="md" className="flex gap-2" size="md">
                  <svg
                    width="20px"
                    height="20px"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#000000"
                  >
                    <path
                      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.62964 15.5H12"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2.62964 8.5H21.3704"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z"
                      stroke="#000000"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  <span>Website</span>
                </Button>
              </a>
            </div>
            <div className={project.app == "" ? "hidden" : "block"}>
              <a href={project.app} target="_blank" rel="noopener noreferrer">
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
                      d="M2 19V5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19Z"
                      stroke="#000000"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M2 7L22 7"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5 5.01L5.01 4.99889"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 5.01L8.01 4.99889"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M11 5.01L11.01 4.99889"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>App</span>
                </Button>
              </a>
            </div>
          </div>
          <div>
            <ul className="list-disc ml-6">
              {project.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;

import "../App.css";
import { getImageUrl } from "../utils/image-util.js";
import { Button } from "@heroui/react";

function JobItem({ job }) {
  const options = { month: "short", year: "numeric" };
  return (
    <>
      <div className="flex flex-col gap-5 md:items-start w-full md:justify-between py-8 px-4 md:flex-row">
        <div className="w-1/2 m-auto md:w-[10%] md:m-0">
          <img src={getImageUrl(job.image, "job")} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-[85%]">
          <div>
            <h2>{job.companyName}</h2>
          </div>
          <div className="opacity-75">
            <div>{job.position}</div>
          </div>
          <div>
            <div>
              {new Date(job.dateStart).toLocaleString("en-US", options) +
                " - " +
                new Date(job.dateEnd).toLocaleString("en-US", options)}
            </div>
          </div>
          <div>
            <ul className="list-disc ml-6 my-6">
              {job.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
          </div>
          <div className={job.importantLinks.length == 0 ? "hidden" : "block"}>
            <ul className="flex gap-2 my-2">
              {job.importantLinks.map((link) => (
                <a href={link.link} target="_blank" rel="noopener noreferrer">
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
                    <span>{link.name}</span>
                  </Button>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobItem;

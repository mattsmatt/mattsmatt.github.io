import "../App.css";
import {} from "@heroui/react";

function Footer() {
  return (
    <>
      <footer className="mx-auto max-w-3xl px-8 py-6">
        <section className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-medium">Follow me @ my socials</div>
            <div>&copy; 2025 mattsmatt.github.io</div>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/matthew-avrillio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition delay-50 duration-200 ease-in-out"
            >
              <svg
                width="45px"
                height="45px"
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
                width="45px"
                height="45px"
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
                width="45px"
                height="45px"
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
        </section>
      </footer>
    </>
  );
}

export default Footer;

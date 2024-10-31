import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import AboutDialog from "@/components/AboutDialog";

const data = {
  title: "Full Stack Developer",
  description: "Build web applications using Remix.",
  experience: "1-3 years",
  skills: "JavaScript, React, Remix",
  min_salary: "50,000",
  max_salary: "80,000",
  active: true,
  city: "Albuquerqueo",
  email: "example@mail.com",
  remote: false,
  employment_type: "Full-time",
  company: {
    name: "Tech Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo nisi, corporis accusamus perspiciatis reprehenderit cumque libero iste delectus adipisci facere quibusdam. Sit alias itaque similique laborum voluptatem, corrupti numquam?",
    website: "https://profinder-hack.netlify.app/",
    email: "example@mail.com",
    phone: "1234567890",
    img: "/placeholder-user_2.jpg",
  },
};
// const data = {
//   fullName: "John Doe",
//   age: 25,
//   workExperience: [
//     {
//       company: "Tech Company",
//       startDate: "2020-01-15",
//       endDate: "2022-05-20",
//       jobDescription:
//         "Worked as a full-stack developer, building web applications using Remix.",
//     },
//   ],
//   education: "Bachelor of Computer Science",
//   placesOfStudy: ["MIT", "Community College"],
//   skills: ["JavaScript", "React", "Remix"],
//   expectedSalary: 50000,
//   typeOfEmployment: "Full-time",
//   img: "/placeholder-user_2.jpg",
//   aboutMyself:
//     "I am a passionate developer with a strong interest in web technologies and software development.",
//   phone: "1234567890",
//   email: "example@mail.com",
//   viewed: 123,
//   suitable: 123,
// };

const vacancyPage = () => {
  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="rounded-xl">
        <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
          <CardHeader className="relative border-orange-300 border-r-[9px] p-0 bg-orange-500 rounded-t-xl">
            <div className=" flex flex-col border-white rounded-sm m-5">
              <h1 className="flex text-5xl text-white font-semibold mt-5 ml-5 gap-2">
                Vacancy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m6 17 5-5-5-5" />
                  <path d="m13 17 5-5-5-5" />
                </svg>
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                color="white"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute top-4 right-4"
              >
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M15 18a3 3 0 1 0-6 0" />
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
                <circle cx="12" cy="13" r="2" />
              </svg>
              <div className="pl-5 flex items-center space-x-4 p-2 ml-2 mb-0 pb-0">
                <div>
                  <Image
                    src={data.company.img}
                    alt="Profile picture"
                    width={200}
                    height={200}
                    className="w-36 h-w-36 object-cover rounded-full cursor-pointer"
                  />
                </div>
                <div className="p-5 flex flex-col">
                  <div className="flex gap-2 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="white"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=""
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" />
                      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
                      <path d="M16 4h2a2 2 0 0 1 1.73 1" />
                      <path d="M8 18h1" />
                      <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                    </svg>
                    <p className="text-2xl text-white font-semibold">{` ${data.company.name}`}</p>
                    <AboutDialog
                      label="About us"
                      text={data.company.description}
                    />
                  </div>
                  <div className="border-t-2 border-white p-5">
                    <div className="flex">
                      {/* <GoTriangleLeft
                        color="white"
                        size={24}
                        className="mt-1"
                      /> */}
                    </div>
                    <div className="flex">
                      <p className="text-white text-base font-semibold">
                        {"City: "}
                      </p>
                      <p className="text-white text-base ml-2">{data.city}</p>
                    </div>
                    {data.company.website && (
                      <div className="flex">
                        <p className="text-white text-base font-semibold">
                          {"Our website: "}
                        </p>
                        <a
                          href={data.company.website}
                          target="_blank"
                          className="text-white text-base ml-2 hover:underline"
                        >
                          {data.company.website}
                        </a>
                      </div>
                    )}
                    {data.company.email && data.company.phone && (
                      <div className="flex">
                        <p className="text-white text-base">{`${data.company.email}, ${data.company.phone}`}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Image
                src="/briefcase_1.png"
                alt=""
                width={250}
                height={250}
                className="absolute bottom-0 right-5 "
              />
              <div className="absolute bottom-1 left-6 flex">
                {/* <p className="text-md text-black font-medium text-center">{`Suitable vacancies: ${data.suitable} • Viewed: ${data.viewed}`}</p> */}
              </div>
            </div>
          </CardHeader>
          <div>
            <section className="border-b-2 border-gray-300 p-5">
              <h2 className="text-xl font-semibold mb-4 flex gap-2">
                Job
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </h2>
              <Card className="mb-4">
                <CardContent className="flex flex-col p-4">
                  <h3 className="text-lg font-semibold mb-2 flex gap-2">
                    {data.title}{" "}
                    {data.active ? (
                      <Badge className="bg-orange-500">Active</Badge>
                    ) : (
                      <Badge>Inactive</Badge>
                    )}
                  </h3>
                  <p className="text-gray-500">
                    from <span className="text-black">{data.min_salary}</span>{" "}
                    to <span className="text-black">{data.max_salary}</span> per
                    month
                  </p>
                  <p className="text-gray-500">
                    Required experience:{" "}
                    <span className="text-black">{data.experience}</span>
                  </p>
                  <p className="text-gray-500">
                    Skills: <span className="text-black">{data.skills}</span>
                  </p>
                  <p className="text-gray-500">
                    Type of employment:{" "}
                    <span className="text-black">{data.employment_type}</span>
                  </p>
                  <p className="text-gray-500 flex">
                    Remote:{" "}
                    {data.remote ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        color="orange"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="12"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="2" x2="22" y1="20" y2="20" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    )}
                  </p>
                  <h3 className="text-lg font-semibold mt-6 flex gap-2">
                    Description:
                  </h3>
                  <Card>
                    <CardContent className="flex flex-col p-4 justify-center">
                      {data.description}
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </section>
            <section className="p-5">
              <h2 className="flex text-xl font-semibold mb-4 gap-2">
                Contacts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 2v2" />
                  <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                  <path d="M8 2v2" />
                  <circle cx="12" cy="11" r="3" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                </svg>
              </h2>
              <Card className="mb-4">
                <CardContent className="flex flex-col gap-2 p-4">
                  <Label className="text-gray-500">Email</Label>
                  <p>{data.email}</p>
                </CardContent>
              </Card>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default vacancyPage;

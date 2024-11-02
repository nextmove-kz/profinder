"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import {
  vacancyCreationSchema,
  VacancyCreationSchema,
} from "@/lib/formValidationSchemas";
import { Toggle } from "@/components/ui/toggle";
import { createVacancy } from "@/api/vacancy";

const VacancyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VacancyCreationSchema>({
    resolver: zodResolver(vacancyCreationSchema),
  });

  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>("");

  const onSubmit = async (data: VacancyCreationSchema) => {
    try {
      console.log("submitting data", data);
      const vacancy = await createVacancy({
        title: data.title,
        city: data.city,
        experience: data.experience,
        skills: data.skills,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
        employmentType: data.employmentType,
        remote: data.remote,
        active: data.active,
        email: data.email,
        description: data.description,
        company: {},
      });
      console.log("success", vacancy);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && skills.length < 16) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="mx-auto p-6 bg-gray-100 min-h-screen">
      <form
        className="flex flex-col gap-6 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="rounded-xl">
          <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
            <CardHeader className="relative border-orange-300 border-r-[9px] p-0 bg-orange-500 rounded-t-xl">
              <div className="flex flex-col border-white rounded-sm m-5">
                <h1 className="flex text-5xl text-white font-semibold mt-2 ml-5 gap-2">
                  Create Your Vacancy
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
              </div>
            </CardHeader>
            <div>
              <section className=" border-b-2 border-gray-300 p-5">
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
                  <CardContent className="flex flex-col gap-2 p-4">
                    <Label>Title</Label>
                    <input
                      type="text"
                      {...register("title")}
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      placeholder="mcDonalds employee"
                    />
                    {errors.title?.message && (
                      <p className="text-xs text-red-400">
                        {errors.title.message.toString()}
                      </p>
                    )}
                    <Label>City</Label>
                    <input
                      type="text"
                      {...register("city")}
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      placeholder="mcDonalds employee"
                    />
                    {errors.city?.message && (
                      <p className="text-xs text-red-400">
                        {errors.city.message.toString()}
                      </p>
                    )}
                    <Label>Minimal Salary</Label>
                    <input
                      type="number"
                      {...register("minSalary")}
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      placeholder="Min Salary"
                    />
                    {errors.minSalary?.message && (
                      <p className="text-xs text-red-400">
                        {errors.minSalary.message.toString()}
                      </p>
                    )}
                    <Label>Max Salary</Label>
                    <input
                      type="number"
                      {...register("maxSalary")}
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      placeholder="Max Salary"
                    />
                    {errors.maxSalary?.message && (
                      <p className="text-xs text-red-400">
                        {errors.maxSalary.message.toString()}
                      </p>
                    )}
                    <Label>Work Experience</Label>
                    <select
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      {...register("experience")}
                    >
                      <option value="none">none</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-6">3-6 years</option>
                      <option value="6+">6+ years</option>
                    </select>
                    {errors.experience?.message && (
                      <p className="text-xs text-red-400">
                        {errors.experience.message.toString()}
                      </p>
                    )}
                    <Label>Type of Employment</Label>
                    <select
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      {...register("employmentType")}
                    >
                      <option value="full_time">Full-time</option>
                      <option value="part_time">Part-time</option>
                      <option value="project">Project</option>
                      <option value="voluntary">Voluntary</option>
                      <option value="internship">Internship</option>
                    </select>
                    {errors.employmentType?.message && (
                      <p className="text-xs text-red-400">
                        {errors.employmentType.message.toString()}
                      </p>
                    )}
                    <Label>Remote</Label>
                    <label className="switch">
                      <input type="checkbox" {...register("remote")} />
                      <span className="slider round"></span>
                    </label>
                    {errors.remote?.message && (
                      <p className="text-xs text-red-400">
                        {errors.remote.message.toString()}
                      </p>
                    )}
                    <Label>Leave an email to contact with</Label>
                    <input
                      type="text"
                      {...register("email")}
                      className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                      placeholder="Email"
                    />
                    {/* <Toggle>Remote</Toggle> */}
                    <div className="mt-4">
                      <Label>Description</Label>
                      <Textarea
                        className="min-h-[100px]"
                        {...register("description")}
                        placeholder="Making the best burgers in the world"
                      />
                      {errors.description?.message && (
                        <p className="text-xs text-red-400">
                          {errors.description.message.toString()}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="border-gray-300 p-5">
                <h2 className="flex text-xl font-semibold mb-4 gap-2">
                  Skills
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </h2>
                <Label>Skills</Label>
                <textarea
                  className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
                  {...register("skills")}
                  placeholder="Enter skills"
                />
                {errors.skills?.message && (
                  <p className="text-xs text-red-400">
                    {errors.skills.message.toString()}
                  </p>
                )}
              </section>

              <Button
                className="w-full mt-5 rounded-b-xl bg-orange-500"
                type="submit"
              >
                Create Vacancy
              </Button>
            </div>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;

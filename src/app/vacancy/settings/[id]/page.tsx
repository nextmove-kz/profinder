"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getVacancyById, updateVacancy } from "@/api/vacancy";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  vacancySettingsSchema,
  VacancySettingsSchema,
} from "@/lib/formValidationSchemas";

interface Vacancy {
  title: string;
  description: string;
  experience: string;
  skills: string;
  minSalary: number;
  maxSalary: number;
  active: boolean;
  city: string;
  email: string;
  remote: boolean;
  employment_type: string;
  company: {
    name: string;
    description: string;
    website: string;
    email: string;
    phone: string;
    img: string;
  };
}

const vacancySettings = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VacancySettingsSchema>({
    resolver: zodResolver(vacancySettingsSchema),
  });
  const id = useParams<{ id: string }>().id;
  const [vacancy, setVacancy] = useState<Vacancy>();
  const router = useRouter();

  const experienceOptions = ["none", "1-3", "3-6", "6+"] as const;
  type ExperienceType = (typeof experienceOptions)[number];
  const employmentOptions = [
    "full_time",
    "part_time",
    "project",
    "voluntary",
    "internship",
  ] as const;
  type EmploymentType = (typeof employmentOptions)[number];

  useEffect(() => {
    if (!id) return;
    const fetchVacancy = async () => {
      try {
        console.log("Fetching vacancy data:", id);
        const fetchedData = await getVacancyById(id as string);
        console.log("Vacancy data:", fetchedData);

        const formattedData = (vacancy: any): Vacancy => ({
          title: vacancy.title,
          description: vacancy.description,
          experience: experienceOptions.includes(vacancy.experience)
            ? vacancy.experience
            : "none",
          skills: vacancy.skills,
          minSalary: vacancy.minSalary,
          maxSalary: vacancy.maxSalary,
          active: vacancy.active,
          city: vacancy.city,
          email: vacancy.email,
          remote: vacancy.remote,
          employment_type: vacancy.employmentType,
          company: {
            name: vacancy.expand.company.name,
            description: vacancy.expand.company.description,
            website: vacancy.expand.company.website,
            email: vacancy.expand.company.email,
            phone: vacancy.expand.company.phone,
            img: vacancy.expand.company.img,
          },
        });
        const formattedVacancy = formattedData(fetchedData);
        console.log("formatted data:", formattedVacancy);
        setValue("email", formattedVacancy.email);
        setValue("title", formattedVacancy.title);
        setValue("description", formattedVacancy.description);
        setValue("minSalary", formattedVacancy.minSalary);
        setValue("maxSalary", formattedVacancy.maxSalary);
        const experience = experienceOptions.includes(
          formattedVacancy.experience as ExperienceType
        )
          ? (formattedVacancy.experience as ExperienceType)
          : "none";

        setValue("experience", experience);
        setValue("skills", formattedVacancy.skills);
        const employmentType = employmentOptions.includes(
          formattedVacancy.employment_type as EmploymentType
        )
          ? (formattedVacancy.employment_type as EmploymentType)
          : "full_time";

        setValue("employmentType", employmentType);
        setValue("city", formattedVacancy.city);
        setValue("remote", formattedVacancy.remote);
        setValue("active", formattedVacancy.active);
        setVacancy(formattedVacancy);
      } catch (error) {
        console.error("Failed to fetch vacancy:", error);
      }
    };

    fetchVacancy();
  }, [id]);

  const onSubmit = async (data: VacancySettingsSchema) => {
    console.log("submiting data", data);
    try {
      const updatedVacancyData = await updateVacancy(id as string, data);
      console.log("Updated vacancy data:", updatedVacancyData);
      router.push(`/vacancy/${id}`);
    } catch (error) {
      console.error("Error updating vacancy:", error);
    }
  };

  if (!vacancy)
    return <p className="flex justify-center items-center">Loading...</p>;
  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl items-center justify-center"
      >
        <Card className="w-[550px] mt-20">
          <CardContent className="flex flex-col gap-2 p-4">
            <h1 className="text-lg font-semibold mb-4 flex gap-2">
              Settings
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
                className="flex items-center justify-center"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </h1>
            <Label>Title</Label>
            <input
              type="text"
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("title")}
              placeholder="Title"
            />
            {errors.title?.message && (
              <p className="text-xs text-red-400">
                {errors.title.message.toString()}
              </p>
            )}
            <Label>Minimal Salary</Label>
            <input
              type="number"
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("minSalary")}
              placeholder="MinSalary"
            />
            {errors.minSalary?.message && (
              <p className="text-xs text-red-400">
                {errors.minSalary.message.toString()}
              </p>
            )}
            <Label>Max Salary</Label>
            <input
              type="number"
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("maxSalary")}
              placeholder="MaxSalary"
            />
            {errors.maxSalary?.message && (
              <p className="text-xs text-red-400">
                {errors.maxSalary.message.toString()}
              </p>
            )}
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
            <Label>Active</Label>
            <label className="switch">
              <input type="checkbox" {...register("active")} />
              <span className="slider round"></span>
            </label>
            {errors.active?.message && (
              <p className="text-xs text-red-400">
                {errors.active.message.toString()}
              </p>
            )}
            <Label>Leave an email to contact with</Label>
            <input
              type="text"
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email?.message && (
              <p className="text-xs text-red-400">
                {errors.email.message.toString()}
              </p>
            )}
            <Label>City</Label>
            <input
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("city")}
              placeholder="City"
            />
            {errors.city?.message && (
              <p className="text-xs text-red-400">
                {errors.city.message.toString()}
              </p>
            )}
            <Label>Description</Label>
            <textarea
              className="ring-[1px] ring-gray-300 p-2 rounded-md text-sm w-full min-h-[100px]"
              {...register("description")}
              placeholder="Description"
            />
            {errors.description?.message && (
              <p className="text-xs text-red-400">
                {errors.description.message.toString()}
              </p>
            )}
            <Button type="submit">Save Changes</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default vacancySettings;

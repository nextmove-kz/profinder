import pocketbase from "./pocketbase";

export const listAllVacancy = async () => {
  const records = await pocketbase.collection("vacancy").getFullList({
    sort: "+created",
  });
  return records;
};

// export const searchVacancy = async (query: string, city: string) => {
//   let filter;
//   if (!query) {
//     filter = `city ~ "${city}"`;
//   } else {
//     filter = `title ~ "${query}" && city ~ "${city}"`;
//   }

//   const records = await pocketbase.collection("vacancy").getFullList({
//     sort: "+created",
//     filter: filter,
//   });
//   return records;
// };
export const searchVacancy = async (
  query: string,
  city: string,
  experience: string,
  employment_type: string
) => {
  let filter = [];

  if (query) {
    filter.push(`title ~ "${query}"`);
  }
  if (city) {
    filter.push(`city ~ "${city}"`);
  }
  if (experience) {
    filter.push(`experience ~ "${experience}"`);
  }
  if (employment_type) {
    filter.push(`employment_type ~ "${employment_type}"`);
  }

  const filterString = filter.join(" && ");

  const records = await pocketbase.collection("vacancy").getFullList({
    sort: "+created",
    filter: filterString,
  });
  return records;
};

// export const listAvailableLocations = async () => {
//   const records = await pocketbase.collection("vacancy").getFullList({
//     sort: "+created",
//   });
//   const cities = records.map((record) => record.city);
//   return [...new Set(cities)];
// };

export const vacancyById = async (id: string) =>
  await pocketbase
    .collection("vacancy")
    .getOne(id, { expand: "", cache: "no-cache" });


export const createVacancy = async (
  { title, city, experience, skills, minSalary, maxSalary, employmentType, remote, active, email, description, company }: any
) => {

  try {
    const vacancy = await pocketbase.collection("vacancy").create(
      {
        title,
        city,
        experience,
        skills,
        minSalary,
        maxSalary,
        employmentType,
        remote,
        active,
        email,
        description,
        company,
      },
    );
    return vacancy;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const updateVacancy = async (id: string, data: any) => {
  try {
    const vacancy = await pocketbase.collection("vacancy").update(id, data);
    return vacancy;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const deleteVacancy = async (id: string) => {
  const vacancy = await pocketbase.collection("vacancy").delete(id);
  return vacancy;
};

export const getVacancyById = async (id: string) => {
  try {
    const vacancy = await pocketbase.collection("vacancy").getOne(id, {
      expand: "company",
    });
    console.log("Vacancy data:", vacancy);
    return vacancy;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const VacancyById = async (id: string) => {
  try {
    const vacancy = await pocketbase.collection("vacancy").getOne(id
    );
    console.log("Vacancy data:", vacancy);
    return vacancy;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
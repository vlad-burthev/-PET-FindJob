export interface I_Vacancy {
  id: string;
  title: string;
  salaryRange: string;
  company: string;
  datePosted: string;
  description: string;
  employmentType: string;
  image: string;
  jobProviders: T_JobProvider[];
  location: string;
}

export type T_JobProvider = {
  jobProvider: string;
  url: string;
};

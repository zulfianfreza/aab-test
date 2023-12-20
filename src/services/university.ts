import { University } from "@/@types";
import axiosIntance from "@/lib/axios-instance";

export const getUniversities = async (): Promise<University[]> => {
  const { data } = await axiosIntance.get<University[]>(
    "/search?country=indonesia"
  );

  return data;
};

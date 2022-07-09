import axios from "axios";

export const fetchProfessions = async () => {
  const {data} = await axios.get("/api/professions")
  return data
}

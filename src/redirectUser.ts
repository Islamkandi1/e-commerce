import { redirect } from "next/navigation";
import { getMyToken } from "./utilities/geyMyToken";
export const rediret = async () => {
  const token = await getMyToken();
  if (!token) {
    redirect("/login");
  }else{
    redirect("/");
  }
};

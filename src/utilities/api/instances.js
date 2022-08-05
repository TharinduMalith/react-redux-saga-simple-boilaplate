import { create } from "apisauce";
import { AUTHORIZATION } from "../constants/commonStrings";

const base = process.env.NODE_APP_API_BASE;

/** ApiSauce object to maintain a single api configuration object. */
export const sampleSauce = create({
  baseURL: `${base}`,
});

export const setHeadersForAllInstances = (token) => {
  sampleSauce.setHeader(AUTHORIZATION, `Bearer ${token}`);
};

export const removeHeadersForAllInstances = () => {
  sampleSauce.deleteHeader(AUTHORIZATION);
};

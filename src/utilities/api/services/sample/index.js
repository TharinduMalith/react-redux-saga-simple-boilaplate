import { sampleSauce } from "../../instances";

export const getSampleAPI = (payload) =>
    sampleSauce.get(`/sample`, payload);

export const postSampleAPI = (payload) =>
    sampleSauce.post(`/sample`, payload);
import { SAMPLE_TYPES, COMMON_TYPES } from "../../utilities/constants";

export const getSampleList = (payload) => ({
    type: SAMPLE_TYPES.GET_SAMPLE + COMMON_TYPES.REQUEST,
    payload,
});

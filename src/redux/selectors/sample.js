import { createSelector } from 'reselect';

const sample = state => state.sample;

export const sampleSelector = createSelector(
    sample,
    (state) => state
);
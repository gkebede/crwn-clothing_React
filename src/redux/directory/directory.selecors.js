import { createSelector } from "reselect";

const selectorDictionary = state => state.directory;

export const selectorDictionarySections = createSelector(

    [selectorDictionary],

    directory => directory.sections

);
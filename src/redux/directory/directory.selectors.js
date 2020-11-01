import { createSelector } from 'reselect';
//input selector
const selectDirectory = state=> state.directory;
//output selector 
export const selectSections = createSelector(
    [selectDirectory],directory=> directory.sections
)

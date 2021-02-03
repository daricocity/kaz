import { createSelector }  from 'reselect';

const selectCategory = state => state.category; 

export const selectCategoryHidden = createSelector(
    [selectCategory],
    category => category.cathidden
);
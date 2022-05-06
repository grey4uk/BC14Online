import { createSelector } from '@reduxjs/toolkit';

const counterSeletor = (state) => state.count.count;

const counterArraySelector = (state) => state.count.array;

const clickSelector = (state) => state.count.click;

const arraySelector = createSelector(
  [counterSeletor, counterArraySelector],
  (count, array) => {
    return array.filter((el) => el < count);
  }
);
// const arraySelector = (state) => {
//   const counterArray = counterArraySelector(state);
//   const count = counterSeletor(state);
//   return counterArray?.filter((el) => el < count);
// };

const counterSelectors = {
  counterSeletor,
  arraySelector,
  clickSelector,
};

export default counterSelectors;

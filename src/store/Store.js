import {Tuple, configureStore} from '@reduxjs/toolkit';
import TodoSlice from '../redux/TodoSlice';
import SelectExploreSlice from '../redux/SelectExploreSlice';

const reducer={
    todos:TodoSlice,
    selectExplore:SelectExploreSlice,
};

const store=configureStore({
    reducer:reducer,
    devTools:true,
})

export default store;
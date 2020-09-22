import { createSlice } from '@reduxjs/toolkit';


const defaultCounterState = {
    count: 0
}


const counterSlice = createSlice({
	initialState: defaultCounterState,
	name: 'counter',
	reducers: {
		increment: state => {
			state.count = state.count + 1
        },
        decrement: state => {
			state.count = state.count - 1
        }
    }
});


//actions
export const {
    increment,
    decrement
} = counterSlice.actions;


//selectors
export const selectCounter = (state: { counter: any; }) => state.counter;


// combine reducers
export const rootReducer = counterSlice.reducer;
import { combineReducers, createSlice } from '@reduxjs/toolkit';


interface  CounterState {
    count: number
}

const defaultCounterState:CounterState = {
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
export const selectCounter = (state: { counter: CounterState; }) => state.counter;


// combine reducers
export const rootReducer = combineReducers({
	counter: counterSlice.reducer
})
// src/redux/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (_state, action) => action.payload,
  },
})

export const { setWeather } = weatherSlice.actions
export default weatherSlice.reducer

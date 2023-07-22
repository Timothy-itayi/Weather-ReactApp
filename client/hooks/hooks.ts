import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

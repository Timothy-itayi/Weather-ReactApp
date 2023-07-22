import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux' // Step 1: Import Provider
import store from './store' // Step 1: Import your Redux store

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Provider store={store}>
      {' '}
      {/* Step 2: Wrap the App with Provider */}
      <App />
    </Provider>
  )
})

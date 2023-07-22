import React, { useState, useEffect } from 'react'
import { fetchSpecies } from '../StarWars'

function App() {
  interface SpeciesData {
    name: string
    classification: string
    designation: string
    language: string
  }

  const [speciesData, setSpeciesData] = useState<SpeciesData>({
    name: '',
    classification: '',
    designation: '',
    language: '',
  })

  useEffect(() => {
    loadSpecies()
  }, [])

  async function loadSpecies() {
    try {
      const creature = await fetchSpecies()

      // Extract the first 4 items from the 'creature' object and update the state
      const { name, classification, designation, language } = creature
      setSpeciesData({ name, classification, designation, language })

      console.log(speciesData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div>
        {/* Load a Species */}
        <button onClick={loadSpecies}>Load Species</button>
        <ul>
          <li>Name: {speciesData.name}</li>
          <li>Class: {speciesData.classification}</li>
          <li>Designation: {speciesData.designation}</li>
          <li>Language: {speciesData.language}</li>
        </ul>
      </div>
    </div>
  )
}

export default App

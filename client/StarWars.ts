import request from 'superagent'

interface Species {
  name: string
  classification: string
  designation: string
  language: string
}

function getRandomSpeciesId(creatures: Species[]) {
  const min = 1
  const max = creatures.length
  return Math.floor(Math.random() * (max - min) + min)
}
export async function fetchSpecies() {
  try {
    const speciesArray = await request
      .get(`https://swapi.dev/api/species/`)
      .accept('application/json')

    const randomSpeciesId = getRandomSpeciesId(speciesArray.body.results)
    const species = await request
      .get(`https://swapi.dev/api/species/${randomSpeciesId}`)
      .accept('application/json')

    return species.body
  } catch (error) {
    console.error(error)
  }
}

// export async function fetchActivity() {
//   const speciesArray = await request
//     .get('https://www.boredapi.com')
//     .accept('application/json')

//   const activity = response.body as Activity
//   console.log(activity.activity)

//   return activity
// }

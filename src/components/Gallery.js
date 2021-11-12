import { useState, useEffect } from 'react'

const Gallery = () => {

  const APP_ID = 'd155bfe0'
  const APP_KEY = '715f73dca133d6384e38c84e127bcc8b'

  const [search, setSearch] = useState('')
  const [photos, setPhotos] = useState([])

  const filteredPhotos = photos.filter((x) => x.recipe.label.toLowerCase().includes(search.toLowerCase()))

  const handleChange = value => {
    setSearch(value)
  };

  useEffect(() => {
    const getPhotos = async () => {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q='juice'&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await res.json()
      setPhotos(data.hits.filter((item, index) => (index <= 15))) //max 16 photos
    }
    getPhotos()
  }, [])

  return (
    <div>
      <div className='flex items-center justify-center mt-6'>
        <input onChange={e => handleChange(e.target.value)} className='border-2 border-blue-700 rounded-md' type='text' />
      </div>
      <div className='grid grid-cols-4 gap-3 mt-6 px-20'>
        {filteredPhotos.map((item) => (
          <div key={item.recipe.image}>
            <img src={item.recipe.image} alt='' />
            <h2 className='font-semibold text-sm text-center'>{item.recipe.label}</h2>
            <p className='capitalize text-sm text-center'>{item.recipe.dishType[0]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

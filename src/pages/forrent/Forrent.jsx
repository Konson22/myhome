import { getProperties } from '../../apis/apis'
import { useQuery } from '@tanstack/react-query'
import PropertyCard from '../../components/PropertyCard'
import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import propertiesJson from '../../assets/properties.json'
import { categories } from '../../assets/data'
import CategoriesDropdown from '../../components/CategoriesDropdown'


export default function Forrent() {

  const { isLoading, error, data } = useQuery({ queryKey:['properties'], queryFn:getProperties })
  const [message, setMessage] = useState('');
  const [properties, setProperties] = useState(propertiesJson);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef();

  const category = searchParams.get('category');
  const search = searchParams.get('search');


  useEffect(() => {
    // if(!error && data && data.length >= 1){
    //   setProperties(data)
    // }
  }, [data, error, isLoading]);
  
  
  useEffect(() => {
    if(!search && !category){
      setProperties(propertiesJson)
    }else if(category){
      const result = data.filter(property => property.category.toLowerCase().startsWith(category))
      if(result.length >= 1){
        setProperties(result)
        setMessage('')
      }else{
        setProperties([])
        setMessage(`${category} NOT available currently!.`)
      }
    }else if(search){
      const result = data.filter(property => {
        return property.category.toLowerCase().includes(search.toLowerCase()) || 
          property.state.toLowerCase().includes(search.toLowerCase()) ||
          property.address.toLowerCase().includes(search.toLowerCase())
      })
      if(result.length >= 1){
        setMessage('')
        setProperties(result)
      }else{
        setProperties([])
        setMessage(`${category} NOT available currently!.`)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault()
    const value = inputRef.current.value
    if(value){
      setSearchParams(`?search=${value}`)
    }
  }
  return (
    <div>
      {/* <PropertiesNav handleCategorySearch={handleCategorySearch} handleInputSearch={handleInputSearch} /> */}
      <div className="flex items-center justify-between md:px-[5%] px-3 md:py-[2rem] py-3">
        <ul className="md:flex hidden">
          <li>
            <span className='border py-2 px-4 mr-2' onClick={() => setSearchParams('')}>All</span>
          </li>
          {categories.map(category => (
            <li key={category}>
              <span className='border py-2 px-4 mr-2' onClick={() => setSearchParams(`?category=${category.toLowerCase()}`)}>{category}</span>
            </li>
          ))}
        </ul>
        <div className="md:hidden block shadow-md mr-2">
          <CategoriesDropdown />
        </div>
        <form className="flex shadow-md border-red-300 rounded overflow-hidden" onSubmit={handleSubmit}>
          <input 
            className="md:h-[3rem] h-[2.7rem] md:w-[350px] w-full pl-4 bg-gray-100 flex-1" 
            placeholder="Enter location, state, area" 
            ref={inputRef}
          />
          <button className="md:h-[3rem] h-[2.7rem] bg-red-600 text-white border-none md:px-8 px-3" type='submit'>Find</button>
        </form>
      </div>
      <div className="md:px-[5%] px-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">For Rent</h2>
        </div>
        {/* {isLoading && 'Loading...'}
        {(!isLoading && error) && 'Error...'} */}
        {message && message}
        {(properties && properties.length >= 1) &&
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
            {properties.map(property => <PropertyCard property={property} /> )}
          </div>
        }
      </div>
    </div>
  )
}

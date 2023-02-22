import { categories } from '../assets/data'
// import { Link } from 'react-router-dom'
import CategoriesDropdown from './CategoriesDropdown'


export default function PropertiesNav({ handleCategorySearch, handleInputSearch }) {
  return (
    <div className="flex items-center justify-between md:px-[5%] px-3 md:py-[2rem] py-3">
      <ul className="md:flex hidden">
        <li>
          <span className='border py-2 px-4 mr-2' onClick={() => handleCategorySearch(null)}>All</span>
        </li>
        {categories.map(category => (
          <li key={category}>
            <span className='border py-2 px-4 mr-2' onClick={() => handleCategorySearch(category)}>{category}</span>
          </li>
        ))}
      </ul>
      <div className="md:hidden block shadow-md mr-2">
        <CategoriesDropdown />
      </div>
      <div className="flex shadow-md border-red-300 rounded overflow-hidden">
        <input 
          className="md:h-[3rem] h-[2.7rem] md:w-[350px] w-full pl-4 bg-gray-100 flex-1" 
          placeholder="Enter location, state, area" 
          onChange={e => handleInputSearch(e.target.value)}
        />
        <button className="md:h-[3rem] h-[2.7rem] bg-red-600 text-white border-none md:px-8 px-3">Find</button>
      </div>
    </div>
  )
}

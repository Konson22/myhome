import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { categories } from '../../assets/data';


export default function Header() {
  return (
    <header className="header-container md:h-[65vh] w-full flex items-center md:px-[5%] px-4 py-[3.5rem]">
        <div className="md:w-[60%] w-full">
            <h2 className="md:text-6xl text-3xl md:font-bold text-white">
                We connect buyers with sellers and tanants with landlords through
            </h2>
            <div className="flex mt-8">
              <CategoriesDropdown />
              <input className="md:h-[3.3rem] h-[3rem] w-full rounded px-4 bg-white flex-1 md:mx-3 mx-2" placeholder="Enter location, state, area" />
              <button className="md:h-[3.3rem] h-[3rem] bg-red-600 text-white rounded border-none md:px-8 px-3">Find</button>
            </div>
        </div>
    </header>
  )
}


function CategoriesDropdown(){

  const [isOpen, setIsOpen] = useState(false);

  return(
      <div className="md:h-[3.3rem] h-[3rem] flex items-center md:px-4 px-2 text-sm bg-gray-100 rounded relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Category
          <FiChevronDown className={`text-sm ml-1 ${isOpen ? 'rotate-[180deg]' : ''}`} />
          {isOpen &&
              <div className='w-full rounded border-2 absolute top-full left-0 pt-3 bg-gray-100'>
                  {categories.map(category => (
                      <div className='px-3 mb-3' key={category}>{category}</div>
                  ))}
              </div>
          }
      </div>
  )
}
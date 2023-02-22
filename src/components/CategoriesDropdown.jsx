import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { categories } from '../assets/data';

export default function CategoriesDropdown(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="md:h-[3rem] h-[2.7rem] flex items-center md:px-4 px-2 text-sm bg-gray-100 rounded relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
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
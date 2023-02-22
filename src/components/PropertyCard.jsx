import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'

export default function PropertyCard({ property }) {
  return (
    <div className='border rounded overflow-hidden shadow-lg' key={property._id}>
        {/* <img className='md:h-[10rem] h-[8rem]' src={`http://localhost:3001/${property.images[0]}`} alt='' /> */}
        <img className='md:h-[10rem] h-[8rem]' src={process.env.PUBLIC_URL+`/images/${property.images[0]}`} alt='' />
        <div className="md:px-4 px-2 py-2">
            <h3 className="md:text-xl">For {property.type}</h3>
            <p className="md:text-base text-[.8rem]">{property.state}, {property.address}</p>
            <p className="text-xl md:font-bold">{property.price}</p>
            <div className="flex items-center justify-between mt-5">
              <span className="flex items-center">
                <FaRegHeart className='text-2xl' />
                <span className="text-xl ml-1">{property.liks}</span>
              </span>
              <Link className="rounded bg-orange-700 text-white px-4 py-1" to={`/properties/detail/${property._id}`}>Details</Link>
            </div>
        </div>
    </div>
  )
}

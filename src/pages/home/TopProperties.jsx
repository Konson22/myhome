import Carousel from 'react-elastic-carousel'
import { getProperties } from '../../apis/apis'
import { useQuery } from '@tanstack/react-query'
import { FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:4,
    itemsToScroll:1
  },
]


export default function TopProperties() {
  
  const { isLoading, error, data } = useQuery({
    queryKey:['properties'],
    queryFn:getProperties
  })


  return (
    <div className="md:px-[7%] md:py-[5rem] py-[3rem]">
      <div className="md:mb-5 mb-3 md:mx-0 mx-3 flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-bold">Top Proprties</h1>
        {/* <div className="flex items-center">
          <span className="text-2xl mr-4 bg-gray-100 p-2">
            <FiChevronLeft />
          </span>
          <span className="text-2xl bg-gray-100 p-2">
            <FiChevronRight />
          </span>
        </div> */}
      </div>
      <div className="relative">
        {isLoading && 'Loading...'}
        {(!isLoading && error) && 'Error...'}
        {(!isLoading && !error && data.length >= 1) &&
          <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className=''>
            {data.map(property => (
              <div className='mx-1 md:mr-3 flex-1 border rounded overflow-hidden shadow-lg' key={property._id}>
                <img className='md:h-[12rem] h-[12rem]' src={`http://localhost:3001/${property.images[0]}`} alt='' />
                <div className="p-4">
                    <div className="md:flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{property.title}</h3>
                    <h3 className="text-2xl font-bold">{property.price}</h3>
                    </div>
                    <h3 className="text-base">{property.state}, {property.address}</h3>
                    <div className="flex items-center justify-between mt-5">
                      <span className="text-2xl">
                        <FaRegHeart className='' />
                      </span>
                      <Link className="rounded bg-orange-700 text-white px-4 py-1" to={`/properties/detail/${property._id}`}>Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        }
      </div>
    </div>
  )
}


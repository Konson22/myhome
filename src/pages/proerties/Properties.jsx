import { getProperties } from '../../apis/apis'
import { useQuery } from '@tanstack/react-query'
import PropertyCard from '../../components/PropertyCard'
import PropertiesNav from '../../components/PropertiesNav'


export default function Properties() {

  const { isLoading, error, data } = useQuery({
    queryKey:['properties'],
    queryFn:getProperties
  });



  return (
    <div>
      <PropertiesNav />
      <div className="px-[5%]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">All properties</h2>
        </div>
        {isLoading && 'Loading...'}
        {(!isLoading && error) && 'Error...'}
        {(!isLoading && !error && data.length >= 1) &&
          <div className="grid grid-cols-5 gap-4">
            {data.map(property => <PropertyCard property={property} /> )}
            {data.map(property => <PropertyCard property={property} /> )}
            {data.map(property => <PropertyCard property={property} /> )}
            {data.map(property => <PropertyCard property={property} /> )}
            {data.map(property => <PropertyCard property={property} /> )}
          </div>
        }
      </div>
    </div>
  )
}

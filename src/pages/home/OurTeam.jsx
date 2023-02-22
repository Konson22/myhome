// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import Carousel from 'react-elastic-carousel'


const breakPoints = [
  {
    width:0,
    itemsToShow:2,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:5,
    itemsToScroll:1
  },
]

export default function OurTeam() {
  return (
    <div className='md:px-[7%] md:py-[5rem] py-[3rem]'>
      <div className="md:mb-5 mb-3 mx-3 flex items-center justify-between">
        <h1 className="md:text-3xl text-2xl font-bold md:mb-0 mb-3">Our Team</h1>
      </div>
      <div className="relative">
        <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className=''>
          {users.map(user => (
            <div className='md:mx-2 mx-1 p-3 shadow-lg flex-1 border rounded overflow-hidden shadow-lg'>
              <img className='md:h-[11rem] h-[8rem]' src={user.avatar} alt='' />
              <div className="pt-2">
                <h3 className="text-xl md:font-bold">{user.name}</h3>
                <h3 className="text-base">{user.title}</h3>
                <p className="text-base">0920079070</p>
                <div className="flex md:justify-start justify-between mt-3">
                  <span className='bg-blue-500 text-white rounded md:py-2 py-1 px-2 text-xl md:mr-3'>
                    <FaTwitter />
                  </span>
                  <span className='bg-blue-500 text-white rounded md:py-2 py-1 px-2 text-xl md:mr-3'>
                    <FaLinkedinIn />
                  </span>
                  <span className='bg-blue-500 text-white rounded md:py-2 py-1 px-2 text-xl md:mr-3'>
                    <FaFacebookF />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}


const users = [
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/kon.png'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/ring.jpg'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/mum.jpg'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/user.png'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/kon.png'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/ring.jpg'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/mum.jpg'
  },
  {
    name:'James Bol',
    title:'Sale Manager',
    avatar:process.env.PUBLIC_URL+'/images/user.png'
  },
]
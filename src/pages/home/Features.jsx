import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div className="md:px-[11%] px-[4%] bg-blue-900 text-white md:py-[6rem] py-[3rem] md:flex">
      <div className="flex-1 md:h-[25rem] h-[17rem]">
        <img src={process.env.PUBLIC_URL+'./images/pexels-binyamin-mellish-106399.jpg'} alt='' />
      </div>
      <div className="flex-1 md:px-8">
        <h2 className="md:text-4xl text-2xl font-bold md:mb-4 md:mt-0 mb-3 mt-4">Real Estate in South Sudan</h2>
        <p>
          Are you looking to live amongest the bustle of juba? o maybe you prepare to wake up to see nile views in Juba? with over 700+ insights for sale,
          MyHome.com can match you with a property to call home. get exclusive insights into popular neigbourhood such as Juba, Wau, Yei, Awiel, etc. filter down to what's important for you looking for 3bed house in Juba or are you looking for lovely townhouse rather then Juba we can guide you to the best place to live.
          if you are not ready to commit long term, Rent a family friendly house and apartment to share with friends. no matter what you need with us will discover a rental you will love.
        </p>
        <Link className="inline-block bg-red-700 text-white mt-8 rounded md:px-4 md:py-3 py-2 px-3" to='/properties'>Find you House</Link>
        {/* <p>
          Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.
          Where those designations appear in this book, and Peachpit was aware of a trademark claim, the designations appear
          as requested by the owner of the trademark. All other product names and services identified throughout this book are
          used in editorial fashion only and for the benefit of such companies with no intention of infringement of the trademark.
          No such use, or the use of any trade name, is intended to convey endorsement or other affiliation with this book
        </p> */}
      </div>
    </div>
  )
}

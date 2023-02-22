
export default function Whatwedo() {
    return (
      <div className="md:px-[7%] md:flex px-[4%] mt-[4rem]">
        <div className="md:hidden block flex-1 h-[17rem]">
          <img src={process.env.PUBLIC_URL+'./images/pexels-expect-best-323780.jpg'} alt='' />
        </div>
        <div className="flex-1 md:px-8">
          <h2 className="text-4xl font-bold mb-4">What we do?</h2>
          <p>
            Many of the designations used by manufacturers and sellers to distinguish their products are claimed as trademarks.
            Where those designations appear in this book, and Peachpit was aware of a trademark claim, the designations appear
            as requested by the owner of the trademark. All other product names and services identified throughout this book are
            used in editorial fashion only and for the benefit of such companies with no intention of infringement of the trademark.
            No such use, or the use of any trade name, is intended to convey endorsement or other affiliation with this book
          </p>
        </div>
        <div className="md:block hidden flex-1 h-[24rem]">
          <img src={process.env.PUBLIC_URL+'./images/pexels-expect-best-323780.jpg'} alt='' />
        </div>
      </div>
    )
  }
  
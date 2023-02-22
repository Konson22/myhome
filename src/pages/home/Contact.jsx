// import { FiMail, FiUser } from 'react-icons/fi'


export default function Contact() {
  return (
    <div className="feature-container md:px-[7%] px-4 md:py-[5rem] py-[3rem] text-white md:flex">
        <div className="flex-1 md:p-12 p-3">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
                Peachpit was aware of a trademark claim, the designations appear as requested by the owner of the trademark. All other product names and services identified throughout this book are used in editorial fashion only and for the benefit of such companies with no intention of infringement of the trademark. No such use, or the use of any trade name, is intended to convey endorsement or other affiliation with this book
            </p>
        </div>
        <div className="flex-1 md:p-12 p-3">
            <h2 className="text-3xl font-bold mb-6">Contact with Us</h2>
            <form>
                <div className="flex bg-gray-200 border-2 rounded h-[3.5rem] mb-5">
                    <input type="text" className="px-3 w-full h-full bg-transparent focus:border-none focus:outline-none" placeholder='Full Name' />
                </div>
                <div className="flex bg-gray-200 border-2 rounded h-[3.5rem] mb-5">
                    <input type="text" className="px-3 w-full h-full bg-transparent focus:border-none focus:outline-none" placeholder='youremail@gmail.com' />
                </div>
                <div className="flex bg-gray-200 border-2 rounded h-[3.5rem] mb-5">
                    <input type="text" className="px-3 w-full h-full bg-transparent focus:border-none focus:outline-none" placeholder='Full Name' />
                </div>
                <div className="flex bg-gray-200 border-2 rounded h-[6.5rem] mb-5">
                    <textarea 
                        className="px-3 w-full h-full bg-transparent focus:border-none focus:outline-none" 
                        placeholder='Your message...'
                    ></textarea>
                </div>
                <button className="bg-red-500 w-full text-white text-xl px-7 py-3">Send Message</button>
            </form>
        </div>
    </div>
  )
}

import React from 'react'
import svg from '../../img/contact.svg'

function ContactUs() {
    return (
        <div className=' bg-gray-900 h-screen  pl-10'>
             <div className='   font-bold   text-pink-600 text-4xl pt-40'>Contact US</div>

            <div className="flex flex-col md:flex-row">

                <div className=' md:w-2/3   pr-10 md:pr-24'>
                    <img src={svg} alt="" />
                </div>

                <div className=' md:w-1/2 pr-10 pt-8 md:pr-20'><form>

                    <div class="grid grid-cols-2 gap-5">
                        <input
                            type="text"
                            className=" bg-transparent border text-stone-200 border-pink-600      focus:ring-pink-700 focus:border-pink-700 block w-full  px-4 py-2"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            className=" bg-transparent border text-stone-200 border-pink-600      focus:ring-pink-700 focus:border-pink-700 block w-full  px-4 py-2"
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            className=" bg-transparent border text-stone-200 border-pink-600      focus:ring-pink-700 focus:border-pink-700 block w-full  px-4 py-2"
                            placeholder="Email"
                        />
                        <input
                            type="tel"
                            className=" bg-transparent border text-stone-200 border-pink-600      focus:ring-pink-700 focus:border-pink-700 block w-full  px-4 py-2"
                            placeholder="Phone"
                        />
                        <textarea
                            cols="10"
                            rows="5"
                            class="bg-transparent border text-stone-200 border-pink-600      focus:ring-pink-700 focus:border-pink-700 col-span-2"
                            placeholder="Write your message..."
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value="Send Message"
                        class="focus:outline-none mt-5 bg-pink-600 cursor-pointer px-4 py-2 text-white font-bold w-full"
                    />
                </form>

                </div>
            </div> 
        </div>

    )
}

export default ContactUs
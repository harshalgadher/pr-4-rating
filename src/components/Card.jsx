import React from 'react'

export const Card = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">

      <div className="w-full max-w-xl p-4 bg-white border border-red-400 rounded-lg shadow-sm sm:p-6 md:p-8 ">
        <form class="space-y-6" action="#">
          <div className="flex justify-between">
            <h5 className="text-xl font-medium text-red-500 ">Enter your Review</h5>
            <button type="button"></button>
          </div>
          <div className="flex">
            <div className="w-full px-2">
              <label for="email" className="block mb-2 text-lg font-medium text-red-500 px-1">Name :-</label>
              <input type="name" date="email" id="email" class="bg-gray-50 border-2 border-red-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-green-500 outline-none " placeholder="Enteryour Name" required />
            </div>
            <div className="w-full px-2">
              <label for="date" className="block mb-2 text-lg font-medium text-red-500">Date :-</label>
              <input type="date" name="password" id="date" class="bg-gray-50 border-2 border-red-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-green-500 outline-none " required />
            </div>
          </div>
            <h3 className="text-center text-2xl text-red-500 font-semibold">---Rating---</h3>
            <div className="text-center">
              <select name="star" id="star" >
                  <option value="">---Rate---</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
            </select>
            </div>
            <div>
              <textarea name="comment" rows={5} id="comment" placeholder="Give Your Feed Back" className="w-full border-2 border-red-500 rounded-lg text-lg  focus:border-green-500 outline-none p-2"></textarea>
            </div>
          <button type="submit" className="w-full text-white bg-red-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>

        </form>
      </div>


    </div>
  )
}

import React from 'react'

function ArtistCard() {
  return (
        <div class="max-w-sm w-full opacity-9 shadow-lg rounded-lg overflow-hidden py-3" style={{background : "linear-gradient(135deg, #ffff819d, #ff87d7 )"}}>
            <div class="rounded-full overflow-hidden mx-auto mt-4 w-20 h-20">
                    <img src="https://placekitten.com/200/200" alt="Artist Image" class="w-full h-full object-cover" />
            </div>
            <div class="text-center mt-4">
                <h2 class="text-xl font-semibold text-gray-800">John Doe</h2>
                <p class="text-gray-600 text-sm">Top Hits:</p>
                <ul class="text-gray-700 text-sm pl-4 mt-2 list-none">
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
                <p class="text-gray-600 text-sm mt-2">Other Data: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="flex justify-center items-center mt-4">
                {/* <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Follow</button> */}
                <button class="bg-rose-200 hover:bg-gradient-to-r hover:from-pink-500 hover:via-rose-400 hover:to-rose-300 hover:text-white text-black px-4 py-2 rounded-md transition duration-300 ease-in-out backdrop-blur-md">
  Follow
</button>
            </div>
        </div>
  )
}

export default ArtistCard

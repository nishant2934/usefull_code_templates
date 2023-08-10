function App() {



    return (
      <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark w-full  dark:bg-gray-700 border-3 border-gray-700">
          <table class="relative w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" colSpan="9" className="w-full text-center px-0">
                  <div className="w-screen z-50 fixed md:w-full md:relative flex-col justify-center items-center overflow-x-auto shadow-md sm:rounded-lg dark dark:bg-gray-700 px=">
                    <div class="relative pt-2 pb-4 px-4 bg-white dark:bg-gray-900 flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
                      <div class="relative mt-1 border-2 border-blue-500 inline-flex justify-center items-center">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                      </div>
                      <div class="relative mt-1 border-2 border-blue-500 inline-flex justify-center items-center">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <div class="mt-28 md:m-0"></div>
            <tbody >
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="col" colSpan="9" className="w-full text-center px-0">
                  <div className="w-full justify-center items-center overflow-x-auto shadow-md sm:rounded-lg dark dark:bg-gray-700">
                    <div class="relative pt-2 pb-4 px-4 bg-white dark:bg-gray-900 flex w-full flex-row items-center  justify-between">
                      <div class="relative mt-1 border-2 border-blue-500 inline-flex justify-center items-center">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                      </div>
                      <div class="relative mt-1 border-2 border-blue-500 inline-flex justify-center items-center">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                        </div>
                        <input type="text" id="table-search" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-red-500 h-52 flex justify-center items-center">
                    hello 
                  </div>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Silver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  Yes
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4">
                  3.0 lb.
                </td>
                <td class="flex items-center px-6 py-4 space-x-3">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  
  export default App;
  
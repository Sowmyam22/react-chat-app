import React from "react";

function Sidebar({ navOptions }) {
	return (
	  <div className="hidden md:flex md:flex-shrink-0">
			    <div className="flex flex-col w-64">
			      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
			        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto bg-black">
			          <div className="flex items-center flex-shrink-0 px-4 pb-4 text-xl font-medium text-white border-b border-gray-200">
			          	Chat bot
			          </div>
			          <nav className="mt-5 flex-1 px-2 bg-black space-y-1">
			          {navOptions.map((option, index) => {
			          	return (
				            <a href="#" className="group flex items-center px-2 py-2 text-sm text-white leading-5 font-medium rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
				              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				              	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
				              	</path>
			              	</svg>
				              {option}
				            </a>
		          		)
			          })}
			          </nav>
			        </div>
			        <div className="flex-shrink-0 flex border-t border-gray-200 bg-black p-4">
			          <a href="#" className="flex-shrink-0 w-full group block">
			            <div className="flex items-center">
			              <div>
			                <img className="inline-block h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
			              </div>
			              <div className="ml-3">
			                <p className="text-sm leading-5 font-medium text-white group-hover:text-gray-900">
			                  Sowmya Reddy
			                </p>
			              </div>
			            </div>
			          </a>
			        </div>
			      </div>
			    </div>
			  </div>
	)
}

export default Sidebar;
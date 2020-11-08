import React,{ useState } from "react";

function Sidebar({ navOptions }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (option) => {
		if(option === "Direct messages") {
			setIsOpen(!isOpen);
		}
	}

	const users = ["Katherine", "Kiran", "Sowmya", "Dhruva"];

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
	          		<>
		            <div 
		            	className="group flex items-center px-2 py-2 text-sm text-white leading-5 font-medium cursor-pointer rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
		            	onClick={() => {handleClick(option)}}
	            	>
		              <svg 
		                className="w-6 h-6" 
		                fill="none" 
		                stroke="currentColor" 
		                viewBox="0 0 24 24" 
		                xmlns="http://www.w3.org/2000/svg"
		              >
		                <path 
		                  strokeLinecap="round" 
		                  strokeLinejoin="round" 
		                  strokeWidth="2" 
		                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
		                >
		                </path>
		              </svg>
		              {option}
		            </div>
	              {option === "Direct messages" && isOpen && (
	              	<>
		              {users.map((user, index) => {
		              	return (
			              	<div 
			              		key={index} 
			              		className="text-white mx-6 py-2 cursor-pointer flex items-center px-2 rounded hover:bg-gray-200 hover:text-black"
		              		>
						            <img className="inline-block h-6 w-6 rounded-full mr-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

		              			{user}
	              			</div>
	              		)
		              })
		              }
		              </>
              	)}
              	</>
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
import React from "react";
import Sidebar from "./Sidebar";
import ChatForm from "./ChatForm";

function ChatApp({}) {
	const navOptions = ['Direct messages', 'Group chat'];

	return (
		<div>
			<div className="h-screen flex overflow-hidden bg-gray-600">
			  <Sidebar navOptions={navOptions} />
			  <div className="flex flex-col w-0 flex-1 overflow-hidden">
			    <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
			      <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150" aria-label="Open sidebar">
			        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
			        </svg>
			      </button>
			    </div>
			    <main className="flex-1 relative z-0 overflow-y-auto mx-auto focus:outline-none" tabindex="0">
			      <ChatForm />
			    </main>
			  </div>
			</div>

		</div>
	)
}

export default ChatApp;
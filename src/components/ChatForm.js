import React, { useState, useEffect } from "react";

function ChatForm() {
  const [value, setValue] = useState("");
  const [conversation, setConversation] = useState([]);

  const handleEnter = (e) => {
    if(e.which === 13) {
      e.preventDefault();

      let newTodos = value;
      conversation.push(newTodos)
      setConversation([...conversation]);

      setValue("");
    }
  }

	return (
		<div className="pt-2 pb-6 md:py-6">
      {conversation.map((data, index) => {
        return (
          <div className="flex items-center mb-3">
            <img className="inline-block h-8 w-8 rounded-full mr-3" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

            <div className="p-2 rounded bg-black text-white" style={{width: "50rem"}}>{data}</div>
          </div>
        )
      })}
      <textarea 
        className="rounded p-4" 
        rows={3} 
        cols={90} 
        placeholder="Please type here..." 
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleEnter}
        value={value}
      />
    </div>
	)
}

export default ChatForm;
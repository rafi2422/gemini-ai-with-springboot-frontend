import { useState } from 'react'

import './App.css'
import ChatInput from './components/ChatInput' 
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api';


function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // if(loading){
  //   return (<h1>Loading...</h1>);
  // }

  const handleQuestionSubmit = async (question) => {
      setLoading(true);
      setResponse(null);
      try {
        // await
        const apiResponse = await fetchChatResponse(question);
        setResponse(apiResponse);

      } catch (error) {
        alert("Failed to get the Response", error);
      } finally{
        setLoading(false);
      }
  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'> 
          <h1>Gemini ChatBot</h1>
      </header>
      <ChatInput onSubmit={handleQuestionSubmit}/>
      {loading && <h3>Loading...</h3>}
        <ChatResponse response={response}/>
      {/*Input */}
    </div>
  )
}

export default App

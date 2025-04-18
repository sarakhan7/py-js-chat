import { useState } from 'react'
import './App.css'

import AuthPage from './AuthPage'
import ChatsPage from './ChatsPage'
// TEMP TESTING ONLY — remove when done
import ChatAuth from './ChatAuth'

function App() {
  const [user, setUser] = useState(undefined)

  // 👇 Uncomment this line to test backend directly
  // return <ChatAuth />

  if (!user) return <AuthPage onAuth={user => setUser(user)} />
  return <ChatsPage user={user} />
}

export default App

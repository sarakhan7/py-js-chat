import { useState } from 'react'
import axios from 'axios'

function ChatAuth() {
  const [username, setUsername] = useState('')
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/authenticate', { username })
      setResponse(res.data)
      setError(null)
    } catch (err) {
      setError(err.response?.data || 'Unknown error')
      setResponse(null)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Authenticate with ChatEngine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter a username"
          required
        />
        <button type="submit">Authenticate</button>
      </form>

      {response && (
        <div style={{ marginTop: '20px' }}>
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div style={{ marginTop: '20px', color: 'red' }}>
          <h4>Error:</h4>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default ChatAuth

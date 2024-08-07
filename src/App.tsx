import { Authenticator } from '@aws-amplify/ui-react'
import './App.css'
import RecipeList from './components/recipes/RecipeList'

function App() {

  return (
      <Authenticator>
        <h1>Recipes I Just Changed This</h1>
            <RecipeList />
      </Authenticator>
  )
}

export default App

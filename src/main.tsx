import './styles/reset.css'
import './styles/globals.css'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import FeatureList from './components/FeatureList/FeatureList'


export function App() {
  return (
    <main>
      <Header />
      <FeatureList />
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
    <App />
)

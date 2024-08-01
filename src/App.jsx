import { Route, Routes } from "react-router-dom"
import CryptoList from "./components/CryptoList"
import Layout from "./components/Layout"
import News from "./components/News"
import { useEffect, useState } from "react"
import axios from "axios"
import CoinPage from "./components/CoinPage"


function App() {
 

const [data,setData] = useState([])
const [search,setSearch] =useState('')


const options = {
  headers:{
    'X-API-KEY': import.meta.env.VITE_API_KEY
  }
}

useEffect(() => {
  const fetchData = async() =>{
   try {
     const response = await axios.get('https://openapiv1.coinstats.app/coins?limit=50&currency=INR', options)
     setData(response.data.result)
   } catch (error) {
     console.log(error.message);
   }
  }
 fetchData()
   
 }, [])

  return (
  <div className="container mx-auto ">
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<CryptoList data={data} search={search} setSearch={setSearch}/>} />
      <Route path="/:id" element={<CoinPage />} />
      </Route>
    </Routes>
  </div>
  )
}

export default App

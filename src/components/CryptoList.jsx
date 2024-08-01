import React from 'react'
import { Link } from 'react-router-dom'


const CryptoList = ({data, search, setSearch}) => {
  return (
    <div className='flex flex-col gap-3 p-3'>
    <input type="text" id="search" name="search" placeholder='Search Crypto' value={search} onChange={(e)=>setSearch(e.target.value)} className=' border border-black text-center p-2 m-2'/>
        <table className=' w-full h-screen table-auto text-center border-spacing-3 border-separate border-spacing-y-3'>
            <thead className='p-3 border-spacing-3'>
                <tr>
                    <th>Rank</th>
                    <th className='h-12 w-12'>Coin</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Market Cap</th>
                    <th>Price</th>
                    <th>Available Supply</th>
                    <th>Volume (24h)</th>
                </tr>
            </thead>
        {data &&
            <tbody className='p-3 border-spacing-3'>
    {
        data.filter((val)=> {
            return val.name.toLowerCase().includes(search.toLowerCase())
        }).map(val => {
            return <tr key={val.id} className='p-3 gap-3'>
                <td>{val.rank}</td>
                <td><Link to={`/${val.id}`}>
                    <img src={val.icon} alt={val.name} />
                </Link></td>
                <td><Link to={`/${val.id}`}>{val.name}</Link></td>
                <td><Link to={`/${val.id}`}>{val.symbol} </Link></td>
                <td>{val.marketCap}</td>
                <td>₹{val.price.toFixed(2)}</td>
                <td>{val.availableSupply}</td>
                <td>{val.volume}</td>
            </tr>
        })
    }
            </tbody>
        }
        </table>
    </div>
  )
}

export default CryptoList
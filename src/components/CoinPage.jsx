import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CoinPage   
 = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  const options = {
    headers: {
      'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openapiv1.coinstats.app/coins/${id}?currency=INR`,
          options
        );
        setCoin(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [id]);

  const getPriceChangeColor = (changeValue) => {
    return changeValue > 0 ? 'text-green-700' : 'text-red-700';
  }
  return (
    <div className="min-h-screen flex flex-col justify-evenly pt-12">
      {coin && (
        <div className="container mx-auto px-4"> 
          <div className="flex flex-row justify-center gap-3 p-5">
            <img
              src={coin.icon}
              alt={coin.name}
              className="h-12 w-12 md:h-20 md:w-20" 
            />
            <h1 className="text-center flex items-center text-5xl font-bold">
              {coin.name}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5"> 
            <div className="text-3xl font-semibold">
              <h2>Market Cap:</h2>
              <p>{coin.marketCap}</p>
            </div>
            <div className="text-3xl font-semibold">
              <h2>Price:</h2>
              <p>₹{coin.price.toFixed(2)}</p>
            </div>
            <div className="text-3xl font-semibold">
              <h2>Supply:</h2>
              <p>{coin.availableSupply}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5"> 
            <div className="text-3xl font-semibold">
              <h2>Change (1d):</h2>
              <p className={getPriceChangeColor(coin.priceChange1d)}>{coin.priceChange1d}%</p>
            </div>
            <div className="text-3xl font-semibold">
              <h2>Change (1h):</h2>
              <p className={getPriceChangeColor(coin.priceChange1h)}>{coin.priceChange1h}%</p>
            </div>
            <div className="text-3xl font-semibold">
              <h2>Change (1W):</h2>
              <p className={getPriceChangeColor(coin.priceChange1w)}>{coin.priceChange1w}%</p>
            </div>
          </div>
          <div className="text-center text-3xl font-bold p-5">Rank {coin.rank}</div>
          <div className="text-center p-5">
            <Link to={coin.websiteUrl}>
              <button className="border border-black p-2 text-2xl text-center">
                Visit Website
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
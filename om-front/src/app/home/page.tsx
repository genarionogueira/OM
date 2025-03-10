import React from 'react';

const OMS = () => {
  // Sample static data
  const usEquities = [
    { ticker: 'AAPL', price: 178.92, change: 0.76, changePercent: 0.43, volume: '23.4M' },
    { ticker: 'MSFT', price: 401.78, change: -2.34, changePercent: -0.58, volume: '18.7M' },
    { ticker: 'GOOGL', price: 142.53, change: 1.23, changePercent: 0.87, volume: '9.2M' },
    { ticker: 'AMZN', price: 176.42, change: -0.87, changePercent: -0.49, volume: '12.5M' },
    { ticker: 'META', price: 465.12, change: 3.42, changePercent: 0.74, volume: '8.3M' },
    { ticker: 'TSLA', price: 238.65, change: -5.32, changePercent: -2.18, volume: '31.2M' },
    { ticker: 'NVDA', price: 923.47, change: 12.64, changePercent: 1.39, volume: '42.1M' },
    { ticker: 'JPM', price: 193.42, change: 0.23, changePercent: 0.12, volume: '6.8M' },
    { ticker: 'V', price: 267.89, change: -1.02, changePercent: -0.38, volume: '5.1M' },
    { ticker: 'WMT', price: 76.23, change: 0.48, changePercent: 0.63, volume: '7.3M' }
  ];

  const globalIndices = [
    { index: 'S&P 500', value: 5284.23, change: 12.34, changePercent: 0.23, status: 'OPEN' },
    { index: 'DOW JONES', value: 38769.75, change: -42.65, changePercent: -0.11, status: 'OPEN' },
    { index: 'NASDAQ', value: 16742.39, change: 87.29, changePercent: 0.52, status: 'OPEN' },
    { index: 'FTSE 100', value: 8267.54, change: 24.18, changePercent: 0.29, status: 'CLOSED' },
    { index: 'DAX', value: 18476.09, change: -32.87, changePercent: -0.18, status: 'CLOSED' },
    { index: 'NIKKEI 225', value: 37243.67, change: 134.92, changePercent: 0.36, status: 'CLOSED' },
    { index: 'HANG SENG', value: 17842.45, change: -157.43, changePercent: -0.87, status: 'CLOSED' },
    { index: 'EUR/USD', value: 1.0832, change: 0.0021, changePercent: 0.19, status: 'ACTIVE' },
    { index: 'USD/JPY', value: 151.87, change: -0.32, changePercent: -0.21, status: 'ACTIVE' },
    { index: 'BITCOIN', value: 63742.87, change: 1243.56, changePercent: 1.99, status: 'ACTIVE' }
  ];

  const orders = [
    { id: 'ORD-12345', ticker: 'AAPL', side: 'BUY', qty: 100, price: 178.92, type: 'LIMIT', status: 'FILLED', time: '09:31:24' },
    { id: 'ORD-12346', ticker: 'MSFT', side: 'SELL', qty: 50, price: 401.78, type: 'LIMIT', status: 'FILLED', time: '09:32:18' },
    { id: 'ORD-12347', ticker: 'TSLA', side: 'BUY', qty: 200, price: 238.65, type: 'MARKET', status: 'FILLED', time: '09:45:03' },
    { id: 'ORD-12348', ticker: 'AMZN', side: 'BUY', qty: 75, price: 176.42, type: 'LIMIT', status: 'OPEN', time: '09:52:14' },
    { id: 'ORD-12349', ticker: 'NVDA', side: 'SELL', qty: 30, price: 923.47, type: 'LIMIT', status: 'OPEN', time: '10:01:45' },
    { id: 'ORD-12350', ticker: 'META', side: 'BUY', qty: 60, price: 465.12, type: 'MARKET', status: 'PENDING', time: '10:10:22' }
  ];

  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col overflow-hidden font-mono">
      {/* Header */}
      <header className="bg-gray-800 px-4 py-2 flex justify-between items-center border-b border-gray-700">
        <div className="font-bold text-lg text-blue-500">BLOOMBERG-OMS</div>
        <div className="flex gap-4">
          <div className="text-gray-200">TRADER01</div>
          <div className="bg-gray-900 px-3 py-1 rounded text-gray-200">10:26:38</div>
        </div>
      </header>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Monitors */}
        <div className="flex flex-1 border-b-2 border-blue-600 overflow-hidden">
          {/* Left Monitor - US Equities */}
          <div className="flex-1 flex flex-col border-r border-gray-700 overflow-hidden">
            <div className="bg-gray-800 px-3 py-1 flex justify-between items-center border-b border-gray-700">
              <div className="font-bold text-blue-500">US EQUITIES</div>
              <div className="text-gray-400 text-sm">NYSE | NASDAQ</div>
            </div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">TICKER</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">PRICE</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">CHG</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">CHG%</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">VOLUME</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {usEquities.map((stock, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                      <td className="px-3 py-2 text-blue-400">{stock.ticker}</td>
                      <td className="px-3 py-2">{stock.price.toFixed(2)}</td>
                      <td className={`px-3 py-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
                      </td>
                      <td className={`px-3 py-2 ${stock.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </td>
                      <td className="px-3 py-2">{stock.volume}</td>
                      <td className="px-3 py-2">
                        <div className="flex space-x-1">
                          <button className="bg-green-900 hover:bg-green-800 text-green-500 px-2 py-1 text-xs rounded">BUY</button>
                          <button className="bg-red-900 hover:bg-red-800 text-red-500 px-2 py-1 text-xs rounded">SELL</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Right Monitor - Global Indices */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-gray-800 px-3 py-1 flex justify-between items-center border-b border-gray-700">
              <div className="font-bold text-blue-500">GLOBAL INDICES</div>
              <div className="text-gray-400 text-sm">MAJOR | CURRENCY</div>
            </div>
            <div className="flex-1 overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">INDEX</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">VALUE</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">CHG</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">CHG%</th>
                    <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {globalIndices.map((index, i) => (
                    <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
                      <td className="px-3 py-2 text-blue-400">{index.index}</td>
                      <td className="px-3 py-2">
                        {typeof index.value === 'number' && index.value < 100 
                          ? index.value.toFixed(4) 
                          : index.value.toFixed(2)}
                      </td>
                      <td className={`px-3 py-2 ${index.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {index.change >= 0 ? '+' : ''}
                        {typeof index.change === 'number' && Math.abs(index.change) < 1 
                          ? index.change.toFixed(4) 
                          : index.change.toFixed(2)}
                      </td>
                      <td className={`px-3 py-2 ${index.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%
                      </td>
                      <td className="px-3 py-2">{index.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Bottom - Orders */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-gray-800 px-3 py-1 flex justify-between items-center border-b border-gray-700">
            <div className="font-bold text-blue-500">ORDER MANAGEMENT</div>
            <div className="flex gap-2">
              <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 text-sm rounded">NEW ORDER</button>
              <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 text-sm rounded">CANCEL ALL</button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">ORDER ID</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">TICKER</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">SIDE</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">QTY</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">PRICE</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">TYPE</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">STATUS</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">TIME</th>
                  <th className="px-3 py-2 text-left sticky top-0 z-10 border-b border-gray-700">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="px-3 py-2">{order.id}</td>
                    <td className="px-3 py-2 text-blue-400">{order.ticker}</td>
                    <td className={`px-3 py-2 ${order.side === 'BUY' ? 'text-green-500' : 'text-red-500'}`}>
                      {order.side}
                    </td>
                    <td className="px-3 py-2">{order.qty}</td>
                    <td className="px-3 py-2">{order.price.toFixed(2)}</td>
                    <td className="px-3 py-2">{order.type}</td>
                    <td className="px-3 py-2">{order.status}</td>
                    <td className="px-3 py-2">{order.time}</td>
                    <td className="px-3 py-2">
                      {order.status === 'OPEN' || order.status === 'PENDING' ? (
                        <div className="flex space-x-1">
                          <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 text-xs rounded">MODIFY</button>
                          <button className="bg-gray-700 hover:bg-gray-600 px-2 py-1 text-xs rounded">CANCEL</button>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OMS;
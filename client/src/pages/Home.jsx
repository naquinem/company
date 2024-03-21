import React from 'react';
import '../style/Style.scss';


const Home = () => {

  return (
    <div className='home'>
        <div className='increment-parts'>
            <div className='dental'>
                <h1>
                    Dental Chair
                </h1>
            </div>
            <div className='spares'>
                <h1>
                    Spare Parts
                </h1>
            </div>
            <div className='add-btn'>
                <button>+ Add Products</button>
            </div>
        </div>
        <div className='search-item'>
            <div className='image-search'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor"
                    className="w-8 h-10 text-gray-600"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className='input-search'>
                <input type='text' name='spare-parts' placeholder='Search for a spare parts' />
            </div>
        </div>
        <div className='spare-list'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Item Code
                        </th>
                        <th>
                            Item Description
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Image
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Master Block Assembly
                        </td>
                        <td>
                            12
                        </td>
                        <td>
                            $2
                        </td>
                        <td>
                            Master block Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Master Block Assembly
                        </td>
                        <td>
                            12
                        </td>
                        <td>
                            $2
                        </td>
                        <td>
                            Master block Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                    <tr>
                        <td>
                            BRK3
                        </td>
                        <td>
                            Water Valve
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            $8
                        </td>
                        <td>
                            Water Valve Image
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home

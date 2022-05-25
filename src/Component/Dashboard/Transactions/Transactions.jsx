import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';
import DashboardFoter from '../DashboardShared/DashboardFoter/DashboardFoter';
import './Transaction.css'

const Transactions = () => {
    const [trxData, setTrxData] = useState([])
    const [value, setSearch] = useState("")

    useEffect(()=>{
        const url = '/TransactionList.json';
        fetch(url)
        .then(res =>res.json())
        .then(data => setTrxData(data))
       
    },[value])
    const handleSearch =(e)=>{
        e.preventDefault();
        const url = `http://localhost:3000/TransactionList.json?q=${value}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => {
            setTrxData(data)
            
        })
    }
   
    return (
        <div className='buyToken-page pt-5'>
            <div className='mx-md-5 mx-2'>
                <div className='table-wraper p-2 p-md-4'>
                    <h3 className='text-start'>Transaction List</h3>
                    <form onChange={handleSearch}>
                       <div className='filter-input'>
                       <i className="fa-solid fa-search search-icon mt-3 pt-1"></i> 
                             <input 
                                type="text"
                                placeholder="search here" 
                                className="input-filed mt-3 me-3"
                                value={value}
                                onChange={(e)=> setSearch(e.target.value)}
                                />
                            <div>
                                <button type="button " class="dropdown-sort-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-filter mt-3 fs-4"></i>
                                </button>
                                <ul class="dropdown-menu" id='sorting-ul'>
                                    <span className='sort-head'>TYPES</span>
                                    
                                    <div className='mb-4'>
                                        <li class="dropdown-item sorting-item"> 
                                            <input type="checkbox" /> <span>Any Type</span>
                                        </li>
                                        <li class="dropdown-item sorting-item"> 
                                            <input type="checkbox" /> <span>Purchase</span>
                                        </li>
                                    </div>
                                    <span className='dividers'></span>
                                   <div >
                                       <span className='sort-head'>STATUS</span>
                                   <li class="dropdown-item sorting-item"> 
                                        <input type="checkbox" /> <span>Show All</span>
                                    </li>
                                    <li class="dropdown-item sorting-item"> 
                                        <input type="checkbox" /> <span>Approved</span>
                                    </li>
                                    <li class="dropdown-item sorting-item"> 
                                        <input type="checkbox" /> <span>Pending</span>
                                    </li>
                                    <li class="dropdown-item sorting-item"> 
                                        <input type="checkbox" /> <span>Canceled</span>
                                    </li>
                                   </div>
                                    
                                </ul>
                            </div>
                        </div>
                    </form>

                    {/* transaction table */}
                    <div className=' table-scrol pe-md-5'>
                    <Table striped className='text-start'>
                        <thead>
                            <tr>
                            <th className='fw-normal'>TRANX NO</th>
                            <th className='fw-normal'>TOKENS</th>
                            <th className='fw-normal'>AMOUNT</th>
                            <th className='fw-normal'>USD AMOUNT</th>
                            <th className='fw-normal'>TO</th>
                            <th className='fw-normal'>TYPE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trxData.map(allData=><tr key={allData.traxNo}>
                                    <td>{allData.traxNo}</td>
                                    <td>{allData.tokens}</td>
                                    <td>{allData.amount}</td>
                                    <td>{allData.usdAmount}</td>
                                    <td>{allData.to}</td>
                                    <td>{allData.type}</td>
                                </tr>
                                )
                            }
                        </tbody>
                        </Table>
                    </div>
                </div>
                </div>
            <DashboardFoter/>
        </div>
    );
};

export default Transactions;
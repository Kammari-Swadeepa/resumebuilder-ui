import React, { useEffect, useState } from 'react'
import { PostApi } from '../../services/commonServices';

import { Styles } from './education';
import { Col, Container, Row } from 'react-bootstrap';

function MyPurchases() {
    useEffect(() => {
        getData()

    }, [])
    const [data, setData] = useState([])
    const getData = async () => {
        var tntId = JSON.parse(localStorage.getItem('tID'))
        const sessiondetails = localStorage.getItem(`userdata${tntId}`);
        const userdata = JSON.parse(sessiondetails);

        if (sessiondetails != null) {
            const reqparam = {
                pageno: '-1',
                query: { userid: userdata.id },
                ptype: 'MYPURCHASES'
            }

            const response = await PostApi(reqparam, 'USERSKILLS');
            console.log("My purchases", response.data);
            setData(response.data)

        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const npage = Math.ceil(data.length / recordsPerPage)
    const records = data.slice(firstIndex, lastIndex)
    const numbers = [...Array(npage + 1).keys()].slice(1)



    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }


    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }

    }
    const changeCPage = (id) => {
        setCurrentPage(id)
    }
    return (
        <div>
            <Styles>
                <Container className="main-div">
                    <h3 className="tab-title text-center">My Purchases</h3>
                    {records?.map((item, ind) => {
                        return <div key={ind}>
                            <div class="card" >
                                <Row>
                                    <div className="card-body p-4" >
                                        <h6 class="card-title d-inline-block">Order ID:</h6><p class="card-text px-2 d-inline-block">{item.orderid}</p><br />
                                        <h6 class="card-title d-inline-block">Payment mode:</h6><p class="card-text px-2 d-inline-block">{item.paymentmode}</p><br />
                                        <h6 class="card-title d-inline-block">Type of transaction:</h6><p class="card-text px-2 d-inline-block">{item.transctiontype}</p><br />
                                        {item?.description && <><h6 class="card-title d-inline-block">Description:</h6><p class="card-text px-2 d-inline-block">{item?.description}</p></>}
                                        {/* <p> {item.description} -Order ID({item.orderid}) - Payment mode ({item.paymentmode}) -
                                Type of transaction ({item.transctiontype})</p> */}

                                    </div>

                                </Row>
                            </div>
                            <br />

                        </div>
                    })}

                    <Col md="12" className="text-center">
                        <div className='mainpagination'>
                            <ul className='pagination'>
                                <li className='page-item'>
                                    <label className='btn btn-outline-success page-link' onClick={prePage}><i className="fa-solid fa-angles-left"></i></label>

                                </li>
                                {numbers.map((n, i) => (
                                    <li className={`page-item ${currentPage === n ? 'active' : ""}`} key={i}>
                                        <label className='btn btn-outline-success page-link' onClick={() => changeCPage(n)}>{n}</label>

                                    </li>

                                ))}

                                <li className='page-item'>
                                    <label className='btn btn-outline-success page-link' onClick={nextPage}><i className="fa-solid fa-angles-right"></i></label>

                                </li>


                            </ul>
                        </div>
                    </Col>

                </Container>
            </Styles>

        </div>
    )
}

export default MyPurchases
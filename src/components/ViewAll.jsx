import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const getDatafromAPI = () => {
        axios.get("http://35.170.103.9:4057/getvistors").then(
            (Response) => {
                changeData(Response.data)
            }
        ).catch()
    }
    useEffect(() => { getDatafromAPI() }, [])
    return (
        <div>
            <Navbar /><br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Purpose</th>
                                            <th scope="col">Whom to meet</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.firstname}</th>
                                                        <td>{value.lastname}</td>
                                                        <td>{value.purpose}</td>
                                                        <td>{value.whomToMeet}</td>
                                                    </tr>
                                                }
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
import React from 'react'import { formateDate } from '../../utils/formateDate';
 6.9k (grripped: 2.7k)
const Appointments=({appointments})=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    
                    <th>Gender</th>
                    <th>Payment</th>
                    <th>Price</th>
                    <th>Booked on</th>
                </tr>
            </thead>
            <tbody>
                {Appointments?.map(iem=><tr key={item?._id}>
                    <th>
                        <img src "item.user.photo" alt=" "/>
                        <div className="p1-3">
                            <div>
                                {item.user.name}
                            </div>
                            <div>
                                {item.user.email}
                            </div>
                        </div>
                    </th>
                    <td>{item.user.gender}
                        </td>
                        <td>{item.ispaid && <div>
                            <div>paid</div>
                             </div>}
                        </td>
                        <td>{item.ispaid && <div>
                            <div>unpaid</div>
                             </div>}
                        </td>
                        <td>{item.ticketPrice}
                        </td>
                        <td>{formateDate(item.createdAt)}
                        </td>

                </tr>)}
            </tbody>
        </table>
    );
}
export default Appointments;
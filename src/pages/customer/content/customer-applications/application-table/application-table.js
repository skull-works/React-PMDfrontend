import React from 'react';
//controllers
import PassbookController from '../../../../../controllers/passbook'
//elements
import Button from '../../../../../elements/button';
// css
import '../styles.css';

const ApplicationTable = ({store, csrf}) => {
    const tableData = store.tableData;

    return (
        <div id="table-wrapper">
                <table className="applicationTable w-full">
                    <thead>
                        <tr id="table-header" className="h-12 bg-gray-300">
                            <th>FORM ID</th>
                            <th>NAME</th>
                            <th>AREA CODE</th>
                            <th>STATUS</th>
                            <th>DATE ISSUED</th>
                            <th>CREATOR</th>
                            <th>REVIEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(i => (
                            <tr key={i.id} className="text-center h-12 font-semibold hover:bg-gray-300">
                                <td>{i.id}</td>
                                <td>{i.first_name} <br className=" sm:hidden" /> {i.last_name}</td>
                                <td>{i.area_code}</td>
                                <td>{i.status}</td>
                                <td>{i.date_issued.split('T')[0]}</td>
                                <td>{i.created_by}</td>
                                <td className="flex flex-wrap justify-center content-center"><Button label="Payments" 
                                            position="w-20 mt-2"
                                            callback={PassbookController.getPassbookItems} 
                                            args={[{ formId: i.id }, store.setPassbookItems, store.setCustomerInfo, store.setBalance, csrf]} />
                                </td>
                            </tr>   
                        ))}
                    </tbody>
                </table>
            </div>
        )
}

export default ApplicationTable;
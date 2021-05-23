import React from 'react';
import { useHistory } from 'react-router-dom';

//actions
import ApplicationActions from '../../../../../actions/application';
//controllers
import ApplicationController from '../../../../../controllers/application';
//elements
import Input from '../../../../../elements/input';
import Button from '../../../../../elements/button';
//Hooks
import { RowHooks } from './row-hooks';
import authStore from '../../../../../store/store';


const Row = ({id, label, displayValue, fieldName, updateType, tableStore, areaCode, csrf}) => {
    const authenticateFalseAction = authStore((state) => state.authenticateFalseAction);

    const history = useHistory();
    const store = RowHooks();
    return(
        <div>
            <button className="focus:outline-none" onClick={store.toggleUpdate}>
                <li>
                <span className="text-blue-600 font-semibold">{label}:</span> {displayValue}</li>
            </button>
            {store.isUpdate?
            <>
            <Input  name={fieldName}  store={store}/>
            <ApplicationActions.MonthsToPayInput store={store}/>
            <Button label="Update"   callback={ApplicationController.updateApplication} 
                args={[
                {
                    updateType: updateType, 
                    id:id, 
                    fieldName: fieldName, 
                    fields: store.inputs,
                    tableData: tableStore.tableData, 
                    areaCode: areaCode
                },
                tableStore.setTableData,
                tableStore.setApplicationDetails,
                csrf,
                history,
                    authenticateFalseAction
                ]} />
            </>:null}
        </div>
    )
}

export default Row;
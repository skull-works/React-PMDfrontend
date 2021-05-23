import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../../layout/header/header';

const MainReports = () => {
    let boxCss = 'w-full h-20 rounded-full flex flex-wrap content-center justify-center bg-gray-800 hover:bg-green-500';
    return (
        <Fragment>
            <Header text={'REPORTS'} title={'REPORTS'}/>
            <div id="link-wrapper" className="md:w-4/12 h-48  pt-24 sm:text-md md:text-xl text-gray-300 mx-auto">
                <Link to="/reports?q=Calendar"  className={`${boxCss}`}>
                    Calendar Reports
                </Link>
                <br />
                <Link to="/reports?q=Graphs"  className={`${boxCss}`}>
                    Graph Reports
                </Link>
            </div>
        </Fragment>
    )
}

export default MainReports;
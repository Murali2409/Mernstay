import React,{useState} from 'react';
import {DatePicker, Space} from 'antd';   // here space is nothing but the margin and padding within the calendar
import "../../CSS/Home.css";

import { useDispatch } from 'react-redux';
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-splice';

const Search = () => {
    const { RangePicker } = DatePicker;   // Destructuring RangePicker from DatePicker   it can also be written as const RangePicker = DatePicker.RangePicker;
    const [keyword,setKeyword] = useState({});
    const [value,setValue] = useState([]);

    const dispatch = useDispatch();
    function searchHandler(e){
        e.preventDefault();
        dispatch(propertyAction.updateSearchParams(keyword));
        dispatch(getAllProperties());
        setKeyword({
            city: "",
            guests: "",
            dateIn: "",
            dateOut: "",
        });
        setValue([]);
    }

    function returnDates(date, dateString){
        setValue([date[0],date[1]]);

        updateKeyword("date-In", dateString[0]);
        updateKeyword("date-Out", dateString[1]);
    }

    const updateKeyword = (field,value) => {
        setKeyword((prevKeyword) => ({
            ...prevKeyword,
            [field]:value,
        })  
        );
    };

    return (
    <>
        <div className='searchbar'>
            <input 
                className="search"
                id="search_destination"
                placeholder="Search destinations"
                type="text"
                value={keyword.city}
                onChange={(e) => updateKeyword("city", e.target.value)}
            />

            <Space direction="vertical" size={12} className='search'>
                <RangePicker 
                    format="YYYY-MM-DD"
                    picker='picker'
                    className='date_picker'
                    value={value}
                    disabledDate={(current) => {
                        return current && current.isBefore(Date.now(), 'day');
                    }}
                    onChange={returnDates}
                />
            </Space>

            <input 
                className='search'
                id='addguest'
                placeholder='Add Guest'
                type='number'
                value={keyword.guests}
                onChange={(e) => updateKeyword("guests", e.target.value)}
            />

            <span class="material-symbols-outlined searchicon" onClick={searchHandler}>search</span>
        </div>
    </>
  );
}

export default Search
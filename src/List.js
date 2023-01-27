import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { DatePicker } from "antd";
import { DiAndroid } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import moment from "moment";
import { useGlobalContext } from "./Context";
const { RangePicker } = DatePicker;

function List({ data }) {
  const { setDates, dates } = useGlobalContext();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="list">
      <div className="list_title">
        <div className="show_entries">
          <p>Show</p>
          <select name="number" id="number">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>Entries</p>
        </div>
        <div className="date_select">
          <RangePicker
            onChange={(values) => {
              setDates(
                values.map((item) => {
                  return item.$d.toISOString().substring(0, 10);
                })
              );
            }}
          />
        </div>
      </div>
      <div className="list_header">
        <p>Date</p>
        <p>Day Installs</p>
        <p>Platform</p>
        <p>Day Uninstalls</p>
        <p>Platform</p>
        <p>Churn Rate</p>
        <p>Churn Platform</p>
      </div>
      <div className="the_list">
        {currentItems.map((item, index) => (
          <div className="list_item" key={index}>
            <div className="item_details">
              <p>{item.created_At.slice(0, 10)}</p>
              <p>{item.totalinstall}</p>
              <div className="list_icons">
                <DiAndroid className="list_icon" />
                <span className="text">{item.android_install}</span>
                <br />
                <AiFillApple className="list_icon" />
                <span className="text">{item.ios_install}</span>
              </div>
              <p>{item.totaluninstall}</p>
              <div className="list_icons">
                <DiAndroid className="list_icon" />
                <span className="text">{item.android_uninstall}</span>

                <br />
                <AiFillApple className="list_icon" />
                <span className="text">{item.ios_uninstall}</span>
              </div>
              <p>30.00%</p>
              <div className="list_icons">
                <DiAndroid className="list_icon" />
                <span className="text">{item.android_uninstall}</span>

                <br />
                <AiFillApple className="list_icon" />
                <span className="text">{item.ios_uninstall}</span>
              </div>
            </div>
            <div className="underline"></div>
          </div>
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </div>
  );
}

export default List;

import React from 'react'


function Item(props) {

  const makeEmailAddress = (props) => {
    let employeeName = props.employee_name.toLowerCase().split(' ');
    let EmailAdress = `${employeeName[0]}.${employeeName[1]}@gmail.com`;
    return EmailAdress;
  }

  const makePhoneNumber = () => {
    let part1 = Math.floor(Math.random() * 800 + 200);
    let part2 = Math.floor(Math.random() * 1000);
    let part3 = Math.floor(Math.random() * 10000);
    var PhoneNumber = `(${formatNumber(part1)}) ${formatNumber(part2)}-${formatNumber(part3, 4)}`;
    return PhoneNumber;
  }

  const formatNumber = (num, len = 3)  => {
    num = num.toString();
    if (num.length < len) {
      let count = len - num.length;
      while (count) {
        num = "0" + num;
        count--;
      }
    }
    return num;
  }

  return (
    <div className="row item-row">
    <div className="col-sm-1">{props.id}</div>
    <div className="col-md-3">{props.employee_name}</div>
    <div className="col-md-5">{makeEmailAddress(props)}</div>
    <div className="col-md-2">{makePhoneNumber()}</div>
    <div className="col-sm-1">{props.employee_age}</div>
  </div>
  );
};




export default Item
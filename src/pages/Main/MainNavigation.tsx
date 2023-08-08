import { Card, Col, Row } from 'antd';
import React from 'react';
import { BiEditAlt } from "react-icons/bi";

function MainNavigation() {
  const cardContent = [
    'MRO',
    'MRO SENIOR/PWD',
    'PAYMENTS',
    'TELLER SENIOR/PWD',
    'RELEASING',
    'LOANS',
  ];

  return (
    <div className='bg-cyan-900 h-screen'>
      <Row>
        {cardContent.map((data, i) => {
          return (
            <Col span={12} className="p-6 cursor-pointer ">
              <div className="p-16 content-center hover:font-bold bg-slate-50 rounded-sm hover:bg-cyan-600 hover:text-white">
                {/* <div className='flex items-center'><BiEditAlt className="text-center"/></div> */}
                <div className="text-center text-4xl indent-3">{data}</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default MainNavigation;

import { Card } from 'antd';
import React from 'react';
import { CiBoxes, CiCalculator1, CiPalette, CiSettings } from 'react-icons/ci';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function MenuNavigation() {
  return (
    <div className="h-screen relative">
      <div className="blur-[18px] h-full w-full absolute bg-cover backdrop-blur-md bg-[url(../src/assets/img/cfi-building.jpg)]"></div>
      <div className="grid grid-cols-4 gap-4 p-10">
        <div className="">
          <Link to="/main/inventory">
            <Card
              className="cursor-pointer"
              cover={
                <img
                  className="hover:animate-pulse"
                  alt="example"
                  src="../src/assets/img/cfi-building.jpg"
                />
              }
              // actions={[
              //   <SettingOutlined key="setting" />,
              //   <EditOutlined key="edit" />,
              //   <EllipsisOutlined key="ellipsis" />,
              // ]}
            >
              <Meta
                avatar={<CiBoxes className="text-2xl text-sky-900" />}
                title="INVENTORY"
                // description="This is the description"
              />
            </Card>
          </Link>
        </div>
        <div className="...">
          <Card
            className="cursor-pointer"
            cover={
              <img
                className="hover:animate-pulse"
                alt="example"
                src="../src/assets/img/cfi-building.jpg"
              />
            }
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={<CiCalculator1 className="text-2xl text-sky-900" />}
              title="POINTS OF SALE"
              // description="This is the description"
            />
          </Card>
        </div>
        <div className="...">
          <Card
            className="cursor-pointer"
            cover={
              <img
                className="hover:animate-pulse"
                alt="example"
                src="../src/assets/img/cfi-building.jpg"
              />
            }
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={<CiPalette className="text-2xl text-sky-900" />}
              title="ACTIVITY BUILDER"
              // description="This is the description"
            />
          </Card>
        </div>
        <div className="...">
          <Card
            className="cursor-pointer"
            cover={
              <img
                className="hover:animate-pulse h-[300px]"
                alt="example"
                src="../src/assets/img/logo.png"
              />
            }
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={<CiSettings className="text-2xl text-sky-900" />}
              title="SYSTEM"
              // description="This is the description"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MenuNavigation;

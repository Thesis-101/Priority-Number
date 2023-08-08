import { Button, Space, Card, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react';
import type { FormItemProps } from 'antd';
import { Link } from 'react-router-dom';
import { Select } from 'antd';

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

  return <Form.Item name={concatName} {...props} />;
};

const getInitialState = () => {
  const value = 1;
  return value;
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

function Login() {
  const [value, setValue] = useState(0);

  const onChange = (value: number) => {
    console.log(`selected ${value}`);
    setValue(value);
  };

  const onFinish = (value: object) => {
    console.log(value);
  };

  const isLoggedIn = 1;

  return (
    <div>
      <div className="grid grid-rows-3 grid-flow-col h-screen">
        <div className="col-span-2 h-screen relative">
          <div className="blur-[4px] h-full w-full absolute bg-cover backdrop-blur-md bg-[url(../src/assets/img/cfi-building.jpg)]"></div>
          <div className="relative h-full w-full flex justify-center items-center">
            <Card style={{ width: 400 }}>
              <img
                src="../src/assets/img/logo.png"
                alt="CFI Logo"
                className="w-24 ml-[123px]"
              />
              <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <div className="text-center mt-2 font-medium">SIGN-IN AS</div>
                <Select
                  className="w-full mt-4 mb-4"
                  showSearch
                  placeholder="Select"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? '')
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Front Office',
                    },
                    {
                      value: '2',
                      label: 'Teller',
                    },
                    {
                      value: '3',
                      label: 'Admin',
                    },
                  ]}
                />
                <MyFormItemGroup prefix={['user']}>
                  <MyFormItemGroup prefix={['name']}>
                    <MyFormItem name="firstName" label="Email Address">
                      <Input placeholder="example@cficoop.com" />
                    </MyFormItem>
                    <MyFormItem name="lastName" label="Password">
                      <Input placeholder="********" />
                    </MyFormItem>
                  </MyFormItemGroup>
                </MyFormItemGroup>

                {/* {value == 1 ? (
                  <Link to="/main/front-office">
                    <Button
                      className="bg-sky-900 w-full"
                      type="primary"
                      htmlType="submit"
                    >
                      Sign In
                    </Button>
                  </Link>
                ) : (
                  <Link to="/main">
                    <Button
                      className="bg-sky-900 w-full"
                      type="primary"
                      htmlType="submit"
                    >
                      Sign In
                    </Button>
                  </Link>
                )} */}

                <Link to="/main/front-office">
                  <Button
                    className="bg-sky-900 w-full"
                    type="primary"
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Link>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

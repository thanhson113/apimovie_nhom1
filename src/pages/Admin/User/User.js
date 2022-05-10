import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Button, Input, Table } from 'antd';
import { history } from '../../../App';
import { laydanhSachNguoiDung, timKiemNguoiDung } from '../../../redux/actions/NguoiDungAction';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,

} from '@ant-design/icons';
const { Search } = Input;
export default function User(props) {
  const [page, setPage] = useState(1);
  const { danhSachNguoiDung, nguoiDungTimKiem } = useSelector(state => state.nguoiDungReducer)
  const dispatch = useDispatch();
  const callAPI = () => {
    dispatch(laydanhSachNguoiDung())
  }
  useEffect(() => {
    callAPI()
  }, [])
  const columns = [
    {
      title: 'STT',
      render: (value, item, index) => index + 1,
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      width: '5%',
    },
    {
      title: 'Tài khoản',
      dataIndex: 'taiKhoan',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let taiKhoanA = a.taiKhoan.trim().toLowerCase();
        let taiKhoanB = b.taiKhoan.trim().toLowerCase();
        if (taiKhoanA > taiKhoanB) {
          return 1
        }
        return -1
      },
      width: '20%'
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'matKhau',
      width: '10%'
    },
    {
      title: 'Họ tên',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.trim().toLowerCase();
        let hoTenB = b.hoTen.trim().toLowerCase();
        if (hoTenA > hoTenB) {
          return 1
        }
        return -1
      },
      width: '20%'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.trim().toLowerCase();
        let hoTenB = b.hoTen.trim().toLowerCase();
        if (hoTenA > hoTenB) {
          return 1
        }
        return -1
      },
      width: '10%'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'soDt',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let hoTenA = a.hoTen.trim().toLowerCase();
        let hoTenB = b.hoTen.trim().toLowerCase();
        if (hoTenA > hoTenB) {
          return 1
        }
        return -1
      },
      width: '15%'
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      render: (text, nguoiDung) => {
        return <>
          <NavLink to={`/admin/user/edituser/${nguoiDung.taiKhoan}`}>
            <EditOutlined style={{ fontSize: 20, cursor: 'pointer' }} className="mr-5 text-primary" />
          </NavLink>
        </>
      },
      width: '20%'
    },
  ];
  const data = danhSachNguoiDung;
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
  const onSearch = (value) => {
    dispatch(laydanhSachNguoiDung(value))
  }
  return (
    <>
      <h3>Quản lý người dùng</h3>
      <Button className="mb-3" type="primary" onClick={() => { history.push('/admin/user/adduser') }}>
        Thêm người dùng
      </Button>
      <Search className="mb-3" placeholder="input search text" onSearch={onSearch} enterButton />
      <Table rowKey={'taiKhoan'} columns={columns} dataSource={data} onChange={onChange} />
    </>
  )
}

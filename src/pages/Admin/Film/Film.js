import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Table, Button, Input, Space, Modal } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined ,
  CalendarOutlined,
  
} from '@ant-design/icons';
import { getPhim , xoaPhim} from '../../../redux/actions/PhimAction';
import { history } from '../../../App';
const { Search } = Input
const { confirm } = Modal;



function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}
export default function Film() {
  const { arrPhimDefault } = useSelector(state => state.movieReducers)
  const dispatch = useDispatch();
  useEffect(() => {
    callAPI()
  }, [])
  const callAPI = () => {
    dispatch(getPhim())
  }
  const data = arrPhimDefault.reverse();
  const columns = [
    {
      title: 'Mã phim',
      dataIndex: 'maPhim',
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['ascend'],
      width: '10%',
      align: 'center',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      defaultSortOrder: 'descend',
      render: (text, phim) => { return <img style={{ width: 100, height: 100, objectFit: 'cover' }} src={phim.hinhAnh}></img> },
      width: '10%',
      align: 'center',
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ['descend'],
      width: '20%',
      align: 'center',
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
      width: '40%',
      align: 'center',
    },
    {
      title: 'Hành động',
      dataIndex: '',
      render: (text, phim) => {
        return <div className="text-center">
          <NavLink to={`/admin/film/edit/${phim.maPhim}`}>
            <EditOutlined style={{ fontSize: 20, cursor: 'pointer' }} className="mr-5 text-primary" />
          </NavLink>
          <DeleteOutlined onClick={() => {
            confirm({
              title: `Bạn có muốn xóa phim này ?`,
              icon: <ExclamationCircleOutlined />,
              okText: 'Yes',
              okType: 'danger',
              cancelText: 'No',
              onOk() {
                dispatch(xoaPhim(phim.maPhim));
              },
              onCancel() {
                console.log('Cancel');
              },
            });
           
          }} style={{ fontSize: 20, cursor: 'pointer' }} className="mr-5 text-danger" />
           <NavLink to={`/admin/film/showtime/${phim.maPhim}`}>
              <CalendarOutlined style={{ fontSize: 20, cursor: 'pointer' }} className="mr-5 text-success" />
            </NavLink>
        </div>
      },
      width: '20%',
      align: 'center',
    },
  ];
  const onSearch = value => {
    dispatch(getPhim(value))
  };
  return (
    <>
      <h3>Quản lý phim</h3>
      <Button className="mb-3" type="primary" onClick={() => history.push('/admin/film/addnew')}>Thêm phim</Button>
      <Search className="mb-3" placeholder="input search text" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'maPhim'}/>
    </>
  )
}

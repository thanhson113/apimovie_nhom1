import React from 'react'
import {useDispatch} from 'react-redux'
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useFormik } from 'formik';
import { GROUPID } from '../../../../util/Setting';
import { themNguoiDung } from '../../../../redux/actions/NguoiDungAction'
const { Option } = Select;
export default function AddUser() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GROUPID,
            maLoaiNguoiDung: "",
            hoTen: "",
        },
        onSubmit: (value) => {
            dispatch(themNguoiDung(value))
        }
    })
    const handleSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }
    return (
        <>
            <h3>Thêm người dùng</h3>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                onSubmitCapture={formik.handleSubmit}
            >
                <Row gutter={16}>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Username"
                            name="username"
                        >
                            <Input name='taiKhoan' onChange={formik.handleChange} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input name="email" onChange={formik.handleChange} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Mật khẩu"
                            name="matKhau"
                        >
                            <Input name="matKhau" onChange={formik.handleChange} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Số điện thoại"
                            name="soDt"
                        >
                            <Input name="soDt" onChange={formik.handleChange} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Họ tên"
                            name="hoTen"
                        >
                            <Input name="hoTen" onChange={formik.handleChange} />
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item label="Loại người dùng">
                            <Select name="loaiNguoiDung" onChange={handleSelect}>
                                <Select.Option value="KhachHang">Khách hàng</Select.Option>
                                <Select.Option value="QuanTri">Quản trị</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Thêm người dùng
                            </Button>
                        </Form.Item>
                    </Col>

                </Row>

            </Form>

        </>
    )
}

import React , {useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { useFormik } from 'formik';
import { GROUPID } from '../../../../util/Setting';
import { capNhatThongTinNguoiDungAdmin, laydanhSachNguoiDung, themNguoiDung } from '../../../../redux/actions/NguoiDungAction'
const { Option } = Select;
export default function EditUser(props) {
    const dispatch = useDispatch()
    const {danhSachNguoiDung} = useSelector(state => state.nguoiDungReducer)
    console.log(danhSachNguoiDung)
    const callAPI = () => {
        let {taiKhoan} = props.match.params;
        dispatch(laydanhSachNguoiDung(taiKhoan))
    }
    useEffect(() => {
        callAPI();
    },[])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: danhSachNguoiDung[0]?.taiKhoan,
            matKhau: danhSachNguoiDung[0]?.matKhau,
            email: danhSachNguoiDung[0]?.email,
            soDt: danhSachNguoiDung[0]?.soDt,
            maNhom: GROUPID,
            maLoaiNguoiDung: danhSachNguoiDung[0]?.maLoaiNguoiDung,
            hoTen: danhSachNguoiDung[0]?.hoTen,
        },
        onSubmit: (value) => {
            dispatch(capNhatThongTinNguoiDungAdmin(value));
        }
    })
    const handleSelect = (value) => {
        formik.setFieldValue('maLoaiNguoiDung', value)
    }
    return (
        <>
            <h3>Thông tin người dùng</h3>
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
                        >
                            <Input disabled={true}  name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan}/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Email"
                        >
                            <Input name="email" onChange={formik.handleChange} value={formik.values.email}/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Mật khẩu"
                        >
                            <Input.Password name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau}/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Số điện thoại"
                        >
                            <Input name="soDt" onChange={formik.handleChange} value={formik.values.soDt}/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item
                            label="Họ tên"
                        >
                            <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen}/>
                        </Form.Item>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <Form.Item label="Loại người dùng">
                            <Select name="loaiNguoiDung" onChange={handleSelect} value={formik.values.maLoaiNguoiDung}>
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
                                Cập nhật
                            </Button>
                            
                        </Form.Item>
                    </Col>

                </Row>

            </Form>

        </>
    )
}

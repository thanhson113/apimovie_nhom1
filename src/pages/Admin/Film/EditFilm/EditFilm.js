import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import { capNhatPhim, themPhim } from '../../../../redux/actions/PhimAction';
import { GROUPID } from '../../../../util/Setting';
import { layThongTinPhim } from '../../../../redux/actions/PhimAction'

export default function EditFilm(props) {
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const { thongTinPhim } = useSelector(state => state.movieReducers)
    console.log(thongTinPhim)
    const dispatch = useDispatch();
    useEffect(() => {
        const { id } = props.match.params;
        dispatch(layThongTinPhim(id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: thongTinPhim.hot,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null, // Gán hình ảnh là 1 file chứ k phải là chuỗi
            maNhom: GROUPID,
        },
        onSubmit: (values) => {
            console.log(values.hinhAnh)
            // Tạo đối tượng form data =>  Đưa giá trị values từ formik vào formdata
            values.maNhom = GROUPID;
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])

                } else {
                    // Nếu hình ảnh khác null mới thêm vào form data
                    if (values.hinhAnh !== null) {
                        formData.append('File', values.hinhAnh, values.hinhAnh.name)
                    }
                }

            }
            // console.log(formData.get('File',values));
            // Xem giá trị của từng thuộc tính trong form data
            
            // Gọi api
            dispatch(capNhatPhim(formData))
        }
    });
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeInputFile = async (event) => {
        // Lấy file ra từ event
        let file = event.target.files[0];
        if (file.type == "image/png " || file.type == "image/jpeg" || file.type == "image/gif" || file.type == "image/jpg") {
            // Đem dữ liệu file lưu vào formik
            await formik.setFieldValue('hinhAnh', file)
            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file) // Đọc file
            reader.onload = (event) => { // load hình hàm bất đồng bộ
                setImgSrc(event.target.result); // set src hình thành mã base 64

            }
        }

        // validation : formik.setErrors()
    }
    return (
        <>
            <h3 className="mb-5">Thông tin phim</h3>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                onSubmitCapture={formik.handleSubmit}
                size={componentSize}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={handleInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeInputFile} accept="image/png, image/jpeg,image/gif, image/jpg" />
                    <img className="mt-3" style={{ width: 200, height: 200 }} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="" />
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 4,
                    span: 4,
                }}>
                    <Button type="primary" htmlType="submit">
                        Cập nhật phim
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

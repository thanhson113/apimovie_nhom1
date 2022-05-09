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
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import { themPhim } from '../../../../redux/actions/PhimAction';
import { GROUPID } from '../../../../util/Setting';
export default function AddFilm(props) {
    const [form] = Form.useForm();
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState(null)
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
        },
        onSubmit: (values, onSubmitProps) => {
            // Tạo đối tượng form data =>  Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            values.maNhom = GROUPID;
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])

                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)
                }
            }
            console.log(formData.get('File', values));
            // Xem giá trị của từng thuộc tính trong form data
            form.resetFields();
            // Gọi api
            // dispatch(themPhim(formData))
            // onSubmitProps.setSubmitting(false)
            // onSubmitProps.resetForm()
        }
    });
    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
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
    const handleChangeInputFile = (event) => {
        // Lấy file ra từ event
        let file = event.target.files[0];
        if (file.type == "image/png " || file.type == "image/jpeg" || file.type == "image/gif" || file.type == "image/jpg") {
            // Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (event) => {
                setImgSrc(event.target.result);

            }
        }
        // Đem dữ liệu file lưu vào formik
        formik.setFieldValue('hinhAnh', file)
        // validation : formik.setErrors()
    }
    const onReset = (event) => {
        form.resetFields();
    };
    return (
        <>
            <h3 className="mb-5">Thêm mới phim</h3>
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
                form={form}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={handleInputNumber('danhGia')} min={1} max={10} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeInputFile} accept="image/png, image/jpeg,image/gif, image/jpg" />
                    <img className="mt-3" style={{ width: 200, height: 200 }} src={imgSrc} alt="" />
                </Form.Item>
                <Form.Item wrapperCol={{
                    offset: 4,
                    span: 4,
                }}>
                    <Button type="primary" htmlType="submit" >
                        Thêm phim
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

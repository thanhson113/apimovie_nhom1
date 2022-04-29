import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { COMMENT } from '../../../redux/types/NguoiDungType';
import './danhgia.css'
import moment from 'moment'
import { Button } from 'antd';
export default function () {
  const [comment, setComment] = useState({
    id: '',
    commnentName: ''
  })
  const dispatch = useDispatch();
  const { commentArr } = useSelector(state => state.nguoiDungReducer)
  const { userLogin } = useSelector(state => state.nguoiDungReducer);
  console.log(userLogin)
  const handleChange = (event) => {
    setComment({
      ...comment,
      id: Date.now(),
      commnentName: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: COMMENT,
      comment: comment
    })
  }
  const handleRenderComment = () => {
    let commentArr = JSON.parse(localStorage.getItem('comment'));
    return commentArr?.map((comment) => {
      return <div key={comment.id}>
        <div className="d-flex flex-row user-info">
          <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width={40} />
          <div className="d-flex flex-column justify-content-start ml-2">
            <span className="d-block font-weight-bold name">{userLogin.hoTen}</span>
            <span className="date text-black-50">{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
        <div className="mt-2">
          <p className="comment-text">{comment.commnentName}</p>
        </div>
      </div>
    })
  }

  return (
    <section className="evaluate">
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="d-flex flex-column comment-section">
              <div className="bg-white p-2">
                {handleRenderComment()}
              </div>
              <div className="bg-white">
                <div className="d-flex flex-row fs-12">
                  {/* <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up" /><span className="ml-1">Like</span></div>
                <div className="like p-2 cursor"><i className="fa fa-commenting-o" /><span className="ml-1">Comment</span></div>
                <div className="like p-2 cursor"><i className="fa fa-share" /><span className="ml-1">Share</span></div> */}
                </div>
              </div>
              <div className="bg-light p-2">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width={40} />
                    <textarea className="form-control ml-1 shadow-none textarea" defaultValue={""} onChange={handleChange} />
                  </div>
                  <div className="mt-2 text-right">
                    <Button type="primary" danger>
                      Bình luận
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

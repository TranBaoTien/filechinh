import React,{useEffect, useState,Component} from 'react';

import {useParams } from 'react-router-dom';
import '../App.css';
import PropTypes from 'prop-types';


 function Detail(props) {
  const[postList,setPostList]=useState();

  useEffect(()=>{
  async function fetchPostList(){
    const requestUrl=`http://localhost:3001/api/get-book?id=${para.id}`;
    const respone = await fetch(requestUrl);
    const responeJSON=await respone.json();
    const{books}=responeJSON.book;
    setPostList(responeJSON.book);
  }
  fetchPostList();
  },[]
  
  );
  console.log("123",postList);

  const para=useParams();

    return (
      <>
     
   
      <div className="detail" key={para.id}>
        <div className='detailleft'>
        <span className="image">
                          <img src={require(`./images/sach/${para.hinh}`)} alt="" />
                          </span>
        </div>
        <div className='detailright'>
          <div><h1>{para.tensach}</h1></div>
          <div className='detailbanner'>Fash Sale</div>
          <div className='detailgia'>
          <div className='gia1'><h3>đ{para.gia*9} </h3></div>
          <div className='gia'><h3>đ{para.gia} </h3></div>
          <div className='gia'><h3><button>90% Giảm</button> </h3></div>
          </div>
        
          <div className="detail1">
              <div className='detailleft1'>
                <label>Vận Chuyển</label>
              </div>
              <div className='detailright1'>
                <div className="detail1">
                  <div className='detailleft1'>
                    <label>Nơi Gửi : </label>
                  </div>
                  <div className='detailright1'><select>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>An Giang</option>
                    <option>Bình Định</option>
                    <option>Ninh Thuận</option>
                    </select></div>
                </div>
                  
                <div className="detail1">
                <div className='detailleft1'>
                  <label>Nơi Nhận :</label>
                </div>
                <div className='detailright1'><select>
                  <option>Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>An Giang</option>
                  <option>Bình Định</option>
                  <option>Ninh Thuận</option>
                  </select></div>
              </div>
              <div className="detail1">
              <div className='detailleft1'>
                <label>Phí Vận Chuyển :</label>
              </div>
              <div className='detailright1'>
              30000đ
              </div>
            </div>
              </div>
          </div>
          <div className="detail1">
          <div className='detailleft1'>
            <label>Số Lượng</label>
          </div>
          </div>
          <div className="detail1">
          <div className='detailleft1'>
          <div className='detailthem'>   <button >Thêm Vào Giỏ Hàng</button></div>
  
          </div>
          <div className='detailright1'>
          <div className='detailmua'>   <button >Mua Ngay</button></div>
  
          </div>
          </div>
        </div> 
      </div>
      <div className="detail2" key={para.id}>
      <div className="detail2" key={para.id}>
          <div className='detailleft1'>
            <label><h1>Chi Tiết Sản Phẩm</h1> </label>
          </div>  
      </div>
      <div className="detail2" key={para.id}>
      <div className='detailleft1'>
        <label>Số lượng hàng khuyến mãi </label>
        </div>
        <div className='detailright1'>27126</div>
      </div>
      <div className="detail2" key={para.id}>
      <div className='detailleft1'>
      <label>Số sản phẩm còn lại </label>
</div>
<div className='detailright1'>27126</div>
      </div>
      <div className="detail2" key={para.id}>
       
      <div className='detailleft1'>
      <label>Gửi từ</label>
      </div>      
      <div className='detailright1'>Hồ Chí Minh</div>
    
      </div>
      </div>
      <div className="detail3" key={para.id}>
      <div className="detail2" key={para.id}>
          <div className='detailleft1'>
            <label><h1>Mô Tả</h1> </label>
          </div>  
      </div>
      <div className="detail2" key={para.id}>
      <div className='detailleft1'>
        <label>Mô Tả</label>
        </div>
        <div className='detailright1'>{para.mota}</div>
      </div>
      
      </div>
          
          </>
    );
  
}
export default  Detail ;

import { render } from "@testing-library/react";
import React,{Component} from "react";
import Headers from "./Headers";
import '../App.css';
import PropTypes from 'prop-types';
import{useNavigate
}from'react-router-dom';
Home.propTypes={
    posts: PropTypes.array,
};
Home.defaultProps={
    posts:[],
};

function Home(props){
  let navigate=useNavigate();
    const{posts}=props;
    return(
        
        <>
        <Headers></Headers>
        <div className="headers">
    <h3 >Special Offer</h3>
    <h1>Top Sách Bán Chạy</h1>
   
    </div>
    <div className="tiles">
    {posts.map(post=>{
      if(post.maloai==="td"){
        return(
          <div key={post.id} className="tilestyle">
          <div className="style1">            
            <span className="image">
            <img src={require(`./images/sach/${post.hinh}`)} alt="" />
            <h2>{post.tensach}</h2>
            <h2>{post.gia}đ</h2>
            <div className="style2" >
            <button className="style2" onClick={()=>{
              navigate("/product/chi-tiet/"+post.id+"/"+post.hinh+"/"+post.tensach+"/"+post.mota+"/"+post.createdAt+"/"+post.gia);
            }}>
           Chi Tiet
            </button>
        
            </div>
           
            </span>  
          </div>    
      </div>

        );
      }
     
    })}
</div>
 
        
       
        </>
        );
}
export default Home;
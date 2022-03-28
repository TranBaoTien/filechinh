
import React from "react";
import axios from 'axios'
import '../App.css';
import{useNavigate
}from'react-router-dom';
import PropTypes from 'prop-types';

Product.propTypes={
    posts: PropTypes.array,
};
Product.defaultProps={
    posts:[],
};
export default function Product(props){
  let navigate=useNavigate();
  
  
  const{posts}=props;

  console.log(posts);

    return(
      
      <div className="tiles">
            {posts.map(post => {
           
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
            })}
        </div>
         
      
    );
}

// import { connect } from 'react-redux';
import React, { Component } from 'react'
// import UserService from'../sever/src/services/UserService';
 export default class Adminmanager extends React.Component {

    //  handleDeleteBook = async (req, res) => {
    //     if (!req.body.id) {
    //         return res.status(200).json({
    //             errCode: 1,
    //             errMessage: 'Missing required parameters!',
    
    
    //         })
    //     } else {
    //         let message = await UserService.deleteBook(req.body.id);
    
    //         return res.status(200).json(message);
    
    //     }
    // }
  render() {
      console.log('data ',this.props.posts);
      let listbooks=this.props.posts;
    return (
    <span>
    
    <>
    {listbooks.map((data,index)=>{
      return(
          <div key={data.id}>
          {index+1}-{data.tensach}-<button onClick={()=>this.handleDeleteBook(data)}>delete</button>
          </div>
      );

  })}
  </>
    </span>
    );
  }
}
// const mapStateToProps=(state)=>{
//     return{
//         dataRedux: state.id
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         //delete redux
//         deleteBook:(iddelete)=>dispatch({type:'DELETE_BOOK',payload:iddelete})

//     }
//   }
  
// export default connect(mapDispatchToProps,mapStateToProps)(Adminmanager);
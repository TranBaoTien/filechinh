import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './Bookmanage.scss'
import {getAllBooks,createNewBookse,deleteBookSE,editBooksSE} from '../../services/userService'
import Modlebook from './Modlebook';
import Modaledit from './Modaledit';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrBooks:[],
            isopenModal:false,
            isopenModalEdit:false,
            booksedit:{}
        }
    }

    async componentDidMount() {
        let response=await getAllBooks("ALL");
        if(response&&response.errCode===0){
            this.setState({
                arrBooks:response.book
            })
            // ,()=>{
            //     console.log(`check state`,this.state.arrBooks);

            // }
            
            //)
           // console.log(`check state`,this.state.arrBooks);
        }
       
    }
    getAllBooksFrom =async()=>{
        
        let response=await getAllBooks("ALL");
        if(response&&response.errCode===0){
            this.setState({
                arrBooks:response.book
            })
            // ,()=>{
            //     console.log(`check state`,this.state.arrBooks);

            // }
            
            //)
           // console.log(`check state`,this.state.arrBooks);
        }
    }
handleAddBooks=()=>{
    this.setState({
      isopenModal:true  
    })
}
toggleBookModal=()=>{
    this.setState({
        isopenModal:!this.state.isopenModal  
      })
}
toggleEditBookModal=()=>{
    this.setState({
        isopenModalEdit:!this.state.isopenModalEdit  
      })
}
createdNewBook= async(data)=>{
    // alert("call me")
    console.log("check data: ",data)
        try{
          let response= await createNewBookse(data);
          if(response&& response.errCode!==0){
              alert(response.errMessage);
          }else{
            await this.getAllBooksFrom();
            this.setState({
                isopenModal:false
            })
          }
          console.log('repose create: ',response)
        }catch(e){
console.log(e);
        }
        console.log('check data from',data)
    }


    handledeleteBook= async(data)=>{
        console.log("data",data);
        try {
            let res=await deleteBookSE(data.id);
           if(res&&res.errCode===0){
               await this.getAllBooksFrom();
           }
           else{
               alert(res.errMessage);
           }
        } catch (e) {
            console.log(e);
            
        }
    }


    handleditBook=(data)=>{
        console.log('check edit',data)
        this.setState({
            isopenModalEdit:true,
            booksedit:data
        })
    }

    doEditBook=async(data)=>{
       
        try{
            let response=await editBooksSE(data);
            if(response&& response.errCode===0){
                this.setState({
                    isopenModalEdit:false
                })
                await this.getAllBooksFrom();
            }else{
           
              alert(response.errMessage);
            }
            console.log('repose create: ',response)
          }catch(e){
  console.log(e);
          }
    }
    render() {
        console.log('check render',this.state);
        let arrBooks=this.state.arrBooks;
        
        return (
            
            <div className="book-container">
            <Modlebook isOpen={this.state.isopenModal} 
            toggleBookModal={this.toggleBookModal}
            createdNewBook={this.createdNewBook}
            
            />
            
            {//kiem tra nao bang true moi cho chay dismouse curren
                    this.state.isopenModalEdit&&
                <Modaledit
                isOpen={this.state.isopenModalEdit} 
                 toggleBookModal={this.toggleEditBookModal}
                currentBooks={this.state.booksedit}
                editBook={this.doEditBook}
                 // createdNewBook={this.createdNewBook}
                />

            }
            
            <div className='title text-center'>
            Manager Books
            
            </div>
            <div className='mx-1'>
            <button 
            onClick={()=>this.handleAddBooks()}
            ><i className="fa-solid fa-circle-plus"> Add </i> </button>
           
            </div>
            <div className='books-table' >
            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>Ma Sach</th>
                    <th>Ten Sach</th>
                    <th>Mo Ta</th>
                    <th>Gia</th>
                    <th>Hinh</th>
                    <th>Ma NXB</th>
                    <th>Ma Loai</th>
                    <th>CreateAT</th>
                    <th>UpdateAt</th>
                    <th>TTTT</th>

                </tr>
  
  {
      arrBooks&& arrBooks.map((item,index)=>{
          return(
        <tr >
            <td>{item.id}</td>
            <td>{item.masach}</td>
            <td>{item.tensach}</td>
            <td>{item.mota}</td>
            <td>{item.gia}</td>
            <td>{item.hinh}</td>
            <td>{item.manxb}</td>
            <td>{item.maloai}</td>
            <td>{item.createdAt}</td>
            <td>{item.updatedAt}</td>
            <td>
            <button className='btn-edit' onClick={()=>this.handleditBook(item)}><i className="fa-solid fa-pen"></i></button>
            <button className='btn-delete'
            onClick={()=>this.handledeleteBook(item)}><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
          );
      })

  }

  
</table>
            </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

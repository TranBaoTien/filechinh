import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup,Input}from 'reactstrap'
import _ from 'lodash';

class Modaledit extends Component {
    constructor(props){
        super(props);
        this.state={
          id:'',
            masach:' ',
            tensach:' ',
            mota:' ',
            gia: 0,
            hinh:' ',
            manxb:' ',
            maloai:' '
        }
    }
   

    componentDidMount() {
      let bookss=this.props.currentBooks;
      if(bookss&& ! _.isEmpty(bookss)){
        this.setState({
          id:bookss.id,
          masach:bookss.masach,
          tensach:bookss.tensach,
          mota:bookss.mota,
          gia: bookss.gia,
          hinh:bookss.hinh,
          manxb:bookss.manxb,
          maloai:bookss.maloai
      })
      }
      console.log("check dismouse :",this.props.currentBooks)
    }
    toggle = ()=>{
        this.props.toggleBookModal();
    }
    handleInput=(event,id)=>{
        let copystate={...this.state};
        copystate[id]=event.target.value;
        this.setState({
            ...copystate
        },()=>{
            console.log("check good state:",this.state)    
        })
    }
    checkValideiput=()=>{
        let isValid=true;
        let arrInput=['masach','tensach','mota','gia','hinh','maloai','manxb'];
    for(let i=0;i<arrInput.length;i++){
       
   if(!this.state[arrInput[i]]){
    isValid=false;
    alert('Thieu: '+ arrInput[i]);
    break;
     }
    }
    return isValid;
    }
    handlesavebook=()=>{
        let isValid= this.checkValideiput();
        if(isValid===true){
          this.props.editBook(this.state);
        }
    }
    render() {
      console.log('check prop edit',this.props)
        // console.log('check props',this.props);
        // console.log('checl modal',this.props.isOpen);
        return (
            <Modal  isOpen={this.props.isOpen} 
            toggle={()=>{this.toggle()}}
            size="lg"
            >
            <ModalHeader toggle={()=>{this.toggle()}}
            
            
            >
              Edit Books
            </ModalHeader>
            <ModalBody>
             <div className='container'>
                <div className='row'>
                    <div className='input-container'>
                        <label>Mã Sách : </label>
                        <input type='textid'
                        onChange={(event)=>{this.handleInput(event,"masach")}}
                        value={this.state.masach}
                        disabled
                        ></input>
                    </div>
                    <div className='input-container'>
                        <label>Tên Sách : </label>
                        <input type='textten'
                        onChange={(event)=>{this.handleInput(event,"tensach")}}
                        value={this.state.tensach}
                        ></input>
                    </div>
                </div> 
                <div className='row'>
                    <div className='input-container'>
                        <label>Mô tả : </label>
                        <input type='textmota'
                        onChange={(event)=>{this.handleInput(event,"mota")}}
                        value={this.state.mota}
                        ></input>
                    </div>
                    <div className='input-container'>
                        <label>Giá : </label>
                        <input type='textgia'
                        onChange={(event)=>{this.handleInput(event,"gia")}}
                        value={this.state.gia}
                        ></input>
                    </div>
                
              </div> 
              <div className='row'>
              <div className='input-container'>
                  <label>Hình : </label>
                  <input type='txthinh'
                  onChange={(event)=>{this.handleInput(event,"hinh")}}
                  value={this.state.hinh}
                  ></input>
              </div>
             
          </div> 
          
        <div className='row'>
        <FormGroup>
        <label for="exampleSelect">
          Mã Loại
        </label>
        <Input
          id="exampleSelect"
          
          type="select"
          onChange={(event)=>{this.handleInput(event,"maloai")}}
          value={this.state.maloai}
        >
          <option>
            gk
          </option>
          <option>
            khkt
          </option>
          <option>
            Ls
          </option>
          <option>
            nn
          </option>
          <option>
            td
          </option>
        </Input>
      </FormGroup>
             
          
        </div>
        <div className='row'>
        <FormGroup>
        <label for="exampleSelect">
          Ma NXB
        </label>
        <Input
          id="exampleSelect"
         
          type="select"
          onChange={(event)=>{this.handleInput(event,"manxb")}}
                  value={this.state.manxb}
        >
          <option>
            gd
          </option>
          <option>
            vhtt
          </option>
          <option>
            hcm
          </option>
          <option>
            tn
          </option>
    
        </Input>
      </FormGroup>
             
          
        </div>
       
       
             </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={()=>{this.handlesavebook()}}
              >
                Save
              </Button>
              {' '}
              <Button onClick={()=>{this.toggle()}}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Modaledit);

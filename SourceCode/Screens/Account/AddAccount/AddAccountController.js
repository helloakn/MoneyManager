import React from 'react';
import {AccountTable} from '../../../Schema/Models/AccountTable';

import {GetDBConnection,CreateTable} from '../../../Schema';

export default class AddAccountController extends React.Component{
    constructor(props) {
        super(props);
       this.OnCreate = this.OnCreate.bind(this);
      }
   
    async OnCreate(){
        db =await GetDBConnection();
        let accountTable = new AccountTable(db);
        // accountTable.getRowCount().then((r)=>{
        //     alert(r.count);
        //   });
        result = accountTable.InsertData("hello",1,2,3,this.refreshCallBack);
        console.log('going back');
        this.props.navigation.goBack();
        console.log('i m still here');
    }
  }
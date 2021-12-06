import {Table} from '../Table';

class AccountTable extends Table {
    constructor(database) {
        super();
        this.db = database;
        this.tableName = "tbl_Account";
        this.columns = [
            {name:"id",type:"INTEGER PRIMARY KEY AUTOINCREMENT"},
            {name:"name",type:"TEXT NOT NULL"},
            {name:"income",type:"REAL"},
            {name:"expense",type:"REAL"},
            {name:"balance",type:"REAL"},
        ];

        this.dumpyData = [
            {name:"Main Account",income:300000,expense:200000,balance:100000},
            {name:"Second Account",income:300000,expense:200000,balance:100000},
            {name:"Third Account",income:300000,expense:200000,balance:100000},
            {name:"Fourth Account",income:300000,expense:200000,balance:100000},
            {name:"Fivth Account",income:300000,expense:200000,balance:100000},

        ];
    }

    getRowCount = () => {
        return new Promise((resolve)=>{
            this.getRowCounts(this.db,this.tableName).then(function(re){
                resolve(re ); 
            })
           
        });
        //return this.getRowCounts(this.db,this.tableName);
    }

    createAccountTable = async () => {
        console.log('createAccountTable table name');
        console.log(this.tableName);
        console.log('end createAccountTable table name');
        await this.createTable(this.db,this.tableName,this.columns);
    };

    InsertData = async (_name,_income,_expense,_balance) => {
        console.log(_name);
        console.log('Inserting table name');
        console.log(this.tableName);
        console.log('end Inserting table name');
        let tmpColumns = this.columns;
        tmpColumns.splice(0,1);
        const query = `INSERT INTO ${this.tableName} (name,income,expense,balance) VALUES("${_name}",${_income},${_expense},${_balance});`;
        console.log(query);
        await db.executeSql(query,[],function(t,r){
            //alert(_callBackFunction);
             console.log('succesully inserted new record');
             
         });
    };

    seedData = async () => {
        console.log('seeding table name');
        console.log(this.tableName);
        console.log('end seeding table name');
        let tmpColumns = this.columns;
        tmpColumns.splice(0,1);
        await this.seeding(this.db,this.tableName,tmpColumns,this.dumpyData);
    };
}

export {AccountTable};
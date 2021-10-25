import {Table} from '../Table';

class CategoryTable extends Table {
    constructor(database) {
        super();
        this.db = database;
        this.tableName = "tbl_Category";
        this.columns = [
            {name:"id",type:"INTEGER PRIMARY KEY AUTOINCREMENT"},
            {name:"name",type:"TEXT NOT NULL"},
            {name:"icon",type:"TEXT"}
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
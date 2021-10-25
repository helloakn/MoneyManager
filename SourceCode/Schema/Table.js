import {openDatabase} from 'react-native-sqlite-storage';

class Table{
    createTable = async (db,tableName,columns) => {
        let columnString = columns.map((element)=>{
            return element.name + " " + element.type;
        }).join(',');
    
        const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
              ${columnString}
          );`;
        //console.log(query);
        await db.executeSql(query,[],function(t,r){
           // console.log('r r r r r r r r');
           // console.log(t);
           // console.log('end r r r r r r r r');
        });
    };

    // getRowCounts = async (db,tableName) => {
    //     const query = `SELECT count(*) count FROM ${tableName}`;
    //     let result = await db.executeSql(query,[],function(t,r){
    //        // console.log(t.rows.item(0));
    //     });
    //     return result;
    // }

    getRowCounts = (db,tableName) => {
        return new Promise((resolve)=>{
            const query = `SELECT count(*) count FROM ${tableName}`;
            db.executeSql(query,[],function(t,r){
                resolve(t.rows.item(0));
            });
        })
    }

    seeding = async (db,tableName,columns,dumpyData) => {
        console.log("start seeding ${tableName}");
        let keyString = columns.map((element)=>{
            return element.name;
        }).join(',');
       // console.log(keyString);

        let valueString = dumpyData.map((ev)=>{
            let tmpValue = "(";
            let tmpElement = [];
            for(var i in ev){
                tmpElement.push(ev[i]);
            }
            let tmpKeyString = "(" +tmpElement.map((elm)=>{
                return typeof elm == "string"? "'"+elm+"'":elm;
            }).join(',')+")";
            return tmpKeyString;
        }).join(',');

       // console.log(valueString);
        const query = `INSERT INTO ${tableName} (${keyString}) VALUES${valueString};`;
     //   console.log('xxx');
     //   console.log(query);
     //   console.log('xxx');

         await db.executeSql(query,[],function(t,r){
            // console.log(t);
         });
    };
}

export {Table};
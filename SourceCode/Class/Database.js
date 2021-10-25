import { enablePromise,openDatabase } from 'react-native-sqlite-storage';
enablePromise(true);


export const getDBConnection = async () => {
    return openDatabase({name: 'todo-data.db', location: 'default'});
  };







// class Database {
//     constructor() {
//        this.db = openDatabase({ name: 'MoneyManager.db' });
//     }
   
//     Migration =()=>{
//         console.log("starting migration");
//         this.db.transaction(function(txn) {

//             // ----- Start Account
//             txn.executeSql(
//               "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_Account'",
//               [],
//               function(tx, res) {
//                 console.log('item:', res.rows.length);
//                 console.log('item:', res);
//                 if (res.rows.length == 0) {
//                   //txn.executeSql('DROP TABLE IF EXISTS tbl_Clock', []);
//                   //{"city": "Kabul, Afghanistan", "temp_c": 25.0, "last_updated_epoch": 1561037429, "last_updated": "2019-06-20 18:00", "weather_condition": "Light rain"}, 
            
//                   txn.executeSql(
//                     'CREATE TABLE IF NOT EXISTS tbl_Account(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, income REAL, expense REAL, balance REAL)',
//                     [],
//                     function(txx,ress){
                        
//                         txn.executeSQL("INSERT INTO tbl_Account (name,income,expense,balance) VALUES('Main Account',0.00,0.00.0.00) ",[],
//                         function(ta,ra){
//                             console.log('this is ta');
//                             console.log(ta);
//                         });
//                     }
//                   );
//                 }
//               }
//             );
//             // ----- End Account =====

//             // ----- Start Category
//             txn.executeSql(
//                 "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_Category'",
//                 [],
//                 function(tx, res) {
//                   //console.log('item:', res.rows.length);
//                   if (res.rows.length == 0) {
//                     //txn.executeSql('DROP TABLE IF EXISTS tbl_Clock', []);
//                     //{"city": "Kabul, Afghanistan", "temp_c": 25.0, "last_updated_epoch": 1561037429, "last_updated": "2019-06-20 18:00", "weather_condition": "Light rain"}, 
              
//                     txn.executeSql(
//                       `CREATE TABLE IF NOT EXISTS tbl_Category(
//                           id INTEGER PRIMARY KEY AUTOINCREMENT, 
//                           name TEXT NOT NULL, 
//                           icon TEXT NOT NULL);`,
//                       [],
//                       function(txx,ress){
                           
                            
//                       }
//                     );
//                   }
//                 }
//             );


//             let categoryData = [
//                 {id:1,name:"Gas",icon:"gasPump"},
//                 {id:2,name:"Drinking",icon:"glassMartiniAlt"},
//                 {id:3,name:"Phone Bill",icon:"mobileAlt"},
//                 {id:4,name:"Wifi Bill",icon:"wifi"},
//                 {id:5,name:"Shopping",icon:"shoppingCart"},
//                 {id:6,name:"Transporation",icon:"shuttleVan"},
//                 {id:7,name:"Transfer",icon:"vhandHoldingUsd"}
//             ];
//             categoryData.forEach(element=>{
//                 console.log(element);
//                 let cmdString = "INSERT INTO tbl_Category (name,icon) VALUES('"+element.name+"','"+element.icon+"');";
//                 console.log(cmdString);
//                 /*txn.executeSQL(cmdString,[],function(t,r){
//                     console.log(t);
//                     console.log(r);
//                 });*/
//             });


//             // ----- END Category =====

             
//         });
//     }
   
//     Reset =()=>{
//         console.log('dropping tables');
//         this.db.transaction(function(txn) {
          
//         txn.executeSql(
//           'DROP TABLE tbl_Account',
//           []
//         );
//         txn.executeSql(
//             'DROP TABLE tbl_Category',
//             []
//           );
//       });
//   }
//     getHitCount=()=>{
//         const temp = [];
//         return new Promise((resolve) => {
           
//             this.db.transaction(function(txn) {
                
//                 //id , city , temp_c ,last_updated_epoch ,last_updated,weather_condition
//                 txn.executeSql(
//                     "SELECT hitCount FROM tbl_Bingool WHERE id==1",
//                     [],
//                     (tx, results) => {
//                     // alert(results.rows.length);
//                     console.log(results.rows.length);
//                     console.log(results.rows.item);
//                     //console.log(results.rows.item(0).hitcount);
//                         if(results.rows.length==0){
//                             console.log("count is zero");
//                             resolve({count:0}); 
//                         }
//                         else{
                            
//                             resolve({count:results.rows.item(0).hitcount});
//                         }
                        
//                         //
                        
//                     });
//             });
//         });
//     }
//     getRating=()=>{
//         const temp = [];
//         return new Promise((resolve) => {
           
//             this.db.transaction(function(txn) {
                
//                 txn.executeSql(
//                     "SELECT stars FROM tbl_Rating WHERE id==1",
//                     [],
//                     (tx, results) => {
//                     //alert(results.rows.length);
//                     //console.log(results.rows.length);
//                     //console.log(results.rows.item);
//                     //alert(results.rows.length);
//                     //console.log(results.rows.item(0).hitcount);
//                         if(results.rows.length==0){
//                             //console.log("count is zero");
//                            // alert('ff');
//                             resolve({count:0}); 
//                         }
//                         else{
                           
//                             resolve({count:results.rows.item(0).stars});
//                         }
                        
//                         //
                        
//                     });
//             });
//         });
//     }
//     UpdatetRating=(stars)=>{
        
//         return new Promise((resolve) => {
//             this.db.transaction(function(txn) {
//             //id , city , temp_c ,last_updated_epoch ,last_updated,weather_condition
//                 txn.executeSql(
//                 'UPDATE tbl_Rating set stars=? WHERE id=1',
//                 [stars],
//                 (tx, results) => {
                    
//                 });
//             });
//         });    
//     }
//     UpdatetData=()=>{
//         const ok = true;
//         const notok = false;
        
//         //alert(city);
//         return new Promise((resolve) => {
//             this.db.transaction(function(txn) {
//             //id , city , temp_c ,last_updated_epoch ,last_updated,weather_condition
//                 txn.executeSql(
//                 'UPDATE tbl_Bingool set hitCount=hitCount+1 WHERE id=1',
//                 [],
//                 (tx, results) => {
//                     if (results.rowsAffected > 0) {
//                         resolve({status:ok});
//                     }
//                     else{
//                         resolve({status:notok});
//                     }
//                 });
//             });
//         });    
//     }
//     InsertRatingData=()=>{
//         const ok = true;
//         const notok = false;
//         //alert(city);
//         return new Promise((resolve) => {
//             this.db.transaction(function(txn) {
//             //id , city , temp_c ,last_updated_epoch ,last_updated,weather_condition
//                 txn.executeSql(
//                 'INSERT INTO tbl_Rating (id,stars) VALUES (?,?)',
//                 [1,1],
//                 (tx, results) => {
//                     //alert(results.rowsAffected);
//                     if (results.rowsAffected > 0) {
//                         resolve({status:ok});
//                     }
//                     else{
//                         resolve({status:notok});
//                     }
//                 });
//             });
//         });    
//     }
//     InsertData=()=>{
//         const ok = true;
//         const notok = false;
//         //alert(city);
//         return new Promise((resolve) => {
//             this.db.transaction(function(txn) {
//             //id , city , temp_c ,last_updated_epoch ,last_updated,weather_condition
//                 txn.executeSql(
//                 'INSERT INTO tbl_Bingool (id,hitCount) VALUES (?,?)',
//                 [1,1],
//                 (tx, results) => {
//                     if (results.rowsAffected > 0) {
//                         resolve({status:ok});
//                     }
//                     else{
//                         resolve({status:notok});
//                     }
//                 });
//             });
//         });    
//     }
// }
//   export default Database;
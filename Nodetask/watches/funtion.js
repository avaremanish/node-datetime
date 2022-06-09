const fs = require('fs');


let indianWatch =()=>{
    let today =new Date();
    let option = {timeZone: 'Asia/Kolkata'};
    let time = today.toLocaleDateString('en-US',option);
    let date = today.toLocaleDateString('it-IT',option);
    storeDate('date-time.txt',`${date} ${time}`);


}

let storeDate=(fileName,data)=>{
    data=`${data}\n`
    fs.appendFile(fileName,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Data is Stored')

    })

}

module.exports={




    indianWatch,

}
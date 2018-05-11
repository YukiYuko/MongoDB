var startTime=new Date().getTime();
var db = connect('company');

//  指定索引查询（hint）
var  rs= db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});

rs.forEach(rs=>{printjson(rs)});


var runTime = new Date().getTime()-startTime;
print('[Demo]this run time is '+runTime+'ms');
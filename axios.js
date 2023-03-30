const axios=require('axios').default;
let data=[];
axios({
    method:"get",
    url:"https://api.shop.eduwork.cn/api/index",

}).then(response=>{
    data=response.data.slides;
    for(let i=0;i<data.length;i++){
        console.log(data[i].title)
        console.log(data[i].seq)
        console.log(data[i].created_at)
    }
}).catch(err=>{
    console.log(err.response.status)
})


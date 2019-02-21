/*
* 这个文件是购物车的业务逻辑文件
* 主要实现添加商品数量后，切换到购物车时，对应数量改变的功能
* 商品购买数量传递过程是以{id：num}形式的
* */

//先定义这个对象
let shopTools = {};
//获取本地存储中的商品数量信息
let shop = JSON.parse(window.localStorage.getItem('shopInfo')||"{}");

//更新商品
shopTools.addUpdata = function(goods){
    console.log("更新了");
    //判断商品是否已经存在，存在则累加
    if(shop[goods.id]){
        shop[goods.id] += goods.num;
    }else{
        shop[goods.id] = goods.num;
    }
    shopTools.saveShop()
}


//删除
shopTools.delete = function(id){
    delete shop[id];
    shopTools.saveShop()
}

//默认要获取商品
shopTools.getShop = function(){
    return JSON.parse(window.localStorage.getItem('shopInfo') || "{}")
}


//存储每一步操作
shopTools.saveShop = function(){
    console.log(1);
    window.localStorage.setItem('shopInfo',JSON.stringify(shop))
}

export default shopTools;
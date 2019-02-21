/*
* 这里存放的是所有的action
* 针对不同的函数，给定了默认的type，
* 所以每次只需要调用函数，传递数据，就可以实现对应的action
* */

export function addCart(data){
    return {
        type:'CART_ADD',
        data,
    }
}
export function delCart(data){
    return {
        type:'CART_DEL',
        data,
    }
}
export function getGoodsNum(data){
    return {
        type:'CART_GOODS_NUM',
        data,
    }
}
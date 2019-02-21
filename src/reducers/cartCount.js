//定义规则：而且只做方向划分
//意思就是   数量操作==》执行basketTools.addUpdata方法
//           移除商品==》执行basketTools.delete方法
//           获得当前商品数量==>执行执行basketTools.getShop方法
// 购物车的所有的数据交互分为三类
//操作商品数量，移除商品，获得当前商品数量
import basketTools from "../util/baskettools";

//购物车的功能
//事件交互，所改变的状态，都交给redux处理

export default function(state=0,action){
    //这里的数据类型为{id：num}；
    let goods = action.data;
    switch (action.type) {
        //如果是添加商品，就使用add方法，并且再获取数据
        case 'CART_ADD':
            basketTools.addUpdata(goods)
            //返回一个新的状态
            return basketTools.getShop();
        case 'CART_DEL':
            basketTools.delete(goods)
            return basketTools.getShop();
        case 'CART_GOODS_NUM':
            return 'CART_GOODS_NUM'
        default:
            return basketTools.getShop()
    }
}
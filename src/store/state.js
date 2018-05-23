export default {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address: {}, // 地址信息对象
  categorys: [], // 分类数组
  shops: [], //商家数组
  userInfo: {}, //用户信息
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  shopCart: [],//购物车
  cartFoods: [], // 购物车中食物的列表
  searchShops: [] // 搜索商家列表
}
if(navigator.geolocation) { //判断地理服务是否可用
  navigator.geolocation.getCurrentPosition(//获取用户当前定位信息
    function (position) {
      const longitude = position.coords.longitude;//获得精度
      const latitude = position.coords.latitude;//获得纬度
      // console.log(longitude)
      // console.log(latitude)
      this.longitude = longitude //更改state中的经度
      this.latitude = latitude //更改state中的纬度

    },
    function (e) {
      const msg = e.code;
      const dd = e.message;
      // console.log(msg)
      // console.log(dd)
    }
  )
}

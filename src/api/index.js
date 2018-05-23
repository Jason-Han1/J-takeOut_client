/*与后台交互模块*/
import ajax from './ajax'
//获取地址信息(根据经纬度串)
export  const reqAddress = geohash => ajax(`/api/position/${geohash}`)
// 获取msite页面食品分类列表
export const reqCategorys = () => ajax('/api/index_category')
// 获取msite商铺列表(根据经纬度)
export const reqShops = ({latitude, longitude}) => ajax('/api/shops/',{latitude,longitude})
// 获取图片验证码
export const reqCaptcha = () => ajax('/api/captcha')
// 账号密码登录
export const accountLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd/',{name, pwd, captcha},"POST")
// 获取短信验证码
export const mobileCode = (phone) => ajax('/api/sendcode', {phone})
// 手机号验证码登录
export const phoneLogin = ({phone, code}) => ajax('/api/login_sms/', {phone, code},"POST")
//获取用户信息(根据会话)
export const reqUser = () => ajax('/api/userinfo')
//用户登出
export const reqLogout = () => ajax('/api/logout')
//根据经纬度和关键字搜索商铺列表
export const reqSearchGoods = ({geohash, keyword}) => ajax('/api/search_shops' , {geohash, keyword})
//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')

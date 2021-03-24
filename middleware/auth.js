export default ({store,route,redirect,params,query,req,res}) => {
    // 全局守卫业务： 接收服务端上下文对象
    console.log('middleware运行了：',store,route,redirect,params,query,req,res);
}
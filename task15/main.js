/*入口配置文件*/
require.config({
    baseUrl:'src/js/app',
    paths:{
        'jquery':'../lib/js/jquery-3.2.1.min'
    }
})

require(['index']);
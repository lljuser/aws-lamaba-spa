export default {
  singular: true,
  history: 'hash', 
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: './user/IPInfo'
        },   
        //{ path: '/user/list', component: './user/list' }, 
        { path: '/user/ipinfo', component: './user/IPInfo' }, 
      ]
    }
  ],
  proxy: {
    dev:{
      'api/': {
        target: 'http://www.cityhouses.net',
        //changeOrigin: true,
      },
    }
    
  },
  
};

<script>
  export default {
    top: [ //配置上方导航栏的名字和hash地址
      {
        name: '南华资本-金融衍生品部系统环境说明',
        path: '/'
      },
      {
        name: '生产环境',
        path: '/production'
      },
      {
        name: '仿真环境',
        path: '/simulation'
      },
      {
        name: '测试环境',
        path: '/test'
      }
    ],
    system: [ //首页：系统环境页面url地址、名称、详细介绍配置
      {
        name: '生产web报价地址',  //说明文字，名称
        details: '金融衍生品web服务的生产环境、仿真环境和测试环境入口',   //详细介绍
        url: 'https://www.nanhuacapital.com/fd/',   //要跳转的地址
      },
      {
        name: '生产web报价导出地址',
        details: '金融衍生品web服务的生产环境、仿真环境和测试环境入口',
        url: 'https://www.nanhuacapital.com/fdoldest/JsPdf/',
      },
      {
        name: '易利权系统介绍',
        details: '该地址现已停用',
        url: 'https://biz.nanhuacapital.com/easy_option_site/',
      },
      {
        name: '内网资源导航',
        details: '该地址需在办公室网络环境下访问，否则可能导致被拒无法访问',
        url: 'https://10.20.252.153/',
      },
      {
        name: '总公司分配的VPN地址',
        details: 'Secondary password需要输入个人对应的电子口令卡密码',
        url: 'https://vpn.nawaa.com/dana-na/auth/url_1/welcome.cgi',
      },
    ],
    production: [   //生产环境界面配置，该界面配置分为上下两个数组
      [
        {
          name: '生产当前报价交易',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://www.nanhuacapital.com/fd/',
        }, 
        {
          name: '生产后台管理',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://biz.nanhuacapital.com/pm_154/index.html',
        }, 
        {
          name: '最新版本',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://www.nanhuacapital.com/fdnew/#/',
        }, 
        {
          name: '上一版本',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://www.nanhuacapital.com/fdold/',
        }, 
        {
          name: '最老版本报价',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://www.nanhuacapital.com/fdoldest/',
        }
      ],
      [
        {
          name: '最老版本报价',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://biz.nanhuacapital.com/fdoldest/',
        }, 
        {
          name: '生产当前报价交易',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://biz.nanhuacapital.com/fd/',
        }, 
        {
          name: '生产后台管理',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://biz.nanhuacapital.com/pm_152/index.html',
        }, 
        {
          name: '最新版本',
          details: '用户在上面的操作都具有法律效力，请慎重操作',
          url: 'https://biz.nanhuacapital.com/fdnew/#/',
        },
      ]
    ],
    simulation: [   //仿真环境配置
      {
        name: '仿真测试',
        details: '客户体验入口,用于客户体验南华资本金融衍生品交易',
        url: 'https://biz.nanhuacapital.com/s_202/#/',
      },
      {
        name: '生产后台管理',
        details: '客户体验入口的后台管理系统，OA账户密码修改需要遵从公司的统一管理，不能在本系统修改',
        url: 'https://biz.nanhuacapital.com/sm_202/',
      },
      {
        name: '内部测试客户端下载',
        details: '内部测试客户端下载',
        url: 'https://biz.nanhuacapital.com/download/金融衍生品终端测试版-3.1.19.6.exe',
      },
    ],
    test: [
      {
        name:'甘茂测试前端',
        details:'测试环境用于部门内部技术人员测试使用',
        url:'https://biz.nanhuacapital.com/t_gm/#/',
      },
      {
        name:'甘茂测试后台',
        details:'测试环境用于部门内部技术人员测试使用',
        url:'https://biz.nanhuacapital.com/tm_gm/',
      },
      {
        name:'测试前端',
        details:'测试环境用于部门内部技术人员测试使用',
        url:'https://biz.nanhuacapital.com/t_test194/',
      },
      {
        name:'测试后台',
        details:'测试环境用于部门内部技术人员测试使用',
        url:'https://biz.nanhuacapital.com/tm_test194/',
      },
    ]
  }
</script>
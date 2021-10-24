// constants.js
export const POST_OPTIONS = [
  {
    label: '现场施工管理人员',
    children: [
      {
        label: '施工员',
        children: [
          {
            value: 'yizhi',
            label: '土建施工员'
          },
          {
            value: 'fankui',
            label: '市政工程施工员'
          },
          {
            value: 'xiaolv',
            label: '装修装饰施工员'
          },
          {
            value: 'kekong',
            label: '设备安装施工员'
          }
        ]
      },
      {
        label: '质量员',
        children: [
          {
            value: 'yizhi',
            label: '土建质量员'
          },
          {
            value: 'fankui',
            label: '市政工程质量员'
          },
          {
            value: 'xiaolv',
            label: '装修装饰质量员'
          },
          {
            value: 'kekong',
            label: '设备安装质量员'
          }
        ]
      },
      {
        value: 'kekong',
        label: '安全培训合格人员',
      },
      {
        value: 'kekong',
        label: '材料员',
      },
      {
        value: 'kekong',
        label: '资料员',
      },
      {
        value: 'kekong',
        label: '标准员',
      },
      {
        value: 'kekong',
        label: '劳务员',
      }
      
    ]
  }
]

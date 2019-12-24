
import Mock from 'mockjs'

const url = {
  interface1: 'http://20181024Mock.com/model1/interface1',
  interface2: 'http://20181024Mock.com/model1/interface2',
  interface3: 'http://20181024Mock.com/model1/interface3',
}
module.exports = [
    Mock.mock(url.interface1, {
        'dataSource|5':[{
            'key|+1': 1,
            'mockTitle|1':['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
]


//  var ttt=Mock.Random.province()
// var data = Mock.mock({
//   "listaa|10-10": [
//     {
//       "id|+1": 1,
//       "name": '@province'
//     }
//   ]
// });
// console.log(JSON.stringify(data, null, 4));
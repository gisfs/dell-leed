import Mock from 'mockjs'

Mock.mock("http://20181024Mock.com/model1/interface1", {
  "listaa|10-10": [
    {
      "id|+1": 1,
      "name": '@province'
    }
  ]
});

Mock.mock("http://20181024Mock.com/model1/interface2",{
  city: "北京",
  "number|1-10": 1
});

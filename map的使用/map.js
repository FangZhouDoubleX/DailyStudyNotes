let arr = [
  {
    name: "zs",
  },
  {
    name: "ls",
  },
  {
    name: "ww",
  },
];
// 安装Code Runner右键可以直接运行
// 1、通过map在array上新增一条index属性
let indexArr = arr.map((v, index) => {
  return { index: index + 1, ...v };
});
console.log(indexArr);

/**
 * 使用常量替代 Mutation 事件类型
 * 把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：
 * 常量一旦定义不允许修改，不允许重复定义，这对多人多模块出现重名有完美的限制。
 * 大型项目多人开发，使用常量会让你维护交接管理都事半功倍。
 */
// eg： 修改姓名
export const SET_NAME = 'SET_NAME' // 修改姓名
export const SET_AGE = 'SET_AGE' // 修改年龄
export const SET_HEIGHT = 'SET_HEIGHT' // 修改身高
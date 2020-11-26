# React Minibook Demo

React.js 小书
http://huziketang.mangojuice.top/books/react/

## Develop

```
npm start
```


## Tasks

- 页面加载后`Content`输入框自动聚焦
- 用户名LocalStorage

---

### 评论 `Storage`

表单提交时缓存 Storage
```js
handleSubmitComment() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
}
```
组件挂载时加载Storage
```js
componentWillMount() {
    const comments = localStorage.getItem('comments');
    comments && this.setState({ comments: JSON.parse(comments) });
}
```

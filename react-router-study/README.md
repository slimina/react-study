# react-router study

npm install react-router-dom --save

## BrowserRouter
`<BrowserRouter>` 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步。
```javascript
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter
  basename={string}
  forceRefresh={bool}
  getUserConfirmation={func}
  keyLength={number}
>
  <App />
</BrowserRouter>
```
#### basename: string

所有位置的基准 URL。如果你的应用程序部署在服务器的子目录，则需要将其设置为子目录。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。
```javascript
<BrowserRouter basename="/calendar">
  <Link to="/today" />
</BrowserRouter>

//<Link> 最终将被呈现为：

<a href="/calendar/today" />
```
#### forceRefresh: bool
如果为 true ，在导航的过程中整个页面将会刷新。一般情况下，只有在不支持 HTML5 history API 的浏览器中使用此功能。
```javascript
const supportsHistory = 'pushState' in window.history;

<BrowserRouter forceRefresh={!supportsHistory} />
```
#### getUserConfirmation: func
用于确认导航的函数，默认使用 window.confirm。例如，当从 /a 导航至 /b 时，会使用默认的 confirm 函数弹出一个提示，用户点击确定后才进行导航，否则不做任何处理。译注：需要配合 <Prompt> 一起使用。
```javascript
// 这是默认的确认函数
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
<BrowserRouter getUserConfirmation={getConfirmation} />
```
#### keyLength: number
location.key 的长度，默认为 6。

## HashRouter
使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步。
```javascript
import { HashRouter } from 'react-router-dom';

<HashRouter>
  <App />
</HashRouter>
```
>注意： 使用 hash 记录导航历史不支持 location.key 和 location.state。在以前的版本中，我们视图 shim 这种行为，但是仍有一些问题我们无法解决。任何依赖此行为的代码或插件都将无法正常使用。由于该技术仅用于支持旧式（低版本）浏览器，因此对于一些新式浏览器，我们鼓励你使用 <BrowserHistory> 代替。

#### basename: string
所有位置的基准 URL。basename 的正确格式是前面有一个前导斜杠，但不能有尾部斜杠。
```javascript
<HashRouter basename="/calendar">
  <Link to="/today" />
</HashRouter>

//<Link> 最终将被呈现为：

<a href="#/calendar/today" />
```
#### getUserConfirmation: func
用于确认导航的函数，默认使用 window.confirm。
#### hashType: string
window.location.hash 使用的 hash 类型，有如下几种：
>slash - 后面跟一个斜杠，例如 #/ 和 #/sunshine/lollipops
noslash - 后面没有斜杠，例如 # 和 #sunshine/lollipops
hashbang - Google 风格的 ajax crawlable，例如 #!/ 和 #!/sunshine/lollipops
默认为 slash。

## Link
为你的应用提供声明式的、可访问的导航链接。
```javascript
import { Link } from 'react-router-dom';
<Link to="/about">About</Link>
```
#### to: string
个字符串形式的链接地址，通过 pathname、search 和 hash 属性创建。

#### to: object
一个对象形式的链接地址，可以具有以下任何属性
>pathname - 要链接到的路径
 search - 查询参数
 hash - URL 中的 hash，例如 #the-hash
 state - 存储到 location 中的额外状态数据
 
#### replace: bool
当设置为 true 时，点击链接后将替换历史堆栈中的当前条目，而不是添加新条目。默认为 false。
#### innerRef: func
允许访问组件的底层引用。
```javascript
const refCallback = node => {
  // node 指向最终挂载的 DOM 元素，在卸载时为 null
}

<Link to="/" innerRef={refCallback} />
```
#### others
还可以传递一些其它属性，例如 title、id 或 className 等。

## NavLink
一个特殊版本的 <Link>，它会在与当前 URL 匹配时为其呈现元素添加样式属性

其他 Redirect、Route、Router、StaticRouter、Switch等参考：

https://segmentfault.com/a/1190000014294604#articleHeader10

https://www.jianshu.com/p/bf6b45ce5bcc
















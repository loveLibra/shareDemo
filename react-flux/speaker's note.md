# React&Flux分享会文稿

## React

### 介绍
React是一个Fb和Instagram用来创建用户界面的JS库，它的设计是为了解决：构建随着时间数据不断变化的大规模应用程序。React的设计思想独特，性能强大，代码逻辑性强，逐渐吸引到越来越多的人的关注并且很快推广开来，目前Github上的Star已经达到26,161。  

React很好的阐释了组件化的思想，开发的第一步就是将用户界面拆分为一个组件树，简单明了，可以有效避免duplicate-code，清晰的实现组件复用。  

React采用了VirtualDOM技术，每次数据更新的时候重新生成一个VirtualDOM，然后对两颗VirtualDOM做Diff，将变化的部分更新到DOM中。  

React推荐使用JSX语法实现功能，因为JSX能定义简洁且我们熟知的保函属性的树状结构语法，JSX=JS+XML，JSX构建的VIEW更贴近实际HTML的结构，易于使用，并且速度更快。

### How To Use React？
我们从几个使用场景去简单说明一下React的使用：  
* 浏览器。我们可以引入React的库以及将JSX语法转化为JS的Transformer的库，这样在页面渲染的时候去把JSX编译成JS。显然这不是我们所想要的做法，就像我们不会把less文件直接加载到页面然后在页面记载的时候使用库去编译一样。更好的做法是，编译成js后引入。可以通过JSX的CLI在开发环境中动态编译，也可以通过其他一些自动化构建工具的扩展库实现编译和打包（比如gulp-jsx）。另外，可以需要引入类似于babel的库，因为jsx里面有很多比较好的es6甚至es7的特性。
* Node。`var React = require('react');`，然后通过React公共API渲染成字符串；如果使用了browserify和webpack等，Node可以直接使用`React.rener()`进行页面渲染。
* Sea/Spm。类似node，不赘述。

### Simple Examples
1. 第一个例子，运行后，我们在页面显示了*Hello,React*。So easy~来看看React的代码： 
React.createClass声明了一个React的Component，注意命名为大驼峰，以区分HTML标签的小写命名。  
createClass参数中必须至少包含一个render方法，返回组件的内容；然后通过React.render将组建渲染到页面'#content'元素内。  
这里需要注意组件标签都是自闭合的。  
另外，对比`src/demo1.js`和`build/demo1.js`，来关注下JSX在React是如何工作和转化的，写在render内的jsx语法转化成了js的实现，HTML标签仍然可以用HTML标签直接书写，但是请注意是自闭合的（其实JSX中的HTML标签都是内置的React组件）。在下面的例子中我们会看到自定义组件也是同样的实现。

2. 通过第一个例子，我们了解了两个React的API`React.createClass`和`React.render`。通过这两个API就可以进行简单的静态页面开发了。但是如果需要根据服务端数据进行渲染呢？接下来看第二个例子，第二个例子我们将演示在组件中如何使用和传递数据，感受下React的单向数据流的设计思想。  
在这个例子里面，根据传入的数据显示人的基本信息（名字，性别）并且做正向的计时。首先来看Timer组件的render方法，{}表达式中有两种不同的形式:`this.props`和`this.state`...看react.render方法中我传入了两个属性的键值对time和name,冥冥中自有定数....显然通过上述形式传入的参数可以通过this.props得到。再来看sex，我们并没有传入组件，但是还是会显示，为啥？看`getDefaultsProps`，提供了默认的props属性值。最后来看看time，我们要实现的效果是将传入的time作为初始值开始做正计时，如果我们通过一般方法去做，就是更新h2的内容显示。在React中，有用户交互或者变化的值我们保存在state中，然后通过this.`setState`去更新state值，组件会监听state值的变化，变化时会执行render重新渲染组件。  
再来看两个方法`componentDidMount`和`componentWillUnmount`，前者表示组件被挂载到DOM树中，后者表示卸载。此处我在挂载完成后设置了计时开始以及绑定了一个click事件到按钮中。  
获取按钮dom对象的方法是`this.refs.xx.getDOMNode()`，按钮点击效果是将此组件从content中卸载；组件中通过`this`可以得到组件的引用。

3. 接下来看第三个例子，第三个栗子主要是让大家了解下父子组件的嵌套...  
页面分为三部分：输入框、按钮和一个TODO的列表。TodoList组件为TodoApp的子组件，并且TodoApp通过state传入数据到子组件中渲染Todo列表。父组件改变todos的值就可以去重新渲染列表

### 生命周期
接下来简要介绍下组件的生命周期和相关API，其中两个API已经在上面的例子中有过使用了。组件的状态分为三个，`挂载`、`更新`和`卸载`。对应这三个状态，分别提供了5个方法表示进入状态之前和之后，`Will`表示进入状态之前，`Did`表示之后。另外提供了两个特殊状态的处理函数：`componentWillReceiveProps`（已加载组件收到新的参数时调用），`shouldComponentUpdate`（组件判断是否重新渲染时调用，return false则不会触发更新DOM，可以用来过滤部分不会引起页面变化的state的变化）

### React Ending
最后，react部分的内容仍然还有很多重要的内容没有详细的去讲，这里简单的提一下：
1. 首先是产生用户交互的表单组件，与正常的表单标签的，这边会有一些不同的规则。比如input，非React实现中如果给input-value标签赋默认值，input会显示一个默认值但是能够修改，react中如果直接赋值字符串给value，会将input变为受限组件，用户的输入不会被响应；
2. 事件系统。React提供了与浏览器本地事件相同的属性和方法的虚拟事件对象，它是对底层事件的一个封装，没有兼容性问题...如果有需要访问底层浏览器事件对象可以使用nativeEvent访问；
3. 验证。由于子组件会接收父组件的参数进行渲染页面，因此有必要对传入的参数类型进行验证防止渲染时因为参数类型问题或者值的问题造成页面渲染出错。React提供了完备的验证。例如`createClass({propTypes: {optionalArray: React.PropTypes.array...}})`会验证optionalArray为数组，详细内容自行探索；
4. react也提供了一些插件方便正式使用中的各种情况，比如动画以及类名操作等

-----------------------------------------------

React内容到此结束，休息&QA

-----------------------------------------------

## FLUX
Flux是Fb用来构建客户端web应用的程序体系架构，依赖于前面提过的数据单向流动。相比于其他形式化的框架，FLUX更像是一种架构思想，类似于MVC的角色。  

下面直接分析flux的核心工作流程：看图。流程很简单，4个节点，单向流动。  
（图示后对照图详细解释demo）  

我都有MVC了我为啥还要你这个FLUX，我可以把React组件当成V，然后应用在MVC中嘛，下面来说说区别以及FLUX的优势:  

与MVC系的区别：Backbone在View更新时更新的是整个视图，FLUX只是部分更新则归功于VirtualDom；MVC系（Backbone、Angular）的视图可以直接操作Model，有可能修改某个状态会影响到程序的其他部分（Model、View对应关系混乱）,Flux的状态改变是单向的，而典型的MVC中通常是MODEL<->CONTROLLER<->VIEW,而这正是造成某些问题的症结所在，FLUX让流程变简单。

不采用FLUX的React开发中，数据的逻辑会放在组件（VIEW）内，componentDidMount中去ajax同步数据等操作可以直接去操作数据。但是，如果有多个VIEW同时依赖当前数据的时候可能会出现混乱情况，比如官方举出的fb的N条未读消息的提示点进去然而并没有新消息的bug，就是未读消息Model和未读的数目Model其实是会有依赖的并且瀑布式更新。  
在FLUX中，Store拥有控制权，接受更新并在适当的时候处理更新，在store的外部是没有办法看到Store是如何处理数据的，这样的方式保证了一个清晰的关注点分离。

FLUX Ending。Q&A
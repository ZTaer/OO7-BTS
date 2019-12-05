
<h1>记录工作中/学习中自我开发的黄金模块 - 防止重复造轮子</h1>

<hr/>
<pre>
	<h2>WEB_GoldModl:</h2>
		<h3>0. OO7__EJS - 自我开发JS轻量级框架:</h3>
			<b>a) 导入版 - WebPack</b>
				OO7EJS.v1.1.js
			<b>a) 普通版 - IIFF</b>
				OO7JS.v1.1.js
				OO7JS.v2.2.js
		<h3>1. OO7__BTS - 自我开发SCSS轻量级框架:</h3>
			<b>a) 专用版 - BootStrap4</b>
				OO7BTS.v2.1.scss
			<b>b) 普通版 - CSS3</b>
				OO7S.v1.0.scss
				OO7S.v2.0.scss
</pre>
<hr/>


<hr/>
<pre>
	<h2>WORK:</h2>
		<h3>0. 稳定版本发布区</h3>
			进入此文件夹查看即可
</pre>
<hr/>


<hr/>
<pre>
	<h2>OO7JS:</h2>
		<h3>成长中...</h3>
/*********** OO7JS 目录 *****/
/*
	OO7JS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
	0. 防出错类 - oo7Init

	1. 字符串类 - oo7Str
		1-0. 清除字符串中的空格: oo7Str.clearStrSpace( 字符串 )
        
	2. 计算类 - oo7Cul
        
    3. 动画类 - oo7Ani
		3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
		3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
		3-2. 多个类执行动画,与Animate.css配合使用: oo7Ani.moreAnimateInit( [ 目标所在父类ID, 目标类名(用逗号隔开), 动画名, 添加的类名( 用逗号隔开 ) ] ): 返回一个初始化数组; oo7Ani.moreAnimateCSS( 当前视图所在ID, 初始化返回的数组 ): 执行动画, 需滚动监听配合
		3-3. 自适应背景视频，与OO7BTS.scss配合: let bvInit = new oo7Ani.BackgroundVideoInit(); oo7Ani.backgroundVideo( 变量名称(bvInit), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );

    4. 交互类 - oo7Ui

    6. 其他类 - oo7Other
	
*/
</pre>
<hr/>


<hr/>
<pre>
	<h2>OO7EJS:</h2>
		<h3>成长中...</h3>
/*********** OO7EJS 目录 *****/
/*
	OO7EJS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
	0. 防出错类 - OO7Init

	1. 字符串类 - OO7Str
        
	2. 计算类 - OO7Cul
        
    3. 动画类 - OO7Ani
		3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
		3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
		3-2. 多个类执行动画,与Animate.css配合使用:  moreAnimateCSS( 当前视图标签ID, 父类ID--css选中方式, 要执行动画的子类--css选中方式，动画效果--animate.css配合, 附加类--目的是自定义css来操控动画 )

    4. 交互类 - OO7Ui

    6. 其他类 - OO7Other
	
*/
</pre>
<hr/>

<hr/>
<pre>
	<h2>OO7BTS:</h2>
		<h3>成长中...</h3>
/*********** OO7BTS 目录 *****/
/*
	OO7BTS为SCSS轻量级框架,能够更加灵活操作CSS3,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	源码链接: https://github.com/ZTaer/OO7GoldModl
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言scssUser )
	
	OO7BTS为SCSS轻量级框架,能够更加灵活操作CSS3,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	源码链接: https://github.com/ZTaer/OO7GoldModl
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言scssUser )
	
	0. 防出错类
	1.	flex函数类
		1-0. 开启弹性布局,有兼容性: display-flex( [flex-direction] )
		1-1. 单行flex布局，含兼容性: xy-items( justify-content, align-items, [flex-wrap] );
		1-2. 多行flex布局，含兼容性: xy-content( justify-content, align-items, align-content, [flex-wrap] )
	2. 颜色类
		2-0. 快捷创建背景渐变色( 只能用于背景颜色的改变 ): bg-linear( 渐变左颜色, 渐变右颜色, 渐变开始方向, 渐变结束方向  )
			2-0-0. 推荐渐变颜色: bg-linear-xxx();
		2-1. 修改placeholder颜色: placeholder-color( 字体大小, 字体颜色, 字间距 )
		2-2. 修改字体选中颜色: choose-text-color( 字体颜色,背景颜色 )
	3. 字体类
		3-0. 快捷设置字体格式: font-style( 字体大小, 字体颜色, 字体宽度, 字间距 )
		3-1. 字体不换行且文本溢出时显示省略标记(...): font-nowrap();
		3-2. 字体自动换行文本溢出时显示省略标记(...): font-wrap(); // 暂时维护
		3-3. 常用中文字体以及图片排版,图片为自适应,支持电脑/移动端: font-zh( 字体大小, 字体颜色, 字体行高, 字体间距  ) ps: 使用默认值即可 ;
		3-4. 固定范围显示字体: font-hidden( 显示宽度 , 显示高度 );
	4. 布局类
		4-0. 根据宽度"等比例缩放"大小高度: img-autosize( 原始图片宽度,原始图片高度,容器宽度,容器单位 );
		4-1. 设置主要内容区域,留出二边间隔,默认0/1200/1920大小为中间内容: div-content( 上下内间大小,书写主要内容区域大小,占用真实空间大小 );
		4-2. 图片不变形显示,防止在后台因放不同尺寸图片，造成前台因图片尺寸不同造成的布局变形,默认图片位置为center: img-window( 图片宽度,图片高度,图片x方向位置,图片y方向位置 );
		4-3. pc端翻页样式,只适合页面数小于10页,并且要求ul结构为 ul -> li -> a: ul-fanye-pc( 按钮边框设置, 按钮外间距, 按钮内间距, 按钮背景颜色, 按钮字体颜色 );
	5. 动画类
		5-0. 图片放大/缩小动画过度效果,注意二者函数配合才能实现放大动画效果，但是img-transition也可以单独使用,配合hover效果( 考虑到灵活性 ): img-transition( 动画时间 ); img-transform-scale( 放大倍数 ); 
		5-1. 自适应背景视频，与backgroundVideoInit()配合: background-video-init( 背景图片路径 ); - 简便方法,css中直接写在父类下,HTML要写入对应的class类名
	6.	辅助类
		6-0. 以辅助其它第三方库
		6-1. 灯箱效果-改变灯箱中字体样式: @include help-lightbox-font( 字体大小,颜色,字间距,字体宽度 );
		6-2. 滑动动画-改变按钮位置以及样式 0. 改变二个按钮之间的位置: help-slick-btn-pos( 设定大于x分辨率生效, 左按钮位置, 右按钮位置, 显示层阶 ) 1. 改变按钮二个默认样式: help-slick-btn-style( 按钮大小, 按钮颜色, 按钮粗度 ) 2. 隐藏按钮开关: help-slick-btn-hidden( 左按钮显示开关, 右按钮显示开关 ) hidden开启隐藏
	7.	其他类
	
*/
</pre>
<hr/>
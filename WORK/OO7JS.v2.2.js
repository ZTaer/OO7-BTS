
/*********** OO7EJS.v2.2 目录 *****/
/*
	OO7EJS为js轻量级框架,你可以把他了解为短小精悍的小钢炮
	作者: __OO7__
	源码链接: https://github.com/ZTaer/OO7GoldModl
	如果你有更好的想法可以联系我: QQ - 1069798804 ( 加好友时记得留言jsUser )
	
  0. 防出错类 - oo7Init

  1. 字符串类 - oo7Str
      // 1-0. 清除字符串中的空格: oo7Str.clearStrSpace( 字符串 )
        
	2. 计算类 - oo7Cul
        
  3. 动画类 - oo7Ani
      3-0. 动画初始化以及准备( CDN ): Animate.css, ScrollWatch.js, 准备CSS
      3-1. 单个类执行动画,与Animate.css配合使用: animate( 类名, 动画名, 函数-动画完毕后执行 )
      3-2. 多个类执行动画,与Animate.css配合使用: oo7Ani.moreAnimateInit( [ 目标所在父类ID, 目标类名(用逗号隔开), 动画名, 添加的类名( 用逗号隔开 ) ] ): 返回一个初始化数组; oo7Ani.moreAnimateCSS( 当前视图所在ID, 初始化返回的数组 ): 执行动画, 需滚动监听配合
      3-3. 自适应背景视频，与OO7BTS.scss配合: let bvInit = new oo7Ani.BackgroundVideoInit(); oo7Ani.backgroundVideo( 变量名称(bvInit), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );

  4. 交互类 - oo7Ui
      4-0. 清除指定目标class名: oo7Ui.clearAllClass( 目标class类名, 删除目标中class类名 );
      4-1. 选中单个按钮 - 指定目标进行单选样式变化: oo7Ui.clickOnlyAddClass( 目标父类ID, 目标class名, 所增加class名 );

  6. 其他类 - oo7Other
	
*/


//////////////////// 1. 字符串类-BGN
const oo7Str = ( function(){
  // 1-0. 清除字符串空格
  function clearStrSpace( str ){
    return str.replace( /\s*/g,'' );
  }

  return{
    clearStrSpace:( str )=>{
      return clearStrSpace( str );
    },
  };

} )();
//////////////////// 1. 字符串类-END

//////////////////// 3. 动画类-BGN
const oo7Ani = ( function( global, oo7Str ){


    // 3-0. 动画初始化以及准备
    //  需求:
    //      0. Animate.css
    //              CDN: <link rel="stylesheet" href="https://cdn.staticfile.org/animate.css/3.7.2/animate.css">
    //              效果查询: https://daneden.github.io/animate.css/
    //              常用类: 
    //                  延迟动画: .delay-1s ... .delay-5s
    //                  时间动画: 
    //                      加速: .fast( 800ms ) .faster( 500ms )
    //                      减速: .slow( 2s ) .slower( 3s )
    //                  无限循环: .infinite
    //      1. ScrollWatch.js
    //              CDN: <script src="https://cdn.jsdelivr.net/npm/scrollwatch@2.0.1/dist/ScrollWatch-2.0.1.min.js" integrity="sha256-jmgGQvZd2hgK8fxYGFYWPni/wP3c6/JkiMdUq5Ww3j8=" crossorigin="anonymous"></script>
    //              效果查询: https://edull24.github.io/ScrollWatch/
    //      2. 准备SCSS: OO7BTS.scss
    //              源码链接: https://github.com/ZTaer/OO7GoldModl/


    // 3-1. 单个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //	用法:
    //      animateCSS( 类名, 动画名, 函数-动画完毕后执行 )
    //  示例:
    //      target='#test'; animate='fadeInUp';
    //      animateCSS(target, animate, () => console.log('回调函数，执行完动画后,在执行此函数') );
    function animateCSS(element, animationName,  callback){

        const node = Array.from( document.querySelectorAll(element) )

        node.forEach( cur => cur.classList.add('animated', animationName ) ) 

        function handleAnimationEnd() {
            node.forEach( cur => cur.classList.remove('animated', animationName) ) 
            node[ node.length - 1 ].removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        if( (node.length - 1) >= 0 ){
          node[ node.length - 1 ].addEventListener('animationend', handleAnimationEnd);
        }

    }

    // 3-2. 多个类执行动画,与Animate.css配合使用
    //  需求:
    //      0. Animate.css
    //      1. ScrollWatch.js
    //  解析:
    //      0. oo7Ani.moreAnimateInit( [ 目标所在父类ID, 目标类名(用逗号隔开), 动画名, 添加的类名( 用逗号隔开 ) ] ): 返回一个初始化数组
    //      1. oo7Ani.moreAnimateCSS( 当前视图所在ID, 初始化返回的数组 ): 执行动画, 需滚动监听配合
    //	用法:
    /**     HTML:
             <div id="test"> 
              <h1> 标题 </h1>
              <p class="text" > 内容1 </p> 
              <p class="text" > 内容2 </p> 
             </div>
            JS: 
              0. 先进行初始化  
              let aniObj = moreAnimateInit( [
                [ "#test", 'h1, .text', 'fadeInDownBig', 'slow, testAddClassName' ],
                [ " 可以添加更多, 注意逗号 " ]
              ] );
              1. 需滚动监听配合使用执行动画
              let sw = new ScrollWatch({
                watchOnce: true, // 是否开启不重复监听( 关闭则动画将来回执行 )
                infiniteOffset: -10, // 偏移量
                scrollThrottle: 200, // 延迟监听(ms)
                // inViewClass: 'play', // 给当前视图增加类

                onElementInView: function(data) { // 监听当前视图的标签
                  activeId = data.el.id;
                  oo7Ani.moreAnimateCSS( activeId, aniObj ); //( 执行动画核心 )
                }
              });
     */        
    //      
    //  示例:
    //      activeId = 'test' // 当前视图ID
    //      oo7.moreAnimateCSS( activeId, '#wan_banner1',['h1','h2'],'bounceIn' );

    // 初始化用户参数
    function moreAnimateInit( group ){
      let result = [];
      group.forEach( e => {
        // 创建对象
        let obj = {
          id: e[0].replace('#',''),
          target: e[1].split(',').map( e=>oo7Str.clearStrSpace(e) ),
          animate: e[2],
          addClassList: e[3].split(',').map( e=>oo7Str.clearStrSpace(e) ),
        }

        // 初始化目标: 将所有目标opacity设定为0
        let target = obj.target.map( e=> `#${obj.id} ${e}`).join(',');
        Array.from(document.querySelectorAll( target )).forEach( e=>e.style.opacity = 0 ); 

        result.push(obj);  
      } );

      return result;
    }

    function moreAnimateCSS( activeId, aniObj ){
      // 过滤出符合条件的目标
      let activeGroup = aniObj.filter( e => e.id == activeId );
      if( activeGroup.length > 0 ){
        activeGroup.forEach( e => {
          // 确定目标
          let target = e.target.map( cur => `#${e.id} ${cur}` ).join(',');
          
          // 显示目标
          Array.from(document.querySelectorAll( target )).forEach( cur=> {
            cur.style.opacity=1;
            cur.classList.add( ...e.addClassList );
          } );
          
          // 执行动画
          animateCSS( target, e.animate );
        } );
      }
    }


  // 3-3. 自适应背景视频，与OO7BTS.scss配合
  //  来源: https://github.com/rishabhp/bideo.js
  //  原理: https://codetheory.in/html5-fullscreen-background-video/
  //	用法:
  //      HTML: 核心class名 - .background-video-tab - .background-video-img - .background-video-container,详细使用情况请看示例
  //      CSS: @include background-video-init( 背景图片路径 ); 
  //      JS: let bvInit = new oo7Ani.BackgroundVideoInit(); oo7Ani.backgroundVideo( 变量名称(bvInit), 'css父类容器名',['网页视频路径','本地视频路径'],'标签video类名','视频缓冲图片路径','达到指定分辨率时禁止播放-默认为768px' );
  //  示例:
  //		HTML:
	//			<div id="container" class="intro-window-img"> 
  //          <video class="background-video-tab" loop muted></video>
  //          <div class="background-video-img" ></div>
  //          <div class="background-video-container"></div>
  //      </div>
	// 		SCSS:
	// 			#container{
  //        @include background-video-init( '../images/bg-video_Moment.jpg' );
  //      }
	//    JS:
	//			let bvInit = new oo7Ani.BackgroundVideoInit();
  //      oo7Ani.backgroundVideo( bvInit,'#container', ['../static/images/bg-video.mp4'],'.background-video-tab','.background-video-img','0px');
	// ;

    function BackgroundVideoInit() {
        // Plugin options
        this.opt = null;
        // The Video element
        this.videoEl = null;
    
        // Approximate Loading Rate
        //
        // The value will be a number like 0.8
        // which means to load 4 seconds of the video
        // it takes 5 seconds. If the number is super low
        // like 0.2 (regular 3g connections) then you can
        // decide whether to play the video or not.
        // This behaviour will be controller with
        // the `acceptableLoadingRate` option.
        this.approxLoadingRate = null;
    
        // Methods to which `this` will be bound
        this._resize = null;
        this._progress = null;
    
        // Time at which video is initialized
        this.startTime = null;
    
        this.onLoadCalled = false;
    
        // Initialize and setup the video in DOM`
        this.init = function (opt) {
          // If not set then set to an empty object
          this.opt = opt = opt || {};
    
          var self = this;
    
          self._resize = self.resize.bind(this);
    
          // Video element
          self.videoEl = opt.videoEl;
    
          // Meta data event
          self.videoEl.addEventListener('loadedmetadata', self._resize, false);
    
          // Fired when enough has been buffered to begin the video
          // self.videoEl.readyState === 4 (HAVE_ENOUGH_DATA)
          self.videoEl.addEventListener('canplay', function () {
            // Play the video when enough has been buffered
            if (!self.opt.isMobile) {
              self.opt.onLoad && self.opt.onLoad();
              if (self.opt.autoplay !== false) self.videoEl.play();
            }
          });
    
          // If resizing is required (resize video as window/container resizes)
          if (self.opt.resize) {
            global.addEventListener('resize', self._resize, false);
          }
    
          // Start time of video initialization
          this.startTime = (new Date()).getTime();
    
          // Create `source` for video
          this.opt.src.forEach(function (srcOb, i, arr) {
            var key
              , val
              , source = document.createElement('source');
    
            // Set all the attribute key=val supplied in `src` option
            for (key in srcOb) {
              if (srcOb.hasOwnProperty(key)) {
                val = srcOb[key];
    
                source.setAttribute(key, val);
              }
            }
    
            self.videoEl.appendChild(source);
          });
    
          if (self.opt.isMobile) {
            if (self.opt.playButton) {
              self.opt.videoEl.addEventListener('timeupdate', function () {
                if (!self.onLoadCalled) {
                  self.opt.onLoad && self.opt.onLoad();
                  self.onLoadCalled = true;
                }
              });
    
    
              self.opt.playButton.addEventListener('click', function () {
                self.opt.pauseButton.style.display = 'inline-block';
                this.style.display = 'none';
    
                self.videoEl.play();
              }, false);
    
              self.opt.pauseButton.addEventListener('click', function () {
                this.style.display = 'none';
                self.opt.playButton.style.display = 'inline-block';
    
                self.videoEl.pause();
              }, false);
            }
          }
    
          return;
        }
    
        // Called once video metadata is available
        //
        // Also called when window/container is resized
        this.resize = function () {
          // IE/Edge still don't support object-fit: cover
          if ('object-fit' in document.body.style) return;
    
          // Video's intrinsic dimensions
          var w = this.videoEl.videoWidth
            , h = this.videoEl.videoHeight;
    
          // Intrinsic ratio
          // Will be more than 1 if W > H and less if H > W
          var videoRatio = (w / h).toFixed(2);
    
          // Get the container DOM element and its styles
          //
          // Also calculate the min dimensions required (this will be
          // the container dimentions)
          var container = this.opt.container
            , containerStyles = global.getComputedStyle(container)
            , minW = parseInt( containerStyles.getPropertyValue('width') )
            , minH = parseInt( containerStyles.getPropertyValue('height') );
    
          // If !border-box then add paddings to width and height
          if (containerStyles.getPropertyValue('box-sizing') !== 'border-box') {
            var paddingTop = containerStyles.getPropertyValue('padding-top')
              , paddingBottom = containerStyles.getPropertyValue('padding-bottom')
              , paddingLeft = containerStyles.getPropertyValue('padding-left')
              , paddingRight = containerStyles.getPropertyValue('padding-right');
    
            paddingTop = parseInt(paddingTop);
            paddingBottom = parseInt(paddingBottom);
            paddingLeft = parseInt(paddingLeft);
            paddingRight = parseInt(paddingRight);
    
            minW += paddingLeft + paddingRight;
            minH += paddingTop + paddingBottom;
          }
    
          // What's the min:intrinsic dimensions
          //
          // The idea is to get which of the container dimension
          // has a higher value when compared with the equivalents
          // of the video. Imagine a 1200x700 container and
          // 1000x500 video. Then in order to find the right balance
          // and do minimum scaling, we have to find the dimension
          // with higher ratio.
          //
          // Ex: 1200/1000 = 1.2 and 700/500 = 1.4 - So it is best to
          // scale 500 to 700 and then calculate what should be the
          // right width. If we scale 1000 to 1200 then the height
          // will become 600 proportionately.
          var widthRatio = minW / w;
          var heightRatio = minH / h;
    
          // Whichever ratio is more, the scaling
          // has to be done over that dimension
          if (widthRatio > heightRatio) {
            var new_width = minW;
            var new_height = Math.ceil( new_width / videoRatio );
          }
          else {
            var new_height = minH;
            var new_width = Math.ceil( new_height * videoRatio );
          }
    
          this.videoEl.style.width = new_width + 'px';
          this.videoEl.style.height = new_height + 'px';
        };
      }

      function backgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable = '.background-video-tab', bvImg = '.background-video-img', mPlay='768px' ){

            bvInit.init({
              // 0. 抓取HTML视频标签
              videoEl: document.querySelector( `${bvFather} ${bvTable}` ),
              // 1. 抓取容器 - 视频父类标签
              container: document.querySelector( bvFather ),
              // 自动调整视频大小，达到background-size:cover;效果
              resize: true,
              // 检测到移动端停止播放视频
              isMobile: window.matchMedia(`(max-width: ${mPlay} )`).matches,
              // 2. 获取视频路径,并限制格式( 这里可以多准备几个视频,防止视频出错 )
              src: [
                {
                  src: bvSrcWeb,
                  type: 'video/webm;codecs="vp8, vorbis"'
                },
                {
                  src: bvSrcInner,
                  type: 'video/mp4'
                }
              ],
              // 3. 设置视频缓冲图片背景图  
              onLoad: function () {
                document.querySelector( `${bvFather} ${bvImg}` ).style.display = 'none';
              }
            });

      }



    return {

        // 3. 动画类
        animateCSS: ( element, animationName, callback ) => {
          animateCSS( element, animationName, callback );
        },
        moreAnimateCSS: (  activeId, aniObj ) => {
            moreAnimateCSS(activeId, aniObj );
        },
        moreAnimateInit: ( group ) => {
            return moreAnimateInit( group );
        },

        BackgroundVideoInit: BackgroundVideoInit,

        backgroundVideo: ( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay ) => {
      
          backgroundVideo( bvInit,bvFather,[bvSrcWeb, bvSrcInner],bvTable, bvImg, mPlay );
      
        },

    }


} )( window, oo7Str );

//////////////////// 3. 动画类-END


//////////////////// 4. 交互类-BGN

oo7Ui = ( function(){

  
  // 4-0. 清除指定目标class名
  //	用法:
  //      oo7Ui.clearAllClass( 目标class类名, 删除目标中class类名 );
  //  示例:
  //      HTML: <a class="btn active" ></a> <a class="btn active" ></a>
  //      JS: oo7Ui.clearAllClass( '.btn', 'active' );
  function clearAllClass( tar, classitem ){
    Array.from(document.querySelectorAll( `${tar},${tar} *` )).forEach( cur => cur.classList.remove( classitem )); 
  }

  // 4-1. 选中单个按钮 - 指定目标进行单选样式变化
  //	用法:
  //      oo7Ui.clickOnlyAddClass( 目标父类ID, 目标class名, 所增加class名 );
  //  示例:
  //      HTML: 
  /*
            <div class="#product">
                <a href="#" class="btn-more">
                  牡丹
                </a>
                <a href="#" class="btn-more">
                  芍药
                </a>
                <a href="#" class="btn-more">
                  苗木
                </a>
            </div>
  */
  //      CSS: 
  //        .active{ background: #144d41; color:#f8f8f8; }
  //      JS:
  //        oo7Ui.clickOnlyAddClass( '#product', '.btn-more', 'active' );
  function clickOnlyAddClass( id, tarClassItem, addClassItem ){
    document.querySelector( id ).addEventListener( 'click', cur => {
      const btn = cur.target.closest( tarClassItem );
      if( btn != null ){
        clearAllClass( tarClassItem, addClassItem );
        btn.classList.add( addClassItem );
      }
    } );
  }

  return {

    clearAllClass: ( tar, classitem ) => {
      clearAllClass( tar, classitem );
    },

    clickOnlyAddClass: ( id, tarClassItem, addClassItem ) => {
      clickOnlyAddClass( id, tarClassItem, addClassItem );
    }

  }

} )();

//////////////////// 4. 交互类-END

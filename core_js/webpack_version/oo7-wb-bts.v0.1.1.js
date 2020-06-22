// Github: https://github.com/ZTaer/OO7-BTS
const elementString = {
    start: 'start',
    end: 'end',
}

//////////////////// 2. 计算类-BGN
export class OO7Cul{

    // 2-0
    static objectBoolean(obj) {
        let result = true;
        for (let i in obj) {
            if (typeof obj[i] === "string" && !obj[i].trim()) {
                result = false;
                break;
            }
            else if (typeof obj[i] === "number" && !obj[i]) {
                result = false;
                break;
            }
        }
        return result;
    }
    // 2-1
    static nodelistForEach = function( list, callback){  
    for( let cur of list ){
        callback( cur );                
    };
}


}
//////////////////// 2. 计算类-END



//////////////////// 3. 动画类-BGN
export class OO7Ani{

    // 3-1
    static animateCSS(element, animationName,  callback){
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

    // 3-2
    static moreAnimateCSS( activeId, fatherId, classGroup, animate = 'fadeInUp', animateClass='' ){

        if( fatherId.includes(activeId) ){
            console.log( classGroup );
            for( let cur of classGroup ){
                let target = `${fatherId} ${cur}`; 

                // 显示目标
                Array.from(document.querySelectorAll(target)).forEach( cur => cur.style.opacity = 100 );

                // 目标执行动画
                this.animateCSS(target, animate);

                if( animateClass ){
                    arrList = Array.from( document.querySelectorAll(target) ); 
                    for( cur of arrList ){
                        cur.classList.remove( animateClass );
                        cur.classList.add( animateClass );
                    }
                }
                
            }
        }

    }

}
//////////////////// 3. 动画类-END


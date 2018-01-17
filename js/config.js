var imgs = [
        {"path":"images/1.jpg","phone":"OPPO R9s","addr":"西班牙"},
        {"path":"images/2.jpg","phone":"OPPO R9s","addr":"澳大利亚"},
        {"path":"images/3.jpg","phone":"OPPO R9s","addr":"云南"},
        {"path":"images/4.jpg","phone":"OPPO R9s","addr":"澳大利亚"},
        {"path":"images/5.jpg","phone":"OPPO R9s","addr":"迪拜"},
        {"path":"images/6.jpg","phone":"OPPO R9s","addr":"澳大利亚"},
        {"path":"images/7.jpg","phone":"OPPO R9s","addr":"澳大利亚"},
        {"path":"images/8.jpg","phone":"OPPO R9s","addr":"纽约"},
        {"path":"images/9.jpg","phone":"OPPO R9s","addr":"四姑娘山"},
        {"path":"images/10.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/11.jpg","phone":"OPPO R9s","addr":"上海"},
        {"path":"images/12.jpg","phone":"OPPO R9s","addr":"挪威"},
        {"path":"images/13.jpg","phone":"OPPO R9s","addr":"意大利"},
        {"path":"images/14.jpg","phone":"OPPO R9s","addr":"上海"},
        {"path":"images/15.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/16.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/17.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/18.jpg","phone":"OPPO R9s","addr":"新疆"},
        {"path":"images/19.jpg","phone":"OPPO R9s","addr":"广州"},
        {"path":"images/20.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/21.jpg","phone":"OPPO R9s","addr":""},
        {"path":"images/22.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/23.jpg","phone":"OPPO R9s","addr":"巴厘岛"},
        {"path":"images/24.jpg","phone":"OPPO R9s","addr":"上海"},
        {"path":"images/25.jpg","phone":"OPPO R9s","addr":"澳大利亚"},
        {"path":"images/26.jpg","phone":"OPPO R9s","addr":"上海"},
        {"path":"images/27.jpg","phone":"OPPO R9s","addr":"意大利"},
        {"path":"images/28.jpg","phone":"OPPO R9s","addr":"葡萄牙"},
        {"path":"images/29.jpg","phone":"OPPO R9s","addr":"北京"},
        {"path":"images/30.jpg","phone":"OPPO R9s","addr":"巴厘岛"} 

        //.....插入更多图      
	]



~function(){//设置屏幕
	var desW = 640, 
	    winW = document.documentElement.clientWidth,
	    rate = winW/desW,
	    oMain = document.querySelector('.main');
	if(winW > desW){
		oMain.style.margin = '0 auto';
		oMain.style.width = desW +'px';
		return;
	}
	document.documentElement.style.fontSize = rate*100+'px';
}()


var oSW = document.getElementById('sw'),
    obj = document.createDocumentFragment(),
    count = document.getElementById('count'),
    imgsall = document.getElementById('imgsall'),
    opp = document.createDocumentFragment(),
    totalimg = document.getElementById('totalimg');

//写入图片
for(var i=0;i<imgs.length;i++){
	var imgbox = document.createElement('div');
	imgbox.className = 'swiper-slide page';
	imgbox.style.background = 'url('+imgs[i].path+') no-repeat';
	imgbox.style.backgroundSize = 'cover';
	imgbox.innerHTML = '<span class="tips">拍摄手机: '+imgs[i].phone+'<br>拍摄地点: '+imgs[i].addr+'</span>'
	obj.appendChild(imgbox);

    var img = document.createElement('div');
    img.style.background = 'url('+imgs[i].path+') center no-repeat';
    img.style.height = '150px';
    img.style.backgroundSize='100% ';
    opp.appendChild(img);
}
oSW.appendChild(obj);
imgsall.appendChild(opp);
count.innerHTML = totalimg.innerHTML= imgs.length;

//swiper实例化
new Swiper('.swiper-container',{
	direction:'vertical',
	threshold:1, //设置最小滑动距离翻页
	speed:1000,
	initialSlide :1,
	on:{
		//当切换完成后的操作
		slideChangeTransitionEnd: function(){
			var sArr = this.slides,
			    cur  = this.activeIndex,
			    len  = sArr.length;
			    cc   = document.getElementById('cc');

            cc.innerHTML = ''+(cur+1); 

            [].forEach.call(sArr,function( item, index) {
            	if(cur===index){
            		item.children[0].classList.add('slideInUp');
            		cc.classList.add('slideInUp');
            		return;
            	}
            	item.children[0].classList.remove('slideInUp');
            });
	    },
	    //滑动时
	    touchMove: function(event){
      		var cc   = document.getElementById('cc');
      		cc.classList.remove('slideInUp');
        }
	}
})

var thr = document.getElementById('thr'),
	logo = document.getElementById('logo'),
	buy = document.getElementById('buy'),
    menudown = document.getElementById('menuDown'),
    pick = document.getElementById('pick'),
    thr = document.getElementById('thr'),
    l1 = thr.children[0],
	l2 = thr.children[2];
//点击左边菜单
thr.onclick = function(){
	if(menudown.getAttribute('class').indexOf('slideInDown')>-1){
		menudown.classList.add('slideInUp');
		menudown.classList.remove('slideInDown');
		l1.style.backgroundColor = '#FFF';
		l2.style.backgroundColor = '#FFF';
		l1.classList.remove('xz1');
		l2.classList.remove('xz2');
		logo.children[0].style.display='block';
		buy.children[0].style.display='block';
		pick.classList.remove('showpick');
	}else{//show
		menudown.classList.add('slideInDown');
		menudown.classList.remove('slideInUp');
		l1.style.backgroundColor = '#000';
		l2.style.backgroundColor = '#000';
		l1.classList.add('xz1');
		l2.classList.add('xz2');
		logo.children[0].style.display='none';
		buy.children[0].style.display='none';
		pick.classList.add('showpick');
	}
}

var buybox = document.getElementById('buybox'),
    bg = document.getElementById('bg');
//点击购物菜单
buy.onclick = function(){
	if(buybox.getAttribute('class').indexOf('showbuy')>-1){
		buybox.classList.remove('showbuy');
		bg.style.display="none";
	}else{
		buybox.classList.add('showbuy');
		bg.style.display="block";
	}
}
//点击遮罩背景
bg.onclick = function(){
	buybox.classList.remove('showbuy');
	this.style.display = 'none';
} 

var alllist = document.getElementById('alllist'),
    allimgs = document.getElementById('allimgs'),
    line1 = alllist.children[0],
    line2 = alllist.children[1],
    line3 = alllist.children[2];
//点击右下显示所有图片缩略图
alllist.onclick = function(){
	if(allimgs.getAttribute('class').indexOf('showallimg')>-1){
		allimgs.classList.remove('showallimg');
		line2.style.opacity='1';
		line1.classList.remove('lines1');
		line3.classList.remove('lines2');
	}else{
		allimgs.classList.add('showallimg');
		line2.style.opacity='0';
		line1.classList.add('lines1');
		line3.classList.add('lines2');
	}
}

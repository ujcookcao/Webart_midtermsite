let currentPlaying = null;
let currentshouldplay = 1;
document.addEventListener('DOMContentLoaded', function () {
    //section_one摇摆效果
    // 获取所有需要动画效果的section
    const section_two = document.querySelector('.content-two');
    const button_page_one = document.getElementById("button_page_one");
    const 波妞 = document.querySelectorAll(".img-box");
    button_page_one.addEventListener('click', () => {
        // 当鼠标移入时，添加旋转动画类
        section_two.classList.add('rotated');

        // 获取并操作文字元素，让其“漂浮”
        // 这里是一个示例，你可以根据需要调整
        const textBox = section_two.querySelector('.text-box');
        if (textBox) {
            textBox.style.position = 'absolute';
            textBox.style.animation = 'float 10s infinite';
        }
        if (波妞) {
            for (let i = 0; i < 波妞.length; i++) {
                波妞[i].style.position = 'absolute';
                波妞[i].style.opacity = 0.8;
                波妞[i].style.animation = 'float 10s infinite';
            }
        }
        
    });


    // 按钮点击启用scroll检测播放音乐
    
    const textButton = document.getElementById('textbutton');
    textButton.addEventListener('click', () => {
        
        // 播放音乐
        const song1 = document.getElementById('Resonance');
        currentPlaying = 0;
        fadeIn(song1);
        document.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.container > section');

            //console.log(sections);
            const audios = [document.getElementById('Resonance'), document.getElementById('deadwrong'), document.getElementById('空中散步'),document.getElementById('破旧世界')];

            let closestSection = null;
            let minDistance = Infinity;

            sections.forEach((section, index) => {
                const distance = Math.abs(section.getBoundingClientRect().top);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestSection = index;
                }
            });

            // 停止所有音乐并重置时间
            if (closestSection !== currentPlaying) {
                if (currentPlaying !== null || currentshouldplay == 0) {
                    fadeOut(audios[currentPlaying]);
                    audios[currentPlaying].currentTime = 0;
                }

                if (closestSection !== null) {
                    if(currentshouldplay == 1){
                    fadeIn(audios[closestSection]);
                    currentPlaying = closestSection;
                    }
                }
            }


        });
    });
    


    function fadeOut(audio, callback) {
        function step() {
            if (audio.volume > 0.01) {
                audio.volume -= 0.005;
                requestAnimationFrame(step);
            } else {
                audio.pause();
                audio.currentTime = 0;
                audio.volume = 1; // 重置音量
                if (callback) callback();
            }
        }
        step();
    }

    function fadeIn(audio) {
        audio.volume = 0;
        audio.play();
        var volumeindex = audio.volume;

        function step() {
            if (audio.volume < 1) {
                volumeindex = audio.volume + 0.002;
                if (volumeindex > 1) {
                    volumeindex = 1;
                }
                audio.volume = volumeindex;
                requestAnimationFrame(step);
            }
        }
        step();
    }

    // 滚动时检测元素是否在视窗内

    document.addEventListener('scroll', () => {
        const animatables = document.querySelectorAll('.animatable');
    
        animatables.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const elBottom = el.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
    
            // 元素进入视窗时添加动画
            if (elTop < windowHeight - 50 && elBottom > 0) {
                el.classList.add('slide-in');
            } else {
                // 元素离开视窗时移除动画，以便再次进入时可以重新触发
                el.classList.remove('slide-in');
            }
        });
    });
    //流星视觉差效果

    const star = document.getElementById('star');
    window.addEventListener('scroll', () => {
        const sectionOneTop = document.querySelector(".content-one").getBoundingClientRect().top + window.pageYOffset;
        let value = window.pageYOffset; // 获取当前页面的滚动位置
        star.style.left = (value - sectionOneTop) * 0.5 + 'px';
        star.style.top = (value - sectionOneTop) * 1+200 + 'px';
    });

    //标题文字动画
// 标题文字动画
const title = document.querySelector('.title-container');
let titleText = title.querySelector('h1');
let intervalId = null; // 用于存储setInterval的ID
let numberIndex = 0; // 起始数字


title.addEventListener('mouseover', () => {
    if (intervalId !== null) {
        // 如果已经有一个计时器在运行，则不做任何事
        return;
    }
    intervalId = setInterval(() => {
        titleText.innerText = "Day:"+numberIndex;
        numberIndex++; // 数字递增
    }, 100); // 每100毫秒增加一次数字
    console.log(numberIndex);
    if(numberIndex > 30){
        const sunContainer = document.querySelector('.sun_container');
        sunContainer.style.opacity = 1; // 使太阳可见
        sunContainer.style.animation = 'sunrise 3s ease forwards'; // 应用升起动画
    }
});

title.addEventListener('mouseout', () => {
    clearInterval(intervalId); // 停止计时器
    intervalId = null; // 重置计时器ID
    titleText.innerText = "sunshine"; // 鼠标移出时重置文本
    if(numberIndex > 30){
        const sunContainer = document.querySelector('.sun_container');
        sunContainer.style.opacity = 1; // 使太阳可见
        sunContainer.style.animation = 'sunrise 3s ease forwards, rotatesun 1s infinite'; // 应用升起动画
    }
});

const suncontainer = document.querySelector('.sun_container');
title.addEventListener('click', () => {
    suncontainer.style.opacity = 1; // 使太阳可见
    suncontainer.style.animation = 'sunrise 3s ease forwards'; // 应用升起动画
        
    });

    //点击太阳变成夜晚
    suncontainer.addEventListener('click', () => {
    const 蓝天图片 = document.getElementById("img_one");
    const moon_poemcontainer = document.getElementById('moon_poemcontainer');
    蓝天图片.style.backgroundImage = "url('./蓝天夜晚.png')";
    document.getElementById('太阳svg').src = './流星.png';
    suncontainer.style.opacity = 1; // 使太阳可见
    suncontainer.style.animation = 'sunrise 3s ease forwards'; //
    title.style.display = 'none';  
    蓝天图片.style.backgroundColor = "#025168";
    document.getElementById("summer_eng").innerHTML = "the miraculous dark";
    document.getElementById("summer_zn").innerHTML = "在奇迹般的黑暗中";
    moon_poemcontainer.classList.add('show_up');
    

    });


//播放哈尔的视频
function pauseAllMusic() {
    const audios = [document.getElementById('Resonance'), document.getElementById('空中散步'), document.getElementById('deadwrong'), document.getElementById('破旧世界')];
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // 可选，如果你想在暂停时重置音频
    });
}

const playButton = document.getElementById('musicbutton');
const video = document.getElementById('content-one-background-video');
const background_img = document.querySelector('.content-one');
const content_two_h1 = document.getElementById('content-two-h1');
const content_two_p = document.getElementById('content-two-p');
const textBox = section_two.querySelector('.text-box');
const imgBox = section_two.querySelectorAll('.img-box');



playButton.addEventListener('click', function() {
    document.getElementById('musicbutton').style.display = 'none';
    content_two_h1.innerText = "Now it's my turn to save you, Howl!";
    content_two_p.innerHTML = "现在轮到我来拯救你了，哈尔!";
    background_img.style.background = "none";
    textBox.style.animation = 'none'; // 移除动画
    for (let i = 0; i < imgBox.length; i++) {
        imgBox[i].style.animation = 'none'; // 移除动画
    }
    // 显示视频
    video.style.display = 'block';
    
    // 开始播放视频
    video.play();
    const audios = [document.getElementById('Resonance'), document.getElementById('空中散步'), document.getElementById('deadwrong'), document.getElementById('破旧世界')];
    pauseAllMusic();
    currentshouldplay = 0;
    
    // 当视频播放结束时，再次隐藏视频
    video.onended = function() {
        video.style.display = 'none';
        background_img.style.background = 'url(./哈尔1.jpeg) no-repeat center center/cover';
        fadeIn(audios[currentPlaying]);
        currentshouldplay = 1;
        content_two_h1.innerText = "Now it's my turn to save you, Howl!";
        content_two_p.innerHTML = "现在轮到我来拯救你了，哈尔!";
    };
});




});


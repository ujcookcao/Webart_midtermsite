document.addEventListener('DOMContentLoaded', function () {
    //section_one摇摆效果
    // 获取所有需要动画效果的section
    const section_one = document.querySelector('.content-one');
    const button_page_one = document.getElementById("button_page_one");
    button_page_one.addEventListener('click', () => {
        // 当鼠标移入时，添加旋转动画类
        section_one.classList.add('rotated');

        // 获取并操作文字元素，让其“漂浮”
        // 这里是一个示例，你可以根据需要调整
        const textBox = section_one.querySelector('.text-box');
        if (textBox) {
            textBox.style.position = 'absolute';
            textBox.style.animation = 'float 10s infinite';
        }
    });


    // 按钮点击启用scroll检测播放音乐
    const musicButton = document.getElementById('musicbutton');
    console.log(musicButton);
    musicButton.addEventListener('click', () => {
        let currentPlaying = null;
        // 播放音乐
        const song1 = document.getElementById('Resonance');
        currentPlaying = 0;
        fadeIn(song1);
        document.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.container > section');

            //console.log(sections);
            const audios = [document.getElementById('Resonance'), document.getElementById('deadwrong'), document.getElementById('破旧世界'), document.getElementById('空中散步')];

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
                if (currentPlaying !== null) {
                    fadeOut(audios[currentPlaying]);
                    audios[currentPlaying].currentTime = 0;
                }

                if (closestSection !== null) {
                    fadeIn(audios[closestSection]);
                    currentPlaying = closestSection;
                }
            }


        });
    });
    const textButton = document.getElementById('textbutton');
    textButton.addEventListener('click', () => {
        let currentPlaying = null;
        // 播放音乐
        const song1 = document.getElementById('Resonance');
        currentPlaying = 0;
        fadeIn(song1);
        document.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.container > section');

            //console.log(sections);
            const audios = [document.getElementById('Resonance'), document.getElementById('deadwrong'), document.getElementById('破旧世界'), document.getElementById('空中散步')];

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
                if (currentPlaying !== null) {
                    fadeOut(audios[currentPlaying]);
                    audios[currentPlaying].currentTime = 0;
                }

                if (closestSection !== null) {
                    fadeIn(audios[closestSection]);
                    currentPlaying = closestSection;
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

        function step() {
            if (audio.volume < 1) {
                audio.volume += 0.002;
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
    titleText.innerText = "SUNSHINE"; // 鼠标移出时重置文本
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
    title.style.opacity = 0; // 隐藏标题    
    蓝天图片.style.backgroundColor = "#025168";
    document.getElementById("summer_eng").innerHTML = "In the miraculous dark";
    document.getElementById("summer_zn").innerHTML = "在奇迹般的黑暗中";
    moon_poemcontainer.classList.add('show_up');

    });
});
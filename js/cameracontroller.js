
    let devicemanager = new BrowserDeviceManager();//新建一个打包好的管理器
    let cameraButton = document.getElementById("camera-button");//获取监控摄像头
    let cameraSelect = document.getElementById("camera-select");//选择监控
    if (cameraSelect && devicemanager.checkSupportScreenShare()) {
    cameraSelect.options[0] = new Option("screenshare", "screenshare")
}
    let cameraVideoBtuuton = document.getElementById("camera-video-button");//链接摄像头

    let cameraVideo = document.getElementById("camera-video");//监控展示本体
    let cameraVideoStopButton = document.getElementById("camera-video-stop-button");//连接至摄像头


    //获取监控列表
    cameraButton.addEventListener("click", () => {
    cameraSelect.options = [];//监控选择组
    devicemanager.getCameraList().then((list) => {
    for (let i = 0; i < list.length; ++i) {
    cameraSelect.options[cameraSelect.options.length] = new Option(list[i].label, list[i].deviceId)
}//获取监控并列入数组
}).catch((err) => {
    console.log(err);
})
})

    //点击连接至监控摄像头
    cameraVideoBtuuton.addEventListener("click", () => {
    if (cameraSelect.selectedIndex === 0) {
    devicemanager.getScreenTrack().then((mediastream) => {
    cameraVideo.srcObject = mediastream;
}).catch((err) => {
    console.log("bbbb ", err);
})
} else {
    let constraints = {//摄像头属性组,连接至试验田摄像头后视频框的大小
    width: 640,//宽度
    height: 480,//高度
    frameRate: 60,//帧率30/60/120FPS
}

    //如果没有选择，就进行屏幕共享选择
    if (cameraSelect.selectedIndex > -1) {
    constraints.deviceId = cameraSelect.options[cameraSelect.selectedIndex].value
}
    devicemanager.getVideoTrack(constraints).then((videotrack) => {
    let mediastream = new MediaStream();
    mediastream.addTrack(videotrack);
    cameraVideo.srcObject = mediastream;
}).catch((err) => {
    console.log("get video track error:", err);
})
}
})

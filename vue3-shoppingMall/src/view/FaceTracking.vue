<template>
  <div>
    <div class="video-box">
      <video id="video" width="320" height="240" preload autoplay loop muted></video>
      <canvas id="canvas" width="320" height="240"></canvas>
    </div>
    <canvas id="screenshotCanvas" width="320" height="240"></canvas>
  </div>
</template>


<script lang="ts">
//   import tracking from '/tracking.js-master/build/tracking.min.js';
//   import '/tracking.js-master/build/data/face-min.js';
 
  export default {
    data() {
      return {
        video: null,
        screenshotCanvas: null,
        uploadLock: true // 上传锁
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      // 初始化设置
      init() {
        this.video = document.getElementById('video');
        this.screenshotCanvas = document.getElementById('screenshotCanvas');
 
        let canvas = document.getElementById('canvas');
        let context = canvas.getContext('2d');
        console.log(window.tracking)
        // 固定写法
        let tracker = new window.tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);
        window.tracking.track('#video', tracker, {
          camera: true
        });
 
        let _this = this;
        tracker.on('track', function(event) {
 
          // 检测出人脸 绘画人脸位置
          context.clearRect(0, 0, canvas.width, canvas.height);
          event.data.forEach(function(rect) {
            context.strokeStyle = '#0764B7';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
 
            // 上传图片
            _this.uploadLock && _this.screenshotAndUpload();
          });
        });
      },
      // 上传图片
      screenshotAndUpload() {
        // 上锁避免重复发送请求
        this.uploadLock = false;
 
        // 绘制当前帧图片转换为base64格式
        let canvas = this.screenshotCanvas;
        let video = this.video;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        let base64Img = canvas.toDataURL('image/jpeg');
 
        // 使用 base64Img 请求接口即可
        console.log('base64Img:',base64Img)
 
        // 请求接口成功以后打开锁
        // this.uploadLock = true;
      }
    }
  }
</script>

<style scoped>
  /* 绘图canvas 不需显示隐藏即可 */
  #screenshotCanvas{
    display: none;
  }
 
  .video-box{
    position: relative;
    width: 320px;
    height: 240px;
  }
  
  
  video,canvas{
    position: absolute;
    top: 0;
    left: 0;
	border: #000000 5px solid;
  }
</style>

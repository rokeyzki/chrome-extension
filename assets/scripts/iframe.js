console.log('iframe');
var baiduBody = document.querySelector('body');
baiduBody.insertAdjacentHTML('beforeend', '<div class="zg-extension-icon">插件按钮</div>');
var icon = document.querySelector('.zg-extension-icon');
var iconStyle = icon.style;
iconStyle.position = 'fixed';
iconStyle.top = '80vh';
iconStyle.right = '60px';
iconStyle.padding = '8px 12px';
iconStyle.border = '1px solid #c6c6c6';
iconStyle.cursor = 'pointer';

baiduBody.insertAdjacentHTML('beforeend', '<iframe class="zg-extension-iframe" src="http://127.0.0.1:8080"></iframe>');
var iframe = document.querySelector('.zg-extension-iframe');
var iframeStyle = iframe.style;
iframeStyle.display = 'none';
iframeStyle.position = 'fixed';
iframeStyle.top = '10vh';
iframeStyle.left = 'calc((100% - 1260px)/2)';
iframeStyle.zIndex = '1000';
iframeStyle.width = '1260px';
iframeStyle.backgroundColor = '#fff';
iframeStyle.boxSizing = 'border-box';
iframeStyle.border = '1px solid #c6c6c6';

icon.onclick = function () {
  iframeStyle.display = (iframeStyle.display === 'none') ? 'block' : 'none';
};

setTimeout(function() {
  iframe.contentWindow.postMessage('这是一条来自parent传递给iframe的通信', '*');
}, 10000);

// iframe 通信监听
window.addEventListener('message', function (event) {
  console.log(event, event.data);
}, false);

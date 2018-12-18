console.log('baidu 插件');
var baiduInput = document.getElementById('kw');
// baiduInput.value = '123';
var baiduSubmit = document.getElementById('su');
// baiduSubmit.click();

baiduSubmit.insertAdjacentHTML('afterend', '<div class="zg-chrome-extension-box"></div>');
var extensionBox = document.querySelector('.zg-chrome-extension-box');
var extensionBoxStyle = extensionBox.style;
extensionBoxStyle.position = 'relative';
extensionBox.insertAdjacentHTML('beforeend', '<div class="zg-chrome-extension">谷歌一下</div>');
var extension = document.querySelector('.zg-chrome-extension');
var extensionStyle = extension.style;
extensionStyle.position = 'absolute';
extensionStyle.boxSizing = 'border-box';
extensionStyle.width = '100px';
extensionStyle.padding = '7px 10px';
extensionStyle.backgroundColor = '#fff';
extensionStyle.border = 'solid 1px #e3e1e5';
extensionStyle.boxShadow = '0px 4px 6px 0px rgba(144, 171, 204, 0.36)';
extensionStyle.cursor = 'pointer';
extensionStyle.fontSize = '14px';
extensionStyle.color = '#3385ff';
extensionStyle.letterSpacing = '1px';
extensionStyle.textAlign = 'center';
extensionStyle.display = 'none';
extension.addEventListener('click', function(e) {
  window.open('https://www.google.com/search?q=' + baiduInput.value.trim(), '_self');
});

baiduInput.addEventListener('input', function(e) {
  if (baiduInput.value && baiduInput.value.trim() !== '') extensionStyle.display = 'block';
  else extensionStyle.display = 'none';
});

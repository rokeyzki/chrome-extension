console.log('google 插件');
var googleForm = document.querySelector("form[role='search']");
var googleInput = googleForm.querySelector("input[role='combobox']");
// googleInput.value = 222;
var googleSubmit0 = googleForm.querySelectorAll("input[name='btnK']")[0];
if (googleSubmit0) addBaiduBtn(googleSubmit0);
var googleSubmit1 = googleForm.querySelectorAll("input[name='btnK']")[1];
if (googleSubmit1) addBaiduBtn(googleSubmit1);

function addBaiduBtn(input) {
    input.insertAdjacentHTML('afterend', '<input value="Baidu 搜索" id="baidusubmit" type="button" />');
    var baiduSubmit = input.closest('center').querySelector('#baidusubmit');
    var baiduSubmitStyle = baiduSubmit.style;
    baiduSubmitStyle.backgroundColor = '#f2f2f2';
    baiduSubmitStyle.border = '1px solid #f2f2f2';
    baiduSubmitStyle.borderRadius = '2px';
    baiduSubmitStyle.color = '#757575';
    baiduSubmitStyle.fontSize = '13px';
    baiduSubmitStyle.fontWeight = 'bold';
    baiduSubmitStyle.margin = '11px 4px';
    baiduSubmitStyle.minWidth = '54px';
    baiduSubmitStyle.padding = '0 16px';
    baiduSubmitStyle.textAlign = 'center';
    baiduSubmitStyle.height = '36px';
    baiduSubmitStyle.lineHeight = '27px';
    baiduSubmit.addEventListener('mouseover', function() {
        baiduSubmitStyle.backgroundColor = '#f8f8f8';
        baiduSubmitStyle.border = '1px solid #c6c6c6';
        baiduSubmitStyle.boxShadow = '0 1px 1px rgba(0,0,0,0.1)';
        baiduSubmitStyle.color = '#222';
    });
    baiduSubmit.addEventListener('mouseout', function() {
        baiduSubmitStyle.backgroundColor = '#f2f2f2';
        baiduSubmitStyle.border = '1px solid #f2f2f2';
        baiduSubmitStyle.boxShadow = 'none';
        baiduSubmitStyle.color = '#757575';
    });
    baiduSubmit.addEventListener('click', function() {
        window.open('https://www.baidu.com/s?wd=' + googleInput.value + '&foo=112233', '_self');
    });
}

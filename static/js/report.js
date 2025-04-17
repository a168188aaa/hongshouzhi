/* eslint-disable */
/* bca-disable */
// 需求WCI-26776
report_hszprompage_show();
$(document).ready(function() {
    report_hszprompage_success_report();
});
$("#pcxz,#pcgn").on('click', function () {
    report_hszprompage_down_click('电脑版下载');
});
$("#android-dl").click(function () {
    report_hszprompage_down_click('安卓版下载');
});
$("#ios-dl").click(function () {
    console.log('IOS版点击')
    report_hszprompage_down_click('iOS版');
});
$("#web-dl").click(function () {
    report_hszprompage_down_click('web版');
});
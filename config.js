/*
 * @Descripttion:  项目配置表 
 * @Author: xuess<wuniu2010@126.com>
 * @Date: 2019-06-04 17:29:18
 * @LastEditors: 午休
 * @LastEditTime: 2020-09-09 21:02:05
 */

// email 登陆账号 如：xxxx@126.com  默认使用的是 126的邮箱登录的。可以自行配置
const emailName = 'xxxx@126.com';
// email 登陆密码
const emailPassword = '123456';

// 接收者 邮箱
const toEmail = 'xxxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{	
		type: 'smzdm',
		username: '账号1',
		phone: '账号1',
		// 数组类型的 cookies
		cookies: [{xxx:'xxx'}]
	},
	{	
		type: 'smzdm',
		username: '账号2',
		phone: '账号2',
		// 数组类型的 cookies
		cookies: [ __ckguid=YG95jkJs2UciUxa22jPuf6s7; __jsluid_h=f90188b272bf5bcbc43d1b50432d54db; device_id=213070643316013518624861106f772e9bca5fd96c368cd4ba1a5956c7; r_sort_type=score; __jsluid_s=76b0c59ae7a49fecf3cec079d3b08225; _ga=GA1.2.530592379.1601351860; shequ_pc_sug=b; smzdm_user_source=A6EFC15AFD5681AD140A666A95AB80D0; userId=jnncy1|3626496209; homepage_sug=d; __gads=ID=c59332869a98841b:T=1608540311:S=ALNI_MYwwCbHaYP9UQGf3eS9sw8kH8hZjA; footer_floating_layer=0; sess=YjQ3NmV8MTYxNzM0OTU3MnwzNjI2NDk2MjA5fDM4ZjgzMjE4Y2QwZTRiYzBkYWRkYTI3NmU0ZmYyNGM5; user=jnncy1%7C3626496209; smzdm_id=3626496209; smzdm_ec=06; smzdm_ea=200; zdm_qd=%7B%22utm_source%22%3A%22chrome%22%2C%22utm_medium%22%3A%22Push%22%7D; wt3_eid=%3B999768690672041%7C2160135821900066336%232161397933100079337; ss_ab=ss40; s_his=%E9%A3%8E%E6%89%87%2Ccpu%E9%A3%8E%E6%89%87%2C%E5%B0%8F%E4%B8%BB%E6%9C%BA%2C%E5%85%89%E7%8C%AB%2C%E4%BA%AC%E4%B8%9C%E4%BA%91AX1800%2Ciptv%E7%A0%B4%E8%A7%A3%2Ciptv%E8%AE%A4%E8%AF%81%E8%B6%85%E5%B8%82%2Ciptv%E8%AE%A4%E8%AF%81%E8%B6%85%E6%97%B6%2Ciptv%2C%E7%BD%91%E9%80%9F; smzdm_user_view=A4F53488659931BF3CD1F8C9D56F9A80; _gid=GA1.2.1095364887.1614560029; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1614137231,1614224397,1614330251,1614560103; DISABLE_APP_TIP=1; _zdmA.uid=ZDMA.3SYNl-4dG.1614560353.2419200; _zdmA.vid=*; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%223626496209%22%2C%22first_id%22%3A%22174d8023d06147-06545b57af2c15-376b4502-1049088-174d8023d071d8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E4%BB%98%E8%B4%B9%E5%B9%BF%E5%91%8A%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_utm_source%22%3A%22chrome%22%2C%22%24latest_utm_medium%22%3A%22Push%22%2C%22%24latest_utm_campaign%22%3A%22Tixing%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.smzdm.com%2F%3Futm_source%3Dchrome%26utm_medium%3DPush%26utm_Term%3DLogo%26utm_Content%3D%22%7D%2C%22%24device_id%22%3A%22174d8023d06147-06545b57af2c15-376b4502-1049088-174d8023d071d8%22%7D; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1614560353; _gat_UA-27058866-1=1; ad_date=1; bannerCounter=%5B%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%5D; ad_json_feed=%7B%7D; amvid=fc2aceb631ecf91438dc5bc26b1a405b; _zdmA.time=1614560356747.0.https%3A%2F%2Fwww.smzdm.com%2F%3Futm_source%3Dchrome%26utm_medium%3DPush%26utm_Term%3DLogo%26utm_Content%3D]
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错啊',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};

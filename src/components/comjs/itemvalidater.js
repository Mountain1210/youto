/**
 * 
 * @authors 王伟 (you@example.org)
 * @date    2018-05-08 14:55:35
 * @version 0.0.1
 */
 import _ from 'lodash'
class Itemvalidater{
    constructor(props){}
    checkPhone(rule,value,callback){
    	var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; 
    	value=_.trim(value);
    	      if (!value) {
    	        return callback(new Error('手机不能为空'));
    	      }
    	      setTimeout(() => {
    	        var strnpm=value;
    	       value=parseInt(value)
    	        console.log(Number.isInteger(value))
    	        if (!Number.isInteger(value)) {
    	          callback(new Error('请输入数字值'));
    	        } else {
    	          console.log(strnpm.length)
    	          if (!phoneReg.test(strnpm)) {
    	            callback(new Error('必须正确的手机位数'));
    	          } else {
    	            callback();
    	          }
    	        }
    	      }, 1000);
    };
    checkMail(rule,value,callback){
      var mailReg = /(^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$)/; 
      value=_.trim(value);
            if (!value) {
              return callback(new Error('邮箱不能为空'));
            }
            setTimeout(() => {
                if (!mailReg.test(value)) {
                  callback(new Error('必须正确的邮箱'));
                } else {
                  callback();
                }
            }, 1000);
    }
 };
let Itd=new Itemvalidater();
export default Itd
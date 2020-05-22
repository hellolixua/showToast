安装
npm install allan-countdown --save

引入
import CountDown from 'allan-countdown';
Vue.component(CountDown.name, CountDown)

使用
`
<CountDown
    id="countDown1"
    @startCallback="startCallback"
    @endCallback="endCallback"
    :start="start"
    :end="end"
    endTxt="活动已结束"
    countingTxt="活动剩余："
    startTxt="距离活动开始："
></CountDown>
`
`
data() {
    return {
        start: Date.now() + 5000,
        end: Date.now() + 9000
    }
},
`
说明
startCallback:开始倒计时回调, necessary: false
endCallback:结束倒计时回调, necessary: false
id: { //当前倒计时组件id,在startCallback & endCallback 中会返回id, necessary: false
    type: String,
    default: ''
},
current:{ //当前时间(ms), necessary: false
    type: Number,
    default: Date.now()
},
start:{ //活动开始时间(ms), necessary: false
    type: Number,
    default: Date.now()
},
startTxt:{ //距离活动开始提示文字, necessary: false
    type: String,
    default: ''
},
countingTxt: {
    // 活动进行中提示文字, necessary: false
    type: String,
    default: ''
},
end:{ //活动结束时间(ms), necessary: true
    type: Number,
    default: Date.now()
},
endTxt:{ //活动结束后提示文字, necessary: false
    type: String,
    default: ''
},
dayTxt: { //天后面的字符串, necessary: false
    type: String,
    default: ':'
},
hourTxt: {//小时后面的字符串, necessary: false
    type: String,
    default: ':'
},
minuteTxt: {//分钟后面的字符串, necessary: false
    type: String,
    default: ':'
},
secondTxt:{//秒后面的字符串, necessary: false
    type: String,
    default: ':'
},
dayShow: { // 是否显示天倒计时，necessary: false
    type: Boolean,
    default: true
},
hourShow: { // 是否显示小时倒计时，necessary: false
    type: Boolean,
    default: true
},
minuteShow: { // 是否显示分钟倒计时，necessary: false
    type: Boolean,
    default: true
},
secondShow: { // 是否显示秒倒计时，necessary: false
    type: Boolean,
    default: true
}

[allan](https://www.jianshu.com/u/28178fe4ff08)


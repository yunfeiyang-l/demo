const Vue = require('vue/dist/vue.js');
import '../style/test.scss';
const vm = new Vue({
    el: '#app',
    data: {
        bool: 0,
        arr: ['新闻', '娱乐', '体育'],
        arr1: ['习近平对贵州水城7·23特大山体滑坡作出重要指示', '唐诗咏否认与教育界王力宏交往更称与马国', '中国泳协主席周继红不能沉默，急需施压国际泳']
    },
    template: `
         <div class='main'>
            <ul>
                <li  v-on:click='bool=0' v-text='arr[0]'></li> 
                <li  v-on:click='bool=1' v-text='arr[1]'></li>
                <li  v-on:click='bool=2' v-text='arr[2]'></li>  
            </ul>
            <div   v-show='bool==0' v-text='arr1[0]'></div>
            <div   v-show='bool==1' v-text='arr1[1]'></div>
            <div   v-show='bool==2' v-text='arr1[2]'></div>
         </div>       
    `

});
<template>
    <div>
        <NavLeft></NavLeft>
        <router-view/>
    </div>
</template>
<script>
import Vue from 'vue'
import {
    mapGetters, mapActions
}
from "vuex"
import NavLeft from './Left.vue'
export default {
    name: 'SmData2',
    data() {
        return {
            rightNavArray: [{
                name: "高级检索",
                url: "/SmData/Gjjs"
            }, {
                name: "我的产品池",
                url: "/SmData/Wdcpc"
            }, {
                name: "对比库",
                url: "/SmData/Dbk"
            }, {
                name: "产品快速预览",
                url: "/SmData/Cpksyl"
            }],
            tabheight: document.documentElement.clientHeight - 125,
            tabht: document.documentElement.clientHeight - 125,
            subleftw: ""
        }
    },
    components: {
       NavLeft
    },
    computed: mapGetters(['searchJSON', 'subsnump', 'dialogVisible'])
        // ,methods:mapActions(['sublibtn',"getdocumentHeight","getcurrentMenu","clickOdd","clickAsync","customCompFunc","handleClose","isopen"])
        ,
    methods: {
        sublibtn: function() {
            this.$store.dispatch("sublibtn")
        },
        getdocumentHeight: function() {
            this.$store.dispatch("getdocumentHeight")
        },
        handleClose: function() {
            this.$store.dispatch("handleClose")
        },
        isopen: function(num) {
            this.$store.dispatch("isopen", num)
        },
        gsjcfn: function(row, column, cell, event) {
            console.log(row.number)
            console.log(column.label)
            if (column.label == "公司简称") {
                this.$router.push('/SmData/detial/'+ row.number)
            }
            if (column.label == "注册资本(万)") {
                this.$router.push('/CompenyDetial/' + row.number);
            }
        }
    },
    beforeCreate: function() {

    },
    mounted: function() {
        // this.getdocumentHeight();
    },
    created() {
        let that = this;
        this.$store.dispatch("getSubLeftw").then(function(getWidth) {
            that.subleftw = getWidth;
        });
    }
}
</script>

</style>

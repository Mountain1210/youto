<template>
        <div class="sf" style="float:right; padding-right:8px; font-size:18px">
                          <span class="iconfont icon-category"></span>
                          <span class="iconfont icon-emailfilling" style="color:rgba(79, 159, 222, 1)" @click="$emit('showorhide')"></span>
                          <span></span>
        </div>
</template>
<script>
import Vue from 'vue'
import _ from "lodash"
import {
    mapGetters, mapActions
}
from "vuex"
export default {
    name: 'Jsbtn',
    data() {
        return {
        }
    },
    components: {
    },
    computed: mapGetters(['searchJSON', 'subsnump', 'dialogVisible']),
    methods: {
     
    },
    mounted: function() {
     
    }
}
</script>
<style scoped>
.sf .iconfont {
    padding-right: 8px
}
</style>

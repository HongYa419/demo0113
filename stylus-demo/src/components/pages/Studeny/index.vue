<template>
    <div class="container">
        <h1>学生管理页面</h1>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th class="text-center">学号</th>
                    <th class="text-center">姓名</th>
                    <th class="text-center">手机号</th>
                    <th class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of stuarr" :key="item.xuehao"  class="text-center">
                    <td>{{ item.xuehao }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.phone }}</td>
                    <td>
                        <button class="btn btn-warning">编辑</button>
                        <v-del></v-del>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import vDel from '../../views/del'
export default {
    components:{vDel},
    data() {
        return {
            stuarr:[
                {
                    xuehao:10001,
                    name:'鸿涯',
                    phone:15612931111
                },
                {
                    xuehao:10002,
                    name:'张三',
                    phone:15612932222
                },
                {
                    xuehao:10003,
                    name:'李四',
                    phone:15612933333
                }
            ]
        }
    }
}
</script>

<style>

</style>
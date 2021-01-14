<template>
  <div>
    <h1>学生管理页面</h1>
    <el-button type="primary" @click="$router.push('/student/add')">
      添加
    </el-button>
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="item">
            <el-button size="mini" @click="handleEdit(item)">
              编辑
            </el-button>
            <el-button size="mini" type="danger" @click="handleDelete(item.$index)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  methods: {
    handleEdit(data){

    },
    handleDelete(n){
      this.tableData.splice(n,1)
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style>
</style>
<template>
  <div class="simiao">
    <el-table
            :data="tableData"
            border
            style="width: 100%">
      <el-table-column
              fixed
              prop="date"
              label="日期"
              width="100">
      </el-table-column>
      <el-table-column
              prop="name"
              label="发布人姓名"
              width="100">
      </el-table-column>
      <el-table-column
              prop="province"
              label="省份"
              width="80">
      </el-table-column>
      <el-table-column
              prop="city"
              label="市区"
              width="100">
      </el-table-column>
      <el-table-column
              prop="address"
              label="资讯主题"
              width="300">
      </el-table-column>
      <el-table-column
              prop="zip"
              label="寺庙名称"
              width="150">
      </el-table-column>
        <el-table-column label="操作" width="240">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"  type="primary">同意</el-button>
                <el-button size="mini" @click="hendleDelete(scope.$index, scope.row)" type="danger">拒绝</el-button>
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
            </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '华为公布“孟晚舟来信”：感谢牵挂，内心坚定',
          zip: '灵隐寺'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '华为公布“孟晚舟来信”：感谢牵挂，内心坚定',
          zip:  '灵隐寺'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '华为公布“孟晚舟来信”：感谢牵挂，内心坚定',
          zip:  '灵隐寺'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '华为公布“孟晚舟来信”：感谢牵挂，内心坚定',
          zip:  '灵隐寺'
        }]
      }
    }
  }
</script>

<sytle lang="less">
.el-table td, .el-table th {
  padding: 8px 0px 8px 0px
}
</sytle>

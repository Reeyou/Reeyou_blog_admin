<template>
  <div class="page">
    <!-- 表格内容 -->
    <div class="table">
      <el-table
        :data="tbData"
        fit
        border
        v-loading="loading"
        style="width: 100%"
        :span-method="spanMethod"
        :header-cell-style="{background: '#f4f4f4'}"
      >
        <el-table-column
          v-for="(column, index) in dataColumns"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :fixed="column.fixed"
          fit
        >
          <template slot-scope="scope">
            <!-- 操作栏 -->
            <div v-if="column.handle">
              <template v-for="(item, key) in column.handle">
                <re-button
                  class="handle"
                  v-if="item.isShow ? item.isShow(scope.row) : true"
                  :key="key"
                  @click="item.clickFun(scope.row)"
                  :type="item.type"
                  :icon="item.icon"
                  size="small"
                >{{item.name}}</re-button>
              </template>
            </div>
            <!-- 输入框 -->
            <div v-else-if="column.type == 'input'">
              <el-input :placeholder="column.label" v-model="column.value"></el-input>
            </div>
            <!-- 输入框 -->
            <div v-else-if="column.type == 'upload'">
              <el-upload
                class="table-upload"
                action="/api/upload"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
            <!-- 主图 -->
            <div v-else-if="column.type == 'pic'">
              <img class="main_image" :src="scope.row.poster || scope.row.subPics" alt />
            </div>
            <!-- 详情图 -->
            <div v-else-if="column.type == 'detailPic'">
              <img
                class="goods_image"
                v-for="(item,index) in scope.row.detailPic"
                :key="index"
                :src="item"
                alt
              />
            </div>
            <!-- 数据处理 -->
            <div v-else>
              <!-- <span v-if="!column.format">{{ scope.row[column.prop] }}</span> -->
              <span>{{ scope.row[column.prop]}}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'pageTable',
    props: [
        'tbData',
        'columns',
        'loading',
        'spanMethod'
    ],
    data () {
        return {
            value: '',
            dataColumns: this.columns || [],
            spanArr: []
        }
    }
}
</script>

<style lang='scss'>
@import "@/assets/css/common.scss";
@import "./index.scss";
.table-upload {
  .el-upload--picture-card {
    width: 50px;
    height: 50px;
    position: relative;
    .el-upload-list--picture-card .el-upload-list__item {
      width: 50px;
      height: 50px;
    }
     i {
      position: absolute;
      font-size: 14px;
      top: 18px;
      left: 18px;
    }
  }

}
.el-table td, .el-table th {
  padding: 6px 0;
}
</style>

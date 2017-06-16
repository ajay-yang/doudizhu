<template>
  <div class="levelnav">
  	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>等级一</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-2">选项3</el-menu-item>
          <el-menu-item index="1-2">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>等级二</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-menu-item index="2-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>等级三</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

   </el-menu>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
    		
    }
  }

}
</script>



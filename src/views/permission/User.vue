<template>
  <self-page-container>
    <self-card>
      <template #header> 数据筛选 </template>
      <el-form
        :inline="true"
        ref="form"
        :model="listParams"
        :disabled="listLoading"
        @submit.prevent="handleQuery"
      >
        <el-form-item label="状态">
          <el-select v-model="listParams.status" placeholder="请选择" clearable>
            <el-option label="全部" value="" />
            <el-option label="显示" :value="1" />
            <el-option label="不显示" :value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员名称">
          <el-input
            v-model="listParams.name"
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit"> 查询 </el-button>
        </el-form-item>
      </el-form>
    </self-card>
    <self-card>
      <template #header>
        <el-button type="primary" @click="formVisible = true">
          添加管理员
        </el-button>
      </template>
      <el-table :data="list" stripe style="width: 100%" v-loading="listLoading">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="real_name" label="姓名" />
        <el-table-column prop="account" label="账号" />
        <el-table-column prop="roles" label="身份" min-width="180">
          <template #default="scope">
            <el-space wrap>
              <el-tag
                class="role-tag"
                v-for="item in scope.row.roles.split(',')"
                :key="item"
              >
                {{ item }}
              </el-tag>
            </el-space>
          </template>
        </el-table-column>
        <el-table-column label="最后一次登录时间" prop="last_time" />
        <el-table-column label="最后一次登录IP" prop="last_ip" />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="scope.row.statusLoading"
              @change="handleStatusChange(scope.row)"
            />
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          min-width="100"
          align="center"
        >
          <template #default="scope">
            <el-button type="primary" text @click="handleUpdate(scope.row.id)">
              编辑
            </el-button>
            <el-popconfirm
              title="确认删除吗？"
              @confirm="handleDelete(scope.row.id)"
            >
              <template #reference>
                <el-button type="primary" text> 删除 </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <self-pagination
        v-model:page="listParams.page"
        v-model:limit="listParams.limit"
        :list-count="listCount"
        :load-list="loadList"
        :disabled="listLoading"
      />
    </self-card>
  </self-page-container>
  <user-form
    v-model="formVisible"
    v-model:admin-id="adminId"
    @success="handleFormSuccess"
  />
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { getUsers, deleteUser, updateUserStatus } from "@/api/permission/user";
import type { IListParams, IUser } from "@/api/types/user";
import { ElMessage } from "element-plus";
import UserForm from "./UserForm.vue";

const list = ref<IUser[]>([]); // 列表数据
const listCount = ref(0);
const listLoading = ref(true);
const listParams = reactive({
  // 列表数据查询参数
  page: 1, // 当前页码
  limit: 10, // 每页大小
  name: "",
  roles: "",
  status: "" as IListParams["status"],
});
const formVisible = ref(false);
const adminId = ref<number | null>(null);

onMounted(() => {
  loadList();
});

const loadList = async () => {
  listLoading.value = true;
  const data = await getUsers(listParams).finally(() => {
    listLoading.value = false;
  });
  data.list.forEach((item) => {
    item.statusLoading = false; // 控制切换状态的 loading 效果
  });
  list.value = data.list;
  listCount.value = data.count;
};

const handleQuery = async () => {
  listParams.page = 1; // 查询默认从第1页开始
  loadList();
};

const handleDelete = async (id: number) => {
  await deleteUser(id);
  ElMessage.success("删除成功");
  loadList();
};

const handleStatusChange = async (item: IUser) => {
  item.statusLoading = true;
  await updateUserStatus(item.id, item.status).finally(() => {
    item.statusLoading = false;
  });
  ElMessage.success(`${item.status === 1 ? "启用" : "禁用"}成功`);
};

const handleUpdate = (id: number) => {
  adminId.value = id;
  formVisible.value = true;
};

const handleFormSuccess = () => {
  formVisible.value = false;
  loadList();
};
</script>

<style lang="scss" scoped></style>

<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row q-mb-md q-gutter-sm">
        <q-select v-model="searchField" outlined :options="columns" label="按列搜索" class="col-2" />
        <q-input
          v-if="!!searchField" v-model="searchText" outlined 
          :label="`按 ${searchField.label} 搜索…`"
          :option-value="(item) => item === null ? null : item.label"
          class="col-3"
        />
      </div>
      <q-table
        :columns="columns"
        :rows="alumniData"
        :rows-per-page-options="[10, 20]"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useDataStore } from "../stores/data-store";

const columns = [
  {
    name: "name",
    required: true,
    label: "姓名",
    align: "left",
    field: "name",
    sortable: true,
  },
  { name: "major", align: "left", label: "专业", field: "major" },
  { name: "gradYear", align: "left", label: "毕业年份", field: "gradYear" },
  { name: "company", align: "left", label: "公司", field: "company" },
  { name: "email", align: "left", label: "电子邮件", field: "email" },
];

const searchText = ref("");
const searchField = ref(null);
const dataStore = useDataStore();

const filteredData = computed(() => {
  return searchField.value ? dataStore.data.filter((row) => {
    return row[searchField.value.name].toString().toLowerCase().includes(searchText.value.toString().toLowerCase());
  }) : dataStore.data;
});

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      columns,
      alumniData: filteredData,
      searchField,
      searchText,
    };
  },
});
</script>

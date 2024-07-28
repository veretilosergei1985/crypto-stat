<template>
    <div class="table-container relative">
<!--        <loader v-if="loading" />-->

        <ve-table ref="tableRef" style="width:100%" class="table" :columns="preparedColumns" :table-data="data"/>
        <div v-if="loaded && total === 0" class="table-no-results">
            <div class="alert alert--danger">
                No results found!
            </div>
        </div>

<!--        <pagination :total="total" :page-index="pageIndex" :page-size="pageSize" @changePage="changePage" />-->
    </div>
</template>
<script>
import axios from "axios";
// import Loader from "../Loader";
import {eventBus} from "../../app";

export default {
    // components: {Loader},
    props: {
        dataUrl: String,
        columns: Array,
        filters: Object,
        pageSize: {
            type: Number,
            default: 5
        },
        tableName: String
    },
    data: () => ({
        preparedColumns: [],
        config: {
            columns: [],
            order: [{column: "0", dir: "asc"}],
            start: 0,
            length: 5,
            search: {value: "", regex: "false"}
        },
        loading: false,
        loaded: false,
        data: [],
        total: 0,
        pageIndex: 1
    }),

    mounted() {
        this.prepareColumns();
        this.prepareFilters();
        this.loadData();

        eventBus.$on('reload-table', data => {
            if (data.tableName === this.tableName) {
                this.changePage(1);
            }
        });
    },

    watch: {
        filters() {
            for (let i in this.config.columns) {
                if (this.config.columns.hasOwnProperty(i)) {
                    let col = this.config.columns[i];
                    if (typeof this.filters[ col.name ]  !== "undefined") {
                        this.config.columns[i].search.value = this.filters[ col.name ];
                    }
                }
            }
            this.pageIndex = 1;
            this.config.start = 0;
            this.loadData();
        }
    },

    methods: {
        prepareColumns() {
            let columns = this.columns;
            let configColumns = [];
            for(let i in columns) {
                if(columns.hasOwnProperty(i)) {
                    let col = columns[i];
                    if(typeof col !== 'object') {
                        col = {
                            field: col
                        };
                    }
                    if(!col.title) {
                        col.title = col.field[0].toUpperCase() + col.field.slice(1).replace(/([A-Z])/g, ' $1');
                    }
                    col.key = i;
                    if(col.type === 'html') {
                        col.renderBodyCell = ({ row, column, rowIndex }, h) => {
                            const text = row[column.field];
                            return <div domPropsInnerHTML={text} />;
                        };
                    }

                    columns[i] = col;
                    configColumns.push({
                        data: col.field,
                        name: col.field,
                        searchable: col.searchable ? "true" : "false",
                        orderable: col.orderable ? "true" : "false",
                        search: {value: "", regex: "false"}
                    })
                }
            }
            this.preparedColumns = columns;
            this.config.columns = configColumns;
            this.config.length = this.pageSize;
        },
        prepareFilters() {
          if (typeof this.filters == "undefined") {
            return;
          }
          for (let i in this.config.columns) {
            if (this.config.columns.hasOwnProperty(i)) {
              let col = this.config.columns[i];
              if (typeof this.filters[col.name] !== "undefined") {
                this.config.columns[i].search.value = this.filters[col.name];
              }
            }
          }
        },
        loadData() {
            this.loading = true;
            axios.get(this.dataUrl + '?' + this.serialize(this.config))
                .then(({ data }) => {
                    this.loading = false;
                    this.data = data.data;
                    this.total = +data.recordsFiltered;
                    this.loaded = true;
                })
        },

        serialize(obj, prefix) {
            let str = [],
                p;
            for (p in obj) {
                if (obj.hasOwnProperty(p)) {
                    let k = prefix ? prefix + "[" + p + "]" : p,
                        v = obj[p];
                    str.push((v !== null && typeof v === "object") ?
                        this.serialize(v, k) :
                        encodeURIComponent(k) + "=" + encodeURIComponent(""+v));
                }
            }
            return str.join("&");
        },

        changePage(page) {
            this.pageIndex = page;
            this.config.start = (page-1)*this.pageSize;

            this.loadData();
        }
    }
}
</script>

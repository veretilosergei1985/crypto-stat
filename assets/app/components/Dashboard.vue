<template>
    <div class="patients-search">

<!--        <div class="patients-search__row">-->
<!--            <div class="box patients-search__box-search">-->
<!--                <patients-search-form @submit="onSubmit"></patients-search-form>-->
<!--            </div>-->
<!--        </div>-->

        <div class="patients-search__row">
            <div class="box patients-search__box-table">
                <base-table :page-size="10" :filters="filters" data-url="/api/categories" :columns="columns"></base-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        columns: [
            'id',
            'test'
            // {
            //     field: 'completed_intake',
            //     header: 'Completed Intake',
            //     renderBodyCell: ({row, column, rowIndex}, h) => {
            //         return row.completed_intake ? 'Yes' : 'No';
            //     }
            // },
            // {
            //     field: 'name',
            //     type: 'html',
            // },
            // 'city',
            // {
            //     field: 'phone',
            //     renderBodyCell: ({row, column, rowIndex}, h) => {
            //         return <a href={'/phone?call='+row.phone} class="link text-brand">{ row.phone }</a>;
            //     }
            // },
            // {
            //     field: 'email',
            //     renderBodyCell: ({row, column, rowIndex}, h) => {
            //         return row.email.toLowerCase();
            //     }
            // },
        ],

        filters: {}
    }),

    methods: {
        onSubmit(filters) {
            this.filters = filters;
        }
    }
}
</script>

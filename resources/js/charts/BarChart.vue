<script>

    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            chartoptions: {
                type: Object,
                default: null
            }

        },

        mounted () {
            this.renderChart(this.chartdata,this.chartoptions)
        }
    }

</script>

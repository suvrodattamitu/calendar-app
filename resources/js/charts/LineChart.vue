<script>

    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
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

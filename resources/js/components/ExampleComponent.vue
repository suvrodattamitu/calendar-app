<template>
    <div class="container">
        <v-row align="center">
            <v-col class="text-center" cols="12" sm="4">
                <div class="my-2">
                    <v-btn depressed small>Normal</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

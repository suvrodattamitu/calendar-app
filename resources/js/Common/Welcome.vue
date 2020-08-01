<template>

    <div class="ninja_intro_welcome">
        <h2>Welcome <span style="color:#007AFF;"> </span></h2>
        <p>Thank you. <span></span> - Management System Made Simple</p>
        <div class="ninja_actions">
            <el-button type="success" @click="createNew">
                Create a {{ additionalData.name }}
            </el-button>
        </div>
        <hr/>
       
    </div>

</template>

<style lang="scss">
    .ninja_intro_welcome {
    max-width: 600px;
    margin: 45px auto 0px;
    padding: 30px 20px;
    background: white;
    text-align: center;

    h2 {
        font-size: 30px;
    }

    .ninja_actions {
        margin-bottom: 30px;
    }

    .ninja_docs {
        text-align: left;
    }
}

</style>

<script>

export default {

    name: "Welcome",

    props:['additionalData'],

    data() {

        return {

            docs: []

        }

    },

    methods: {

        createNew() {

            this.$emit('createNewOne', true);

        }

    },

    computed: {


    }
    
}

</script>

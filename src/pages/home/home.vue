<template>
    <div class="welcome">
        <Row class-name="r_1"><span>Welcome to Nayo Admin</span></Row>
        <Row class-name="r_2">Supported by <a href="https://vuejs.org/index.html" target="_blank" class="r2_a_1"></a> and <a href="https://www.iviewui.com" target="_blank" class="r2_a_2"></a></Row>
        <Row class-name="r_3"><a href="" target="_blank">Document</a></Row>
        <Row class-name="r_4">Nayo Admin Framework: <a href="" target="_blank">nayo-admin-core.js</a></Row>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    .welcome {
        display: flex;
        position: absolute;
        width: 500px;
        height: 350px;
        margin: auto;
        top: 0;
        bottom: 40vh;
        left: 0;
        right: 0;
        flex-direction: column;
        justify-content: center;

        .r_1 {
            flex: 0 0 auto;
            display: flex;
            height: 170px;
            position: relative;
            background-image: url("./../../assets/logo.jpg");
            background-repeat: no-repeat;
            background-position: 50% 30%;
            background-size: 50%;
            justify-content: center;
            align-items: center;

            span {
                flex: 0 0 auto;
                position: relative;
                top: 50px;
                font-size: 30px;
            }
        }
        .r_2 {
            flex: 0 0 auto;
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: center;
            font-size: 20px;

            .r2_a_1 {
                display: flex;
                position: relative;
                width: 140px;
                height: 60px;
                margin: 0 5px 0 5px;
                background-image: url("./../../assets/vue.png");
                background-repeat: no-repeat;
                background-size: 43px 43px;
                background-position: 8px center;
                justify-content: center;
                align-items: center;

                &::after {
                    content: "Vue.js";
                    color: #232838;
                    position: absolute;
                    top: 15px;
                    right: 20px;
                }
            }

            .r2_a_2 {
                display: flex;
                position: relative;
                width: 140px;
                height: 60px;
                margin: 0 5px 0 5px;
                background-image: url("./../../assets/iview.png");
                background-repeat: no-repeat;
                background-size: 43px 43px;
                background-position: 8px center;
                justify-content: center;
                align-items: center;

                &::after {
                    content: "iView";
                    color: #232838;
                    position: absolute;
                    top: 15px;
                    right: 20px;
                }
            }
        }

        .r_3 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            height: 40px;
            justify-content: center;
            align-items: center;

            a {
                font-size: 20px;
                color: #515a6e;
            }
        }
        .r_4 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            height: 40px;
            justify-content: center;
            align-items: center;
            font-size: 18px;

            a {
                margin: 0 0 0 5px;
                color: #515a6e;
            }
        }
    }
</style>
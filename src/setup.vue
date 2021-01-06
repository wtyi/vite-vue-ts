<template>
    <div>
        <div
            class="round"
            @click="swicthStatus"
            :class="{ move: isMove }"
        ></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isMove = ref<boolean>(false);
const swicthStatus = () => (isMove.value = !isMove.value);
</script>
<style scoepd>
.round {
    width: 60px;
    height: 60px;
    background-color: royalblue;
    border-radius: 50%;
    padding: 10px;
    transition: transform 1.1s;
}

.round.move {
    transform: translateX(100px);
}
</style>

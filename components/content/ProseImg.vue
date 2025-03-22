<template>
  <img :src="cleanSrc" :alt="alt" :class="imageClass" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ src: string; alt?: string }>();

// URLのクエリを読み取りクラスを判定
const imageClass = computed(() => {
  const query = props.src.split("?")[1] || "";
  switch (query) {
    case "full":
      return "full-width";
    case "half":
      return "half-width";
    case "third":
      return "one-third";
    case "thumbnail":
      return "thumbnail";
    default:
      return "full-width";
  }
});

// クエリを除去して実際の画像を指定
const cleanSrc = computed(() => props.src.split("?")[0]);
</script>

<style scoped>
.full-width {
  width: 100%;
  height: auto;
}

.half-width {
  width: 49%;
  height: auto;
  display: inline-block;
  margin-right: 1%;
}

.one-third {
  width: 32%;
  height: auto;
  display: inline-block;
  margin-right: 1%;
}

.thumbnail {
  width: 150px;
  height: auto;
  object-fit: cover;
}

/* 画像が並んだ時の調整 */
.half-width:nth-child(2n),
.one-third:nth-child(3n) {
  margin-right: 0;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .half-width,
  .one-third {
    width: 100%;
    margin-right: 0;
  }
}
</style>

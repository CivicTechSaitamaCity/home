<template>
  <div>
    <article>
      <div class="nuxt-content">
        <h2 id="event">Event</h2>
        <ul>
          <li
            v-for="(event, index) in events"
            :key="index"
            :class="{ 'is-hidden': event.thumb === none }"
          >
            <a :href="event.link">
              <img :src="event.thumb" alt />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
const events = await queryContent("/data")
  .sort({ eventDate: -1 })
  .where({ eventDate: { $gt: new Date(2020) } })
  .find();
</script>

<style lang="scss" scoped>
:deep(.nuxt-content) {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: "Noto Sans JP", cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;
  }

  #event + ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc(100% / 3);
      margin: 0;
      padding: 3px 6px;
      box-sizing: border-box;

      a img {
        width: 100%;
      }
    }
  }
}
.is-hidden {
  display: none;
}
</style>

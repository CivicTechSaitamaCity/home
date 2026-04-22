<template>
  <div>
    <article>
      <div class="nuxt-content">
        <h2 id="event">Event</h2>
        <ul>
          <li
            v-for="(event, index) in events"
            :key="index"
            :class="{ 'is-hidden': !event.thumb }"
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
const events = await queryCollection("content")
  .where("path", "LIKE", "/data/%")
  .where("eventDate", ">", "2020-01-01")
  .order("eventDate", "DESC")
  .all();
</script>

<style lang="scss" scoped>
:deep(.nuxt-content) {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-family: "Noto Sans JP", cursive;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: cursive;
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
      width: calc(100% / 4);
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      &:hover {
        opacity: 0.5;
      }

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

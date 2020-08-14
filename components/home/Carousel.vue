<template>
  <div class="carousel">
    <Container>
      <div class="text text-right pt-24">
        <h3 class="font-bold lg:text-4xl text-white">
          Semua orang bisa menanam
        </h3>
        <small class="w-2/5 text-white" style="display: inline-block;">
          Pembiayaan yang menguntungkan, sekaligus berdampak kepada masyarakat
          dan lingkungan
        </small>
      </div>
    </Container>
    <ol class="carousel-indicators">
      <li>
        <label for="carousel-1" class="carousel-strip">-</label>
      </li>
      <li>
        <label for="carousel-2" class="carousel-strip">-</label>
      </li>
      <li>
        <label for="carousel-3" class="carousel-strip">-</label>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
}
</script>

<style scoped>
.carousel {
  margin-top: 3.5rem;
  height: 30rem;
  background-color: #cccccc;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

.carousel-indicators li {
  display: inline-block;
  margin: 0 5px;
}

.carousel-strip {
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 5em;
}

.carousel-strip:hover {
  color: #aaaaaa;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-strip,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-strip,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-strip {
  color: #428bca;
}
</style>

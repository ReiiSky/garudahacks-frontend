<template>
  <div>
    <Container class="mt-24 mb-12">
      <h1 class="lg:text-4xl">Pilih role anda</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum est
        distinctio veritatis temporibus nemo at doloribus quidem inventore
        impedit maiores fugiat aut asperiores, omnis repudiandae neque
        praesentium possimus tempora odio.
      </p>
      <div
        class="container mx-auto px-4 sm:px-12 lg:px-20 mt-24 role-card flex flex-wrap justify-between"
      >
        <div class="card umkm">
          <h3 class="lg:text-2xl text-center">UMKM</h3>
          <p class="px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem nostrum minus hic sunt tempore aspernatur tempora
            quis atque.
          </p>
          <p class="mt-12 text-center">Daftar sebagai</p>
          <div class="flex items-center justify-between">
            <a
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
              href="/register?as=umkm"
            >
              UMKM
            </a>
          </div>
        </div>
        <div class="card investor">
          <h3 class="lg:text-2xl text-center">Pemodal</h3>
          <p class="px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem nostrum minus hic sunt tempore aspernatur tempora
            quis atque.
          </p>
          <p class="mt-12 text-center">Daftar sebagai</p>
          <div class="flex items-center justify-between">
            <a
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
              href="/register?as=investor"
            >
              Pemodal
            </a>
          </div>
        </div>
        <div class="card company">
          <h3 class="lg:text-2xl text-center">Perusahaan</h3>
          <p class="px-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem nostrum minus hic sunt tempore aspernatur tempora
            quis atque.?
          </p>
          <p class="mt-12 text-center">Daftar sebagai</p>
          <div class="flex items-center justify-between">
            <a
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
              href="/register?as=company"
            >
              Perusahaan
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Roles',
}
</script>

<style scoped>
.card {
  width: 14rem;
  height: auto;
}
</style>

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
        class="container mx-auto px-4 sm:px-10 lg:px-15 mt-24 role-card flex flex-wrap justify-between"
      >
        <div id="umkm" class="card bg-white rounded-lg shadow-lg">
          <!-- <h3 class="lg:text-2xl text-center">UMKM</h3> -->
          <img
            src="~/assets/images/umkm.jpg"
            alt="umkm image"
            srcset
            class="h-48 rounded-t-lg"
          />
          <div class="card-content p-3">
            <p class="px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem nostrum minus hic sunt tempore aspernatur tempora
              quis atque.
            </p>
            <p class="mt-12 text-center">Daftar sebagai</p>
            <Button class="w-full">
              <a href="/register?as=umkm" class="w-full px-12 py-2">UMKM</a>
            </Button>
          </div>
        </div>
        <div id="investor" class="card bg-white rounded-lg shadow-lg">
          <!-- <h3 class="lg:text-2xl text-center">Pemodal</h3> -->
          <img
            src="~/assets/images/investor.jpg"
            alt="investor image"
            srcset
            class="h-48 rounded-t-lg w-full"
          />
          <div class="card-content p-3">
            <p class="px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem nostrum minus hic sunt tempore aspernatur tempora
              quis atque.
            </p>
            <p class="mt-12 text-center">Daftar sebagai</p>
            <div class="items-center">
              <Button class="w-full">
                <a href="/register?as=investor" class="w-full px-12 py-2">
                  Pemodal
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div id="company" class="card bg-white rounded-lg shadow-lg">
          <!-- <h3 class="lg:text-2xl text-center">Perusahaan</h3> -->
          <img
            src="~/assets/images/company.jpg"
            alt="company image"
            srcset
            class="h-48 rounded-t-lg"
          />
          <div class="card-content p-3">
            <p class="px-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem nostrum minus hic sunt tempore aspernatur tempora
              quis atque.?
            </p>
            <p class="mt-12 text-center">Daftar sebagai</p>
            <Button class="w-full">
              <a href="/register?as=company" class="w-full px-12 py-2">
                Perusahaan
              </a>
            </Button>
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
  width: 16rem;
  height: auto;
}
</style>

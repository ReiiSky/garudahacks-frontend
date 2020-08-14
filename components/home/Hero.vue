<template>
  <Fragment>
    <h1 class="font-bold text-3xl text-primary text-center">Cara Kerja</h1>
    <div class="flex flex-wrap justify-between mt-5">
      <div class="procedure box-1">
        <p class="mt-5">Beli bibit</p>
        <small>
          Telusuri semua proyek pembiayaan kami. Pilih proyek pembiayaan yang
          tepat sesuai dengan budget dan bagi hasil yang paling menarik bagi
          Anda.
        </small>
      </div>
      <div class="procedure box-2">
        <p class="mt-5">Pantau perkembangannya</p>
        <small>
          Dapatkan update foto, pertumbuhan, dan komentar terbaru dari para
          surveyor yang kredibel di lapangan secara real time.
        </small>
      </div>
      <div class="procedure box-3">
        <p class="mt-5">Jual hasil panennya</p>
        <small>
          Semua hasil panen akan dijual ke partner yang telah bekerjasama dengan
          yesz~.
        </small>
      </div>
      <div class="procedure box-4">
        <p class="mt-5">Dapatkan bagi hasil</p>
        <small>
          Semua hasil penjualan dari petani akan dilakukan bagi hasil sesuai
          dengan kesepakatan di setiap Proyek Pembiayaan antara pihak yang
          mendanai dan para petaninya.
        </small>
      </div>
    </div>
  </Fragment>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.procedure {
  /* border: 1px solid black; */
  width: 14rem;
  border-radius: 6px;
}
</style>

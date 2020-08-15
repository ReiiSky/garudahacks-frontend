<template>
  <Container class="mt-24 mb-12">
    <div class="flex flex-wrap">
      <div class="w-full">
        <h1 class="text-center text-xl md:text-4xl">Choose your role</h1>
      </div>
      <div class="w-full mt-12">
        <div
          class="flex flex-col md:flex-row justify-around items-center md:space-x-32"
        >
          <n-link to="/register?as=umkm">
            <div
              class="bg-white rounded overflow-hidden shadow-lg duration-200 hover:shadow-2xl"
            >
              <img
                class="w-full h-full md:h-64 object-cover"
                src="~/assets/images/umkm.jpg"
              />
              <div class="px-6 py-4 text-center">
                <h1 class="font-bold text-xl mb-2">Small Business Owner</h1>
              </div>
            </div>
          </n-link>
          <n-link to="/register?as=company">
            <div
              class="mt-8 md:mt-0 bg-white rounded overflow-hidden shadow-lg duration-200 hover:shadow-2xl"
            >
              <img
                class="w-full h-full md:h-64 object-cover"
                src="~/assets/images/company-role.jpg"
              />
              <div class="px-6 py-4 text-center">
                <h1 class="font-bold text-xl mb-2">Company</h1>
              </div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  name: 'Roles',
}
</script>

<template>
  <div>
    <NavBarComponent />
    <router-view />
    <AddItemModal
      v-if="isModalVisible"
      :isVisible="isModalVisible"
      :itemType="activeTab"
      @close-modal="closeModal"
      @add-item="addItem"
    />
  </div>
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";



export default {
  name: "App",
  components: {
    NavBarComponent
  } 
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>

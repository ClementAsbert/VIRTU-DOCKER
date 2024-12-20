<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal">
        <h2>Ajouter un {{ itemType === 'game' ? 'jeu' : 'film' }}</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom</label>
            <input id="name" v-model="formData.name" required />
          </div>
  
          <div v-if="itemType === 'game'" class="form-group">
            <label for="type">Type</label>
            <input id="type" v-model="formData.type" required />
          </div>
  
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="formData.description" required></textarea>
          </div>
  
          <div class="form-actions">
            <button type="submit" class="btn">Ajouter</button>
            <button type="button" class="btn cancel" @click="closeModal">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddItemModal",
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      itemType: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        formData: {
          name: "",
          type: "",
          description: "",
        },
      };
    },
    methods: {
      closeModal() {
        this.$emit("close-modal");
      },
      handleSubmit() {
        this.$emit("add-item", this.formData);
        this.closeModal();
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn.cancel {
    background: #ccc;
  }
  </style>
  
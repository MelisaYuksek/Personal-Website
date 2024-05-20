Vue.component('form-data', {
    template: `
      <div class="form-data">
        <h1>Gönderilen Form Bilgileri</h1>
        <p><strong>İsim:</strong> {{ formData.name }}</p>
        <p><strong>Email:</strong> {{ formData.email }}</p>
        <p><strong>Mesaj:</strong> {{ formData.message }}</p>
        <a href="iletisim.html">Yeni Form Gönder</a>
      </div>
    `,
    data() {
      return {
        formData: {}
      };
    },
    created() {
      this.formData = JSON.parse(localStorage.getItem('formData'));
    }
  });
  
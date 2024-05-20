Vue.component('contact-form', {
    template: `
      <div class="contact-form">
        <h1>İletişim Formu</h1>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="name">İsim:</label>
            <input type="text" v-model="form.name" />
            <span v-if="errors.name">{{ errors.name }}</span>
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" v-model="form.email" />
            <span v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div>
            <label for="message">Mesaj:</label>
            <textarea v-model="form.message"></textarea>
            <span v-if="errors.message">{{ errors.message }}</span>
          </div>
          <div>
            <button type="button" @click="handleReset">Temizle</button>
            <button type="submit">Gönder</button>
          </div>
        </form>
      </div>
    `,
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        errors: {}
      };
    },
    methods: {
      validate() {
        this.errors = {};
        if (!this.form.name) {
          this.errors.name = 'İsim gereklidir.';
        }
        if (!this.form.email) {
          this.errors.email = 'Email gereklidir.';
        } else if (!this.validEmail(this.form.email)) {
          this.errors.email = 'Geçerli bir email adresi girin.';
        }
        if (!this.form.message) {
          this.errors.message = 'Mesaj gereklidir.';
        }
        return Object.keys(this.errors).length === 0;
      },
      validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(email);
      },
      handleSubmit() {
        if (this.validate()) {
          localStorage.setItem('formData', JSON.stringify(this.form));
          window.location.href = 'formGoruntule.html';
        }
      },
      handleReset() {
        this.form = {
          name: '',
          email: '',
          message: ''
        };
        this.errors = {};
      }
    }
  });
  
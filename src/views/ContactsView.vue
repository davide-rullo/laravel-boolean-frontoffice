<template>
    <div>
        <div class="">
            <div class="container py-5">
                <h3 class="display-5 ">Contact us!</h3>


            </div>
        </div>


        <div class="container pb-5">
            <form action="" v-on:submit.prevent="sendForm()">
                <div class="mb-3">
                    <label for="name" class="form-label text-uppercase">Name</label>
                    <input v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
                        aria-describedby="nameHelper">

                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label  text-uppercase">phone</label>
                    <input v-model="phone" type="tel" name="phone" id="phone" class="form-control"
                        placeholder="+39 1234567890" aria-describedby="phoneHelper">

                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-uppercase">email</label>
                    <input v-model="email" type="text" name="email" id="email" class="form-control"
                        placeholder="mario@rossi.com" aria-describedby="emailHelper">

                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea v-model="message" class="form-control" name="message" id="message" rows="3"
                        placeholder="Your message here..."></textarea>
                </div>


                <button type="submit" class="btn btn-primary">Send</button>

            </form>
        </div>

    </div>
</template>
<script>


export default {
    name: 'ContactsView',
    data() {
        return {
            store,

            // NEL SUBBMIT :disabled="loading" O PER MOSTRARE UN LOADER:
            // <span v-if="loading">Sending <i class="fa-solid fa-circle-notch fa-spin"></i></span>
            loading: false,

            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],

        }
    },
    methods: {
        sendForm() {

            // SVUOTA ERRORI E RISULTATI
            this.errors = [];

            this.success = null;

            // ASSEGNA A PAYLOAD I DATI DEL FORM
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            };

            axios.post(this.store.baseUrl + 'api/lead/', payload)
                .then(response => {

                    // ASSEGNA A SUCCESS IL VALORE DI data.success. SE CI SONO callWithErrorHandling, QUESTA SARA' UNDEFINED ED ENTRERA' NELL'IF
                    const success = response.data.success;

                    if (!success) {
                        console.log('Errors:', response.data.errors);

                        // ASSEGNA A this.errors IL VALORE DELLA RESPONSE errors IN MODO DA POTERLI USARE IN PAGINA
                        this.errors = response.data.errors;

                        // POSSONO ESSERES STAMPATI IN PAGINA -> campo del form :class="{ 'is-invalid': errors.name }" SOTTO IL FORM un alert v-if="errors.nomecampo" con una ul>li v-for="message in errors.message" CON CONTENUTO {{ message }}

                    } else {
                        console.log('VALIDATION PASSED:', response);

                        // SVUOTA I CAMPI
                        this.name = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.phone = '';

                        this.success = response.data.message; // -> in pagina <span v-if="success">{{ success }}</span>  
                    }

                    this.loading = false

                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>
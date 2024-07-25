// vue js
const { createApp } = Vue;
createApp({
    data() {
        return {
            email: []
        }
    },
    created() {
        this.generateTenEmails();
    },
    methods: {
        // funzione per generare 10 email
        generateTenEmails() {

            for (let i = 0; i < 10; i++) {
                // API
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    
                    this.email.push(response.data.response)

                });
            }
        }
    }
}).mount('#app');
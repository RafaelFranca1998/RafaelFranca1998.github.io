<template>
<v-layout justify-center>
    <v-flex xs12 sm10 md10 lg10>
        <v-card ref='form'>
            <v-card-text>
                <v-text-field ref='name' label='Nome completo' placeholder='Luana Eugênia'
                prepend-icon='face' required></v-text-field>

                <v-menu :close-on-content-click='false' transition='scale-transition'
                offset-y full-width=''>
                    <v-text-field slot='activator' v-model='date' label='Data de nascimento'
                    prepend-icon='event' readonly></v-text-field>

                    <v-date-picker v-model='date' :max='maxDate' :min='getMinDate()'>
                    </v-date-picker>
                </v-menu>

                <v-select :items='sexos' label='Sexo' required></v-select>

                <fieldset>
                    <legend>Sexo</legend>
                    <!-- v-model='transition' -->
                    <v-radio-group hide-details>
                        <v-radio value='M' label='Masculino'></v-radio>
                        <v-radio value='F' label='Feminino'></v-radio>
                    </v-radio-group>
                </fieldset>
            </v-card-text>
        </v-card>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    data() {
        return {
            date: null,
            maxDate: new Date().toISOString().substr(0, 10),
            sexos: [
                'Masculino',
                'Feminino',
            ],
        };
    },
    methods: {
        getMinDate() {
            let minDate = String(this.maxDate).substr(0, 4) - 100;
            minDate += String(this.maxDate).substr(4, 10);

            return minDate;
        },
    },
};
</script>

<style>
fieldset {
    padding: 10px;
}
</style>

<template>
<v-app>
    <v-navigation-drawer v-model='sideBar' app>
        <v-list>
            <v-list-tile v-on:click='closeSideBar'>
                <v-list-tile-action>
                    <v-icon>navigate_before</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{closeSideBarMessage}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-subheader class="mt-3 grey--text text--darken-1">Menu</v-subheader>

        <v-list>
            <v-list-tile v-for="menuItem in menuItems" :key="menuItem.title"
            :to="menuItem.link">
                <v-list-tile-action>
                    <v-icon>{{menuItem.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{menuItem.title}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-toolbar app class='primary'>
        <v-toolbar-side-icon v-on:click.stop='closeSideBar'></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">{{title}}</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat v-for="toolbarItem in toolbarItems" :key="toolbarItem.title"
            :to="toolbarItem.link">
                {{toolbarItem.title}}
                <v-icon>{{toolbarItem.icon}}</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <v-container fluid fill-height>
            <router-view></router-view>
        </v-container>
    </v-content>

    <v-footer class='primary padding-50'>
        <v-spacer></v-spacer>
        <span>{{title}}</span>
        <span>&nbsp;-&nbsp;</span>
        <span>{{getCurrentDate()}}</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            // Inofrmações devem ser obtidas da base de dados
            title: 'Ambulatório',
            // ---------------------------------------------
            menuItems: [
                {
                    icon: 'add_box',
                    title: 'Novo Atendimento',
                    link: '/attendance/new/identification',
                },
            ],
            toolbarItems: [
                {
                    icon: 'meeting_room',
                    title: 'Login',
                    link: '/signin',
                },
                {
                    icon: 'no_meeting_room',
                    title: 'Logout',
                    link: '/signup',
                },
            ],
            sideBar: null,
            closeSideBarMessage: 'Esconder barra lateral',
        };
    },
    methods: {
        closeSideBar() {
            this.sideBar = !this.sideBar;
        },
        getCurrentDate() {
            const date = new Date();

            // Data deve ser gerada no servidor
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

            return dateString;
        },
    },
};
</script>

<style>
.padding-50 {
    padding: 0px 50px;
}
</style>

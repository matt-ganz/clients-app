<template>
  <pre>{{ $data }}</pre>
  <v-app>
    <v-app-bar>
      <v-app-bar-title
        >Clients Application | Coding Exercise for Context Labs</v-app-bar-title
      >
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-card class="mx-auto" min-height="60vh">
              <v-list>
                <v-text-field
                  label="Filter Clients..."
                  class="pa-4 m-0"
                  variant="underlined"
                  v-model="filterText"
                  clearable
                ></v-text-field>
                <v-list-item
                  v-for="client in filteredClients"
                  :key="client.name"
                  color="primary"
                  variant="plain"
                  :prependAvatar="client.avatar"
                  :active="client === selectedClient"
                  @click="selectedClient = client"
                >
                  <v-list-item-title v-html="client.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="client.title"
                  ></v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="7">
            <v-card min-height="60vh" rounded="lg">
              <v-card-title class="text-h6 text-md-h5 text-lg-h4"
                >Client Details</v-card-title
              >
              <v-container v-if="selectedClient" class="pa-0">
                <v-card-text
                  v-html="`Name: ${selectedClient.name}`"
                ></v-card-text>
                <v-card-text
                  v-html="`Title: ${selectedClient.title}`"
                ></v-card-text>
                <v-card-text
                  >Avatar: <v-img class="avatar" :src="selectedClient.avatar"
                /></v-card-text>
                <v-card-text
                  v-html="`Quote: ${selectedClient.quote}`"
                ></v-card-text>
                <v-card-text
                  v-html="`Nationality: ${selectedClient.nationality}`"
                ></v-card-text>
              </v-container>
              <v-container v-if="!selectedClient">
                <v-card-text
                  >Please select a client to view their details.</v-card-text
                >
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.avatar {
  width: 128px;
  height: 128px;
}
</style>

<script setup>
import { ref, computed } from "vue";

const { data } = await useFetch("/api/clients");
const selectedClient = ref("");
const filterText = ref("");

const filteredClients = computed(() => {
  let filter = filterText.value;
  if (data && data.value && filter) {
    return data.value.clients.default.filter((item) =>
      Object.values(item).some((v) => v?.toLowerCase().includes(filter))
    );
  } else {
    return data.value.clients.default;
  }
});
</script>

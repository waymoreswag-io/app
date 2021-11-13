<template>
<section class="container mt-10">
  <v-row align="center" justify="center">
    <v-col cols="12" sm="12" md="6" lg="6">
      <v-card outlined class="rounded-lg pa-5">
        <v-card-text>
          <v-text-field outlined label="Event Name" type="text" placeholder="Event Name"></v-text-field>
          <v-textarea outlined label="Event Description" type="text" placeholder="Event Description"></v-textarea>
          <v-text-field outlined label="Budget" type="number" placeholder="Budget"></v-text-field>
          <v-file-input label="Event Image" hint="Used as the NFT image"></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="primary" large>
            Create Event
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</section>
</template>

<script>
export default {
  name: "Create"
}
</script>

<style scoped>

</style>
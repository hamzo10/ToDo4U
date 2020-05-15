<template>
    <v-container>
      <v-card>
          <v-card-title>
              Your ToDo:
          </v-card-title>
          <v-card-subtitle>
              <v-chip>new</v-chip>
              <v-chip>2020</v-chip>
              <v-chip>Corona</v-chip>
          </v-card-subtitle>
          <v-card-text>
                {{msg}}
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
      </v-card>

    </v-container>
</template>

<style>

</style>

<script>
export default {
    name: 'ToDo',
    props: [
        'msg',
    ],
};
</script>

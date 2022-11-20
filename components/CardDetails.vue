<template>
    <div>
        <v-card class="my-card mx-auto" max-width="344">
            <v-img :src="props.img" height="200px">
                <div class="mt-4 mr-auto ml-4 ranking d-flex align-center justify-center">
                    <span>4.9</span>
                    <span>
                        <v-icon size="16"> mdi-star-settings </v-icon>
                    </span>
                </div>
            </v-img>

            <v-card-title>
                <v-row class="pt-2 px-2 d-flex align-center justify-space-between">
                    <p>{{ props.title }}</p>
                    <p>{{ props.price }}</p>
                </v-row>
            </v-card-title>

            <v-card-subtitle>
                <v-row>
                    <v-col class="pt-0 px-2 col-9">
                        {{ props.descrition }}
                    </v-col>
                    <v-col class="d-flex align-center pa-2 col-3" >
                        <v-card-actions class="d-flex align-center">
                            <v-btn  class="card-btn d-flex align-center">
                               خرید
                            </v-btn>
                        </v-card-actions>
                    </v-col>

                </v-row>
            </v-card-subtitle>



        </v-card>
    </div>
</template>
<script>
export default {
    props: {
        props: Object,
        id: Number
    }
}
</script>
<style lang="scss">
.my-card {
    border-radius: 15px !important;

    .ranking {
        background-color: black;
        width: 40px;
        height: 20px;
        border-radius: 20px;
        font-size: 10px;
    }
    .card-btn{
        color: white;
        background-color: blue  !important;
        width: 25px !important;
        height: 25px !important;
        border-radius: 25px;
    }
}
</style> 





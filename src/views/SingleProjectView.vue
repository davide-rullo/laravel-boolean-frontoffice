<template>
    <div>


        <div class="container p-3 pt-5 wrap">
            <div v-if="!loading">
                <div class="row">
                    <div class="col-4">
                        <img class="img-fluid" width="400" :src="'http://127.0.0.1:8000/storage/' + project.cover_image"
                            alt="">

                    </div>
                    <div class="col-8">
                        <h3></h3>
                        <p></p>
                        <div class="type pb-3" v-if="project.type">
                            <h5>Project type:</h5>

                        </div>
                        <div class="technology" v-if="project.technologies">
                            <ul class="list-unstyled">
                                <h5>Technologies used:</h5>
                                <li v-for="technology in project.technologies">

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    name: 'SingleCocktailView',
    data() {
        return {
            loading: true,
            project: {}
        }
    },
    mounted() {

    }

}
</script>

<style lang="scss" scoped>
.wrap {
    height: 80vh;
}
</style>
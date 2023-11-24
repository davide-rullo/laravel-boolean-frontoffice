<template>
    <div class="wrapper">
        <div class="">
            <div class="container py-5">
                <h3 class="display-5 title">Contact us!</h3>


            </div>
        </div>


        <div class="container pb-5">
            <form action="">
                <div class="mb-3">
                    <label for="name" class="form-label text-uppercase">Name</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
                        aria-describedby="nameHelper">

                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label  text-uppercase">phone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="+39 1234567890"
                        aria-describedby="phoneHelper">

                </div>
                <div class="mb-3">
                    <label for="email" class="form-label text-uppercase">email</label>
                    <input type="text" name="email" id="email" class="form-control" placeholder="mario@rossi.com"
                        aria-describedby="emailHelper">

                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="3"
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

}
</script>

<style lang="scss" scoped>
.wrapper {
    background-color: black;
    color: white;
    padding-top: 3rem;
}

.title {
    color: #fdd03b;

}
</style>
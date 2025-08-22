const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Clean the House' },
                { text: 'Prepare Breakfast' },
                { text: 'Attend WSERVER class' },
                { text: 'Pass Requirements on Time!' }
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')